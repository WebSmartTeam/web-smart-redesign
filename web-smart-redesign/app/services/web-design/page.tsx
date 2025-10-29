'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  Smartphone,
  ShoppingCart,
  Zap,
  CheckCircle,
  ArrowRight,
  Code,
  Palette,
  Layers,
  Globe,
  Shield,
  TrendingUp
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';

const services = [
  {
    icon: Monitor,
    title: 'Static Website Design',
    description: 'Fast, secure, and cost-effective websites perfect for businesses that need a professional online presence without complex functionality.',
    features: ['Lightning-fast loading', 'Enhanced security', 'Low maintenance', 'Mobile responsive', 'SEO optimised'],
    color: 'bg-blue-500',
  },
  {
    icon: Code,
    title: 'WordPress Development',
    description: 'Fully custom WordPress websites with easy-to-use content management, perfect for businesses that need to update content regularly.',
    features: ['Easy content management', 'Custom themes', 'Plugin integration', 'E-commerce ready', 'Blog functionality'],
    color: 'bg-purple-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Websites designed from the ground up to look stunning and perform perfectly on all devices, from smartphones to desktops.',
    features: ['Responsive layouts', 'Touch-optimised', 'Fast mobile loading', 'Progressive web apps', 'App-like experience'],
    color: 'bg-green-500',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Complete online stores with secure payment processing, inventory management, and conversion-optimised checkout flows.',
    features: ['WooCommerce/Shopify', 'Secure payments', 'Inventory management', 'Order tracking', 'Customer accounts'],
    color: 'bg-orange-500',
  },
  {
    icon: Zap,
    title: 'Website Redesigns',
    description: 'Breathe new life into outdated websites with modern design, improved functionality, and enhanced user experience.',
    features: ['Modern aesthetics', 'UX improvements', 'Performance optimization', 'Content migration', 'SEO preservation'],
    color: 'bg-red-500',
  },
  {
    icon: Shield,
    title: 'Website Maintenance',
    description: 'Ongoing support, updates, backups, and security monitoring to keep your website running smoothly and securely.',
    features: ['Regular updates', 'Security monitoring', 'Daily backups', 'Performance checks', 'Priority support'],
    color: 'bg-indigo-500',
  },
];

const benefits = [
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Unique designs tailored to your brand, not cookie-cutter templates',
  },
  {
    icon: TrendingUp,
    title: 'Conversion Focused',
    description: 'Designed to turn visitors into customers with strategic CTAs',
  },
  {
    icon: Globe,
    title: 'SEO Optimised',
    description: 'Built with search engines in mind for maximum visibility',
  },
  {
    icon: Layers,
    title: 'Scalable Solution',
    description: 'Grows with your business, easy to expand and add features',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We learn about your business, goals, target audience, and competitors to create a strategic plan.',
  },
  {
    step: '02',
    title: 'Design & Development',
    description: 'Our designers create mockups, then our developers bring them to life with clean, efficient code.',
  },
  {
    step: '03',
    title: 'Testing & Launch',
    description: 'Rigorous testing across devices and browsers, then a smooth launch with full support.',
  },
  {
    step: '04',
    title: 'Training & Support',
    description: 'Complete training on managing your website, plus ongoing support whenever you need it.',
  },
];

export default function WebDesignPage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center -mt-[88px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/Web-Design-1662.jpg"
            alt="Professional Web Design Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
        </div>

        <div className="relative z-10 w-full py-24 md:py-32 pt-32 md:pt-40">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Monitor className="text-white" size={40} />
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight">
                    Web Design Services
                  </h1>
                </div>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-white/90">
                  Beautiful, high-performing websites that help Hertfordshire businesses grow online
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact" variant="secondary" size="lg" className="group">
                    Start Your Project
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                  <Button href="/portfolio" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                    View Our Work
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Grid */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-secondary to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Web Design Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From simple brochure sites to complex e-commerce platforms, we build websites that work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Choose Web-Smart
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine design excellence with technical expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-secondary via-white to-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven approach that delivers results on time and on budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 relative"
              >
                <div className="text-6xl font-black text-primary/10 absolute top-4 right-4">
                  {item.step}
                </div>
                <div className="relative">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See our latest web design work for Hertfordshire businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { image: '/images/portfolio/webdesignagency-hertfordshire-location3.jpg', title: 'Corporate Website' },
              { image: '/images/portfolio/branding-website-design.jpg', title: 'Branding & Design' },
              { image: '/images/services/website-multidevice-resize.png', title: 'Responsive Design' },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-gray-900">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/portfolio" variant="primary" size="lg" className="group">
              View Full Portfolio
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-[10px] pb-[10px]">
        <div className="relative w-full py-20 md:py-28 text-white overflow-hidden rounded-3xl">
          <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
            <img
              src="/images/services/Web-Design-1225.jpg"
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
                Ready to Launch Your Website?
              </h2>
              <p className="text-lg text-white/95 mb-8">
                Let&apos;s discuss your project and create a website that helps your business thrive online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="secondary" size="lg" className="group">
                  Get In Touch
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button href="tel:01462544738" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                  Call 01462 544738
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
