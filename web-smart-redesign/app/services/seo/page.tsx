'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  TrendingUp,
  Target,
  MapPin,
  Link2,
  FileText,
  BarChart,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Award
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';

const services = [
  {
    icon: FileText,
    title: 'Keyword Research & Strategy',
    description: 'In-depth research to identify the keywords your customers are searching for and create a winning strategy',
    features: ['Competitor analysis', 'Search volume research', 'Keyword difficulty assessment', 'Content gap analysis'],
  },
  {
    icon: Target,
    title: 'On-Page SEO',
    description: 'Optimise every element of your website to rank higher and provide better user experience',
    features: ['Meta tags optimization', 'Content optimization', 'Internal linking', 'Image optimization'],
  },
  {
    icon: BarChart,
    title: 'Technical SEO',
    description: 'Fix technical issues that prevent search engines from properly crawling and indexing your website',
    features: ['Site speed optimization', 'Mobile-first indexing', 'Schema markup', 'XML sitemaps'],
  },
  {
    icon: Link2,
    title: 'Link Building',
    description: 'Build high-quality backlinks from authoritative websites to boost your domain authority',
    features: ['Outreach campaigns', 'Guest posting', 'Directory submissions', 'Link quality analysis'],
  },
  {
    icon: MapPin,
    title: 'Local SEO',
    description: 'Dominate local search results and attract customers in Hertfordshire and surrounding areas',
    features: ['Google My Business', 'Local citations', 'Review management', 'Local content'],
  },
  {
    icon: Sparkles,
    title: 'AI-Powered SEO',
    description: 'Leverage artificial intelligence to gain insights and automate optimization tasks',
    features: ['AI content optimization', 'Predictive analytics', 'Automated reporting', 'Trend analysis'],
  },
];

const foundationPackFeatures = [
  'Comprehensive SEO audit & analysis',
  'Keyword research (20+ keywords)',
  'On-page SEO optimization',
  'Technical SEO fixes',
  'Google My Business setup',
  'Local citation building',
  'Content strategy document',
  'Monthly progress reports (3 months)',
  '3 months ongoing support',
  'Performance tracking & analytics',
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increase Organic Traffic',
    description: 'Get more visitors from Google without paying for ads',
  },
  {
    icon: Target,
    title: 'Target Local Customers',
    description: 'Attract customers in Hertfordshire searching for your services',
  },
  {
    icon: Award,
    title: 'Build Authority',
    description: 'Establish your business as an industry leader in your area',
  },
  {
    icon: Globe,
    title: 'Long-Term Results',
    description: 'SEO keeps working for you, providing lasting value',
  },
];

const whyChooseUs = [
  'Hertfordshire SEO specialists - we know the local market',
  'Transparent reporting - see exactly what we\'re doing',
  'No long-term contracts - prove our value every month',
  'White-hat techniques - sustainable, Google-approved methods',
  'Proven track record - 200+ successful SEO campaigns',
  'AI-powered insights - cutting-edge technology',
];

export default function SEOServicesPage() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center -mt-[88px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/Web-Design-1662.jpg"
            alt="Professional SEO Services"
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
                  <Search className="text-white" size={40} />
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight">
                    SEO Services
                  </h1>
                </div>
                <p className="text-xl md:text-2xl mb-2 leading-relaxed font-light text-white/90">
                  Best SEO Agency in Hertfordshire
                </p>
                <p className="text-lg mb-8 leading-relaxed text-white/80">
                  Get found on Google and attract more customers with proven SEO strategies
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="#foundation-pack" variant="secondary" size="lg" className="group">
                    View Foundation Pack
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                  <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                    Get Free SEO Audit
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Foundation Pack - Featured Section */}
      <section id="foundation-pack" className="w-full py-20 md:py-28 bg-gradient-to-br from-primary to-primary-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-white/20">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-accent text-white rounded-full text-sm font-bold mb-4">
                  MOST POPULAR
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-gray-900 mb-4">
                  SEO Foundation Pack
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Everything you need to dominate local search and attract more customers
                </p>
                <div className="flex items-baseline justify-center gap-2 mb-6">
                  <span className="text-5xl md:text-6xl font-black text-primary">£1,499</span>
                  <span className="text-xl text-gray-600">one-time</span>
                </div>
                <p className="text-sm text-gray-500">
                  Includes 3 months of ongoing support & monthly reporting
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {foundationPackFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button href="/contact" variant="primary" size="lg" className="group">
                  Get Started Today
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Start seeing results in 3-6 months or your money back
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our SEO Services */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-secondary to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Comprehensive SEO Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to rank higher on Google and attract more customers
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
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
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

      {/* Benefits Section */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Invest in SEO?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The benefits of professional SEO services for your business
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

      {/* Why Choose Us Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-secondary via-white to-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Why Choose Web-Smart for SEO
              </h2>
              <p className="text-lg text-gray-600">
                The best SEO agency in Hertfordshire
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border-2 border-gray-100"
                >
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Stats */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our SEO Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results for Hertfordshire businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: '200+', label: 'Successful Campaigns' },
              { stat: '10+', label: 'Years Experience' },
              { stat: '4.9', label: 'Average Rating' },
              { stat: '150%', label: 'Average Traffic Increase' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-secondary to-white rounded-2xl border-2 border-gray-100"
              >
                <div className="text-5xl md:text-6xl font-black text-primary mb-2">
                  {item.stat}
                </div>
                <div className="text-gray-600 font-medium">
                  {item.label}
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
            <img
              src="/images/services/Web-Design-1225.jpg"
              alt="Start Your SEO Campaign"
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
                Ready to Dominate Google?
              </h2>
              <p className="text-lg text-white/95 mb-8">
                Get a free SEO audit and discover how we can help you rank higher and attract more customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="secondary" size="lg" className="group">
                  Get Free SEO Audit
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
