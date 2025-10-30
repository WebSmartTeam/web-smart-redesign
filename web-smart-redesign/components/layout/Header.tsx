'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Globe, Search, FileText, MousePointerClick, ArrowRight, Sparkles, Grid3x3 } from 'lucide-react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Globe,
      title: 'Web Design',
      href: '/services/web-design',
    },
    {
      icon: Search,
      title: 'SEO Services',
      href: '/services/seo',
    },
    {
      icon: FileText,
      title: 'Content Writing',
      href: '/services/content-writing',
    },
    {
      icon: MousePointerClick,
      title: 'Google Ads',
      href: '/services/google-ads',
    },
    {
      icon: Sparkles,
      title: 'AI Projects',
      href: '/ai-projects',
    },
    {
      icon: Grid3x3,
      title: 'WordPress Development',
      href: '/contact',
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
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-screen max-w-5xl">
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
                        <div className="grid grid-cols-4 gap-4">
                          {/* Services Links - 3x2 Grid (3 columns) */}
                          <div className="col-span-3 grid grid-cols-3 gap-3">
                            {services.map((service) => {
                              const Icon = service.icon;
                              return (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  className="group p-3 rounded-xl hover:bg-secondary transition-all duration-300 flex flex-col items-center text-center"
                                >
                                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 mb-2">
                                    <Icon className="text-primary group-hover:text-white transition-colors" size={20} />
                                  </div>
                                  <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors text-xs leading-tight">
                                    {service.title}
                                  </h3>
                                </Link>
                              );
                            })}
                          </div>

                          {/* CTA Section - Right Side */}
                          <div className="col-span-1 bg-gradient-to-br from-primary to-primary-600 rounded-xl p-4 text-white flex flex-col items-center justify-center text-center">
                            <Sparkles className="mb-3" size={28} />
                            <h3 className="text-sm font-bold mb-2">
                              Get Started
                            </h3>
                            <Button
                              href="/contact"
                              variant="secondary"
                              size="sm"
                              className="w-full group text-xs"
                            >
                              Contact Us
                              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                            </Button>
                            <div className="mt-3 pt-3 border-t border-white/20 w-full">
                              <a
                                href="tel:01462544738"
                                className="flex items-center justify-center gap-1 text-xs font-semibold hover:text-white/90 transition-colors"
                              >
                                <Phone size={14} />
                                <span className="text-[10px]">01462 544738</span>
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
