'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Button from '@/components/ui/Button';
import Header from '@/components/layout/Header';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'The Ultimate Guide to SEO in 2024',
      excerpt: 'Discover the latest SEO strategies and techniques that will help your business rank higher in search results.',
      image: '/images/blog/pexels-rdne-7414280-1-scaled.jpg',
      author: 'Pete Gypps',
      date: 'October 15, 2024',
      category: 'SEO',
      slug: 'ultimate-guide-seo-2024',
    },
    {
      title: 'Why Your Business Needs a Mobile-First Website',
      excerpt: 'Learn why mobile-first design is crucial for modern businesses and how it impacts your bottom line.',
      image: '/images/services/Web-Design-1225.jpg',
      author: 'Pete Gypps',
      date: 'October 10, 2024',
      category: 'Web Design',
      slug: 'mobile-first-website',
    },
    {
      title: 'How AI is Transforming Content Writing',
      excerpt: 'Explore how artificial intelligence is revolutionising content creation and what it means for businesses.',
      image: '/images/services/ai-seo-strategy.jpg',
      author: 'Pete Gypps',
      date: 'October 5, 2024',
      category: 'Content Writing',
      slug: 'ai-transforming-content-writing',
    },
    {
      title: 'Google Ads Best Practices for Local Businesses',
      excerpt: 'Master Google Ads with these proven strategies specifically designed for Hertfordshire businesses.',
      image: '/images/services/neve-patterns-21.jpg',
      author: 'Pete Gypps',
      date: 'September 28, 2024',
      category: 'Google Ads',
      slug: 'google-ads-best-practices',
    },
    {
      title: 'The Importance of Website Speed and Performance',
      excerpt: 'Discover why website speed matters and how to optimise your site for better performance and user experience.',
      image: '/images/services/Web-Design-1662.jpg',
      author: 'Pete Gypps',
      date: 'September 20, 2024',
      category: 'Web Design',
      slug: 'website-speed-performance',
    },
    {
      title: 'Local SEO Strategies for Hertfordshire Businesses',
      excerpt: 'Learn how to dominate local search results and attract more customers from your area.',
      image: '/images/portfolio/webdesignagency-hertfordshire-location3.jpg',
      author: 'Pete Gypps',
      date: 'September 15, 2024',
      category: 'SEO',
      slug: 'local-seo-hertfordshire',
    },
  ];

  const categories = ['All', 'SEO', 'Web Design', 'Content Writing', 'Google Ads'];

  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center bg-gradient-to-br from-primary to-primary-600 text-white">
        <div className="relative z-10 w-full py-24 md:py-32">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight">
                  Our Blog
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
      <section className="w-full py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  category === 'All'
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

      {/* Blog Grid */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-secondary to-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
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
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="bg-primary hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Load More Posts
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary to-primary-600 rounded-3xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Get the latest digital marketing tips and insights delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-secondary hover:bg-secondary/90 text-primary font-semibold py-3 px-8 rounded-lg transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-[10px] pb-[10px]">
        <div className="relative w-full py-20 md:py-28 text-white overflow-hidden rounded-3xl">
          <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/services/Web-Design-1225.jpg"
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
              <Button href="/contact" variant="secondary" size="lg" className="group">
                Get In Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
