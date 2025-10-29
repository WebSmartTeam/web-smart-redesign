'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Sparkles, Users, Globe, TrendingUp, ArrowRight, Zap, Target, Award } from 'lucide-react';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';

export default function ContentWritingPage() {
  const services = [
    { icon: FileText, title: 'Website Copy', description: 'Compelling copy that converts visitors into customers', color: 'bg-blue-500' },
    { icon: Sparkles, title: 'AI-Generated Content', description: 'Fast, SEO-optimized content powered by artificial intelligence', color: 'bg-purple-500' },
    { icon: TrendingUp, title: 'Blog Posts', description: 'Engaging blog articles that attract and retain readers', color: 'bg-green-500' },
    { icon: Globe, title: 'SEO Content', description: 'Content optimized to rank higher on search engines', color: 'bg-orange-500' },
    { icon: Users, title: 'Social Media Copy', description: 'Engaging posts for Facebook, LinkedIn, Twitter and more', color: 'bg-red-500' },
    { icon: Target, title: 'Product Descriptions', description: 'Persuasive descriptions that boost e-commerce sales', color: 'bg-indigo-500' },
  ];

  return (
    <>
      <Header />
      <section className="relative w-full min-h-[500px] flex items-center -mt-[88px]">
        <div className="absolute inset-0 z-0">
          <img src="/images/services/Web-Design-1662.jpg" alt="Professional Content Writing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
        </div>
        <div className="relative z-10 w-full py-24 md:py-32 pt-32 md:pt-40">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center text-white">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <FileText className="text-white" size={40} />
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight">Content Writing Services</h1>
                </div>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-white/90">
                  Professional content that engages, informs, and converts
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact" variant="secondary" size="lg" className="group">
                    Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                  <Button href="#services" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">View Services</Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-20 md:py-28 bg-gradient-to-br from-secondary to-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Our Content Writing Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From AI-powered content to traditional copywriting, we create content that works</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Why Choose Our Content Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: 'Fast Turnaround', description: 'Get quality content quickly with our efficient process' },
              { icon: Target, title: 'SEO Optimized', description: 'All content optimized for search engines' },
              { icon: Award, title: 'Professional Quality', description: 'Expert writers and AI-powered perfection' },
              { icon: Users, title: 'Audience Focused', description: 'Content tailored to your target audience' },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full px-[10px] pb-[10px]">
        <div className="relative w-full py-20 md:py-28 text-white overflow-hidden rounded-3xl">
          <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
            <img src="/images/services/Web-Design-1225.jpg" alt="Start Your Content Project" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/75"></div>
          </div>
          <div className="relative z-10 container-custom">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">Ready for Professional Content?</h2>
              <p className="text-lg text-white/95 mb-8">Let&apos;s create content that engages your audience and drives results</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="secondary" size="lg" className="group">
                  Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button href="tel:01462544738" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">Call 01462 544738</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
