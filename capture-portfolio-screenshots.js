const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const websites = [
  { url: 'https://dy-cut.netlify.app', name: 'dy-cut' },
  { url: 'https://dh-plumbing.netlify.app', name: 'dh-plumbing' },
  { url: 'https://a1-cars.netlify.app', name: 'a1-cars' },
  { url: 'https://optima-accountancy.netlify.app', name: 'optima-accountancy' },
  { url: 'https://newstart-financial.netlify.app', name: 'newstart-financial' },
  { url: 'https://arba-studios.netlify.app', name: 'arba-studios' },
  { url: 'https://brikform-construction.netlify.app', name: 'brikform-construction' },
  { url: 'https://copper-box.netlify.app', name: 'copper-box' },
  { url: 'https://henlow-pc-gov-uk.netlify.app', name: 'henlow-pc' },
  { url: 'https://hewittday.netlify.app/', name: 'hewittday' },
  { url: 'https://sdlsolutions.netlify.app', name: 'sdlsolutions' },
  { url: 'https://demso.netlify.app', name: 'demso' },
  { url: 'https://rayners-school.netlify.app', name: 'rayners-school' },
  { url: 'https://dial4care-recruitment.netlify.app', name: 'dial4care-recruitment' },
  { url: 'https://aidan.systems', name: 'aidan-systems' },
  { url: 'https://myjennco.netlify.app', name: 'myjennco' },
  { url: 'https://digital-brains-henlow.netlify.app', name: 'digital-brains-henlow' },
  { url: 'https://bar-stop.netlify.app', name: 'bar-stop' },
  { url: 'https://visitor-aware.netlify.app', name: 'visitor-aware' },
  { url: 'https://hitchinmarket-aug.netlify.app', name: 'hitchinmarket' },
  { url: 'https://mjryall.netlify.app', name: 'mjryall' },
  { url: 'https://admiral-welding.netlify.app', name: 'admiral-welding' },
  { url: 'https://lawdata.netlify.app', name: 'lawdata' },
  { url: 'https://homeheatingscheme.netlify.app', name: 'homeheatingscheme' },
  { url: 'https://wwba.netlify.app', name: 'wwba' },
  { url: 'https://cycledealia.netlify.app', name: 'cycledealia' },
  { url: 'https://enhancecosmeticssolutions.netlify.app', name: 'enhancecosmeticssolutions' },
  { url: 'https://bulldogsteelfabrications.netlify.app', name: 'bulldogsteelfabrications' },
];

async function captureScreenshots() {
  const browser = await chromium.launch({ headless: true });
  const outputDir = './web-smart-redesign/public/images/portfolio';

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const site of websites) {
    try {
      console.log(`📸 Capturing ${site.name}...`);
      const page = await browser.newPage({
        viewport: { width: 1920, height: 1080 }
      });

      await page.goto(site.url, {
        waitUntil: 'networkidle',
        timeout: 60000
      });

      // Wait a bit for any animations
      await page.waitForTimeout(2000);

      // Take screenshot
      const screenshotPath = path.join(outputDir, `${site.name}.jpg`);
      await page.screenshot({
        path: screenshotPath,
        type: 'jpeg',
        quality: 85,
        fullPage: false
      });

      console.log(`✓ Saved ${site.name}.jpg`);
      await page.close();

    } catch (error) {
      console.error(`✗ Failed to capture ${site.name}:`, error.message);
    }
  }

  await browser.close();
  console.log('\n✓ All screenshots captured!');
}

captureScreenshots();
