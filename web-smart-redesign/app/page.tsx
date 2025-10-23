'use client';

import React from 'react';
import Image from 'next/image';
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
      <section className="relative bg-gradient-to-br from-primary via-primary-600 to-primary-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                🏆 Best SEO Agency in Hertfordshire
              </div>

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
                <Button
                  href="/services"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  View Our Services
                </Button>
              </div>

              {/* Quick Contact */}
              <div className="flex items-center gap-6 text-sm">
                <a
                  href="tel:01462544738"
                  className="flex items-center gap-2 hover:text-accent-light transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <div className="text-white/80">Call us now</div>
                    <div className="font-bold">01462 544738</div>
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
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl rotate-6"></div>
                <div className="absolute inset-0 bg-accent/20 rounded-3xl -rotate-6"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <Image
                    src="/images/logos/web-smart-ape.png"
                    alt="Web-Smart.Co Mascot"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
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
      <section className="section-padding bg-white">
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
      <section className="section-padding bg-gradient-to-br from-secondary to-white">
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
                We're not just another digital agency. We're your partner in growth, combining local expertise with cutting-edge technology to deliver measurable results.
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
                <Image
                  src="/images/team/pete-gypps-1.jpg"
                  alt="Web-Smart.Co Team"
                  width={600}
                  height={600}
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
      <section className="section-padding gradient-purple text-white">
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
