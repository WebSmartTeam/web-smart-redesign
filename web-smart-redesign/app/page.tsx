'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Globe,
  TrendingUp,
  PenTool,
  Search,
  Star,
  Award,
  Users,
  Target
} from 'lucide-react';
import Button from '@/components/ui/Button';

export default function HomePage() {
  const services = [
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Modern, responsive websites that convert visitors into customers. From static sites to e-commerce platforms.',
      link: '/services#web-design',
    },
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Dominate local search results with our proven SEO strategies. Foundation Pack from £1,499.',
      link: '/services#seo',
      featured: true,
    },
    {
      icon: PenTool,
      title: 'Content Writing',
      description: 'Engaging, SEO-optimised content that ranks. AI-powered and traditional writing services available.',
      link: '/services#content',
    },
    {
      icon: TrendingUp,
      title: 'Google Ads',
      description: 'Maximise ROI with expertly managed Google Ads campaigns. Get qualified leads fast.',
      link: '/services#google-ads',
    },
  ];

  const stats = [
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Star, value: '4.9/5', label: 'Client Rating' },
    { icon: Target, value: '95%', label: 'Success Rate' },
  ];

  const benefits = [
    'Local Hertfordshire expertise',
    'Proven track record of results',
    'Modern, cutting-edge technology',
    'Transparent pricing with no hidden fees',
    'Dedicated account management',
    'Comprehensive digital solutions',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/Web-Design-1662.jpg"
            alt="Web Design Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-600/90 to-primary-700/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Grow Your Business with Expert Digital Marketing
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Transform your online presence with cutting-edge web design, powerful SEO, and data-driven marketing strategies that deliver real results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="group"
                >
                  Get Your Free Quote
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </div>

              {/* Quick Contact */}
              <div className="flex items-center gap-4">
                <a
                  href="tel:01462544738"
                  className="flex items-center gap-3 text-white hover:text-accent-light transition-colors"
                >
                  <div className="text-2xl">📞</div>
                  <div>
                    <div className="text-sm text-white/80">Call us now</div>
                    <div className="font-bold text-lg">01462 544738</div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logos/ape-face0defined-transparent-1-1011x1024.png"
                  alt="Web-Smart.Co Mascot"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-gray-50 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <stat.icon size={28} />
                </div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to grow your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <section className="w-full section-padding bg-gradient-to-br from-secondary to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
                Why Choose Web-Smart.Co?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We&apos;re not just another digital agency. We&apos;re your partner in growth, combining local expertise with cutting-edge technology to deliver measurable results.
              </p>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-accent flex-shrink-0" size={24} />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <Button href="/about" size="lg">
                Learn More About Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/team/linkedin-profile-image2.jpg"
                  alt="Web-Smart.Co Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="text-4xl font-heading font-bold mb-2">£1,499</div>
                <div className="text-sm">SEO Foundation Pack - Get started today!</div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get in touch today for a free consultation and discover how we can help you achieve your digital marketing goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="group"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                href="tel:01462544738"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Call 01462 544738
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
