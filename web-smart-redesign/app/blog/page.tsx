'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Home, Mail, Phone, Linkedin, Facebook, Instagram } from 'lucide-react';
import Header from '@/components/layout/Header';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const blogPosts = [
    {
      title: 'Maximising Your Website\'s Potential with Elite WordPress Support',
      excerpt: 'For businesses aiming to thrive online, ensuring your WordPress website receives top-tier support and maintenance is non-negotiable. To not just survive but excel in the ...',
      image: '/images/team/petegypps-4.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Web Design',
      slug: 'maximising-wordpress-support',
    },
    {
      title: 'Web Design Essentials for Small Businesses in Aldenham, Hertfordshire',
      excerpt: 'Welcome to the definitive guide on kickstarting your small business\'s online presence with the right web design strategies in Aldenham, Hertfordshire. In today\'s digital age...',
      image: '/images/team/petegypps-4.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Web Design',
      slug: 'web-design-essentials-aldenham',
    },
    {
      title: 'Effective Email Marketing Content Techniques to Boost Engagement',
      excerpt: 'Discover how to elevate your email marketing campaigns with content that captivates your audience and drives engagement. In the realm of digital marketing, email remains ...',
      image: '/images/team/petegypps-4.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'SEO',
      slug: 'email-marketing-content-techniques',
    },
    {
      title: 'Data-Driven Decision Making with WordPress Analytics',
      excerpt: 'In today\'s competitive online landscape, leveraging data for making informed decisions is not just preferable but indispensable for businesses. Especially when utilising platforms like WordPress, analytics can play a ...',
      image: '/images/team/petegypps-4.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Web Design',
      slug: 'wordpress-analytics-data-driven',
    },
    {
      title: 'Maximising Web Presence: Content Repurposing Strategies',
      excerpt: 'In the realm of web design and development, the efficiency of content utilisation can often determine a site\'s visibility and engagement levels. As a followed...',
      image: '/images/team/petegypps-4.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Web Design',
      slug: 'content-repurposing-strategies',
    },
    {
      title: 'Optimising Your WordPress Site for Mobile-First Design',
      excerpt: 'With the increasing prevalence of smartphones, optimising your WordPress site for mobile-first design is no longer optional. It\'s essential for enhancing user experience, improving search ...',
      image: '/images/team/petegypps-4.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Web Design',
      slug: 'wordpress-mobile-first-design',
    },
    {
      title: 'Maximising WooCommerce for Advanced E-commerce Success',
      excerpt: 'In the realm of e-commerce, creating a robust online store that caters to the evolving needs of customers can be a challenging endeavour. Utilising advanced ...',
      image: '/images/team/petegypps-4.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Web Design',
      slug: 'woocommerce-ecommerce-success',
    },
    {
      title: 'Maximising Web Design for Enhanced SEO Performance',
      excerpt: 'In today\'s competitive digital landscape, understanding the synergy between web design and SEO is crucial for any business aiming to enhance its online visibility. Incorporating ...',
      image: '/images/team/petegypps-4.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Web Design',
      slug: 'web-design-seo-performance',
    },
    {
      title: 'Maximising WordPress Analytics for Data-Driven Decisions',
      excerpt: 'Understanding your website\'s data is crucial for making informed decisions that drive growth. WordPress, being one of the most popular content management systems, offers comprehensive ...',
      image: '/images/team/petegypps-4.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Web Design',
      slug: 'wordpress-analytics-decisions',
    },
    {
      title: 'Effective SEO Tactics for WordPress E-Commerce Sites',
      excerpt: 'Mastering the art of Search Engine Optimisation (SEO) is essential for any WordPress e-commerce site looking to stand out in the highly competitive online marketplace ...',
      image: '/images/team/petegypps-4.jpg',
      author: 'Pete Gypps',
      date: 'October 2024',
      category: 'Web Design',
      slug: 'seo-tactics-wordpress-ecommerce',
    },
  ];

  const categories = ['All', 'Digital Marketing', 'Fixed!', 'SEO', 'Uncategorised', 'Video Optimisation', 'Web Design'];

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative w-full min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/Web-Design-1225.jpg"
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-600/90"></div>
        </div>

        <div className="relative z-10 w-full py-24 md:py-32">
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
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-40 space-y-6">
                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-2xl p-6 shadow-md"
                >
                  <div className="flex flex-col gap-4">
                    <a
                      href="/"
                      className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-600 text-white p-3 rounded-lg transition-all duration-300"
                    >
                      <Home size={20} />
                    </a>
                    <a
                      href="tel:01462544738"
                      className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-600 text-white p-3 rounded-lg transition-all duration-300"
                    >
                      <Phone size={20} />
                    </a>
                    <a
                      href="mailto:enquiries@web-smart.co"
                      className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-600 text-white p-3 rounded-lg transition-all duration-300"
                    >
                      <Mail size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-600 text-white p-3 rounded-lg transition-all duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-600 text-white p-3 rounded-lg transition-all duration-300"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-600 text-white p-3 rounded-lg transition-all duration-300"
                    >
                      <Instagram size={20} />
                    </a>
                  </div>
                </motion.div>

                {/* Featured Widget */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-primary to-primary-600 rounded-2xl p-6 text-white shadow-md"
                >
                  <h3 className="text-xl font-heading font-bold mb-3">
                    Need Help?
                  </h3>
                  <p className="text-sm text-white/90 mb-4">
                    Get in touch with our team for expert advice on digital marketing and web design.
                  </p>
                  <a
                    href="/contact"
                    className="inline-block bg-secondary hover:bg-secondary/90 text-primary font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                  >
                    Contact Us
                  </a>
                </motion.div>
              </div>
            </aside>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPosts.map((post, index) => (
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
                    <div className="p-5">
                      <div className="mb-3">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-xs">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-lg font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                          Read
                          <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </motion.article>
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
