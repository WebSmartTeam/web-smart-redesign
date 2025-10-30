const { chromium } = require('playwright');
const fs = require('fs');

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

const mobileViewport = { width: 375, height: 667 };

async function analyzeAllPages() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: mobileViewport });
  const page = await context.newPage();

  const allIssues = {};

  for (const pageInfo of pages) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`Analyzing: ${pageInfo.name} (${pageInfo.url})`);
    console.log('='.repeat(60));

    try {
      await page.goto(`http://localhost:3001${pageInfo.url}`, {
        waitUntil: 'networkidle',
        timeout: 30000
      });

      await page.waitForTimeout(2000);

      // Analyze layout issues
      const issues = await page.evaluate(() => {
        const problems = [];

        // Find all elements that might have horizontal layout issues
        const allElements = document.querySelectorAll('*');

        allElements.forEach((el) => {
          const style = window.getComputedStyle(el);
          const rect = el.getBoundingClientRect();

          // Skip invisible elements
          if (style.display === 'none' || style.visibility === 'hidden') return;
          if (rect.width === 0 || rect.height === 0) return;

          // Get element identifier
          const getElementId = (element) => {
            let id = element.tagName.toLowerCase();
            if (element.id) id += `#${element.id}`;
            if (element.className) {
              const classes = typeof element.className === 'string'
                ? element.className
                : element.className.baseVal || '';
              const classList = classes.split(' ').filter(c => c).slice(0, 3).join('.');
              if (classList) id += `.${classList}`;
            }
            return id;
          };

          const elementId = getElementId(el);

          // Check for flex layouts that are still row on mobile
          if (style.display === 'flex') {
            const flexDirection = style.flexDirection;
            const hasMultipleChildren = el.children.length > 1;

            if (flexDirection === 'row' && hasMultipleChildren) {
              // Check if children are side by side
              const firstChild = el.children[0];
              const lastChild = el.children[el.children.length - 1];
              const firstRect = firstChild.getBoundingClientRect();
              const lastRect = lastChild.getBoundingClientRect();

              // If children are on the same horizontal line (Y positions similar)
              if (Math.abs(firstRect.top - lastRect.top) < 50) {
                problems.push({
                  element: elementId,
                  issue: 'Flex row layout with side-by-side children on mobile',
                  position: `${Math.round(rect.top)}px from top`,
                  details: `${el.children.length} children in flex-row`,
                  flexDirection: flexDirection
                });
              }
            }
          }

          // Check for grid layouts with multiple columns on mobile
          if (style.display === 'grid') {
            const gridTemplateColumns = style.gridTemplateColumns;
            const columnCount = gridTemplateColumns.split(' ').length;

            if (columnCount > 1 && el.children.length > 1) {
              problems.push({
                element: elementId,
                issue: 'Grid layout with multiple columns on mobile',
                position: `${Math.round(rect.top)}px from top`,
                details: `${columnCount} columns, ${el.children.length} children`,
                gridTemplateColumns: gridTemplateColumns
              });
            }
          }

          // Check for inline-flex
          if (style.display === 'inline-flex') {
            const hasMultipleChildren = el.children.length > 1;
            if (hasMultipleChildren) {
              problems.push({
                element: elementId,
                issue: 'Inline-flex layout on mobile',
                position: `${Math.round(rect.top)}px from top`,
                details: `${el.children.length} children in inline-flex`
              });
            }
          }

          // Check for elements that overflow viewport
          if (rect.right > window.innerWidth) {
            problems.push({
              element: elementId,
              issue: 'Element extends beyond viewport',
              position: `${Math.round(rect.top)}px from top`,
              details: `Overflow: ${Math.round(rect.right - window.innerWidth)}px`
            });
          }
        });

        return problems;
      });

      allIssues[pageInfo.name] = issues;

      console.log(`\nFound ${issues.length} potential layout issues:`);
      issues.forEach((issue, index) => {
        console.log(`\n${index + 1}. ${issue.element}`);
        console.log(`   Issue: ${issue.issue}`);
        console.log(`   Position: ${issue.position}`);
        console.log(`   Details: ${issue.details}`);
        if (issue.flexDirection) console.log(`   Flex Direction: ${issue.flexDirection}`);
        if (issue.gridTemplateColumns) console.log(`   Grid Columns: ${issue.gridTemplateColumns}`);
      });

    } catch (error) {
      console.error(`Error analyzing ${pageInfo.name}:`, error.message);
      allIssues[pageInfo.name] = { error: error.message };
    }
  }

  await browser.close();

  // Save results to file
  fs.writeFileSync(
    'mobile-layout-analysis.json',
    JSON.stringify(allIssues, null, 2)
  );

  console.log(`\n${'='.repeat(60)}`);
  console.log('Analysis complete! Results saved to mobile-layout-analysis.json');
  console.log('='.repeat(60));

  // Summary
  let totalIssues = 0;
  Object.keys(allIssues).forEach(pageName => {
    const issues = allIssues[pageName];
    if (Array.isArray(issues)) {
      totalIssues += issues.length;
    }
  });

  console.log(`\nTotal issues found across all pages: ${totalIssues}`);
}

analyzeAllPages().catch(console.error);
