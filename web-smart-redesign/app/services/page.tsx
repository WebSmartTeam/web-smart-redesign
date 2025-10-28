'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Globe,
  Search,
  TrendingUp,
  MousePointerClick,
  Video,
  FileText,
  Image as ImageIcon,
  Palette,
  Laptop,
  Grid3x3,
  Sparkles,
  Wrench,
  Chrome,
  Zap,
  Smartphone,
  Cloud,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Header from '@/components/layout/Header';

export default function ServicesPage() {
  const serviceCategories = [
    {
      category: 'Website Development',
      icon: Globe,
      services: [
        {
          title: 'Website Development',
          description: 'Websites built for performance, usability, and long-term reliability. Designed with SEO-ready structure and smooth navigation.',
          icon: Globe,
          image: '/images/services/Web-Design-1225.jpg',
          features: ['Responsive Design', 'SEO-Ready Structure', 'Fast Performance', 'Modern UI/UX'],
          cta: 'Get Quote',
          href: '/services/web-design',
        },
        {
          title: 'WordPress Development',
          description: 'Custom WordPress solutions with themes, plugins, and complete e-commerce functionality.',
          icon: Grid3x3,
          image: '/images/services/neve-patterns-6.1.png',
          features: ['Custom Themes', 'Plugin Development', 'WooCommerce', 'Maintenance'],
          cta: 'Get Quote',
          href: '/contact',
        },
        {
          title: 'React & Next.js Development',
          description: 'Modern, high-performance web applications built with cutting-edge React and Next.js technology.',
          icon: Zap,
          image: '/images/services/website-multidevice-resize.png',
          features: ['Single Page Apps', 'Server-Side Rendering', 'API Integration', 'Performance Optimised'],
          cta: 'Get Quote',
          href: '/contact',
        },
      ],
    },
    {
      category: 'Digital Marketing',
      icon: TrendingUp,
      services: [
        {
          title: 'Search Engine Optimisation',
          description: 'Build a strong foundation for search rankings with structured SEO strategies. Optimised content, technical SEO, and on-page improvements.',
          icon: Search,
          image: '/images/services/banner-foundation-seo-pack1499-scaled.jpg',
          features: ['Foundation Pack £1,499', 'Technical SEO', 'Content Optimisation', 'Monthly Reports'],
          cta: 'Foundation Pack Info',
          href: '/services/seo',
        },
        {
          title: 'Google Ads',
          description: 'Managed ad campaigns that drive results. Keyword research, audience targeting, and performance tracking to maximise ROI.',
          icon: MousePointerClick,
          image: '/images/services/ai-seo-strategy.jpg',
          features: ['Campaign Management', 'Keyword Research', 'ROI Tracking', 'A/B Testing'],
          cta: 'Get Quote',
          href: '/services/google-ads',
        },
        {
          title: 'Digital Marketing with AI',
          description: 'Targeted digital strategies to grow your brand and increase engagement. PPC, social media, and data-driven marketing solutions.',
          icon: TrendingUp,
          image: '/images/services/ai-seo-strategy.jpg',
          features: ['PPC Campaigns', 'Social Media', 'Analytics', 'AI-Powered Insights'],
          cta: 'Get Quote',
          href: '/contact',
        },
      ],
    },
    {
      category: 'AI-Powered Services',
      icon: Sparkles,
      services: [
        {
          title: 'AI Video Creation',
          description: 'Create high-quality AI-generated videos for marketing, branding, or social media. Custom scripts, voiceovers, and engaging visuals.',
          icon: Video,
          image: '/images/services/ai-seo-strategy.jpg',
          features: ['Custom Scripts', 'Professional Voiceovers', 'Engaging Visuals', 'Social Media Ready'],
          cta: 'Get Quote',
          href: '/contact',
        },
        {
          title: 'AI Assisted Content',
          description: 'Human-quality AI-assisted content for blogs, websites, and marketing. Custom-written for clarity, accuracy, and SEO impact.',
          icon: FileText,
          image: '/images/services/neve-patterns-21.jpg',
          features: ['SEO Optimised', 'Blog Posts', 'Website Copy', 'Marketing Materials'],
          cta: 'Get Quote',
          href: '/services/content-writing',
        },
        {
          title: 'Image Magic',
          description: 'Transform ordinary images into stunning, high-quality visuals. Improve quality, remove backgrounds, upscale resolutions, and generate unique imagery.',
          icon: ImageIcon,
          image: '/images/services/ai-seo-strategy.jpg',
          features: ['Image Enhancement', 'Background Removal', 'AI Image Generation', 'Upscaling'],
          cta: 'Get Quote',
          href: '/ai-images',
        },
        {
          title: 'AI Tools & Automation',
          description: 'Custom AI tools and automation solutions to streamline your business processes and increase efficiency.',
          icon: Zap,
          image: '/images/services/ai-seo-strategy.jpg',
          features: ['Process Automation', 'Custom AI Solutions', 'Integration', 'Efficiency Gains'],
          cta: 'Get Quote',
          href: '/contact',
        },
      ],
    },
    {
      category: 'Design & Branding',
      icon: Palette,
      services: [
        {
          title: 'Branding',
          description: 'Distinctive branding solutions that reflect your identity. Logos, colour palettes, and design assets tailored to your business.',
          icon: Palette,
          image: '/images/services/neve-patterns-20.jpg',
          features: ['Logo Design', 'Brand Guidelines', 'Colour Palettes', 'Marketing Collateral'],
          cta: 'Get Quote',
          href: '/contact',
        },
        {
          title: 'UX/UI Design',
          description: 'Modern, user-friendly interface designs that enhance engagement and improve user experience. Designed for web and mobile applications.',
          icon: Laptop,
          image: '/images/services/Web-Design-1225.jpg',
          features: ['User Research', 'Wireframing', 'Prototyping', 'Mobile & Web'],
          cta: 'Get Quote',
          href: '/contact',
        },
        {
          title: 'Content Writing',
          description: 'Professional content writing tailored to your business. We profile your business to create website copy, blogs, and marketing materials.',
          icon: FileText,
          image: '/images/services/neve-patterns-21.jpg',
          features: ['Website Copy', 'Blog Posts', 'SEO Content', 'Marketing Copy'],
          cta: 'Get Quote',
          href: '/services/content-writing',
        },
      ],
    },
    {
      category: 'Technology Solutions',
      icon: Wrench,
      services: [
        {
          title: 'Remote IT Support',
          description: 'IT specialists with over 20 years in IT support for businesses—desktops, routers, Office 365, Google Workspace—you name it, we can do it.',
          icon: Cloud,
          image: '/images/services/Web-Design-1662.jpg',
          features: ['Desktop Support', 'Network Support', 'Office 365', 'Google Workspace'],
          cta: 'Get Quote',
          href: '/contact',
        },
        {
          title: 'SaaS Products',
          description: 'Custom Software-as-a-Service solutions tailored to your business needs with scalable cloud infrastructure.',
          icon: Cloud,
          image: '/images/services/website-multidevice-resize.png',
          features: ['Custom Development', 'Cloud Infrastructure', 'Scalable Solutions', 'Ongoing Support'],
          cta: 'Get Quote',
          href: '/contact',
        },
        {
          title: 'Mobile Applications',
          description: 'Native and cross-platform mobile applications for iOS and Android with modern features and seamless performance.',
          icon: Smartphone,
          image: '/images/services/website-multidevice-resize.png',
          features: ['iOS & Android', 'Cross-Platform', 'Modern Features', 'App Store Publishing'],
          cta: 'Get Quote',
          href: '/contact',
        },
        {
          title: 'Chrome Extensions & Tools',
          description: 'Custom Chrome extensions and browser tools to enhance productivity and automate workflows.',
          icon: Chrome,
          image: '/images/services/Web-Design-1225.jpg',
          features: ['Custom Extensions', 'Browser Automation', 'Productivity Tools', 'Chrome Web Store'],
          cta: 'Get Quote',
          href: '/contact',
        },
      ],
    },
    {
      category: 'Hosting & Infrastructure',
      icon: Cloud,
      services: [
        {
          title: 'Web Hosting',
          description: 'Fast, reliable, and secure web hosting solutions with 99.9% uptime guarantee and expert support.',
          icon: Cloud,
          image: '/images/services/Web-Design-1662.jpg',
          features: ['99.9% Uptime', 'SSL Certificates', 'Daily Backups', 'Expert Support'],
          cta: 'Get Quote',
          href: '/contact',
        },
        {
          title: 'WordPress Hosting',
          description: 'Optimised WordPress hosting with automatic updates, security, and performance enhancements.',
          icon: Grid3x3,
          image: '/images/services/neve-patterns-6.1.png',
          features: ['Optimised Performance', 'Auto Updates', 'Security Hardening', 'Expert Support'],
          cta: 'Get Quote',
          href: '/contact',
        },
      ],
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
            src="/images/services/Web-Design-1662.jpg"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        <div className="relative z-10 w-full py-24 md:py-32 pt-32 md:pt-40">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight">
                  Our Services
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-white/95">
                  Comprehensive digital solutions from website development to AI-powered tools.
                  <br />
                  <span className="font-semibold">Hertfordshire • Bedfordshire • London • UK • USA</span>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`w-full py-16 md:py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container-custom">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3">
                {category.category}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: serviceIndex * 0.1 }}
                  className="group bg-white border-2 border-gray-100 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                >
                  {/* Image with padding and rounded bottom corners */}
                  <div className="p-6 pb-0">
                    <div className="aspect-video overflow-hidden rounded-xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="p-8 pt-6 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6 flex-grow">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA - Aligned to bottom */}
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-600 transition-colors text-sm mt-auto"
                    >
                      {service.cta}
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

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
                Ready to Launch?
              </h2>
              <p className="text-lg text-white/95 mb-8">
                Let&apos;s build you a high-impact website that looks great and performs even better.
                <br />
                Want to learn how we can help your business grow?
              </p>
              <Button href="/contact" variant="secondary" size="lg" className="group">
                Book a Demo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
