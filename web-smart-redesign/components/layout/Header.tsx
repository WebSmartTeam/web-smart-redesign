'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Globe, Search, MousePointerClick, ArrowRight, Sparkles, Grid3x3 } from 'lucide-react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set Web Design as active when mega menu opens
  useEffect(() => {
    if (isServicesOpen) {
      setActiveService(0); // Set first item (Web Design) as active
    } else {
      setActiveService(null); // Reset when menu closes
    }
  }, [isServicesOpen]);

  const services = [
    {
      icon: Globe,
      title: 'Web Design',
      href: '/services',
    },
    {
      icon: Search,
      title: 'SEO Services',
      href: '/services',
    },
    {
      icon: MousePointerClick,
      title: 'Google Ads',
      href: '/services',
    },
    {
      icon: Sparkles,
      title: 'AI Projects',
      href: '/ai-projects',
    },
    {
      icon: Grid3x3,
      title: 'WordPress Development',
      href: '/services',
    },
  ];

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services', hasMegaMenu: true },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 w-full transition-all duration-300 px-4 z-50">
      <div
        className={cn(
          'mx-auto max-w-[1600px] transition-all duration-300 rounded-b-2xl px-4 sm:px-6 lg:px-8',
          isScrolled
            ? 'bg-white shadow-lg py-1'
            : 'bg-white/95 backdrop-blur-sm py-2'
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-16 h-16">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logos/ape-face0defined-transparent-1-1011x1024.png"
                alt="Web-Smart.Co"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation and CTA - Right Side */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Navigation Links */}
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.hasMegaMenu && setIsServicesOpen(true)}
                  onMouseLeave={() => link.hasMegaMenu && setIsServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </Link>

                  {/* Mega Menu */}
                  {link.hasMegaMenu && isServicesOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-screen max-w-2xl">
                      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6">
                        <div className="grid grid-cols-[auto_260px] gap-4">
                          {/* Services Links - Single Column */}
                          <div className="flex flex-col gap-1.5">
                            {services.map((service, index) => {
                              const IconComponent = service.icon;
                              const isActive = activeService === index;
                              return (
                                <Link
                                  key={service.href + service.title}
                                  href={service.href}
                                  onMouseEnter={() => setActiveService(index)}
                                  className={cn(
                                    "relative py-3 px-4 rounded-lg transition-all duration-300 flex items-center gap-3 border border-transparent overflow-hidden",
                                    isActive ? "border-primary/20" : "hover:border-primary/20"
                                  )}
                                >
                                  {/* Animated Background */}
                                  <div className={cn(
                                    "absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/30 transition-all duration-300",
                                    isActive ? "opacity-100" : "opacity-0"
                                  )} />

                                  {/* Content */}
                                  <IconComponent className={cn(
                                    "w-5 h-5 transition-all duration-300 flex-shrink-0 relative z-10",
                                    isActive ? "text-primary scale-110" : "text-primary"
                                  )} />
                                  <span className={cn(
                                    "font-medium transition-all duration-300 text-sm relative z-10",
                                    isActive ? "text-gray-900" : "text-gray-700"
                                  )}>
                                    {service.title}
                                  </span>
                                  <ArrowRight className={cn(
                                    "w-4 h-4 transition-all duration-300 ml-auto relative z-10",
                                    isActive ? "text-primary opacity-100 translate-x-0" : "text-primary opacity-0 -translate-x-2"
                                  )} />
                                </Link>
                              );
                            })}
                          </div>

                          {/* CTA Section - Right Side */}
                          <div className="bg-gradient-to-br from-primary to-primary-600 rounded-lg p-6 text-white flex flex-col justify-between h-full">
                            <div>
                              <h3 className="text-lg font-bold mb-2">
                                Need Help?
                              </h3>
                              <p className="text-sm text-white/95 mb-6 leading-relaxed">
                                Get in touch with our team for expert advice
                              </p>
                            </div>
                            <div className="space-y-3">
                              <Button
                                href="/contact"
                                variant="secondary"
                                size="sm"
                                className="w-full group justify-center"
                              >
                                Contact Us
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                              </Button>
                              <a
                                href="tel:01462544738"
                                className="flex items-center justify-center gap-2 text-sm font-semibold hover:text-white/90 transition-colors py-2"
                              >
                                <Phone size={16} />
                                01462 544738
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 ml-4">
              <a
                href="tel:01462544738"
                className="flex items-center gap-2 text-primary font-semibold hover:text-primary-600 transition-colors"
              >
                <Phone size={18} />
                <span>01462 544738</span>
              </a>
              <Button href="/contact" size="md">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-primary hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-3 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-primary font-medium py-2 px-4 rounded-lg hover:bg-secondary transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:01462544738"
                className="flex items-center gap-2 text-primary font-semibold py-2 px-4"
              >
                <Phone size={18} />
                <span>01462 544738</span>
              </a>
              <Button href="/contact" size="md" className="mt-2">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
