import { test, expect } from '@playwright/test';

// All pages to test
const pages = [
  { url: '/', name: 'Homepage' },
  { url: '/about', name: 'About' },
  { url: '/services', name: 'Services' },
  { url: '/services/web-design', name: 'Web Design Service' },
  { url: '/services/seo', name: 'SEO Service' },
  { url: '/services/content-writing', name: 'Content Writing Service' },
  { url: '/services/google-ads', name: 'Google Ads Service' },
  { url: '/portfolio', name: 'Portfolio' },
  { url: '/blog', name: 'Blog' },
  { url: '/contact', name: 'Contact' },
  { url: '/resources', name: 'Resources' },
  { url: '/ai-images', name: 'AI Images' },
  { url: '/ai-projects', name: 'AI Projects' },
];

// Mobile viewport sizes to test
const mobileViewports = [
  { width: 375, height: 667, name: 'iPhone SE' },
  { width: 390, height: 844, name: 'iPhone 12' },
  { width: 414, height: 896, name: 'iPhone 11 Pro Max' },
];

test.describe('Mobile Responsiveness Test - First Run (Issue Detection)', () => {
  mobileViewports.forEach(viewport => {
    test.describe(`${viewport.name} (${viewport.width}x${viewport.height})`, () => {
      pages.forEach(pageInfo => {
        test(`Check ${pageInfo.name} for mobile issues`, async ({ page }) => {
          // Set mobile viewport
          await page.setViewportSize({ width: viewport.width, height: viewport.height });

          // Navigate to page
          await page.goto(`http://localhost:3001${pageInfo.url}`, {
            waitUntil: 'networkidle',
            timeout: 30000
          });

          // Wait for animations to settle
          await page.waitForTimeout(2000);

          console.log(`\n========================================`);
          console.log(`Testing: ${pageInfo.name} on ${viewport.name}`);
          console.log(`========================================`);

          // 1. Check for horizontal scroll (overflow)
          const horizontalScrollCheck = await page.evaluate(() => {
            const hasHorizontalScroll = document.documentElement.scrollWidth > document.documentElement.clientWidth;
            const scrollWidth = document.documentElement.scrollWidth;
            const clientWidth = document.documentElement.clientWidth;
            return {
              hasScroll: hasHorizontalScroll,
              scrollWidth,
              clientWidth,
              overflow: scrollWidth - clientWidth
            };
          });

          if (horizontalScrollCheck.hasScroll) {
            console.log(`⚠️  HORIZONTAL OVERFLOW DETECTED`);
            console.log(`   Scroll Width: ${horizontalScrollCheck.scrollWidth}px`);
            console.log(`   Viewport Width: ${horizontalScrollCheck.clientWidth}px`);
            console.log(`   Overflow: ${horizontalScrollCheck.overflow}px`);
          } else {
            console.log(`✅ No horizontal overflow`);
          }

          // 2. Check all elements for touching edges
          const edgeIssues = await page.evaluate(() => {
            const issues: any[] = [];
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const minPadding = 10; // Minimum safe padding in pixels

            // Get all visible elements
            const elements = document.querySelectorAll('*');

            elements.forEach((el) => {
              // Skip invisible elements
              const style = window.getComputedStyle(el);
              if (style.display === 'none' || style.visibility === 'hidden') return;

              const rect = el.getBoundingClientRect();

              // Check if element is actually visible in viewport initially
              if (rect.width === 0 || rect.height === 0) return;

              // Get element identifier
              const getElementId = (element: Element) => {
                const className = element.className;
                const classStr = typeof className === 'string' ? className : (className.baseVal || '');
                return element.tagName + (classStr ? '.' + classStr.split(' ').slice(0, 2).join('.') : '');
              };

              // Check left edge
              if (rect.left < minPadding && rect.left > -10) {
                issues.push({
                  element: getElementId(el),
                  issue: 'Touching left edge',
                  distance: rect.left,
                  position: `${rect.top}px from top`
                });
              }

              // Check right edge
              if (rect.right > viewportWidth - minPadding && rect.right < viewportWidth + 10) {
                issues.push({
                  element: getElementId(el),
                  issue: 'Touching right edge',
                  distance: viewportWidth - rect.right,
                  position: `${rect.top}px from top`
                });
              }

              // Check for elements extending beyond viewport
              if (rect.right > viewportWidth + 10) {
                issues.push({
                  element: getElementId(el),
                  issue: 'Extends beyond right viewport',
                  overflow: rect.right - viewportWidth,
                  position: `${rect.top}px from top`
                });
              }
            });

            return issues;
          });

          if (edgeIssues.length > 0) {
            console.log(`\n⚠️  EDGE TOUCH ISSUES DETECTED (${edgeIssues.length} issues):`);
            edgeIssues.slice(0, 10).forEach((issue, index) => {
              console.log(`   ${index + 1}. ${issue.element}`);
              console.log(`      Issue: ${issue.issue}`);
              console.log(`      Position: ${issue.position}`);
              if (issue.distance !== undefined) {
                console.log(`      Distance: ${issue.distance}px`);
              }
              if (issue.overflow !== undefined) {
                console.log(`      Overflow: ${issue.overflow}px`);
              }
            });
            if (edgeIssues.length > 10) {
              console.log(`   ... and ${edgeIssues.length - 10} more issues`);
            }
          } else {
            console.log(`✅ No edge touching issues`);
          }

          // 3. Check for elements with insufficient padding
          const paddingIssues = await page.evaluate(() => {
            const issues: any[] = [];
            const containers = document.querySelectorAll('section, div[class*="container"], header, footer, main');

            // Helper to get class string
            const getClassStr = (element: Element) => {
              const className = element.className;
              return typeof className === 'string' ? className : (className.baseVal || '');
            };

            // Helper to get element identifier
            const getElementId = (element: Element) => {
              const classStr = getClassStr(element);
              return element.tagName + (classStr ? '.' + classStr.split(' ').slice(0, 2).join('.') : '');
            };

            containers.forEach((el) => {
              const style = window.getComputedStyle(el);
              const paddingLeft = parseInt(style.paddingLeft);
              const paddingRight = parseInt(style.paddingRight);
              const minPadding = 16; // Minimum recommended padding for mobile
              const classStr = getClassStr(el);

              if (style.display !== 'none' && el.getBoundingClientRect().width > 0) {
                if (paddingLeft < minPadding && !classStr.includes('w-full')) {
                  issues.push({
                    element: getElementId(el),
                    issue: 'Insufficient left padding',
                    padding: paddingLeft,
                    top: el.getBoundingClientRect().top
                  });
                }

                if (paddingRight < minPadding && !classStr.includes('w-full')) {
                  issues.push({
                    element: getElementId(el),
                    issue: 'Insufficient right padding',
                    padding: paddingRight,
                    top: el.getBoundingClientRect().top
                  });
                }
              }
            });

            return issues;
          });

          if (paddingIssues.length > 0) {
            console.log(`\n⚠️  PADDING ISSUES DETECTED (${paddingIssues.length} issues):`);
            paddingIssues.slice(0, 5).forEach((issue, index) => {
              console.log(`   ${index + 1}. ${issue.element}`);
              console.log(`      Issue: ${issue.issue}`);
              console.log(`      Current Padding: ${issue.padding}px`);
            });
            if (paddingIssues.length > 5) {
              console.log(`   ... and ${paddingIssues.length - 5} more padding issues`);
            }
          } else {
            console.log(`✅ No padding issues`);
          }

          // 4. Take screenshot for manual review
          await page.screenshot({
            path: `tests/screenshots/mobile-${viewport.width}-${pageInfo.url.replace(/\//g, '-') || 'home'}.png`,
            fullPage: true
          });

          console.log(`\n📸 Screenshot saved: mobile-${viewport.width}-${pageInfo.url.replace(/\//g, '-') || 'home'}.png`);

          // Test assertions
          expect(horizontalScrollCheck.hasScroll,
            `Horizontal scroll detected on ${pageInfo.name}: ${horizontalScrollCheck.overflow}px overflow`
          ).toBeFalsy();

          expect(edgeIssues.length,
            `${edgeIssues.length} elements touching edges on ${pageInfo.name}`
          ).toBe(0);
        });
      });
    });
  });
});
