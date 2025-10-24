'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Star,
  Quote
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[850px] flex items-center mt-20">
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

                <p className="text-xl md:text-2xl mb-12 leading-relaxed font-light">
                  It all starts with a clean, slick web design that captures your brand and engages your audience.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons Section */}
      <section className="w-full bg-white py-12">
        <div className="container-custom">
          <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            >
              <Button href="/portfolio" variant="secondary" size="lg">
                See What We Can Build For You
              </Button>
              <Button href="/contact" variant="primary" size="lg">
                Tell Us About Your Project → Get a Quote
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="tel:01462544738"
                className="inline-flex items-center gap-2 px-6 py-3 text-base md:text-lg font-medium bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
              >
                🔥🔥 Leverage 25 Years of Expertise in 1 Call → Book Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full bg-white py-16 md:py-20">
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
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Combining beautiful design with effective SEO strategy to drive traffic and attract quality leads to your business.
            </p>
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
                title: 'Buzz Website',
                image: '/images/portfolio/buzz-website.jpg',
                category: 'Web Design',
              },
              {
                title: 'Branding & Design',
                image: '/images/portfolio/branding-website-design.jpg',
                category: 'Branding',
              },
              {
                title: 'Web Design Agency',
                image: '/images/portfolio/webdesign-cat-1024x682.jpg',
                category: 'Web Design',
              },
              {
                title: 'Hertfordshire Location',
                image: '/images/portfolio/webdesignagency-hertfordshire-location3.jpg',
                category: 'Local Business',
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button href="/portfolio" size="lg">
              View Full Portfolio
            </Button>
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
              className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary"
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
              <ul className="space-y-3 mb-8">
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
              <Button href="/services#static" variant="outline" className="w-full">
                Learn More
              </Button>
            </motion.div>

            {/* Self-Managed WordPress Package - FEATURED */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative bg-gradient-to-br from-primary to-primary-600 text-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute -top-3 -right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
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
              <ul className="space-y-3 mb-8">
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
              <Button href="/services#wordpress" variant="secondary" className="w-full">
                Learn More
              </Button>
            </motion.div>

            {/* Fully Managed & Bespoke Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary"
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
              <ul className="space-y-3 mb-8">
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
              <Button href="/services#bespoke" variant="outline" className="w-full">
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

          <div className="max-w-4xl mx-auto">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-primary',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
              }}
              navigation={true}
              className="testimonials-swiper pb-16"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex justify-center mb-6">
                      <Quote className="text-primary opacity-20" size={48} />
                    </div>

                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-accent fill-accent" size={20} />
                      ))}
                    </div>

                    <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-8 italic">
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

      {/* Final CTA Section */}
      <section className="w-full section-padding gradient-purple text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let&apos;s create a website that not only looks stunning but drives real results for your business. Get in touch today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="group"
              >
                Start Your Project Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <a
                href="tel:01462544738"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-white hover:text-primary transition-all duration-200"
              >
                Call 01462 544738
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
