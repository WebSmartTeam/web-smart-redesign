const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('Navigating to services page...');
  await page.goto('https://web-smart.co/services/', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);

  const servicesData = await page.evaluate(() => {
    const services = [];

    // Extract all service sections
    const sections = document.querySelectorAll('section, .service-item, .elementor-widget-container');

    sections.forEach(section => {
      const headings = section.querySelectorAll('h1, h2, h3, h4');
      const paragraphs = section.querySelectorAll('p');
      const links = section.querySelectorAll('a');

      headings.forEach(heading => {
        const text = heading.textContent.trim();
        if (text && text.length > 3) {
          const content = [];
          let sibling = heading.nextElementSibling;
          const allowedTags = ['H1', 'H2', 'H3', 'H4'];
          while (sibling && !allowedTags.includes(sibling.tagName)) {
            if (sibling.tagName === 'P' || sibling.tagName === 'UL') {
              content.push(sibling.textContent.trim());
            }
            sibling = sibling.nextElementSibling;
          }

          services.push({
            title: text,
            content: content.join(' ').substring(0, 500),
            level: heading.tagName
          });
        }
      });
    });

    return {
      services: services.filter(s => s.content.length > 20),
      allText: document.body.innerText
    };
  });

  // Save to file
  fs.writeFileSync(
    'services-analysis.json',
    JSON.stringify(servicesData, null, 2)
  );

  console.log('✓ Services page analyzed');
  console.log('✓ Found ' + servicesData.services.length + ' service sections');

  await browser.close();
})();
