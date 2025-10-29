'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, TrendingUp, Target, BarChart, DollarSign, ArrowRight, Zap, Award, Users } from 'lucide-react';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';

export default function GoogleAdsPage() {
  const services = [
    { icon: Target, title: 'Campaign Setup', description: 'Professional Google Ads account setup and campaign structure', color: 'bg-blue-500' },
    { icon: BarChart, title: 'Performance Optimization', description: 'Continuous monitoring and optimization for maximum ROI', color: 'bg-green-500' },
    { icon: DollarSign, title: 'Budget Management', description: 'Strategic budget allocation to maximize your advertising spend', color: 'bg-purple-500' },
    { icon: TrendingUp, title: 'Conversion Tracking', description: 'Advanced tracking to measure and improve conversion rates', color: 'bg-orange-500' },
    { icon: MousePointerClick, title: 'Keyword Research', description: 'In-depth keyword analysis to target the right audience', color: 'bg-red-500' },
    { icon: BarChart, title: 'Reporting & Analytics', description: 'Detailed monthly reports showing your campaign performance', color: 'bg-indigo-500' },
  ];

  return (
    <>
      <Header />
      <section className="relative w-full min-h-[500px] flex items-center -mt-[88px]">
        <div className="absolute inset-0 z-0">
          <img src="/images/services/Web-Design-1662.jpg" alt="Google Ads Management" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
        </div>
        <div className="relative z-10 w-full py-24 md:py-32 pt-32 md:pt-40">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center text-white">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <MousePointerClick className="text-white" size={40} />
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight">Google Ads Management</h1>
                </div>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-white/90">
                  Get instant visibility and quality leads with professionally managed Google Ads campaigns
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Our Google Ads Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Complete PPC management to drive targeted traffic and increase sales</p>
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
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Why Choose Our PPC Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: 'Instant Results', description: 'Start getting traffic and leads immediately' },
              { icon: Target, title: 'Targeted Reach', description: 'Reach customers actively searching for your services' },
              { icon: Award, title: 'Expert Management', description: 'Google Ads certified specialists managing your campaigns' },
              { icon: Users, title: 'Quality Leads', description: 'Attract high-intent customers ready to buy' },
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
            <img src="/images/services/Web-Design-1225.jpg" alt="Start Your Campaign" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/75"></div>
          </div>
          <div className="relative z-10 container-custom">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">Ready to Start Advertising?</h2>
              <p className="text-lg text-white/95 mb-8">Get quality leads and instant visibility with professionally managed Google Ads</p>
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
