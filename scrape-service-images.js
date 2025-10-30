const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);

    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function scrapeServiceImages() {
  console.log('\n🔍 Scraping service images from web-smart.co...\n');

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const servicePages = [
    { url: 'https://web-smart.co/', name: 'homepage' },
    { url: 'https://web-smart.co/services/', name: 'services' },
    { url: 'https://web-smart.co/web-design-services/', name: 'web-design' },
    { url: 'https://web-smart.co/seo-services/', name: 'seo' },
    { url: 'https://web-smart.co/google-ads-management/', name: 'google-ads' },
  ];

  const allImages = [];

  for (const servicePage of servicePages) {
    try {
      console.log(`\n📄 Analyzing ${servicePage.name}...`);
      await page.goto(servicePage.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(2000);

      const images = await page.evaluate(() => {
        const imgs = [];
        const imageElements = document.querySelectorAll('img');

        imageElements.forEach(img => {
          const src = img.src;
          const alt = img.alt || '';
          const width = img.naturalWidth || img.width;
          const height = img.naturalHeight || img.height;

          // Filter for relevant service images
          if (src && !src.includes('logo') && !src.includes('icon') &&
              width > 200 && height > 150 &&
              !src.includes('avatar') && !src.includes('profile')) {
            imgs.push({
              src,
              alt,
              width,
              height,
              area: width * height
            });
          }
        });

        return imgs;
      });

      console.log(`   Found ${images.length} potential images`);

      images.forEach(img => {
        if (!allImages.find(i => i.src === img.src)) {
          allImages.push({ ...img, page: servicePage.name });
        }
      });

    } catch (error) {
      console.error(`❌ Error on ${servicePage.name}:`, error.message);
    }
  }

  await browser.close();

  // Sort by image size (larger = better quality)
  allImages.sort((a, b) => b.area - a.area);

  console.log(`\n📊 Total unique images found: ${allImages.length}`);
  console.log('\n🖼️  Top service images:\n');

  allImages.slice(0, 30).forEach((img, i) => {
    console.log(`${i + 1}. ${img.src}`);
    console.log(`   Alt: ${img.alt}`);
    console.log(`   Size: ${img.width}x${img.height} (${Math.round(img.area / 1000)}K pixels)`);
    console.log(`   Page: ${img.page}\n`);
  });

  // Save catalog
  fs.writeFileSync(
    'service-images-catalog.json',
    JSON.stringify(allImages, null, 2)
  );

  console.log('✅ Catalog saved to service-images-catalog.json');

  // Download top service images
  console.log('\n📥 Downloading service images...\n');

  const downloadDir = './web-smart-redesign/public/images/services/live';
  if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
  }

  const toDownload = allImages.slice(0, 20); // Top 20 images

  for (let i = 0; i < toDownload.length; i++) {
    const img = toDownload[i];
    try {
      const ext = path.extname(new URL(img.src).pathname) || '.jpg';
      const filename = `service-${i + 1}${ext}`;
      const filepath = path.join(downloadDir, filename);

      await downloadImage(img.src, filepath);
      console.log(`   Alt: ${img.alt}`);
      console.log(`   From: ${img.page}\n`);

    } catch (error) {
      console.error(`❌ Failed to download image ${i + 1}:`, error.message);
    }
  }

  console.log('\n✅ Download complete!');
}

scrapeServiceImages().catch(console.error);
