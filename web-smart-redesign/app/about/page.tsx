'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, Award, TrendingUp } from 'lucide-react';
import Button from '@/components/ui/Button';
import Header from '@/components/layout/Header';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that help your business grow and succeed online.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our priority. We work closely with you to understand your goals and deliver solutions that exceed expectations.',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every project, ensuring professional, high-quality deliverables.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'We stay ahead of digital trends and technologies to provide cutting-edge solutions for your business.',
    },
  ];

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '200+', label: 'Happy Clients' },
    { value: '500+', label: 'Projects Completed' },
    { value: '4.9/5', label: 'Client Rating' },
  ];

  return (
    <>
      {/* Hero Section with Background Image and Header */}
      <section className="relative w-full min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/ai-seo-strategy.jpg"
            alt="About Web-Smart.Co"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-600/90"></div>
        </div>

        {/* Header - Inside Hero Section */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header />
        </div>

        <div className="relative z-10 w-full py-32 md:py-40">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight">
                  About Web-Smart.Co
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-white/90">
                  Your trusted digital marketing and web design partner in Hertfordshire
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Best SEO Agency in Hertfordshire
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Based in Hitchin, Hertfordshire, Web-Smart.Co has been helping local businesses succeed online for over 10 years. We specialise in SEO, web design, content writing, and Google Ads management.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our mission is simple: to help your business grow through effective digital marketing strategies and stunning web design that converts visitors into customers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We understand the local Hertfordshire market and know what it takes to stand out in competitive industries. Our team combines technical expertise with creative flair to deliver exceptional results.
              </p>
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
                alt="Web-Smart.Co Team"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-secondary to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-lg text-gray-600">
              Numbers that showcase our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-black text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-secondary to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-primary transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-secondary to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Meet Pete Gypps
            </h2>
            <p className="text-lg text-gray-600">
              Founder and Lead Digital Strategist
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/team/petegypps-4.jpg"
                    alt="Pete Gypps"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Pete Gypps
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    Founder & Digital Strategist
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    With over 10 years of experience in digital marketing and web design, Pete has helped hundreds of businesses across Hertfordshire establish and grow their online presence.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    His expertise spans SEO, web design, content strategy, and paid advertising, making him a trusted partner for businesses looking to succeed online.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-[10px] pb-[10px]">
        <div className="relative w-full py-20 md:py-28 text-white overflow-hidden rounded-3xl">
          <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/services/Web-Design-1225.jpg"
              alt="Work With Us"
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
                Ready to Work Together?
              </h2>
              <p className="text-lg text-white/95 mb-8">
                Let&apos;s discuss how we can help your business grow online.
              </p>
              <Button href="/contact" variant="secondary" size="lg" className="group">
                Get In Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
