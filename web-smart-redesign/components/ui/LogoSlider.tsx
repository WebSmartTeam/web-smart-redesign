'use client';

import React from 'react';
import { motion } from 'framer-motion';

const LogoSlider = () => {
  const logos = [
    { name: 'Microsoft Solutions Partner', src: '/images/partners/microsoft-solutions-partner.svg' },
    { name: 'OpenAI', src: '/images/partners/openai.svg' },
    { name: 'Claude AI', src: '/images/partners/claudai.svg' },
    { name: 'Eleven Labs', src: '/images/partners/eleven-labs.svg' },
    { name: 'Runway', src: '/images/partners/runway.svg' },
    { name: 'Google Cloud', src: '/images/partners/google-cloud.svg' },
    { name: 'Meta Partner', src: '/images/partners/meta-partner.svg' },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="w-full py-16 bg-gradient-to-br from-secondary to-white overflow-hidden">
      <div className="container-custom mb-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-2">
            Trusted AI & Technology Partners
          </h2>
          <p className="text-gray-600">
            Leveraging cutting-edge technology to deliver exceptional results
          </p>
        </div>
      </div>

      <div className="relative w-full">
        {/* Logo Slider Track */}
        <motion.div
          className="flex gap-12 md:gap-16"
          animate={{
            x: [0, -50 * logos.length + '%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 w-40 h-20 md:w-48 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoSlider;
