'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Star,
  Download,
  Sparkles,
  Palette,
  FileText,
  TrendingUp,
  Lightbulb
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Header from '@/components/layout/Header';
import LogoSlider from '@/components/ui/LogoSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Dynamic import for WorldMap to avoid SSR issues
const WorldMap = dynamic(() => import('@/components/ui/map').then(mod => ({ default: mod.WorldMap })), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-200 rounded-2xl animate-pulse flex items-center justify-center">
      <span className="text-gray-500">Loading map...</span>
    </div>
  ),
});

export default function HomePage() {
  const testimonials = [
    {
      name: 'Sarah Thompson',
      business: 'Thompson & Associates',
      location: 'Hitchin',
      rating: 5,
      text: 'Web-Smart transformed our online presence completely. The SEO Foundation Pack delivered results within 3 months—we\'re now ranking on page 1 for our key terms. Pete and his team are knowledgeable, responsive, and truly care about our success.',
      image: '/images/team/placeholder-avatar.jpg',
    },
    {
      name: 'James Miller',
      business: 'Miller Property Services',
      location: 'Stevenage',
      rating: 5,
      text: 'Outstanding service from start to finish. Our new WordPress website is beautiful, fast, and easy to manage. The training was thorough and the ongoing support has been invaluable. Highly recommend Web-Smart to any business in Hertfordshire.',
      image: '/images/team/placeholder-avatar.jpg',
    },
    {
      name: 'Emma Clarke',
      business: 'Clarke\'s Boutique',
      location: 'Letchworth',
      rating: 5,
      text: 'We needed an e-commerce solution that could grow with our business. Web-Smart delivered exactly that. The site is gorgeous, sales have increased by 40%, and their Google Ads management is bringing in quality leads every day.',
      image: '/images/team/placeholder-avatar.jpg',
    },
    {
      name: 'David Richards',
      business: 'Richards Accounting',
      location: 'Baldock',
      rating: 5,
      text: 'Professional, knowledgeable, and always willing to go the extra mile. Our website redesign exceeded expectations, and the SEO improvements have brought us consistent new enquiries. Web-Smart is our go-to for all digital marketing needs.',
      image: '/images/team/placeholder-avatar.jpg',
    },
    {
      name: 'Lisa Patel',
      business: 'Patel Legal Services',
      location: 'Hitchin',
      rating: 5,
      text: 'The team at Web-Smart created a sophisticated, user-friendly website that perfectly represents our law firm. Their attention to detail and understanding of our sector was impressive. We\'ve seen a significant increase in client enquiries.',
      image: '/images/team/placeholder-avatar.jpg',
    },
    {
      name: 'Tom Harrison',
      business: 'Harrison Construction',
      location: 'Letchworth',
      rating: 5,
      text: 'Best decision we made was working with Web-Smart. They built us a modern website showcasing our projects beautifully. The Google Ads campaign they manage delivers quality leads every week. Fantastic ROI and brilliant service throughout.',
      image: '/images/team/placeholder-avatar.jpg',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[700px] md:min-h-[800px] flex items-center">
        {/* Header - Inside Hero Section, Sticky */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header />
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/Web-Design-1225.jpg"
            alt="Web Design & SEO Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 w-full py-32 md:py-40">
          <div className="container-custom">
            <div className="max-w-3xl text-white">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black mb-6 leading-tight">
                  Create a Stunning Website
                </h1>

                <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light">
                  It all starts with a clean, slick web design that captures your brand and engages your audience.
                </p>

                {/* Google Review Widget */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 max-w-full md:inline-flex">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={i < 4 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400 fill-yellow-400"}
                        size={16}
                      />
                    ))}
                  </div>
                  <div className="hidden md:block h-5 w-px bg-white/30"></div>
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <span className="text-white font-bold text-base md:text-lg">4.9</span>
                    <span className="text-white/80 text-xs md:text-sm whitespace-nowrap">Google Rating</span>
                  </div>
                  <div className="hidden md:block h-5 w-px bg-white/30"></div>
                  <span className="text-white/80 text-xs md:text-sm whitespace-nowrap">200+ Reviews</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Slider - AI & Technology Partners */}
      <LogoSlider />

      {/* We Don't Just Make Websites - Intro Section */}
      <section className="w-full bg-secondary py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-gray-900 mb-6">
              We Don&apos;t Just Make Websites<br />We Make Them Work
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Combining beautiful design with effective SEO strategy to drive traffic and attract quality leads to your business.
            </p>
            <Button href="/portfolio" variant="primary" size="lg">
              See What We Can Build For You
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Portfolio/Case Studies Section */}
      <section className="w-full section-padding bg-gradient-to-br from-secondary to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-gray-900 mb-4">
              Our Work Speaks For Itself
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successful web design projects across Hertfordshire
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Web Design',
                image: '/images/portfolio/webdesignagency-hertfordshire-location3.jpg',
                category: 'Web Design',
                link: '/services',
              },
              {
                title: 'Mobile Applications',
                image: '/images/services/neve-patterns-20.jpg',
                category: 'Mobile Apps',
                link: '/services',
              },
              {
                title: 'SaaS Platforms',
                image: '/images/services/website-multidevice-resize.png',
                category: 'Platforms',
                link: '/services',
              },
              {
                title: 'Design & Branding',
                image: '/images/portfolio/branding-website-design.jpg',
                category: 'Branding',
                link: '/services',
              },
            ].map((project, index) => (
              <Link key={index} href={project.link}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-medium text-primary mb-2">{project.category}</p>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      View Case Study
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}

            {/* AI Works Card - 5th Card - Spans 2 columns on large screens */}
            <Link href="/ai-projects" className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="group relative bg-gradient-to-br from-primary to-primary-600 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col md:flex-row md:h-[421px]"
              >
                <div className="w-full md:w-1/2 overflow-hidden relative aspect-video md:aspect-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/services/ai-seo-strategy.jpg"
                    alt="AI Works and Solutions"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/30"></div>
                </div>
                <div className="w-full md:w-1/2 p-6 text-white flex flex-col justify-center">
                  <p className="text-sm font-medium text-white/90 mb-2">AI Innovation</p>
                  <h3 className="text-xl font-heading font-bold text-white mb-4">
                    Our AI Works
                  </h3>
                  <p className="text-sm text-white/80 mb-4">
                    Explore cutting-edge AI platforms, tools, and website solutions we&apos;re building
                  </p>
                  <div className="flex items-center gap-2 text-white font-medium">
                    View AI Projects
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-4.5 text-base md:text-lg font-semibold bg-primary text-white rounded-full hover:bg-primary-600 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                Tell Us About Your Project → Get a Quote
              </a>
              <Button href="/portfolio" size="lg" variant="outline">
                View Full Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Website Packages Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-gray-900 mb-4">
              Website Packages
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect solution for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Static Business Website Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                <Globe size={32} />
              </div>
              <div className="text-3xl font-heading font-bold text-primary mb-2">
                £500
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                Static Business Website
              </h3>
              <p className="text-gray-600 mb-6">
                Professional, fast-loading website perfect for businesses with stable content
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-700">Responsive design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-700">Up to 5 pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-700">Contact form</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-700">SEO optimization</span>
                </li>
              </ul>
              <Button href="/contact" variant="outline" className="w-full mt-auto">
                Learn More
              </Button>
            </motion.div>

            {/* Self-Managed WordPress Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col bg-gradient-to-br from-primary to-primary-600 text-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/20 text-white mb-6">
                <Globe size={32} />
              </div>
              <div className="text-3xl font-heading font-bold text-white mb-2">
                £1,000+
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">
                Self-Managed WordPress
              </h3>
              <p className="text-white/90 mb-6">
                Custom-designed WordPress website with training for self-management
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-white flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-white/90">Custom design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-white flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-white/90">CMS (Content Management System)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-white flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-white/90">Advanced SEO</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-white flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-white/90">3 months support</span>
                </li>
              </ul>
              <Button href="/contact" variant="secondary" className="w-full mt-auto">
                Learn More
              </Button>
            </motion.div>

            {/* Fully Managed & Bespoke Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                <Globe size={32} />
              </div>
              <div className="text-3xl font-heading font-bold text-primary mb-2">
                Custom
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                Fully Managed & Bespoke
              </h3>
              <p className="text-gray-600 mb-6">
                A completely custom website with advanced features and ongoing management
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-700">Modern tech stack</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-700">Lightning-fast performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-sm text-gray-700">Full management</span>
                </li>
              </ul>
              <Button href="/contact" variant="outline" className="w-full mt-auto">
                Learn More
              </Button>
            </motion.div>
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

      {/* The Web Creation Hub Section */}
      <section className="w-full bg-gradient-to-br from-secondary to-white py-16 md:py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-gray-900 mb-6">
                The Web Creation Hub
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Your central hub for all web and marketing needs. We&apos;re not just a web design agency—we&apos;re a comprehensive digital solutions provider. From stunning website designs to powerful SEO strategies, professional content creation to strategic branding, we bring everything together under one roof to help your business thrive online.
              </p>
            </motion.div>

            {/* Right Side - Resources Download Box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <div className="bg-gradient-to-br from-primary to-primary-600 rounded-2xl p-6 text-white shadow-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 text-white mb-4">
                  <Download size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  Download Web & Marketing Resources
                </h3>
                <p className="text-sm text-white/90 mb-6">
                  Actionable guides to help you build a stronger, faster, and more effective website.
                </p>
                <Button href="/resources" variant="secondary" size="md" className="w-full">
                  Get Free Resources
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Branding Section */}
      <section className="w-full section-padding bg-gradient-to-br from-secondary to-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-gray-900 mb-6">
                Strategic Branding for Lasting Impact
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Your brand is more than just a logo—it&apos;s the complete experience your customers have with your business. We create memorable brand identities that resonate with your target audience and set you apart from the competition.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                From visual identity to brand messaging, we ensure every touchpoint reinforces your unique value proposition and builds trust with your customers.
              </p>
              <Button href="/services" size="lg">
                Explore Branding Services
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/services/Web-Design-1662.jpg"
                alt="Strategic Branding Services"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unique Content Creation Section */}
      <section className="w-full section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-gray-900 mb-6">
              Unique Content Creation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stand out with exceptional content that engages your audience and drives results. Our content creation services combine professional copywriting and custom visual design.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FileText size={24} />,
                title: 'Professional Copywriting',
                description: 'SEO-optimized copy that captures your brand voice and converts visitors into customers',
              },
              {
                icon: <Palette size={24} />,
                title: 'Custom Visual Design',
                description: 'Eye-catching graphics, images, and visual assets tailored to your brand',
              },
              {
                icon: <FileText size={24} />,
                title: 'Blog & Article Writing',
                description: 'Well-researched, informative content that establishes your expertise',
              },
              {
                icon: <TrendingUp size={24} />,
                title: 'Website Content',
                description: 'Professional website content that engages visitors and drives conversions',
              },
              {
                icon: <Lightbulb size={24} />,
                title: 'Content Strategy',
                description: 'Comprehensive content planning that drives engagement and conversions',
              },
              {
                icon: <Sparkles size={24} />,
                title: 'Video Content Creation',
                description: 'Engaging video content that informs and connects with your audience',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button href="/services/content-writing" size="lg">
              Learn More About Content Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full section-padding bg-gradient-to-br from-secondary via-white to-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-gray-900 mb-4">
              Creating Happy Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it—hear from businesses we&apos;ve helped succeed
            </p>
          </motion.div>

          <div className="w-full">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              slidesPerGroup={1}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                },
                1024: {
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={800}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-primary',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
              }}
              navigation={true}
              className="testimonials-swiper pb-16"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 h-[450px] flex flex-col">
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-accent fill-accent" size={20} />
                      ))}
                    </div>

                    <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-8 italic flex-grow">
                      &quot;{testimonial.text}&quot;
                    </p>

                    <div className="flex flex-col items-center">
                      <div className="font-heading font-bold text-xl text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-primary font-medium">
                        {testimonial.business}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.location}, Hertfordshire
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 font-heading mb-4"
            >
              Global{" "}
              <span className="text-primary">Network</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Connect with teams and clients worldwide. Our platform enables seamless
              collaboration across continents, bringing the world to your workspace.
            </motion.p>
          </div>
        </div>

        {/* Full Width Map */}
        <div className="w-full">
          <WorldMap
            dots={[
              // Hertfordshire/Bedfordshire to London (35 miles)
              {
                start: { lat: 51.9498, lng: -0.2772, label: "Hitchin" },
                end: { lat: 51.5074, lng: -0.1278, label: "London" },
              },
              // To Birmingham (Midlands - 80 miles northwest)
              {
                start: { lat: 51.9498, lng: -0.2772, label: "Hitchin" },
                end: { lat: 52.4862, lng: -1.8904, label: "Birmingham" },
              },
              // To Manchester (North England - 170 miles)
              {
                start: { lat: 51.9498, lng: -0.2772, label: "Hitchin" },
                end: { lat: 53.4808, lng: -2.2426, label: "Manchester" },
              },
              // USA East Coast
              {
                start: { lat: 51.9498, lng: -0.2772, label: "Hitchin" },
                end: { lat: 40.7128, lng: -74.0060, label: "New York" },
              },
              // USA West Coast
              {
                start: { lat: 51.9498, lng: -0.2772, label: "Hitchin" },
                end: { lat: 34.0522, lng: -118.2437, label: "Los Angeles" },
              },
            ]}
            lineColor="#672F8F"
            showLabels={true}
            animationDuration={2.5}
            loop={true}
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full px-[10px] pb-[10px]">
        <div className="relative w-full section-padding text-white overflow-hidden rounded-3xl">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/services/Web-Design-1225.jpg"
              alt="Start Your Project"
              className="w-full h-full object-cover"
            />
            {/* Black overlay for text visibility */}
            <div className="absolute inset-0 bg-black/75"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Ready to Transform Your Online Presence?
              </h2>
              <p className="text-lg text-white/95 mb-8">
                Let&apos;s create a website that not only looks stunning but drives real results for your business. Get in touch today for a free consultation.
              </p>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="group"
              >
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
