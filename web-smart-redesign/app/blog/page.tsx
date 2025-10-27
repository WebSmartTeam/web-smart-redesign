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
      title: 'Maximising Your Website\'s Potential with Elite WordPress Support',
      excerpt: 'For businesses aiming to thrive online, ensuring your WordPress website receives top-tier support and maintenance is non-negotiable. To not just survive but excel in the ...',
      image: '/images/services/Web-Design-1225.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Web Design',
      slug: 'maximising-wordpress-support',
    },
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
      title: 'Effective Email Marketing Content Techniques to Boost Engagement',
      excerpt: 'Discover how to elevate your email marketing campaigns with content that captivates your audience and drives engagement. In the realm of digital marketing, email remains ...',
      image: '/images/services/banner-foundation-seo-pack1499-scaled.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Digital Marketing',
      slug: 'email-marketing-content-techniques',
    },
    {
      title: 'Data-Driven Decision Making with WordPress Analytics',
      excerpt: 'In today\'s competitive online landscape, leveraging data for making informed decisions is not just preferable but indispensable for businesses. Especially when utilising platforms like WordPress, analytics can play a ...',
      image: '/images/services/ai-seo-strategy.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'SEO',
      slug: 'wordpress-analytics-data-driven',
    },
    {
      title: 'Maximising Web Presence: Content Repurposing Strategies',
      excerpt: 'In the realm of web design and development, the efficiency of content utilisation can often determine a site\'s visibility and engagement levels. As a followed...',
      image: '/images/services/neve-patterns-21.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Digital Marketing',
      slug: 'content-repurposing-strategies',
    },
    {
      title: 'Optimising Your WordPress Site for Mobile-First Design',
      excerpt: 'With the increasing prevalence of smartphones, optimising your WordPress site for mobile-first design is no longer optional. It\'s essential for enhancing user experience, improving search ...',
      image: '/images/portfolio/webdesignagency-hertfordshire-location3.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Web Design',
      slug: 'wordpress-mobile-first-design',
    },
    {
      title: 'Maximising WooCommerce for Advanced E-commerce Success',
      excerpt: 'In the realm of e-commerce, creating a robust online store that caters to the evolving needs of customers can be a challenging endeavour. Utilising advanced ...',
      image: '/images/portfolio/branding-website-design.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Video Optimisation',
      slug: 'woocommerce-ecommerce-success',
    },
    {
      title: 'Maximising Web Design for Enhanced SEO Performance',
      excerpt: 'In today\'s competitive digital landscape, understanding the synergy between web design and SEO is crucial for any business aiming to enhance its online visibility. Incorporating ...',
      image: '/images/portfolio/webdesign-cat-1024x682.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Web Design',
      slug: 'web-design-seo-performance',
    },
    {
      title: 'Maximising WordPress Analytics for Data-Driven Decisions',
      excerpt: 'Understanding your website\'s data is crucial for making informed decisions that drive growth. WordPress, being one of the most popular content management systems, offers comprehensive ...',
      image: '/images/portfolio/buzz-website.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Web Design',
      slug: 'wordpress-analytics-decisions',
    },
    {
      title: 'Effective SEO Tactics for WordPress E-Commerce Sites',
      excerpt: 'Mastering the art of Search Engine Optimisation (SEO) is essential for any WordPress e-commerce site looking to stand out in the highly competitive online marketplace ...',
      image: '/images/blog/pexels-rdne-7414280-1-scaled.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'SEO',
      slug: 'seo-tactics-wordpress-ecommerce',
    },
  ];

  const categories = ['All', 'Digital Marketing', 'Fixed!', 'SEO', 'Uncategorised', 'Video Optimisation', 'Web Design'];

  const recentPosts = [
    {
      title: 'Maximising Your Website\'s Potential with Elite WordPress Support',
      date: 'October 2024',
      slug: 'maximising-wordpress-support',
      image: '/images/services/Web-Design-1225.jpg',
    },
    {
      title: 'Web Design Essentials for Small Businesses in Aldenham',
      date: 'October 2024',
      slug: 'web-design-essentials-aldenham',
      image: '/images/services/Web-Design-1662.jpg',
    },
    {
      title: 'Effective Email Marketing Content Techniques',
      date: 'October 2024',
      slug: 'email-marketing-content-techniques',
      image: '/images/services/banner-foundation-seo-pack1499-scaled.jpg',
    },
    {
      title: 'Data-Driven Decision Making with WordPress Analytics',
      date: 'October 2024',
      slug: 'wordpress-analytics-data-driven',
      image: '/images/services/ai-seo-strategy.jpg',
    },
    {
      title: 'Maximising Web Presence: Content Repurposing',
      date: 'October 2024',
      slug: 'content-repurposing-strategies',
      image: '/images/services/neve-patterns-21.jpg',
    },
  ];

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      {/* Hero Section with Background Image, Black Overlay and Header */}
      <section className="relative w-full min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/Web-Design-1225.jpg"
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        {/* Header - Inside Hero Section */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header />
        </div>

        <div className="relative z-10 w-full py-32 md:py-40">
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
      <section className="w-full py-8 bg-white border-b border-gray-200 sticky top-[72px] z-40">
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

              {/* Pagination */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex justify-center items-center gap-2 mt-12"
              >
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-semibold">
                  1
                </button>
                <button className="px-4 py-2 bg-white hover:bg-primary hover:text-white text-gray-700 rounded-lg font-semibold transition-all">
                  2
                </button>
                <button className="px-4 py-2 bg-white hover:bg-primary hover:text-white text-gray-700 rounded-lg font-semibold transition-all">
                  3
                </button>
                <span className="px-2">...</span>
                <button className="px-4 py-2 bg-white hover:bg-primary hover:text-white text-gray-700 rounded-lg font-semibold transition-all">
                  501
                </button>
                <button className="px-4 py-2 bg-white hover:bg-primary hover:text-white text-gray-700 rounded-lg font-semibold transition-all">
                  Next →
                </button>
              </motion.div>
            </div>

            {/* Blog Sidebar */}
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
