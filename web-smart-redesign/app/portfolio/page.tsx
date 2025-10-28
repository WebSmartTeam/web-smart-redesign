'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Header from '@/components/layout/Header';

export default function PortfolioPage() {
  const projects = [
    {
      title: 'Buzz Website',
      image: '/images/portfolio/buzz-website.jpg',
      category: 'Web Design',
      description: 'Creating a website designed to effectively showcase trending topics, viral content, and the latest news, captivating its audience and creating a buzz-worthy online presence.',
      tags: ['Web Design', 'Content Strategy', 'Modern UI'],
    },
    {
      title: 'Branding',
      image: '/images/portfolio/branding-website-design.jpg',
      category: 'Branding & Design',
      description: 'Crafted a brand identity that authentically reflects the essence of our client\'s vision, leaving a lasting and memorable impression on their target audience.',
      tags: ['Brand Identity', 'Logo Design', 'Visual Design'],
    },
    {
      title: 'Internal Website',
      image: '/images/portfolio/webdesignagency-hertfordshire-location3.jpg',
      category: 'Content & SEO',
      description: 'We created blog articles to increase website traffic and establish topical authority in the chosen niche.',
      tags: ['Content Writing', 'SEO', 'Blog Strategy'],
    },
    {
      title: 'Mobile and Desktop',
      image: '/images/portfolio/webdesign-cat-1024x682.jpg',
      category: 'Digital Marketing',
      description: 'Implemented a comprehensive digital marketing strategy to ensure visibility and accessibility on mobile and desktop devices, expanding reach and engagement with the target audience.',
      tags: ['Responsive Design', 'Digital Marketing', 'Multi-Platform'],
    },
  ];

  return (
    <>
      {/* Header - Sticky throughout site */}
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative w-full min-h-[500px] flex items-center -mt-[88px]">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/Web-Design-1225.jpg"
            alt="Our Portfolio"
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
                  Our Portfolio
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-white/90">
                  Explore our successful projects across Hertfordshire
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of our recent work helping businesses across Hertfordshire grow their digital presence
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border-2 border-gray-100 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Image with padding and rounded corners */}
                <div className="p-6 pb-0">
                  <div className="aspect-video overflow-hidden rounded-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="p-8 pt-6 flex flex-col flex-grow">
                  {/* Category */}
                  <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary text-primary text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA - Aligned to bottom */}
                  <div className="flex items-center gap-2 text-primary font-semibold hover:text-primary-600 transition-colors cursor-pointer mt-auto">
                    View Case Study
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-primary to-primary-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
              Results That Speak for Themselves
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3">200+</div>
                <div className="text-white/90 text-lg">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3">10+</div>
                <div className="text-white/90 text-lg">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3">4.9/5</div>
                <div className="text-white/90 text-lg">Client Rating</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3">98%</div>
                <div className="text-white/90 text-lg">Client Satisfaction</div>
              </div>
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
              src="/images/services/Web-Design-1662.jpg"
              alt="Start Your Project"
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
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-white/95 mb-8">
                Let&apos;s create something amazing together. Get in touch today to discuss your project.
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
