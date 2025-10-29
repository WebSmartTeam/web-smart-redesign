const { jsPDF } = require('jspdf');
const fs = require('fs');
const path = require('path');

// Brand colors
const PRIMARY_COLOR = [103, 47, 143]; // #672F8F
const SECONDARY_COLOR = [243, 240, 251]; // #F3F0FB
const TEXT_COLOR = [31, 41, 55]; // gray-800

// Helper function to add header
function addHeader(doc, title) {
  doc.setFillColor(...PRIMARY_COLOR);
  doc.rect(0, 0, 210, 40, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text(title, 20, 20);

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Web-Smart.Co', 20, 28);
  doc.text('Best SEO Agency in Hertfordshire', 20, 34);
}

// Helper function to add footer
function addFooter(doc, pageNumber) {
  doc.setFillColor(...SECONDARY_COLOR);
  doc.rect(0, 277, 210, 20, 'F');

  doc.setTextColor(...TEXT_COLOR);
  doc.setFontSize(9);
  doc.text('Web-Smart.Co  |  01462 544738  |  enquiries@web-smart.co  |  web-smart.co', 105, 287, { align: 'center' });
  doc.text(`Page ${pageNumber}`, 190, 287, { align: 'right' });
}

// Helper function to wrap text
function addWrappedText(doc, text, x, y, maxWidth, lineHeight = 6) {
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, x, y);
  return y + (lines.length * lineHeight);
}

// Helper function to add section
function addSection(doc, title, content, y) {
  doc.setTextColor(...PRIMARY_COLOR);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text(title, 20, y);

  y += 8;
  doc.setTextColor(...TEXT_COLOR);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');

  if (Array.isArray(content)) {
    content.forEach(item => {
      const checkmark = '✓';
      doc.text(checkmark, 25, y);
      y = addWrappedText(doc, item, 32, y, 160);
      y += 3;
    });
  } else {
    y = addWrappedText(doc, content, 20, y, 170);
  }

  return y + 5;
}

// 1. Website Launch Checklist
function generateWebsiteLaunchChecklist() {
  const doc = new jsPDF();

  addHeader(doc, 'Website Launch Checklist');
  addFooter(doc, 1);

  let y = 50;

  doc.setTextColor(...TEXT_COLOR);
  doc.setFontSize(11);
  y = addWrappedText(doc, 'Complete 50-point checklist to ensure your website launch goes smoothly. This comprehensive guide covers everything from design and content to SEO, technical setup, and post-launch tasks.', 20, y, 170);

  y += 10;

  y = addSection(doc, 'Pre-Launch: Design & Content', [
    'Finalise website design and branding',
    'Ensure all pages have proper headings (H1, H2, H3)',
    'Check all images are optimised for web (compressed)',
    'Verify all content is spell-checked and proofread',
    'Ensure call-to-action buttons are prominent and clear',
    'Test website on multiple screen sizes (mobile, tablet, desktop)',
    'Verify colour contrast meets WCAG accessibility standards',
    'Check all forms are working correctly',
    'Ensure navigation is intuitive and user-friendly',
    'Verify all placeholder content has been replaced'
  ], y);

  // Page 2
  doc.addPage();
  addHeader(doc, 'Website Launch Checklist');
  addFooter(doc, 2);

  y = 50;

  y = addSection(doc, 'Pre-Launch: Technical Setup', [
    'Set up Google Analytics 4',
    'Install Google Search Console',
    'Configure SSL certificate (HTTPS)',
    'Test website speed (aim for under 3 seconds)',
    'Set up 301 redirects for old URLs (if redesign)',
    'Create XML sitemap',
    'Configure robots.txt file',
    'Set up website backup system',
    'Test all internal links',
    'Verify external links open in new tab'
  ], y);

  y += 10;

  y = addSection(doc, 'Pre-Launch: SEO Foundation', [
    'Research and implement target keywords',
    'Write unique meta titles for all pages',
    'Write compelling meta descriptions for all pages',
    'Add alt text to all images',
    'Implement schema markup (Organization, LocalBusiness)',
    'Create and submit XML sitemap to Google',
    'Set up Google My Business (if local business)',
    'Optimise URL structure (clean, keyword-rich)',
    'Implement Open Graph tags for social sharing',
    'Set up canonical tags to prevent duplicate content'
  ], y);

  // Page 3
  doc.addPage();
  addHeader(doc, 'Website Launch Checklist');
  addFooter(doc, 3);

  y = 50;

  y = addSection(doc, 'Launch Day', [
    'Remove "coming soon" or "under construction" pages',
    'Test all functionality one final time',
    'Clear all caches (browser, server, CDN)',
    'Verify forms send to correct email addresses',
    'Test contact forms with real submissions',
    'Check all payment integrations (if e-commerce)',
    'Announce launch on social media',
    'Send launch email to subscribers (if applicable)',
    'Monitor website for errors in first few hours',
    'Check Google Analytics is tracking correctly'
  ], y);

  y += 10;

  y = addSection(doc, 'Post-Launch: Week 1', [
    'Monitor website speed and uptime',
    'Check for 404 errors and fix them',
    'Review Google Search Console for crawl errors',
    'Set up social media sharing buttons',
    'Create blog content schedule',
    'Start building backlinks',
    'Monitor Google Analytics for traffic patterns',
    'Test website on different browsers',
    'Gather initial user feedback',
    'Document any bugs or issues for fixing'
  ], y);

  // Page 4
  doc.addPage();
  addHeader(doc, 'Website Launch Checklist');
  addFooter(doc, 4);

  y = 50;

  y = addSection(doc, 'Ongoing Maintenance', [
    'Weekly content updates (blog posts, news)',
    'Monthly SEO performance review',
    'Quarterly security audits',
    'Regular backups (automated daily/weekly)',
    'Monitor and respond to user feedback',
    'Update plugins and CMS regularly',
    'Review and update outdated content',
    'Monitor competitors\' websites',
    'Track keyword rankings monthly',
    'Analyse conversion rates and optimise'
  ], y);

  y += 10;

  doc.setFillColor(...SECONDARY_COLOR);
  doc.rect(15, y, 180, 40, 'F');

  doc.setTextColor(...PRIMARY_COLOR);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Need Help Launching Your Website?', 20, y + 10);

  doc.setTextColor(...TEXT_COLOR);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Web-Smart.Co offers complete website launch services including:', 20, y + 18);
  doc.text('• Professional web design and development', 20, y + 24);
  doc.text('• SEO setup and optimisation', 20, y + 30);
  doc.text('• Technical configuration and security', 20, y + 36);

  // Save
  doc.save(path.join(__dirname, 'public/resources/website-launch-checklist.pdf'));
  console.log('✓ Created: website-launch-checklist.pdf');
}

// 2. SEO Audit Template
function generateSEOAuditTemplate() {
  const doc = new jsPDF();

  addHeader(doc, 'SEO Audit Template');
  addFooter(doc, 1);

  let y = 50;

  doc.setTextColor(...TEXT_COLOR);
  doc.setFontSize(11);
  y = addWrappedText(doc, 'Professional SEO audit template used by Web-Smart.Co. Use this comprehensive checklist to analyse on-page SEO, technical issues, backlinks, and identify actionable optimisation opportunities.', 20, y, 170);

  y += 10;

  y = addSection(doc, 'On-Page SEO Analysis', [
    'Meta titles optimised (50-60 characters, include keywords)',
    'Meta descriptions compelling (150-160 characters)',
    'H1 tags present and optimised on all pages',
    'Proper heading hierarchy (H1 > H2 > H3)',
    'URL structure clean and keyword-rich',
    'Image alt text descriptive and keyword-optimised',
    'Internal linking strategy implemented',
    'Content length adequate (minimum 300 words per page)',
    'Keyword density appropriate (1-2% for target keywords)',
    'Content provides value and answers user questions'
  ], y);

  doc.addPage();
  addHeader(doc, 'SEO Audit Template');
  addFooter(doc, 2);

  y = 50;

  y = addSection(doc, 'Technical SEO', [
    'SSL certificate active (HTTPS)',
    'Mobile-friendly (responsive design)',
    'Page speed under 3 seconds',
    'XML sitemap created and submitted',
    'Robots.txt configured correctly',
    'Canonical tags implemented',
    'Schema markup for rich snippets',
    'No duplicate content issues',
    '404 errors monitored and fixed',
    'Proper redirects (301) in place'
  ], y);

  y += 10;

  y = addSection(doc, 'Off-Page SEO & Backlinks', [
    'Number of backlinks and domain authority',
    'Quality of referring domains (not spammy)',
    'Anchor text diversity',
    'Social media presence and engagement',
    'Google My Business optimised',
    'Local citations accurate and consistent',
    'Online reviews and reputation',
    'Competitor backlink analysis',
    'Link building opportunities identified',
    'Disavow toxic backlinks if necessary'
  ], y);

  doc.addPage();
  addHeader(doc, 'SEO Audit Template');
  addFooter(doc, 3);

  y = 50;

  y = addSection(doc, 'Content Strategy', [
    'Blog content published regularly',
    'Content covers target keywords',
    'Long-tail keywords targeted',
    'Content provides comprehensive answers',
    'Multimedia (images, videos) included',
    'Content updated regularly',
    'User intent matched',
    'Engaging headlines and introductions',
    'Clear calls-to-action',
    'Shareable content for social media'
  ], y);

  y += 10;

  y = addSection(doc, 'Local SEO (if applicable)', [
    'Google My Business fully optimised',
    'NAP (Name, Address, Phone) consistent everywhere',
    'Local keywords targeted',
    'Location pages created',
    'Local citations built',
    'Reviews actively managed',
    'Local schema markup implemented',
    'Geographic keywords in content',
    'Embedded Google Map on contact page',
    'Local directories listings'
  ], y);

  doc.addPage();
  addHeader(doc, 'SEO Audit Template');
  addFooter(doc, 4);

  y = 50;

  y = addSection(doc, 'Analytics & Tracking', [
    'Google Analytics 4 configured',
    'Google Search Console set up',
    'Goal tracking implemented',
    'Conversion tracking active',
    'Traffic sources monitored',
    'Keyword rankings tracked',
    'Bounce rate analysed',
    'User behaviour reviewed',
    'Monthly reports generated',
    'ROI measured'
  ], y);

  y += 10;

  doc.setFillColor(...SECONDARY_COLOR);
  doc.rect(15, y, 180, 35, 'F');

  doc.setTextColor(...PRIMARY_COLOR);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Want a Professional SEO Audit?', 20, y + 10);

  doc.setTextColor(...TEXT_COLOR);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Web-Smart.Co SEO Foundation Pack includes:', 20, y + 18);
  doc.text('• Complete technical SEO audit', 20, y + 24);
  doc.text('• Keyword research and strategy', 20, y + 30);
  doc.text('• Only £1,499 - Book your audit today!', 20, y + 36);

  doc.save(path.join(__dirname, 'public/resources/seo-audit-template.pdf'));
  console.log('✓ Created: seo-audit-template.pdf');
}

// Generate remaining PDFs with placeholder content due to length constraints
// In production, these would have full detailed content like above

function generateDesignStyleGuide() {
  const doc = new jsPDF();
  addHeader(doc, 'Web Design Style Guide');
  addFooter(doc, 1);

  let y = 50;
  doc.setTextColor(...TEXT_COLOR);
  doc.setFontSize(11);
  y = addWrappedText(doc, 'Create consistent branding across all touchpoints with this comprehensive style guide template. This guide helps you define and document your brand identity, ensuring cohesive visual communication.', 20, y, 170);

  y += 10;
  y = addSection(doc, 'Brand Identity', [
    'Logo usage guidelines (primary, secondary, variations)',
    'Clear space and minimum size requirements',
    'Approved and prohibited logo treatments',
    'Brand colors (primary, secondary, accent)',
    'Color values (HEX, RGB, CMYK, Pantone)',
    'Typography (primary and secondary fonts)',
    'Font weights and styles to use',
    'Heading and body text specifications'
  ], y);

  doc.addPage();
  addHeader(doc, 'Web Design Style Guide');
  addFooter(doc, 2);

  y = 50;
  y = addSection(doc, 'Visual Elements', [
    'Photography style and treatment',
    'Icon design system',
    'Illustration style (if applicable)',
    'Graphic patterns and textures',
    'Border radius and corner styles',
    'Shadow and depth guidelines',
    'Animation and transition timing',
    'Grid system and spacing scale'
  ], y);

  y += 5;
  y = addSection(doc, 'UI Components', [
    'Button styles (primary, secondary, tertiary)',
    'Form input designs',
    'Navigation patterns',
    'Card layouts',
    'Modal and popup designs',
    'Alert and notification styles',
    'Loading states and spinners',
    'Empty states and error messages'
  ], y);

  doc.addPage();
  addHeader(doc, 'Web Design Style Guide');
  addFooter(doc, 3);

  y = 50;
  y = addSection(doc, 'Content Guidelines', [
    'Tone of voice (professional, friendly, casual)',
    'Writing style dos and don\'ts',
    'Word choice and terminology',
    'Formatting rules for headings',
    'List and bullet point styles',
    'Link styling and hover states',
    'Image caption formatting',
    'Accessibility requirements (WCAG 2.1 AA)'
  ], y);

  y += 5;
  doc.setFillColor(...SECONDARY_COLOR);
  doc.rect(15, y, 180, 30, 'F');

  doc.setTextColor(...PRIMARY_COLOR);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Need Professional Brand Design?', 20, y + 10);

  doc.setTextColor(...TEXT_COLOR);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Web-Smart.Co creates cohesive brand identities:', 20, y + 18);
  doc.text('• Logo design and branding packages', 20, y + 24);
  doc.text('• Complete style guide development', 20, y + 30);

  doc.save(path.join(__dirname, 'public/resources/design-style-guide.pdf'));
  console.log('✓ Created: design-style-guide.pdf');
}

function generateContentPlanner() {
  const doc = new jsPDF();
  addHeader(doc, 'Website Content Planner');
  addFooter(doc, 1);

  let y = 50;
  doc.setTextColor(...TEXT_COLOR);
  doc.setFontSize(11);
  y = addWrappedText(doc, 'Strategic website content planning template. Plan your pages, write compelling copy, and maintain consistency across your entire website with this comprehensive content strategy guide.', 20, y, 170);

  y += 10;
  y = addSection(doc, 'Homepage Content', [
    'Clear value proposition above the fold',
    'Compelling headline (benefit-focused)',
    'Sub-headline supporting main message',
    'Hero image or video that resonates',
    'Trust indicators (stats, awards, certifications)',
    'Clear primary call-to-action',
    'Overview of key services/products',
    'Social proof (testimonials, client logos)',
    'Final CTA before footer'
  ], y);

  doc.addPage();
  addHeader(doc, 'Website Content Planner');
  addFooter(doc, 2);

  y = 50;
  y = addSection(doc, 'Service/Product Pages', [
    'Clear page title with target keyword',
    'Problem statement (pain points)',
    'Solution explanation (how you solve it)',
    'Benefits list (what customer gains)',
    'Features list (specific details)',
    'Process or how it works section',
    'Pricing or package options',
    'FAQ section addressing objections',
    'Social proof specific to this service',
    'Strong call-to-action'
  ], y);

  y += 5;
  y = addSection(doc, 'About Us Page', [
    'Company origin story',
    'Mission and values',
    'Team member bios with photos',
    'Unique selling proposition',
    'Awards and recognition',
    'Company timeline or milestones',
    'Behind-the-scenes photos',
    'Why customers should choose you',
    'Call-to-action to contact'
  ], y);

  doc.addPage();
  addHeader(doc, 'Website Content Planner');
  addFooter(doc, 3);

  y = 50;
  y = addSection(doc, 'Blog Content Strategy', [
    'Target keywords for each post',
    'Content calendar (12 weeks planned)',
    'Topic research based on audience needs',
    'SEO-optimised headlines',
    'Meta descriptions for each post',
    'Internal linking opportunities',
    'Featured images and graphics',
    'Call-to-action within content',
    'Social media promotion plan',
    'Email newsletter integration'
  ], y);

  y += 5;
  y = addSection(doc, 'Conversion-Focused Copy', [
    'Benefit-driven headlines',
    'Emotional triggers and pain points',
    'Clear, concise language',
    'Action verbs in CTAs',
    'Urgency and scarcity when appropriate',
    'Risk reversal (guarantees, free trials)',
    'Specific numbers and results',
    'Customer-centric messaging ("you" not "we")',
    'Address objections proactively'
  ], y);

  doc.addPage();
  addHeader(doc, 'Website Content Planner');
  addFooter(doc, 4);

  y = 50;
  doc.setFillColor(...SECONDARY_COLOR);
  doc.rect(15, y, 180, 30, 'F');

  doc.setTextColor(...PRIMARY_COLOR);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Need Professional Content Writing?', 20, y + 10);

  doc.setTextColor(...TEXT_COLOR);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Web-Smart.Co offers AI-powered and traditional content writing:', 20, y + 18);
  doc.text('• Website copy that converts', 20, y + 24);
  doc.text('• SEO-optimised blog posts', 20, y + 30);

  doc.save(path.join(__dirname, 'public/resources/content-planner.pdf'));
  console.log('✓ Created: content-planner.pdf');
}

function generateAnalyticsSetupGuide() {
  const doc = new jsPDF();
  addHeader(doc, 'Google Analytics Setup Guide');
  addFooter(doc, 1);

  let y = 50;
  doc.setTextColor(...TEXT_COLOR);
  doc.setFontSize(11);
  y = addWrappedText(doc, 'Complete guide to setting up Google Analytics 4 (GA4), configuring goals, tracking conversions, and understanding your website traffic. Includes dashboard templates and reporting best practices.', 20, y, 170);

  y += 10;
  y = addSection(doc, 'Initial Setup', [
    'Create Google Analytics account',
    'Set up GA4 property',
    'Install tracking code on website',
    'Verify tracking is working',
    'Link to Google Search Console',
    'Configure data streams',
    'Set up user permissions',
    'Enable Google Signals',
    'Configure data retention settings',
    'Set up filters to exclude internal traffic'
  ], y);

  doc.addPage();
  addHeader(doc, 'Google Analytics Setup Guide');
  addFooter(doc, 2);

  y = 50;
  y = addSection(doc, 'Event Tracking', [
    'Set up conversion events (purchases, signups)',
    'Track button clicks',
    'Monitor form submissions',
    'Track video plays',
    'Monitor file downloads',
    'Set up scroll depth tracking',
    'Track outbound link clicks',
    'Monitor site search',
    'Configure enhanced e-commerce (if applicable)',
    'Set up custom events for key actions'
  ], y);

  y += 5;
  y = addSection(doc, 'Goals & Conversions', [
    'Define business objectives',
    'Set up conversion goals',
    'Assign monetary values to goals',
    'Track lead generation forms',
    'Monitor phone call clicks',
    'Track email link clicks',
    'Set up funnel visualization',
    'Monitor checkout process (e-commerce)',
    'Track newsletter signups',
    'Configure conversion attribution'
  ], y);

  doc.addPage();
  addHeader(doc, 'Google Analytics Setup Guide');
  addFooter(doc, 3);

  y = 50;
  y = addSection(doc, 'Reporting & Analysis', [
    'Create custom dashboards',
    'Set up automated reports',
    'Monitor real-time data',
    'Analyse traffic sources',
    'Review audience demographics',
    'Track user behaviour flow',
    'Monitor page performance',
    'Analyse conversion paths',
    'Review acquisition channels',
    'Export data for client reports'
  ], y);

  y += 5;
  doc.setFillColor(...SECONDARY_COLOR);
  doc.rect(15, y, 180, 30, 'F');

  doc.setTextColor(...PRIMARY_COLOR);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Need Analytics Setup Help?', 20, y + 10);

  doc.setTextColor(...TEXT_COLOR);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Web-Smart.Co provides complete analytics configuration:', 20, y + 18);
  doc.text('• GA4 setup and customisation', 20, y + 24);
  doc.text('• Monthly reporting and insights', 20, y + 30);

  doc.save(path.join(__dirname, 'public/resources/analytics-setup-guide.pdf'));
  console.log('✓ Created: analytics-setup-guide.pdf');
}

function generateWordPressSecurityChecklist() {
  const doc = new jsPDF();
  addHeader(doc, 'WordPress Security Checklist');
  addFooter(doc, 1);

  let y = 50;
  doc.setTextColor(...TEXT_COLOR);
  doc.setFontSize(11);
  y = addWrappedText(doc, 'Protect your WordPress website with this comprehensive 30-point security checklist. Covers plugins, backups, user permissions, malware prevention, and essential security hardening measures.', 20, y, 170);

  y += 10;
  y = addSection(doc, 'Basic Security', [
    'Keep WordPress core updated to latest version',
    'Update all plugins regularly',
    'Update theme to latest version',
    'Use strong passwords (20+ characters)',
    'Enable two-factor authentication',
    'Limit login attempts',
    'Change default "admin" username',
    'Use different usernames for different sites',
    'Remove unused plugins and themes',
    'Use SSL certificate (HTTPS)'
  ], y);

  doc.addPage();
  addHeader(doc, 'WordPress Security Checklist');
  addFooter(doc, 2);

  y = 50;
  y = addSection(doc, 'Advanced Security', [
    'Install security plugin (Wordfence, Sucuri)',
    'Enable firewall protection',
    'Scan for malware regularly',
    'Hide WordPress version number',
    'Disable file editing in wp-admin',
    'Change database table prefix',
    'Protect wp-config.php file',
    'Disable XML-RPC if not needed',
    'Add security headers',
    'Implement Content Security Policy'
  ], y);

  y += 5;
  y = addSection(doc, 'Backup Strategy', [
    'Automated daily backups',
    'Store backups offsite (cloud storage)',
    'Test backup restoration regularly',
    'Backup database separately',
    'Include all files and media',
    'Retain backups for 30+ days',
    'Document backup process',
    'Set up automated backup notifications',
    'Use reliable backup plugin',
    'Have disaster recovery plan'
  ], y);

  doc.addPage();
  addHeader(doc, 'WordPress Security Checklist');
  addFooter(doc, 3);

  y = 50;
  y = addSection(doc, 'User Management', [
    'Assign appropriate user roles',
    'Remove unused user accounts',
    'Monitor user activity logs',
    'Restrict access to wp-admin',
    'Use role-based permissions',
    'Disable user enumeration',
    'Require strong passwords for all users',
    'Regular security audits of users',
    'Limit administrator accounts',
    'Review and update permissions regularly'
  ], y);

  y += 5;
  doc.setFillColor(...SECONDARY_COLOR);
  doc.rect(15, y, 180, 30, 'F');

  doc.setTextColor(...PRIMARY_COLOR);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Need WordPress Security Help?', 20, y + 10);

  doc.setTextColor(...TEXT_COLOR);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Web-Smart.Co offers WordPress security services:', 20, y + 18);
  doc.text('• Complete security audits', 20, y + 24);
  doc.text('• Ongoing maintenance and monitoring', 20, y + 30);

  doc.save(path.join(__dirname, 'public/resources/wordpress-security-checklist.pdf'));
  console.log('✓ Created: wordpress-security-checklist.pdf');
}

function generateLocalSEOGuide() {
  const doc = new jsPDF();
  addHeader(doc, 'Local SEO Optimisation Guide');
  addFooter(doc, 1);

  let y = 50;
  doc.setTextColor(...TEXT_COLOR);
  doc.setFontSize(11);
  y = addWrappedText(doc, 'Comprehensive guide to ranking higher in local search results. Covers Google My Business optimisation, local citations, review management, and location-based keyword targeting for maximum local visibility.', 20, y, 170);

  y += 10;
  y = addSection(doc, 'Google My Business', [
    'Complete all business information fields',
    'Choose accurate primary category',
    'Add relevant secondary categories',
    'Upload high-quality photos (at least 10)',
    'Add business description with keywords',
    'Set correct business hours',
    'Add products or services',
    'Enable messaging',
    'Respond to all reviews',
    'Post updates weekly'
  ], y);

  doc.addPage();
  addHeader(doc, 'Local SEO Optimisation Guide');
  addFooter(doc, 2);

  y = 50;
  y = addSection(doc, 'Local Citations', [
    'List on major directories (Yelp, Facebook, etc.)',
    'Ensure NAP consistency everywhere',
    'Build citations on industry-specific sites',
    'Get listed in local business directories',
    'Claim and optimise Bing Places',
    'Create Apple Maps listing',
    'List on chamber of commerce website',
    'Get featured in local publications',
    'Build citations on review sites',
    'Monitor and update citations regularly'
  ], y);

  y += 5;
  y = addSection(doc, 'Review Management', [
    'Encourage satisfied customers to leave reviews',
    'Make it easy (send review links)',
    'Respond to all reviews (positive and negative)',
    'Thank customers for positive reviews',
    'Address negative reviews professionally',
    'Never buy fake reviews',
    'Monitor reviews across all platforms',
    'Showcase reviews on your website',
    'Use review schema markup',
    'Track review metrics over time'
  ], y);

  doc.addPage();
  addHeader(doc, 'Local SEO Optimisation Guide');
  addFooter(doc, 3);

  y = 50;
  y = addSection(doc, 'Location-Based Keywords', [
    'Research local keywords (city + service)',
    'Include location in page titles',
    'Add location to meta descriptions',
    'Create location-specific pages',
    'Optimise content for "near me" searches',
    'Use local landmarks in content',
    'Target nearby cities and towns',
    'Include location in image alt text',
    'Create local blog content',
    'Build internal links to location pages'
  ], y);

  y += 5;
  doc.setFillColor(...SECONDARY_COLOR);
  doc.rect(15, y, 180, 30, 'F');

  doc.setTextColor(...PRIMARY_COLOR);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Dominate Local Search Results', 20, y + 10);

  doc.setTextColor(...TEXT_COLOR);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Web-Smart.Co specialises in local SEO for Hertfordshire businesses:', 20, y + 18);
  doc.text('• Complete local SEO setup', 20, y + 24);
  doc.text('• Google My Business optimisation', 20, y + 30);

  doc.save(path.join(__dirname, 'public/resources/local-seo-guide.pdf'));
  console.log('✓ Created: local-seo-guide.pdf');
}

function generateAccessibilityChecklist() {
  const doc = new jsPDF();
  addHeader(doc, 'Website Accessibility Checklist');
  addFooter(doc, 1);

  let y = 50;
  doc.setTextColor(...TEXT_COLOR);
  doc.setFontSize(11);
  y = addWrappedText(doc, 'Make your website accessible to all users with this comprehensive WCAG 2.1 Level AA compliance checklist. Covers navigation, forms, images, assistive technologies, and best practices for inclusive web design.', 20, y, 170);

  y += 10;
  y = addSection(doc, 'Visual Accessibility', [
    'Sufficient colour contrast (4.5:1 minimum)',
    'Text resizable up to 200% without loss of content',
    'Don\'t rely solely on colour for information',
    'Provide text alternatives for images',
    'Use readable fonts (minimum 16px body text)',
    'Ensure focus indicators are visible',
    'Avoid flashing content',
    'Provide captions for videos',
    'Audio descriptions for video content',
    'Ensure zoom functionality works'
  ], y);

  doc.addPage();
  addHeader(doc, 'Website Accessibility Checklist');
  addFooter(doc, 2);

  y = 50;
  y = addSection(doc, 'Keyboard Navigation', [
    'All functionality accessible via keyboard',
    'Logical tab order',
    'Skip to main content link',
    'No keyboard traps',
    'Visible focus indicators',
    'Access keys for important links',
    'Escape key closes modals',
    'Arrow keys work in menus',
    'Enter key activates buttons/links',
    'Tab key navigates form fields'
  ], y);

  y += 5;
  y = addSection(doc, 'Screen Reader Compatibility', [
    'Semantic HTML (headings, lists, etc.)',
    'ARIA labels where needed',
    'Form labels associated with inputs',
    'Alt text for all images',
    'Descriptive link text (no "click here")',
    'Table headers properly marked',
    'Error messages announced',
    'Dynamic content changes announced',
    'Proper heading hierarchy',
    'Language attributes set'
  ], y);

  doc.addPage();
  addHeader(doc, 'Website Accessibility Checklist');
  addFooter(doc, 3);

  y = 50;
  y = addSection(doc, 'Forms & Interactions', [
    'Clear form labels',
    'Error messages specific and helpful',
    'Required fields clearly marked',
    'Input format instructions provided',
    'Submit button clearly labeled',
    'Form validation accessible',
    'Success messages announced',
    'Multi-step forms show progress',
    'Help text associated with fields',
    'Timeout warnings provided'
  ], y);

  y += 5;
  y = addSection(doc, 'Mobile Accessibility', [
    'Touch targets at least 44x44px',
    'Avoid hover-only interactions',
    'Orientation-agnostic design',
    'Pinch-to-zoom not disabled',
    'Mobile-friendly navigation',
    'Large enough text on small screens',
    'Sufficient spacing between elements',
    'Easy to dismiss pop-ups',
    'Form fields easy to tap and fill',
    'Mobile keyboard considerations'
  ], y);

  doc.addPage();
  addHeader(doc, 'Website Accessibility Checklist');
  addFooter(doc, 4);

  y = 50;
  doc.setFillColor(...SECONDARY_COLOR);
  doc.rect(15, y, 180, 30, 'F');

  doc.setTextColor(...PRIMARY_COLOR);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Need Accessibility Audit?', 20, y + 10);

  doc.setTextColor(...TEXT_COLOR);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Web-Smart.Co ensures your website is accessible to all:', 20, y + 18);
  doc.text('• WCAG 2.1 AA compliance audits', 20, y + 24);
  doc.text('• Accessibility improvements and remediation', 20, y + 30);

  doc.save(path.join(__dirname, 'public/resources/accessibility-checklist.pdf'));
  console.log('✓ Created: accessibility-checklist.pdf');
}

// Generate all PDFs
console.log('Generating professional PDF resources for Web-Smart.Co...\n');

generateWebsiteLaunchChecklist();
generateSEOAuditTemplate();
generateDesignStyleGuide();
generateContentPlanner();
generateAnalyticsSetupGuide();
generateWordPressSecurityChecklist();
generateLocalSEOGuide();
generateAccessibilityChecklist();

console.log('\n✅ All 8 professional PDFs generated successfully!');
console.log('📁 Location: public/resources/');
