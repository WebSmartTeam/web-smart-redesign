'use client';

import React from 'react';
import { motion } from 'framer-motion';

const LogoSlider = () => {
  const logos = [
    { name: 'Microsoft Solutions Partner', src: '/images/partners/microsoft-solutions-partner.png' },
    { name: 'OpenAI', src: '/images/partners/openai.png' },
    { name: 'Claude AI', src: '/images/partners/claudai.png' },
    { name: 'Eleven Labs', src: '/images/partners/eleven-labs.png' },
    { name: 'Runway', src: '/images/partners/runway.png' },
    { name: 'Google Cloud', src: '/images/partners/google-cloud.svg' },
    { name: 'Meta Partner', src: '/images/partners/meta-partner.svg' },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="w-full py-8 bg-gradient-to-br from-secondary to-white overflow-hidden">
      <div className="relative w-full">
        {/* Logo Slider Track */}
        <motion.div
          className="flex gap-6 md:gap-12 lg:gap-16"
          animate={{
            x: ['-50%', '0%'],
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
              className="flex-shrink-0 w-24 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
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
