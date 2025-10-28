'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, Award, TrendingUp, Star, Quote } from 'lucide-react';
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

  const testimonials = [
    {
      name: 'Sarah Thompson',
      business: 'Thompson & Associates',
      location: 'Hitchin',
      rating: 5,
      text: 'Web-Smart transformed our online presence completely. The SEO Foundation Pack delivered results within 3 months—we\'re now ranking on page 1 for our key terms.',
    },
    {
      name: 'James Miller',
      business: 'Miller Property Services',
      location: 'Stevenage',
      rating: 5,
      text: 'Outstanding service from start to finish. Our new WordPress website is beautiful, fast, and easy to manage. Highly recommend Web-Smart to any business in Hertfordshire.',
    },
    {
      name: 'Emma Clarke',
      business: 'Clarke\'s Boutique',
      location: 'Letchworth',
      rating: 5,
      text: 'We needed an e-commerce solution that could grow with our business. Web-Smart delivered exactly that. Sales have increased by 40% since launch.',
    },
    {
      name: 'David Richards',
      business: 'Richards Accounting',
      location: 'Baldock',
      rating: 5,
      text: 'Professional, knowledgeable, and always willing to go the extra mile. The SEO improvements have brought us consistent new enquiries every week.',
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
            src="/images/services/Web-Design-1225.jpg"
            alt="About Us"
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight">
                  About Us
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-white/90">
                  Your trusted digital partner in Hertfordshire
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
                    src="/images/team/linkedin-profile-image2.jpg"
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

      {/* Testimonials Section */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it—hear from businesses we&apos;ve helped across Hertfordshire
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <Quote className="text-primary" size={24} />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Client Info */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-heading font-bold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.business}
                  </p>
                  <p className="text-xs text-primary font-medium mt-1">
                    {testimonial.location}, Hertfordshire
                  </p>
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
