const { chromium } = require('playwright');

async function debugPortfolio() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 }
  });
  const page = await context.newPage();

  console.log('\n🔍 Debugging Portfolio Page on Mobile (375px)');
  console.log('='.repeat(70));

  await page.goto('http://localhost:3001/portfolio', {
    waitUntil: 'networkidle',
    timeout: 30000
  });

  // Wait for content to load
  await page.waitForTimeout(3000);

  // Check the grid structure
  const gridInfo = await page.evaluate(() => {
    const grid = document.querySelector('.grid');
    if (!grid) return { error: 'Grid not found' };

    const computedStyle = window.getComputedStyle(grid);
    const children = Array.from(grid.children);

    return {
      gridTemplateColumns: computedStyle.gridTemplateColumns,
      gridGap: computedStyle.gap,
      childrenCount: children.length,
      firstChildClasses: children[0]?.className || 'N/A',
      childrenVisible: children.map((child, i) => ({
        index: i,
        display: window.getComputedStyle(child).display,
        opacity: window.getComputedStyle(child).opacity,
        transform: window.getComputedStyle(child).transform,
        position: window.getComputedStyle(child).position,
        zIndex: window.getComputedStyle(child).zIndex,
        width: child.getBoundingClientRect().width,
        height: child.getBoundingClientRect().height,
        top: child.getBoundingClientRect().top,
        left: child.getBoundingClientRect().left,
      })).slice(0, 5) // First 5 children
    };
  });

  console.log('\n📊 Grid Structure:');
  console.log(JSON.stringify(gridInfo, null, 2));

  // Check for overlapping elements
  const overlaps = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('.grid > div'));
    const overlapping = [];

    for (let i = 0; i < Math.min(cards.length, 10); i++) {
      const card = cards[i];
      const rect = card.getBoundingClientRect();

      for (let j = i + 1; j < Math.min(cards.length, 10); j++) {
        const otherCard = cards[j];
        const otherRect = otherCard.getBoundingClientRect();

        // Check if rectangles overlap
        const overlap = !(rect.right < otherRect.left ||
                         rect.left > otherRect.right ||
                         rect.bottom < otherRect.top ||
                         rect.top > otherRect.bottom);

        if (overlap) {
          overlapping.push({
            card1: i,
            card2: j,
            card1Rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
            card2Rect: { top: otherRect.top, left: otherRect.left, width: otherRect.width, height: otherRect.height }
          });
        }
      }
    }

    return overlapping;
  });

  console.log('\n⚠️  Overlapping Cards:');
  if (overlaps.length === 0) {
    console.log('   ✅ No overlaps detected');
  } else {
    console.log(`   ❌ Found ${overlaps.length} overlapping pairs:`);
    overlaps.forEach(o => {
      console.log(`      Card ${o.card1} overlaps with Card ${o.card2}`);
      console.log(`      Card ${o.card1}: top=${o.card1Rect.top.toFixed(0)}, height=${o.card1Rect.height.toFixed(0)}`);
      console.log(`      Card ${o.card2}: top=${o.card2Rect.top.toFixed(0)}, height=${o.card2Rect.height.toFixed(0)}`);
    });
  }

  // Check animation states
  const animationStates = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('.grid > div'));
    return cards.slice(0, 5).map((card, i) => {
      const style = window.getComputedStyle(card);
      return {
        index: i,
        opacity: style.opacity,
        transform: style.transform,
        animation: style.animation,
        transition: style.transition,
      };
    });
  });

  console.log('\n🎬 Animation States (first 5 cards):');
  console.log(JSON.stringify(animationStates, null, 2));

  // Check text content
  const textContent = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('.grid > div'));
    return cards.slice(0, 3).map((card, i) => {
      const title = card.querySelector('h3')?.textContent || 'No title';
      const category = card.querySelector('span')?.textContent || 'No category';
      return { index: i, title, category };
    });
  });

  console.log('\n📝 Card Content (first 3):');
  textContent.forEach(t => {
    console.log(`   ${t.index}: ${t.title} - ${t.category}`);
  });

  // Take screenshot
  await page.screenshot({
    path: '/Users/aryanchoubey/Documents/MasterClaude/projects/web-smart/mobile-screenshots/portfolio-debug.png',
    fullPage: true
  });

  console.log('\n📸 Debug screenshot saved: portfolio-debug.png');
  console.log('='.repeat(70));

  await page.waitForTimeout(5000); // Keep browser open for 5 seconds
  await browser.close();
}

debugPortfolio().catch(console.error);
