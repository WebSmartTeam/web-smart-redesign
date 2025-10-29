'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle, FileText, BarChart, Search, Palette, Code, Sparkles, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';

const freeResources = [
  {
    icon: CheckCircle,
    title: 'Website Launch Checklist',
    description: 'Complete 50-point checklist to ensure your website launch goes smoothly. Covers design, content, SEO, technical setup, and post-launch tasks.',
    downloadUrl: '/resources/website-launch-checklist.pdf',
    category: 'Checklist',
    color: 'bg-green-500',
  },
  {
    icon: Search,
    title: 'SEO Audit Template',
    description: 'Professional SEO audit template used by our team. Analyze on-page SEO, technical issues, backlinks, and get actionable recommendations.',
    downloadUrl: '/resources/seo-audit-template.pdf',
    category: 'SEO',
    color: 'bg-blue-500',
  },
  {
    icon: Palette,
    title: 'Web Design Style Guide',
    description: 'Create consistent branding with our comprehensive style guide template. Includes colour palettes, typography, spacing, and component guidelines.',
    downloadUrl: '/resources/design-style-guide.pdf',
    category: 'Design',
    color: 'bg-purple-500',
  },
  {
    icon: FileText,
    title: 'Website Content Planner',
    description: 'Plan your website content strategically. Includes page structure templates, copywriting formulas, and content calendar for 12 weeks.',
    downloadUrl: '/resources/content-planner.pdf',
    category: 'Content',
    color: 'bg-orange-500',
  },
  {
    icon: BarChart,
    title: 'Google Analytics Setup Guide',
    description: 'Step-by-step guide to set up GA4, configure goals, track conversions, and understand your website traffic. Includes dashboard templates.',
    downloadUrl: '/resources/analytics-setup-guide.pdf',
    category: 'Analytics',
    color: 'bg-red-500',
  },
  {
    icon: Code,
    title: 'WordPress Security Checklist',
    description: 'Protect your WordPress site with our 30-point security checklist. Covers plugins, backups, user permissions, and malware prevention.',
    downloadUrl: '/resources/wordpress-security-checklist.pdf',
    category: 'Security',
    color: 'bg-indigo-500',
  },
  {
    icon: Sparkles,
    title: 'Local SEO Optimisation Guide',
    description: 'Rank higher in local search results. Complete guide to Google My Business, local citations, reviews, and location-based keywords.',
    downloadUrl: '/resources/local-seo-guide.pdf',
    category: 'SEO',
    color: 'bg-cyan-500',
  },
  {
    icon: FileText,
    title: 'Website Accessibility Checklist',
    description: 'Make your website accessible to all users. WCAG 2.1 compliance checklist covering navigation, forms, images, and assistive technologies.',
    downloadUrl: '/resources/accessibility-checklist.pdf',
    category: 'Accessibility',
    color: 'bg-pink-500',
  },
];

const tools = [
  {
    name: 'PageSpeed Insights',
    description: 'Analyse your website performance and get optimisation recommendations',
    url: 'https://pagespeed.web.dev/',
    category: 'Performance',
  },
  {
    name: 'Google Search Console',
    description: 'Monitor your website search performance and fix indexing issues',
    url: 'https://search.google.com/search-console',
    category: 'SEO',
  },
  {
    name: 'GTmetrix',
    description: 'Detailed website speed analysis with waterfall charts and recommendations',
    url: 'https://gtmetrix.com/',
    category: 'Performance',
  },
  {
    name: 'Coolors',
    description: 'Generate beautiful colour palettes for your website design',
    url: 'https://coolors.co/',
    category: 'Design',
  },
  {
    name: 'TinyPNG',
    description: 'Compress images without losing quality to improve page speed',
    url: 'https://tinypng.com/',
    category: 'Optimisation',
  },
  {
    name: 'CanIUse',
    description: 'Check browser compatibility for CSS, HTML, and JavaScript features',
    url: 'https://caniuse.com/',
    category: 'Development',
  },
];

export default function ResourcesPage() {

  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center -mt-[88px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/Web-Design-1662.jpg"
            alt="Free Web Design Resources"
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
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Download className="text-white" size={40} />
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight">
                    Free Resources
                  </h1>
                </div>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-white/90">
                  Professional web design guides, templates, and tools to help your business succeed online
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Downloadable Resources */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-secondary to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Free Downloadable Guides
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional templates, checklists, and guides created by our expert team. Download instantly for free.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  <div className={`w-16 h-16 ${resource.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  <span className="inline-block px-3 py-1 bg-secondary text-primary text-xs font-semibold rounded-full mb-3 self-start uppercase tracking-wide">
                    {resource.category}
                  </span>

                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>

                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {resource.description}
                  </p>

                  <a
                    href={resource.downloadUrl}
                    download
                    className="flex items-center gap-2 text-primary font-semibold hover:text-primary-600 transition-colors group"
                  >
                    <Download size={20} />
                    Download Free PDF
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Useful Tools Section */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Recommended Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our curated list of free online tools to help you design, optimise, and analyse your website
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.a
                key={index}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-secondary to-white rounded-xl p-6 border-2 border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-heading font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <ArrowRight size={20} className="text-primary group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  {tool.description}
                </p>
                <span className="inline-block px-3 py-1 bg-white text-primary text-xs font-semibold rounded-full uppercase tracking-wide">
                  {tool.category}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-[10px] pb-[10px]">
        <div className="relative w-full py-20 md:py-28 text-white overflow-hidden rounded-3xl">
          <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
            <img
              src="/images/services/Web-Design-1225.jpg"
              alt="Get Expert Help"
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
                Need Expert Help?
              </h2>
              <p className="text-lg text-white/95 mb-8">
                While these resources are valuable, nothing beats professional expertise. Let our team help you create a stunning, high-performing website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="secondary" size="lg" className="group">
                  Get In Touch
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button href="/services/web-design" variant="outline" size="lg" className="group">
                  View Our Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
