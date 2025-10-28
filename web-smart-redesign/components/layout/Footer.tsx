import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Web Design', href: '/services#web-design' },
    { name: 'SEO Services', href: '/services#seo' },
    { name: 'Content Writing', href: '/services#content' },
    { name: 'Google Ads', href: '/services#google-ads' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-20 h-20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logos/ape-face0defined-transparent-1-1011x1024.png"
                  alt="Web-Smart.Co"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Best SEO Agency in Hertfordshire. We specialise in web design, SEO services, content writing, and digital marketing solutions for local businesses.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:01462544738"
                  className="flex items-start gap-3 text-sm hover:text-white transition-colors duration-200"
                >
                  <Phone size={18} className="mt-1 flex-shrink-0" />
                  <span>01462 544738</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:enquiries@web-smart.co"
                  className="flex items-start gap-3 text-sm hover:text-white transition-colors duration-200"
                >
                  <Mail size={18} className="mt-1 flex-shrink-0" />
                  <span>enquiries@web-smart.co</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  52 Walsworth Rd,<br />
                  Hitchin, Hertfordshire<br />
                  SG4 9SX, UK
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <span>
                  Monday-Friday<br />
                  09:00-18:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>
              &copy; {currentYear} Web-Smart.Co. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
              <p className="flex items-center gap-1">
                Designed by <span className="text-red-500">❤</span>{' '}
                <a
                  href="https://aidan.systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-white font-semibold transition-colors"
                >
                  AiDan.Systems
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
