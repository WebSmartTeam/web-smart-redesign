'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Cpu, Zap } from 'lucide-react';
import Header from '@/components/layout/Header';

// AI-Generated Netlify Projects
const aiProjects = [
  {
    title: 'DY-Cut',
    slug: 'dy-cut',
    image: '/images/portfolio/dy-cut.jpg',
    category: 'Industrial & Manufacturing',
    url: 'https://dy-cut.netlify.app',
    description: 'Precision cutting services website built with AI-powered design',
  },
  {
    title: 'DH Plumbing',
    slug: 'dh-plumbing',
    image: '/images/portfolio/dh-plumbing.jpg',
    category: 'Plumbing & Heating',
    url: 'https://dh-plumbing.netlify.app',
    description: 'Professional plumbing services site created using AI technology',
  },
  {
    title: 'A1 Cars',
    slug: 'a1-cars',
    image: '/images/portfolio/a1-cars.jpg',
    category: 'Automotive',
    url: 'https://a1-cars.netlify.app',
    description: 'Car dealership website designed with AI assistance',
  },
  {
    title: 'Optima Accountancy',
    slug: 'optima-accountancy',
    image: '/images/portfolio/optima-accountancy.jpg',
    category: 'Financial Services',
    url: 'https://optima-accountancy.netlify.app',
    description: 'Professional accountancy firm website built with AI',
  },
  {
    title: 'Newstart Financial',
    slug: 'newstart-financial',
    image: '/images/portfolio/newstart-financial.jpg',
    category: 'Financial Services',
    url: 'https://newstart-financial.netlify.app',
    description: 'Financial services website created using AI-powered tools',
  },
  {
    title: 'Arba Studios',
    slug: 'arba-studios',
    image: '/images/portfolio/arba-studios.jpg',
    category: 'Creative & Design',
    url: 'https://arba-studios.netlify.app',
    description: 'Creative studio portfolio site designed with AI',
  },
  {
    title: 'Brikform Construction',
    slug: 'brikform-construction',
    image: '/images/portfolio/brikform-construction.jpg',
    category: 'Construction & Building',
    url: 'https://brikform-construction.netlify.app',
    description: 'Construction company website built with AI technology',
  },
  {
    title: 'Copper Box',
    slug: 'copper-box',
    image: '/images/portfolio/copper-box.jpg',
    category: 'E-commerce & Retail',
    url: 'https://copper-box.netlify.app',
    description: 'E-commerce platform created using AI-powered design',
  },
  {
    title: 'Henlow Parish Council',
    slug: 'henlow-pc',
    image: '/images/portfolio/henlow-pc.jpg',
    category: 'Community & Government',
    url: 'https://henlow-pc-gov-uk.netlify.app',
    description: 'Government website designed with AI assistance',
  },
  {
    title: 'Hewitt Day',
    slug: 'hewittday',
    image: '/images/portfolio/hewittday.jpg',
    category: 'Professional Services',
    url: 'https://hewittday.netlify.app',
    description: 'Professional services site built with AI technology',
  },
  {
    title: 'SDL Solutions',
    slug: 'sdlsolutions',
    image: '/images/portfolio/sdlsolutions.jpg',
    category: 'Technology & IT',
    url: 'https://sdlsolutions.netlify.app',
    description: 'IT solutions website created with AI-powered tools',
  },
  {
    title: 'Demso',
    slug: 'demso',
    image: '/images/portfolio/demso.jpg',
    category: 'Professional Services',
    url: 'https://demso.netlify.app',
    description: 'Business services platform designed with AI',
  },
  {
    title: 'Rayners School',
    slug: 'rayners-school',
    image: '/images/portfolio/rayners-school.jpg',
    category: 'Education',
    url: 'https://rayners-school.netlify.app',
    description: 'Educational institution website built with AI',
  },
  {
    title: 'My Jennco',
    slug: 'myjennco',
    image: '/images/portfolio/myjennco.jpg',
    category: 'Professional Services',
    url: 'https://myjennco.netlify.app',
    description: 'Business website created using AI technology',
  },
  {
    title: 'Digital Brains Henlow',
    slug: 'digital-brains-henlow',
    image: '/images/portfolio/digital-brains-henlow.jpg',
    category: 'Technology & IT',
    url: 'https://digital-brains-henlow.netlify.app',
    description: 'Digital marketing agency site designed with AI',
  },
  {
    title: 'Bar Stop',
    slug: 'bar-stop',
    image: '/images/portfolio/bar-stop.jpg',
    category: 'Hospitality & Food',
    url: 'https://bar-stop.netlify.app',
    description: 'Restaurant and bar website built with AI assistance',
  },
  {
    title: 'Visitor Aware',
    slug: 'visitor-aware',
    image: '/images/portfolio/visitor-aware.jpg',
    category: 'Security & Safety',
    url: 'https://visitor-aware.netlify.app',
    description: 'Security management platform created with AI',
  },
  {
    title: 'Hitchin Market',
    slug: 'hitchinmarket',
    image: '/images/portfolio/hitchinmarket.jpg',
    category: 'Community & Government',
    url: 'https://hitchinmarket-aug.netlify.app',
    description: 'Community marketplace website designed with AI',
  },
  {
    title: 'Admiral Welding',
    slug: 'admiral-welding',
    image: '/images/portfolio/admiral-welding.jpg',
    category: 'Industrial & Manufacturing',
    url: 'https://admiral-welding.netlify.app',
    description: 'Welding services site built with AI technology',
  },
  {
    title: 'LawData',
    slug: 'lawdata',
    image: '/images/portfolio/lawdata.jpg',
    category: 'Professional Services',
    url: 'https://lawdata.netlify.app',
    description: 'Legal technology platform created with AI',
  },
  {
    title: 'Home Heating Scheme',
    slug: 'homeheatingscheme',
    image: '/images/portfolio/homeheatingscheme.jpg',
    category: 'Plumbing & Heating',
    url: 'https://homeheatingscheme.netlify.app',
    description: 'Heating services website designed with AI',
  },
  {
    title: 'WWBA',
    slug: 'wwba',
    image: '/images/portfolio/wwba.jpg',
    category: 'Community & Government',
    url: 'https://wwba.netlify.app',
    description: 'Business association site built with AI assistance',
  },
  {
    title: 'Cycle Dealia',
    slug: 'cycledealia',
    image: '/images/portfolio/cycledealia.jpg',
    category: 'E-commerce & Retail',
    url: 'https://cycledealia.netlify.app',
    description: 'Bicycle e-commerce platform created with AI',
  },
  {
    title: 'Enhance Cosmetics Solutions',
    slug: 'enhancecosmeticssolutions',
    image: '/images/portfolio/enhancecosmeticssolutions.jpg',
    category: 'Beauty & Cosmetics',
    url: 'https://enhancecosmeticssolutions.netlify.app',
    description: 'Beauty services website designed with AI technology',
  },
  {
    title: 'Bulldog Steel Fabrications',
    slug: 'bulldogsteelfabrications',
    image: '/images/portfolio/bulldogsteelfabrications.jpg',
    category: 'Industrial & Manufacturing',
    url: 'https://bulldogsteelfabrications.netlify.app',
    description: 'Steel fabrication company site built with AI',
  },
];

// Extract unique categories
const categories = ['All', ...Array.from(new Set(aiProjects.map(p => p.category)))];

export default function AIProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? aiProjects
    : aiProjects.filter(project => project.category === activeCategory);

  return (
    <>
      {/* Header - Sticky throughout site */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center -mt-[88px]">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/Web-Design-1662.jpg"
            alt="AI-Powered Projects"
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
                  AI-Powered Projects
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-white/90">
                  25+ websites created using cutting-edge AI technology
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Demo Video Section */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto rounded-2xl"
                  poster="/images/services/ai-seo-strategy.jpg"
                >
                  <source src="/videos/ai-services-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                See Our AI-Powered Solutions in Action
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Watch how we leverage cutting-edge artificial intelligence to create stunning, high-performance websites for businesses across Hertfordshire and beyond.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our AI-powered approach combines the best of machine learning, automated design systems, and intelligent content generation to deliver exceptional results in record time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From initial concept to final deployment, see how our AI technology transforms ideas into professional, conversion-optimized websites that help businesses grow online.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Benefits Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-secondary to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why AI-Powered Web Design?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leveraging artificial intelligence to create stunning, high-performance websites faster and more efficiently
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border-2 border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                AI-powered design and development reduces project timeline by 60%
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border-2 border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                Smart Design
              </h3>
              <p className="text-gray-600">
                AI analyzes best practices to create optimized, conversion-focused layouts
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 border-2 border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                Cost Effective
              </h3>
              <p className="text-gray-600">
                AI automation reduces development costs while maintaining premium quality
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-secondary to-white">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our AI-Generated Websites
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Explore our portfolio of 25+ professional websites created using AI-powered design and development
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Count */}
          <p className="text-center text-gray-600 mb-8">
            Showing {filteredProjects.length} AI-powered project{filteredProjects.length !== 1 ? 's' : ''}
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white border-2 border-gray-100 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Image with padding and rounded corners */}
                <div className="p-6 pb-0">
                  <div className="aspect-video overflow-hidden rounded-xl relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* AI Badge */}
                    <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Sparkles size={12} />
                      AI
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-4 flex flex-col flex-grow">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 bg-secondary text-primary text-xs font-semibold rounded-full mb-3 self-start uppercase tracking-wide">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* CTA - Aligned to bottom */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary font-semibold hover:text-primary-600 transition-colors text-sm mt-auto"
                  >
                    View Live Site
                    <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
