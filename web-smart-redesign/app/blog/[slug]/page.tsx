'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Search } from 'lucide-react';
import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Link from 'next/link';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Blog post data - in a real app, this would come from a CMS or API
  const blogPosts = {
    'maximising-wordpress-support': {
      title: 'Maximising Your Website\'s Potential with Elite WordPress Support',
      image: '/images/services/Web-Design-1225.jpg',
      author: 'Pete Gypps',
      date: 'October 15, 2024',
      category: 'Web Design',
      content: `
        <p>For businesses aiming to thrive online, ensuring your <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">WordPress</a> website receives top-tier support and maintenance is non-negotiable. To not just survive but excel in the digital landscape, partnering with elite WordPress support services can be your game-changer.</p>

        <h2>Why WordPress Support Matters</h2>
        <p>WordPress powers over 40% of all websites on the internet, making it the most popular <a href="https://en.wikipedia.org/wiki/Content_management_system" target="_blank" rel="noopener noreferrer">content management system</a> globally. However, with great popularity comes great responsibility. Regular maintenance, security updates, and performance optimisation are crucial for keeping your site running smoothly. Learn more about our <a href="/services">professional web design services</a> that include comprehensive WordPress support.</p>

        <h2>Key Benefits of Professional WordPress Support</h2>
        <ul>
          <li><strong>Security Updates:</strong> Regular security patches and updates protect your site from vulnerabilities and cyber threats. Read about <a href="https://wordpress.org/support/article/hardening-wordpress/" target="_blank" rel="noopener noreferrer">WordPress security best practices</a>.</li>
          <li><strong>Performance Optimisation:</strong> Speed optimisation ensures your website loads quickly, improving user experience and <a href="/services">SEO rankings</a>.</li>
          <li><strong>Regular Backups:</strong> Automated backups ensure your data is safe and can be restored quickly in case of emergencies.</li>
          <li><strong>Plugin Management:</strong> Professional support includes managing and updating plugins to prevent conflicts and security issues.</li>
          <li><strong>24/7 Monitoring:</strong> Continuous monitoring detects and resolves issues before they impact your visitors.</li>
        </ul>

        <h2>What to Look for in WordPress Support Services</h2>
        <p>When choosing a WordPress support provider, consider the following factors:</p>
        <ul>
          <li>Response time and availability</li>
          <li>Technical expertise and experience</li>
          <li>Range of services offered</li>
          <li>Pricing and value for money</li>
          <li>Client reviews and testimonials</li>
        </ul>

        <h2>Our WordPress Support Services</h2>
        <p>At <a href="/">Web-Smart.Co</a>, we offer comprehensive WordPress support and maintenance packages tailored to your business needs in Hertfordshire. Our team of experienced developers ensures your website remains secure, fast, and fully functional at all times.</p>

        <p>Whether you need regular maintenance, emergency support, or custom development, we're here to help your business succeed online. <a href="/contact">Contact us today</a> to learn more about our <a href="/services">WordPress support services</a> and how we can help your business grow.</p>
      `,
    },
    'web-design-essentials-aldenham': {
      title: 'Web Design Essentials for Small Businesses in Aldenham, Hertfordshire',
      image: '/images/services/Web-Design-1662.jpg',
      author: 'Pete Gypps',
      date: 'October 10, 2024',
      category: 'Web Design',
      content: `
        <p>Welcome to the definitive guide on kickstarting your small business\'s online presence with the right <a href="/services">web design strategies</a> in Aldenham, Hertfordshire. In today\'s digital age, having a professional website is essential for business success.</p>

        <h2>Understanding Your Audience</h2>
        <p>Before diving into design, it\'s crucial to understand your target audience. Who are your customers? What are their needs and preferences? Understanding your audience helps create a website that resonates with them and drives conversions. Learn more about <a href="https://www.nngroup.com/articles/usability-101-introduction-to-usability/" target="_blank" rel="noopener noreferrer">user experience principles</a>.</p>

        <h2>Essential Web Design Elements</h2>
        <ul>
          <li><strong>Responsive Design:</strong> Your website must work flawlessly on all devices - desktops, tablets, and smartphones. Read about <a href="https://developers.google.com/search/mobile-sites/mobile-seo" target="_blank" rel="noopener noreferrer">mobile-first design</a>.</li>
          <li><strong>Clear Navigation:</strong> Make it easy for visitors to find what they\'re looking for with intuitive navigation.</li>
          <li><strong>Fast Loading Speed:</strong> Optimise images and code to ensure your site loads quickly. Check our <a href="/services">performance optimization services</a>.</li>
          <li><strong>Professional Branding:</strong> Consistent colours, fonts, and imagery that reflect your brand identity.</li>
          <li><strong>Strong Call-to-Actions:</strong> Guide visitors towards desired actions with clear, compelling CTAs.</li>
        </ul>

        <h2>Local SEO for Aldenham Businesses</h2>
        <p>As a local business in Aldenham, optimising for <a href="https://developers.google.com/search/docs/appearance/local-search-overview" target="_blank" rel="noopener noreferrer">local search</a> is crucial. This includes:</p>
        <ul>
          <li>Creating a <a href="https://www.google.com/business/" target="_blank" rel="noopener noreferrer">Google Business Profile</a></li>
          <li>Including location-specific keywords in your content</li>
          <li>Getting listed in local directories</li>
          <li>Encouraging customer reviews</li>
          <li>Creating location-specific content about Hertfordshire</li>
        </ul>

        <h2>Content Strategy</h2>
        <p>Great design is nothing without great content. Your website should include:</p>
        <ul>
          <li>Clear, concise copy that speaks to your audience</li>
          <li>High-quality images and videos</li>
          <li>Regular <a href="/blog">blog posts</a> to improve SEO and engage visitors</li>
          <li>Customer testimonials and <a href="/portfolio">case studies</a></li>
          <li>Detailed service or product descriptions</li>
        </ul>

        <h2>Get Started Today</h2>
        <p>Ready to create a stunning website for your Aldenham business? <a href="/contact">Contact Web-Smart.Co</a> for a free consultation. We specialise in creating beautiful, functional websites that help <a href="/about">local Hertfordshire businesses</a> thrive online.</p>
      `,
    },
    'email-marketing-content-techniques': {
      title: 'Effective Email Marketing Content Techniques to Boost Engagement',
      image: '/images/services/banner-foundation-seo-pack1499-scaled.jpg',
      author: 'Pete Gypps',
      date: 'October 5, 2024',
      category: 'SEO',
      content: `
        <p>Discover how to elevate your email marketing campaigns with content that captivates your audience and drives engagement. In the realm of <a href="/services">digital marketing</a>, email remains one of the most effective channels for reaching and converting customers.</p>

        <h2>The Power of Email Marketing</h2>
        <p>Despite the rise of social media and other digital channels, <a href="https://www.campaignmonitor.com/resources/guides/email-marketing-roi/" target="_blank" rel="noopener noreferrer">email marketing</a> continues to deliver exceptional ROI. For every £1 spent on email marketing, businesses can expect an average return of £42. The key to success lies in creating engaging, relevant content that resonates with your audience.</p>

        <h2>Crafting Compelling Subject Lines</h2>
        <p>Your subject line is the first thing recipients see, and it determines whether they\'ll open your email. Learn more about <a href="https://mailchimp.com/resources/email-subject-lines/" target="_blank" rel="noopener noreferrer">effective subject lines</a>:</p>
        <ul>
          <li>Short and concise (under 50 characters)</li>
          <li>Personalised with the recipient\'s name</li>
          <li>Create curiosity or urgency</li>
          <li>Clearly communicate value</li>
          <li>Avoid spam trigger words</li>
        </ul>

        <h2>Personalisation Strategies</h2>
        <p>Personalisation goes beyond using the recipient\'s name. Segment your audience based on:</p>
        <ul>
          <li>Demographics (age, location, gender)</li>
          <li>Behaviour (purchase history, website activity)</li>
          <li>Preferences (product interests, communication frequency)</li>
          <li>Engagement level (active, dormant, new subscribers)</li>
        </ul>

        <h2>Content Best Practices</h2>
        <ul>
          <li><strong>Keep it scannable:</strong> Use short paragraphs, bullet points, and subheadings.</li>
          <li><strong>Include visuals:</strong> Images and videos increase engagement and click-through rates.</li>
          <li><strong>Strong CTAs:</strong> Make your call-to-action clear, prominent, and compelling.</li>
          <li><strong>Mobile optimisation:</strong> Over 50% of emails are opened on <a href="https://www.litmus.com/blog/mobile-email-design-best-practices" target="_blank" rel="noopener noreferrer">mobile devices</a>.</li>
          <li><strong>Test and refine:</strong> A/B test different elements to improve performance.</li>
        </ul>

        <h2>Measuring Success</h2>
        <p>Track these key <a href="https://blog.hubspot.com/marketing/metrics-email-marketers-should-be-tracking" target="_blank" rel="noopener noreferrer">email marketing metrics</a> to evaluate your performance:</p>
        <ul>
          <li>Open rate</li>
          <li>Click-through rate</li>
          <li>Conversion rate</li>
          <li>Bounce rate</li>
          <li>Unsubscribe rate</li>
        </ul>

        <h2>Get Expert Help</h2>
        <p>Need help creating effective email marketing campaigns? <a href="/">Web-Smart.Co</a> offers professional <a href="/services">email marketing services</a> tailored to your business goals in Hertfordshire. <a href="/contact">Contact us today</a> to boost your email engagement and drive more conversions.</p>
      `,
    },
  };

  const currentPost = blogPosts[slug as keyof typeof blogPosts] || blogPosts['maximising-wordpress-support'];

  const recentPosts = [
    {
      title: 'Web Design Essentials for Small Businesses in Aldenham',
      date: 'October 2024',
      slug: 'web-design-essentials-aldenham',
      image: '/images/services/Web-Design-1662.jpg',
    },
    {
      title: 'Maximising Your Website\'s Potential with Elite WordPress Support',
      date: 'October 2024',
      slug: 'maximising-wordpress-support',
      image: '/images/services/Web-Design-1225.jpg',
    },
    {
      title: 'Effective Email Marketing Content Techniques',
      date: 'October 2024',
      slug: 'email-marketing-content-techniques',
      image: '/images/services/banner-foundation-seo-pack1499-scaled.jpg',
    },
    {
      title: 'Maximising Web Design for Enhanced SEO Performance',
      date: 'October 2024',
      slug: 'web-design-seo-performance',
      image: '/images/portfolio/webdesign-cat-1024x682.jpg',
    },
    {
      title: 'Effective SEO Tactics for WordPress E-Commerce Sites',
      date: 'October 2024',
      slug: 'seo-tactics-wordpress-ecommerce',
      image: '/images/blog/pexels-rdne-7414280-1-scaled.jpg',
    },
  ];

  return (
    <>
      {/* Header - Sticky throughout site */}
      <Header />

      {/* Hero Section with Featured Image */}
      <section className="relative w-full min-h-[500px] flex items-center -mt-[88px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentPost.image}
            alt={currentPost.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full py-24 md:py-32 pt-32 md:pt-40">
          <div className="container-custom">
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="bg-primary px-4 py-2 rounded-full text-sm font-semibold">
                    {currentPost.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar size={16} />
                    <span>{currentPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <User size={16} />
                    <span>{currentPost.author}</span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-4 leading-tight">
                  {currentPost.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content with Sidebar */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-secondary to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-md"
              >
                <div
                  className="prose prose-lg max-w-none
                    prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900
                    prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:leading-tight
                    prose-p:text-gray-700 prose-p:text-base prose-p:md:text-lg prose-p:leading-relaxed prose-p:mb-6
                    prose-ul:my-6 prose-ul:space-y-2
                    prose-li:text-gray-700 prose-li:text-base prose-li:md:text-lg prose-li:leading-relaxed
                    prose-strong:text-gray-900 prose-strong:font-semibold
                    prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: currentPost.content }}
                />

                {/* Share & Back to Blog */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-600 font-semibold transition-colors"
                    >
                      ← Back to Blog
                    </Link>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 font-medium">Share:</span>
                      <button className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white flex items-center justify-center transition-all">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      </button>
                      <button className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white flex items-center justify-center transition-all">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                      </button>
                      <button className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-white flex items-center justify-center transition-all">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-40 space-y-6">
                {/* Search Widget */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-2xl p-6 shadow-md"
                >
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">
                    Search
                  </h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search posts..."
                      className="w-full px-4 py-3 pr-12 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary">
                      <Search size={20} />
                    </button>
                  </div>
                </motion.div>

                {/* Recent Posts Widget */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-md"
                >
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((post, index) => (
                      <Link key={index} href={`/blog/${post.slug}`} className="group flex gap-3 cursor-pointer">
                        <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-1">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Newsletter Widget */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-primary to-primary-600 rounded-2xl p-6 text-white shadow-md"
                >
                  <h3 className="text-xl font-heading font-bold mb-3">
                    Newsletter
                  </h3>
                  <p className="text-sm text-white/90 mb-4">
                    Subscribe to get the latest posts delivered to your inbox.
                  </p>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white mb-3"
                  />
                  <button className="w-full bg-secondary hover:bg-secondary/90 text-primary font-semibold py-3 rounded-lg transition-all duration-300">
                    Subscribe
                  </button>
                </motion.div>

                {/* Tags Widget */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl p-6 shadow-md"
                >
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['WordPress', 'SEO', 'Web Design', 'E-commerce', 'Marketing', 'Analytics'].map((tag, index) => (
                      <button
                        key={index}
                        className="px-3 py-1 bg-secondary hover:bg-primary hover:text-white text-gray-700 rounded-full text-xs font-medium transition-all duration-300"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-[10px] pb-[10px]">
        <div className="relative w-full py-20 md:py-28 text-white overflow-hidden rounded-3xl">
          <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/services/Web-Design-1662.jpg"
              alt="Get Started"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75"></div>
          </div>

          <div className="relative z-10 container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Need Help With Your Website?
              </h2>
              <p className="text-lg text-white/95 mb-8">
                Get in touch with our team for expert advice on web design and digital marketing.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-300 group"
              >
                Get In Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
