const { webkit } = require('playwright');
const fs = require('fs');

(async () => {
  console.log('🚀 Starting comprehensive homepage analysis...\n');

  const browser = await webkit.launch({ headless: true });
  const page = await browser.newPage();

  console.log('📡 Navigating to https://web-smart.co/...');
  try {
    await page.goto('https://web-smart.co/', {
      waitUntil: 'domcontentloaded',
      timeout: 120000
    });
    console.log('✅ Initial page load complete');
  } catch (error) {
    console.log('⚠️  Page load timed out, but continuing with what we have...');
  }

  console.log('⏳ Waiting for page content to render...');
  await page.waitForTimeout(8000); // Wait 8 seconds for dynamic content

  console.log('✅ Extracting content...\n');

  // Extract comprehensive content
  const content = await page.evaluate(() => {
    const data = {
      title: document.title,
      h1s: [],
      h2s: [],
      h3s: [],
      h4s: [],
      sections: [],
      buttons: [],
      links: [],
      images: [],
      lists: [],
      paragraphs: [],
      cards: [],
      testimonials: []
    };

    // Extract all headings
    document.querySelectorAll('h1').forEach(h1 => {
      data.h1s.push({
        text: h1.textContent.trim(),
        classes: h1.className,
        parent: h1.parentElement.tagName
      });
    });

    document.querySelectorAll('h2').forEach(h2 => {
      data.h2s.push({
        text: h2.textContent.trim(),
        classes: h2.className,
        parent: h2.parentElement.tagName
      });
    });

    document.querySelectorAll('h3').forEach(h3 => {
      data.h3s.push({
        text: h3.textContent.trim(),
        classes: h3.className
      });
    });

    document.querySelectorAll('h4').forEach(h4 => {
      data.h4s.push({
        text: h4.textContent.trim(),
        classes: h4.className
      });
    });

    // Extract all sections with their content
    document.querySelectorAll('section, .section, div[class*="section"]').forEach((section, index) => {
      const sectionData = {
        index: index,
        id: section.id || '',
        classes: section.className || '',
        headings: [],
        paragraphs: [],
        buttons: [],
        images: [],
        lists: [],
        backgroundColor: window.getComputedStyle(section).backgroundColor,
        textPreview: section.textContent.trim().substring(0, 500)
      };

      // Get all headings in this section
      section.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
        sectionData.headings.push({
          level: heading.tagName,
          text: heading.textContent.trim(),
          classes: heading.className
        });
      });

      // Get all paragraphs in this section
      section.querySelectorAll('p').forEach(p => {
        const text = p.textContent.trim();
        if (text.length > 10) {
          sectionData.paragraphs.push({
            text: text,
            classes: p.className
          });
        }
      });

      // Get buttons/CTAs in this section
      section.querySelectorAll('a.button, button, .btn, a.cta, a[class*="button"], a[class*="btn"]').forEach(btn => {
        sectionData.buttons.push({
          text: btn.textContent.trim(),
          href: btn.href || '',
          classes: btn.className
        });
      });

      // Get images in this section
      section.querySelectorAll('img').forEach(img => {
        sectionData.images.push({
          src: img.src,
          alt: img.alt || '',
          classes: img.className
        });
      });

      // Get lists in this section
      section.querySelectorAll('ul, ol').forEach(list => {
        const items = [];
        list.querySelectorAll('li').forEach(li => {
          items.push(li.textContent.trim());
        });
        if (items.length > 0) {
          sectionData.lists.push({
            type: list.tagName,
            items: items
          });
        }
      });

      data.sections.push(sectionData);
    });

    // Extract all buttons/CTAs globally
    document.querySelectorAll('a.button, button, .btn, a.cta, a[class*="button"], a[class*="btn"]').forEach(btn => {
      data.buttons.push({
        text: btn.textContent.trim(),
        href: btn.href || '',
        classes: btn.className
      });
    });

    // Extract all meaningful paragraphs
    document.querySelectorAll('p').forEach(p => {
      const text = p.textContent.trim();
      if (text.length > 20) {
        data.paragraphs.push({
          text: text,
          classes: p.className,
          parent: p.parentElement.tagName
        });
      }
    });

    // Extract all images
    document.querySelectorAll('img').forEach(img => {
      data.images.push({
        src: img.src,
        alt: img.alt || '',
        width: img.width,
        height: img.height,
        classes: img.className
      });
    });

    // Extract card-like structures
    document.querySelectorAll('.card, [class*="card"], .box, [class*="box"], .item, [class*="item"]').forEach(card => {
      const cardData = {
        classes: card.className,
        heading: '',
        text: '',
        button: '',
        image: ''
      };

      const heading = card.querySelector('h1, h2, h3, h4, h5, h6');
      if (heading) cardData.heading = heading.textContent.trim();

      const p = card.querySelector('p');
      if (p) cardData.text = p.textContent.trim();

      const btn = card.querySelector('a, button');
      if (btn) cardData.button = btn.textContent.trim();

      const img = card.querySelector('img');
      if (img) cardData.image = img.alt || img.src;

      if (cardData.heading || cardData.text) {
        data.cards.push(cardData);
      }
    });

    // Extract testimonials/quotes
    document.querySelectorAll('.testimonial, [class*="testimonial"], .quote, [class*="quote"], .review, [class*="review"]').forEach(testimonial => {
      const quote = testimonial.querySelector('p, .text, .content');
      const author = testimonial.querySelector('.author, .name, [class*="author"], [class*="name"]');

      data.testimonials.push({
        quote: quote ? quote.textContent.trim() : testimonial.textContent.trim().substring(0, 300),
        author: author ? author.textContent.trim() : '',
        classes: testimonial.className
      });
    });

    // Extract all lists
    document.querySelectorAll('ul, ol').forEach(list => {
      const items = [];
      list.querySelectorAll('li').forEach(li => {
        items.push(li.textContent.trim());
      });
      if (items.length > 0 && items.length < 50) { // Avoid navigation menus
        data.lists.push({
          type: list.tagName,
          items: items,
          parent: list.parentElement.tagName,
          classes: list.className
        });
      }
    });

    // Extract navigation links (for reference)
    document.querySelectorAll('nav a, .nav a, .menu a, header a').forEach(link => {
      const text = link.textContent.trim();
      if (text && text.length < 50) {
        data.links.push({
          text: text,
          href: link.href || ''
        });
      }
    });

    return data;
  });

  console.log('📊 Analysis complete. Generating report...\n');

  // Save raw data
  fs.writeFileSync(
    '/Users/aryanchoubey/Documents/MasterClaude/projects/web-smart/homepage-content-raw.json',
    JSON.stringify(content, null, 2)
  );

  // Generate formatted report
  let report = `HOMEPAGE CONTENT ANALYSIS - Web-Smart.Co
==========================================
URL: https://web-smart.co/
Date: ${new Date().toISOString().split('T')[0]}
Page Title: ${content.title}

`;

  // H1 Headings
  report += `\n=== H1 HEADINGS (${content.h1s.length}) ===\n`;
  content.h1s.forEach((h1, i) => {
    report += `${i + 1}. "${h1.text}"\n`;
    if (h1.classes) report += `   Classes: ${h1.classes}\n`;
  });

  // H2 Headings
  report += `\n=== H2 HEADINGS (${content.h2s.length}) ===\n`;
  content.h2s.forEach((h2, i) => {
    report += `${i + 1}. "${h2.text}"\n`;
    if (h2.classes) report += `   Classes: ${h2.classes}\n`;
  });

  // H3 Headings
  if (content.h3s.length > 0) {
    report += `\n=== H3 HEADINGS (${content.h3s.length}) ===\n`;
    content.h3s.forEach((h3, i) => {
      report += `${i + 1}. "${h3.text}"\n`;
    });
  }

  // Sections
  report += `\n\n=== SECTIONS BREAKDOWN (${content.sections.length} sections) ===\n`;
  content.sections.forEach((section, i) => {
    report += `\n--- SECTION ${i + 1} ---\n`;
    if (section.id) report += `ID: ${section.id}\n`;
    if (section.classes) report += `Classes: ${section.classes}\n`;
    report += `Background: ${section.backgroundColor}\n`;

    if (section.headings.length > 0) {
      report += `\nHeadings:\n`;
      section.headings.forEach(h => {
        report += `  ${h.level}: "${h.text}"\n`;
      });
    }

    if (section.paragraphs.length > 0) {
      report += `\nParagraphs (${section.paragraphs.length}):\n`;
      section.paragraphs.forEach((p, pi) => {
        report += `  ${pi + 1}. ${p.text.substring(0, 200)}${p.text.length > 200 ? '...' : ''}\n`;
      });
    }

    if (section.buttons.length > 0) {
      report += `\nButtons/CTAs:\n`;
      section.buttons.forEach(btn => {
        report += `  - "${btn.text}" → ${btn.href}\n`;
      });
    }

    if (section.lists.length > 0) {
      report += `\nLists:\n`;
      section.lists.forEach((list, li) => {
        report += `  List ${li + 1} (${list.type}, ${list.items.length} items):\n`;
        list.items.forEach(item => {
          report += `    • ${item}\n`;
        });
      });
    }

    if (section.images.length > 0) {
      report += `\nImages (${section.images.length}):\n`;
      section.images.forEach(img => {
        report += `  - ${img.alt || 'No alt text'} (${img.src.substring(0, 80)}...)\n`;
      });
    }

    report += `\n`;
  });

  // Buttons/CTAs
  report += `\n=== ALL BUTTONS/CTAs (${content.buttons.length}) ===\n`;
  const uniqueButtons = [...new Set(content.buttons.map(b => b.text))];
  uniqueButtons.forEach((text, i) => {
    const btn = content.buttons.find(b => b.text === text);
    report += `${i + 1}. "${text}"`;
    if (btn.href) report += ` → ${btn.href}`;
    report += `\n`;
  });

  // Cards
  if (content.cards.length > 0) {
    report += `\n=== CARDS/BOXES (${content.cards.length}) ===\n`;
    content.cards.forEach((card, i) => {
      report += `\nCard ${i + 1}:\n`;
      if (card.heading) report += `  Heading: "${card.heading}"\n`;
      if (card.text) report += `  Text: ${card.text.substring(0, 150)}${card.text.length > 150 ? '...' : ''}\n`;
      if (card.button) report += `  Button: "${card.button}"\n`;
      if (card.image) report += `  Image: ${card.image}\n`;
    });
  }

  // Testimonials
  if (content.testimonials.length > 0) {
    report += `\n=== TESTIMONIALS/QUOTES (${content.testimonials.length}) ===\n`;
    content.testimonials.forEach((t, i) => {
      report += `\nTestimonial ${i + 1}:\n`;
      report += `  Quote: "${t.quote}"\n`;
      if (t.author) report += `  Author: ${t.author}\n`;
    });
  }

  // All unique paragraphs (sample)
  report += `\n=== ALL PARAGRAPHS (${content.paragraphs.length} total, showing first 20) ===\n`;
  content.paragraphs.slice(0, 20).forEach((p, i) => {
    report += `${i + 1}. ${p.text.substring(0, 200)}${p.text.length > 200 ? '...' : ''}\n\n`;
  });

  // Lists
  if (content.lists.length > 0) {
    report += `\n=== ALL LISTS (${content.lists.length}) ===\n`;
    content.lists.forEach((list, i) => {
      report += `\nList ${i + 1} (${list.type}):\n`;
      list.items.forEach(item => {
        report += `  • ${item}\n`;
      });
    });
  }

  // Images
  report += `\n=== ALL IMAGES (${content.images.length}) ===\n`;
  content.images.forEach((img, i) => {
    report += `${i + 1}. Alt: "${img.alt || 'No alt text'}"\n`;
    report += `   Src: ${img.src}\n`;
    if (img.width && img.height) report += `   Size: ${img.width}x${img.height}\n`;
    report += `\n`;
  });

  // Save formatted report
  fs.writeFileSync(
    '/Users/aryanchoubey/Documents/MasterClaude/projects/web-smart/HOMEPAGE-CONTENT-COMPLETE.md',
    report
  );

  console.log('✅ Analysis complete!');
  console.log('\nFiles created:');
  console.log('  - homepage-content-raw.json (raw data)');
  console.log('  - HOMEPAGE-CONTENT-COMPLETE.md (formatted report)');
  console.log(`\nSummary:`);
  console.log(`  - ${content.h1s.length} H1 headings`);
  console.log(`  - ${content.h2s.length} H2 headings`);
  console.log(`  - ${content.h3s.length} H3 headings`);
  console.log(`  - ${content.sections.length} sections`);
  console.log(`  - ${content.paragraphs.length} paragraphs`);
  console.log(`  - ${content.buttons.length} buttons/CTAs`);
  console.log(`  - ${content.images.length} images`);
  console.log(`  - ${content.cards.length} cards/boxes`);
  console.log(`  - ${content.testimonials.length} testimonials`);
  console.log(`  - ${content.lists.length} lists`);

  await browser.close();
})();
