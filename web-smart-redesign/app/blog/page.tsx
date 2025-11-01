'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Search, Tag } from 'lucide-react';
import Header from '@/components/layout/Header';
import Link from 'next/link';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      title: 'Web Design Essentials for Small Businesses in Aldenham, Hertfordshire',
      excerpt: 'Welcome to the definitive guide on kickstarting your small business\'s online presence with the right web design strategies in Aldenham, Hertfordshire. In today\'s digital age...',
      image: '/images/services/Web-Design-1662.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Web Design',
      slug: 'web-design-essentials-aldenham',
    },
    {
      title: 'Maximising Your Website\'s Potential with Elite WordPress Support',
      excerpt: 'For businesses aiming to thrive online, ensuring your WordPress website receives top-tier support and maintenance is non-negotiable. To not just survive but excel in the ...',
      image: '/images/services/live/service-1.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'WordPress',
      slug: 'maximising-wordpress-support',
    },
    {
      title: 'Effective Email Marketing Content Techniques to Boost Engagement',
      excerpt: 'Discover how to elevate your email marketing campaigns with content that captivates your audience and drives engagement. In the realm of digital marketing, email remains ...',
      image: '/images/services/live/service-4.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Digital Marketing',
      slug: 'email-marketing-content-techniques',
    },
    {
      title: 'Social Media Marketing Strategies for Hertfordshire Businesses',
      excerpt: 'Unlock the power of social media marketing to connect with your local audience and grow your Hertfordshire business. From Facebook to Instagram, learn proven strategies that drive real results...',
      image: '/images/services/live/service-3.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Digital Marketing',
      slug: 'social-media-marketing-hertfordshire',
    },
    {
      title: 'Maximising Web Design for Enhanced SEO Performance',
      excerpt: 'In today\'s competitive digital landscape, understanding the synergy between web design and SEO is crucial for any business aiming to enhance its online visibility. Incorporating ...',
      image: '/images/services/banner-foundation-seo-pack1499-scaled.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'SEO',
      slug: 'web-design-seo-performance',
    },
    {
      title: 'Effective SEO Tactics for WordPress E-Commerce Sites',
      excerpt: 'Mastering the art of Search Engine Optimisation (SEO) is essential for any WordPress e-commerce site looking to stand out in the highly competitive online marketplace ...',
      image: '/images/services/live/service-6.png',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'E-commerce',
      slug: 'seo-tactics-wordpress-ecommerce',
    },
    {
      title: 'Professional Content Writing Services for Hertfordshire Businesses',
      excerpt: 'Quality content is the foundation of successful digital marketing. Learn how professional content writing can elevate your brand, engage your audience, and drive conversions...',
      image: '/images/services/live/service-7.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Content Writing',
      slug: 'professional-content-writing-services',
    },
    {
      title: 'Mastering Google Ads: A Complete Guide for Local Businesses',
      excerpt: 'Discover how to maximise your ROI with Google Ads campaigns tailored for Hertfordshire businesses. From keyword research to campaign optimization, learn the strategies that deliver results...',
      image: '/images/services/live/service-5.png',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Google Ads',
      slug: 'mastering-google-ads-local-businesses',
    },
    {
      title: 'Building Successful E-commerce Websites in 2024',
      excerpt: 'The e-commerce landscape is evolving rapidly. Learn the latest strategies for building high-converting online stores that deliver exceptional user experiences and drive sales...',
      image: '/images/services/live/service-9.png',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'E-commerce',
      slug: 'building-successful-ecommerce-websites',
    },
    {
      title: 'Local SEO Strategies to Dominate Hertfordshire Search Results',
      excerpt: 'Want to appear at the top of local search results? Discover proven local SEO tactics that help Hertfordshire businesses attract more customers from their local area...',
      image: '/images/services/live/service-13.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Local SEO',
      slug: 'local-seo-strategies-hertfordshire',
    },
    {
      title: 'AI-Powered Content Creation: The Future of Digital Marketing',
      excerpt: 'Explore how artificial intelligence is transforming content creation and marketing strategies. Learn to leverage AI tools while maintaining authenticity and human touch...',
      image: '/images/services/live/service-11.png',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'AI Services',
      slug: 'ai-powered-content-creation-future',
    },
    {
      title: 'Building a Strong Brand Identity for Your Hertfordshire Business',
      excerpt: 'Your brand is more than just a logo. Discover how to create a compelling brand identity that resonates with your target audience and sets you apart from competitors...',
      image: '/images/services/live/service-8.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Branding',
      slug: 'building-strong-brand-identity',
    },
    {
      title: 'WordPress Performance Optimization: Speed Up Your Website',
      excerpt: 'A slow website kills conversions. Learn expert techniques to optimize your WordPress site for blazing-fast load times and better search engine rankings...',
      image: '/images/services/wordpress-workspace.png',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'WordPress',
      slug: 'wordpress-performance-optimization',
    },
    {
      title: 'Mobile-First Web Design: Why It Matters in 2024',
      excerpt: 'With mobile traffic dominating the web, mobile-first design is no longer optional. Learn how to create websites that deliver exceptional experiences on all devices...',
      image: '/images/services/Web-Design-1225.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Web Design',
      slug: 'mobile-first-web-design-2024',
    },
    {
      title: 'Creating Compelling Calls-to-Action That Convert',
      excerpt: 'Your call-to-action can make or break your conversion rates. Discover the psychology and best practices behind CTAs that drive action and boost your bottom line...',
      image: '/images/services/live/service-2.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Digital Marketing',
      slug: 'creating-compelling-calls-to-action',
    },
  ];

  const categories = ['All', 'Web Design', 'WordPress', 'SEO', 'Local SEO', 'Digital Marketing', 'Google Ads', 'E-commerce', 'Content Writing', 'AI Services', 'Branding'];

  const recentPosts = [
    {
      title: 'AI-Powered Content Creation: The Future of Digital Marketing',
      date: 'October 2024',
      slug: 'ai-powered-content-creation-future',
      image: '/images/services/live/service-11.png',
    },
    {
      title: 'Mobile-First Web Design: Why It Matters in 2024',
      date: 'October 2024',
      slug: 'mobile-first-web-design-2024',
      image: '/images/services/Web-Design-1225.jpg',
    },
    {
      title: 'Building a Strong Brand Identity for Your Business',
      date: 'October 2024',
      slug: 'building-strong-brand-identity',
      image: '/images/services/live/service-8.jpg',
    },
    {
      title: 'Local SEO Strategies to Dominate Hertfordshire',
      date: 'October 2024',
      slug: 'local-seo-strategies-hertfordshire',
      image: '/images/services/banner-foundation-seo-pack1499-scaled.jpg',
    },
    {
      title: 'WordPress Performance Optimization Guide',
      date: 'October 2024',
      slug: 'wordpress-performance-optimization',
      image: '/images/services/wordpress-workspace.png',
    },
    {
      title: 'Mastering Google Ads for Local Businesses',
      date: 'October 2024',
      slug: 'mastering-google-ads-local-businesses',
      image: '/images/services/live/service-5.png',
    },
  ];

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      {/* Header - Sticky throughout site */}
      <Header />

      {/* Hero Section with Background Image and Black Overlay */}
      <section className="relative w-full min-h-[500px] flex items-center -mt-[88px]">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/Web-Design-1225.jpg"
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        <div className="relative z-10 w-full py-24 md:py-32 pt-32 md:pt-40">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight">
                  Blogs
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-white/90">
                  Insights, tips, and strategies for digital marketing success
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="w-full py-8 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  category === activeCategory
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-gray-700 hover:bg-primary hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid with Sidebar */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-secondary to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <Link key={index} href={`/blog/${post.slug}`}>
                    <motion.article
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full"
                    >
                      <div className="aspect-video overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-xs">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-500">{post.date}</span>
                        </div>
                        <h2 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <User size={16} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                            Read More
                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                ))}
              </div>
            </div>

            {/* Blog Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
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
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
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

                {/* Categories Widget */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-md"
                >
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.filter(cat => cat !== 'All').map((category, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveCategory(category)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-left group"
                      >
                        <div className="flex items-center gap-2">
                          <Tag size={14} className="text-primary" />
                          <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                            {category}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400">
                          {blogPosts.filter(post => post.category === category).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Newsletter Widget */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
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
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-2xl p-6 shadow-md"
                >
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['WordPress', 'SEO', 'Web Design', 'E-commerce', 'Marketing', 'Analytics', 'Content'].map((tag, index) => (
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
                Ready to Grow Your Business?
              </h2>
              <p className="text-lg text-white/95 mb-8">
                Let&apos;s work together to achieve your digital marketing goals.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-300 group"
              >
                Get In Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
