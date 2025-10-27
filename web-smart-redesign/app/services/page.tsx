'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Header from '@/components/layout/Header';

export default function ServicesPage() {
  const services = [
    {
      title: 'Web Design Services',
      description: 'Professional website design that captures your brand and engages your audience.',
      features: ['Responsive Design', 'Modern UI/UX', 'Custom Solutions', 'Fast Loading'],
      price: 'From £500',
      href: '/services/web-design',
      image: '/images/services/Web-Design-1225.jpg',
    },
    {
      title: 'SEO Services',
      description: 'Boost your online visibility and rank higher on search engines.',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Monthly Reports'],
      price: '£1,499',
      href: '/services/seo',
      image: '/images/services/banner-foundation-seo-pack1499-scaled.jpg',
    },
    {
      title: 'Content Writing',
      description: 'Engaging content that speaks to your audience and drives conversions.',
      features: ['SEO-Optimized', 'Professional Copy', 'AI-Powered', 'Regular Updates'],
      price: 'Custom',
      href: '/services/content-writing',
      image: '/images/services/neve-patterns-21.jpg',
    },
    {
      title: 'Google Ads Management',
      description: 'Strategic Google Ads campaigns that deliver results and maximize ROI.',
      features: ['Campaign Setup', 'Keyword Strategy', 'Ad Optimization', 'Performance Tracking'],
      price: 'Custom',
      href: '/services/google-ads',
      image: '/images/services/ai-seo-strategy.jpg',
    },
  ];

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
                  Our Services
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-white/90">
                  Comprehensive digital marketing and web design solutions tailored to your business needs
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary"
              >
                <div className="aspect-video overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-heading font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <span className="text-primary font-bold text-xl">{service.price}</span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="text-accent flex-shrink-0" size={18} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-600 transition-colors"
                  >
                    Learn More
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
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
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/95 mb-8">
                Let&apos;s discuss how we can help your business grow online. Get in touch for a free consultation.
              </p>
              <Button href="/contact" variant="secondary" size="lg" className="group">
                Start Your Project Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
