'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Image as ImageIcon, Zap, Download, CheckCircle, ArrowRight, Palette, Wand2, Layers } from 'lucide-react';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';

const imageCategories = [
  {
    title: 'Business & Professional',
    description: 'Corporate headshots, office environments, team photos, and professional settings',
    icon: Sparkles,
    examples: ['Corporate Headshots', 'Office Spaces', 'Team Meetings', 'Professional Settings'],
  },
  {
    title: 'Marketing & Advertising',
    description: 'Eye-catching visuals for campaigns, social media, and promotional materials',
    icon: Palette,
    examples: ['Social Media Graphics', 'Ad Backgrounds', 'Hero Images', 'Product Mockups'],
  },
  {
    title: 'E-Commerce & Products',
    description: 'Product photography, lifestyle shots, and commercial imagery',
    icon: Layers,
    examples: ['Product Shots', 'Lifestyle Images', 'Background Scenes', 'Studio Settings'],
  },
  {
    title: 'Web Design Assets',
    description: 'Backgrounds, textures, patterns, and decorative elements',
    icon: Wand2,
    examples: ['Hero Backgrounds', 'Section Dividers', 'Textures', 'Abstract Patterns'],
  },
];

const benefits = [
  {
    icon: Zap,
    title: 'Instant Generation',
    description: 'Get professional images in seconds, not days',
  },
  {
    icon: ImageIcon,
    title: 'Unlimited Variations',
    description: 'Generate as many options as you need until perfect',
  },
  {
    icon: CheckCircle,
    title: 'Commercial Rights',
    description: 'Use images freely in your business and marketing',
  },
  {
    icon: Download,
    title: 'High Resolution',
    description: 'Download images in web-optimised or print-ready formats',
  },
];

export default function AIImagesPage() {
  const [email, setEmail] = useState('');
  const [imageRequest, setImageRequest] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && imageRequest) {
      setSubmitted(true);
      setTimeout(() => {
        alert(`Thank you! We&apos;ll create your custom AI images and send them to ${email}`);
        setEmail('');
        setImageRequest('');
        setSubmitted(false);
      }, 1000);
    }
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center -mt-[88px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/Web-Design-1662.jpg"
            alt="FREE AI Generated Images"
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight mb-6">
                  FREE AI Generated Images
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-white/90">
                  Professional, custom images for your business created instantly by artificial intelligence
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="#request-form" variant="secondary" size="lg" className="group">
                    Get Free Images
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                  <Button href="#how-it-works" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                    How It Works
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Create Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-secondary to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              What You Can Create
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI can generate professional images for any business need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {imageCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 bg-secondary text-primary text-sm font-semibold rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
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
              Why Choose AI Generated Images
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Save time and money while getting exactly what you need
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

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-20 md:py-28 bg-gradient-to-br from-secondary via-white to-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get professional AI images in three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Describe Your Image',
                description: 'Tell us what you need: subject, style, setting, mood, and any specific requirements',
              },
              {
                step: '02',
                title: 'AI Creates It',
                description: 'Our advanced AI generates multiple high-quality options based on your description',
              },
              {
                step: '03',
                title: 'Download & Use',
                description: 'Choose your favourite, download in high resolution, and use it in your business',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 relative"
              >
                <div className="text-6xl font-black text-primary/10 absolute top-4 right-4">
                  {step.step}
                </div>
                <div className="relative">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section id="request-form" className="w-full py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Request Your FREE AI Images
              </h2>
              <p className="text-lg text-gray-600">
                Describe what images you need and we&apos;ll create them for you
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-secondary to-white rounded-2xl p-8 md:p-12 border-2 border-gray-100 shadow-xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="imageRequest" className="block text-sm font-semibold text-gray-700 mb-2">
                    Describe Your Image Requirements *
                  </label>
                  <textarea
                    id="imageRequest"
                    value={imageRequest}
                    onChange={(e) => setImageRequest(e.target.value)}
                    placeholder="Example: I need 3 professional headshots of business people in an office setting, modern style, natural lighting..."
                    required
                    rows={6}
                    className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Be as specific as possible: subject, style, setting, colors, mood, etc.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div className="text-sm text-gray-600">
                      <strong className="text-gray-900">100% FREE</strong> - No credit card required. We&apos;ll email you the images within 24 hours.
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full group"
                  disabled={submitted}
                >
                  {submitted ? 'Sending...' : 'Get My FREE AI Images'}
                  {!submitted && <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-[10px] pb-[10px]">
        <div className="relative w-full py-20 md:py-28 text-white overflow-hidden rounded-3xl">
          <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
            <img
              src="/images/services/Web-Design-1225.jpg"
              alt="Need Custom Solutions?"
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
                Need More Than Just Images?
              </h2>
              <p className="text-lg text-white/95 mb-8">
                Our team can create complete websites, branding, and marketing materials tailored to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="secondary" size="lg" className="group">
                  Get In Touch
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button href="/services" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                  View Our Services
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
