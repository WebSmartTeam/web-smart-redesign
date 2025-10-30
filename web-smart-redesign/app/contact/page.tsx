'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Header from '@/components/layout/Header';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '01462 544738',
      href: 'tel:01462544738',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'enquiries@web-smart.co',
      href: 'mailto:enquiries@web-smart.co',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '52 Walsworth Rd, Hitchin, Hertfordshire SG4 9SX, UK',
      href: 'https://maps.google.com/?q=52+Walsworth+Rd+Hitchin+Hertfordshire+SG4+9SX+UK',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Monday - Friday: 09:00 - 18:00',
      href: null,
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
            src="/images/portfolio/webdesignagency-hertfordshire-location3.jpg"
            alt="Contact Us"
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
                  Get In Touch
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-white/90">
                  Let&apos;s discuss how we can help your business grow
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl border-2 border-gray-100 p-8">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                      placeholder="01462 544738"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="web-design">Web Design</option>
                      <option value="seo">SEO Services</option>
                      <option value="content">Content Writing</option>
                      <option value="google-ads">Google Ads</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info and Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group bg-gradient-to-br from-secondary to-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-14 h-14 bg-primary group-hover:scale-110 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300">
                        <Icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.icon === MapPin ? '_blank' : undefined}
                          rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                          className="text-gray-600 hover:text-primary transition-colors text-sm"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm">{info.content}</p>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Google Map */}
              <div className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.8776!2d-0.2849!3d51.9488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDU2JzU1LjciTiAwwrAxNycwNS42Ilc!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Web-Smart.Co Office Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
