'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Globe
} from 'lucide-react';
import Button from '@/components/ui/Button';

export default function HomePage() {
  const services = [
    {
      icon: Globe,
      title: 'Static Business Website',
      price: '£500',
      description: 'Professional, responsive sites with up to 5 pages, analytics, and SEO optimisation.',
      link: '/services#static',
    },
    {
      icon: Globe,
      title: 'Self-Managed WordPress',
      price: '£1,000+',
      description: 'Custom WordPress with CMS training and 3 months support.',
      link: '/services#wordpress',
      featured: true,
    },
    {
      icon: Globe,
      title: 'Fully Managed & Bespoke',
      price: 'Custom',
      description: 'Advanced custom solutions with ongoing management tailored to your needs.',
      link: '/services#bespoke',
    },
  ];

  const benefits = [
    'Personal consultation with expert one-on-one guidance',
    'Full website ownership with no design file restrictions',
    'Satisfaction guarantee with collaborative refinement',
    'Ongoing expert support for sustained growth',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] flex items-center mt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/Web-Design-1662.jpg"
            alt="Web Design Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6 leading-tight">
                Create a Stunning Website
              </h1>

              <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
                It all starts with a clean, slick web design that captures your brand and engages your audience.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button href="/portfolio" variant="secondary" size="lg">
                  See What We Can Build For You
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Tell Us About Your Project → Get a Quote
                </Button>
                <a
                  href="tel:01462544738"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-accent hover:bg-accent-dark rounded-lg transition-all duration-200"
                >
                  🔥🔥 Leverage 25 Years of Expertise in 1 Call → Book Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full bg-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              We Don&apos;t Just Make Websites — We Make Them Work
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We combine beautiful design with effective SEO strategy to drive traffic and attract quality leads to your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
              Website Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package for your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.link}>
                  <div className={`relative h-full p-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                    service.featured
                      ? 'bg-gradient-to-br from-primary to-primary-600 text-white'
                      : 'bg-white border-2 border-gray-100 hover:border-primary'
                  }`}>
                    {service.featured && (
                      <div className="absolute -top-3 -right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </div>
                    )}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                      service.featured
                        ? 'bg-white/20 text-white'
                        : 'bg-primary/10 text-primary'
                    }`}>
                      <service.icon size={32} />
                    </div>
                    <div className={`text-3xl font-heading font-bold mb-2 ${
                      service.featured ? 'text-white' : 'text-primary'
                    }`}>
                      {service.price}
                    </div>
                    <h3 className={`text-xl font-heading font-bold mb-4 ${
                      service.featured ? 'text-white' : 'text-gray-900'
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`mb-6 ${
                      service.featured ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {service.description}
                    </p>
                    <div className={`flex items-center gap-2 font-medium ${
                      service.featured ? 'text-white' : 'text-primary'
                    }`}>
                      Learn More
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button href="/services" size="lg">
              View All Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-12">
                Our Commitment to You
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 text-left"
                  >
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full section-padding gradient-purple text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contact us today for a free consultation and let&apos;s create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="group"
              >
                Get in Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <a
                href="tel:01462544738"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-white hover:text-primary transition-all duration-200"
              >
                Call 01462 544738
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
