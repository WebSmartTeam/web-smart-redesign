const { webkit } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Read the images catalog
const imagesCatalog = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'documentation', 'images-catalog.json'), 'utf8')
);

// Create images directory structure
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir);
}

// Create subdirectories
const subdirs = ['logos', 'team', 'portfolio', 'services', 'blog', 'branding', 'misc'];
subdirs.forEach(dir => {
  const dirPath = path.join(imagesDir, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
});

// Filter and organize images
function organizeImages() {
  const organized = {
    logos: [],
    team: [],
    portfolio: [],
    services: [],
    blog: [],
    branding: [],
    misc: []
  };

  // Track unique images by URL
  const uniqueImages = new Map();

  imagesCatalog.forEach(img => {
    // Skip emoji SVGs (they're from WordPress core, not useful assets)
    if (img.src.includes('s.w.org/images/core/emoji')) {
      return;
    }

    // Skip images with 0 dimensions (broken or hidden)
    if (img.width === 0 || img.height === 0) {
      return;
    }

    // Track unique images
    if (!uniqueImages.has(img.src)) {
      uniqueImages.set(img.src, img);
    }
  });

  // Categorize unique images
  uniqueImages.forEach((img, url) => {
    const filename = path.basename(url).split('?')[0]; // Remove query strings
    const alt = img.alt.toLowerCase();

    // Categorize
    if (filename.includes('ape-face') || filename.includes('monkey')) {
      organized.logos.push({ ...img, category: 'logos', filename });
    } else if (filename.includes('linkedin-profile') || alt.includes('pete gypps')) {
      organized.team.push({ ...img, category: 'team', filename });
    } else if (
      alt.includes('portfolio') ||
      filename.includes('buzz-website') ||
      filename.includes('branding-website') ||
      filename.includes('cat')
    ) {
      organized.portfolio.push({ ...img, category: 'portfolio', filename });
    } else if (
      img.page === 'web-design-services' ||
      img.page === 'seo-services' ||
      img.page === 'content-writing' ||
      filename.includes('seo-') ||
      filename.includes('web-design') ||
      filename.includes('foundation')
    ) {
      organized.services.push({ ...img, category: 'services', filename });
    } else if (filename.includes('blog') || img.page === 'blogs') {
      organized.blog.push({ ...img, category: 'blog', filename });
    } else if (filename.includes('branding') || filename.includes('neve-patterns')) {
      organized.branding.push({ ...img, category: 'branding', filename });
    } else {
      organized.misc.push({ ...img, category: 'misc', filename });
    }
  });

  return organized;
}

// Download function
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    const file = fs.createWriteStream(filepath);

    protocol.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlinkSync(filepath);
        return downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      }

      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filepath);
        return reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        resolve(filepath);
      });

      file.on('error', (err) => {
        file.close();
        fs.unlinkSync(filepath);
        reject(err);
      });
    }).on('error', (err) => {
      file.close();
      fs.unlinkSync(filepath);
      reject(err);
    });
  });
}

// Main download process
async function downloadAllImages() {
  console.log('📦 Organizing images...\n');
  const organized = organizeImages();

  // Count unique images
  let totalImages = 0;
  Object.values(organized).forEach(category => {
    totalImages += category.length;
  });

  console.log(`Found ${totalImages} unique images to download\n`);

  // Show category breakdown
  Object.entries(organized).forEach(([category, images]) => {
    if (images.length > 0) {
      console.log(`  ${category}: ${images.length} images`);
    }
  });

  console.log('\n📥 Downloading images...\n');

  let downloaded = 0;
  let failed = 0;

  // Download each category
  for (const [category, images] of Object.entries(organized)) {
    if (images.length === 0) continue;

    console.log(`\n📁 Downloading ${category}...`);

    for (const img of images) {
      const filepath = path.join(imagesDir, category, img.filename);

      // Skip if already exists
      if (fs.existsSync(filepath)) {
        console.log(`  ✓ Already exists: ${img.filename}`);
        downloaded++;
        continue;
      }

      try {
        await downloadImage(img.src, filepath);
        console.log(`  ✓ Downloaded: ${img.filename}`);
        downloaded++;
      } catch (error) {
        console.log(`  ✗ Failed: ${img.filename} - ${error.message}`);
        failed++;
      }
    }
  }

  console.log(`\n✅ Download complete!`);
  console.log(`  Downloaded: ${downloaded}`);
  console.log(`  Failed: ${failed}`);
  console.log(`  Total unique images: ${totalImages}`);

  // Create an index file
  const indexData = {
    downloadDate: new Date().toISOString(),
    totalImages,
    downloaded,
    failed,
    categories: {}
  };

  Object.entries(organized).forEach(([category, images]) => {
    indexData.categories[category] = images.map(img => ({
      filename: img.filename,
      src: img.src,
      alt: img.alt,
      width: img.width,
      height: img.height,
      page: img.page
    }));
  });

  fs.writeFileSync(
    path.join(imagesDir, 'images-index.json'),
    JSON.stringify(indexData, null, 2)
  );

  console.log(`\n📄 Image index created: images/images-index.json`);
}

downloadAllImages().catch(console.error);
