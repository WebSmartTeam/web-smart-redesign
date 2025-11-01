'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Shield,
      title: '1. Information We Collect',
      content: [
        {
          subtitle: 'Personal Information',
          text: 'When you use our services or contact us, we may collect personal information including but not limited to: your name, email address, phone number, company name, postal address, and any other information you choose to provide.'
        },
        {
          subtitle: 'Technical Information',
          text: 'We automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages visited. This helps us improve our website and services.'
        },
        {
          subtitle: 'Cookies and Tracking',
          text: 'We use cookies and similar tracking technologies to enhance your browsing experience, analyse website traffic, and understand user preferences. You can control cookie settings through your browser.'
        }
      ]
    },
    {
      icon: Lock,
      title: '2. How We Use Your Information',
      content: [
        {
          subtitle: 'Service Delivery',
          text: 'We use your personal information to provide, maintain, and improve our web design, SEO, content writing, and digital marketing services. This includes communicating with you about your projects and delivering the services you request.'
        },
        {
          subtitle: 'Communication',
          text: 'We may use your contact information to send you service updates, marketing communications (with your consent), respond to enquiries, and provide customer support.'
        },
        {
          subtitle: 'Analytics and Improvement',
          text: 'We analyse usage data to understand how our website and services are used, identify areas for improvement, and develop new features and services.'
        }
      ]
    },
    {
      icon: Eye,
      title: '3. Data Sharing and Disclosure',
      content: [
        {
          subtitle: 'Third-Party Service Providers',
          text: 'We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you. These parties are contractually obligated to keep your information confidential.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required by law, court order, or governmental regulation, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, your personal information may be transferred to the acquiring entity. We will notify you of any such change in ownership.'
        }
      ]
    },
    {
      icon: FileText,
      title: '4. Your Data Protection Rights (GDPR)',
      content: [
        {
          subtitle: 'Access and Portability',
          text: 'You have the right to request access to the personal data we hold about you and to receive a copy of your data in a structured, commonly used, and machine-readable format.'
        },
        {
          subtitle: 'Correction and Deletion',
          text: 'You can request correction of inaccurate personal data and deletion of your personal data, subject to certain legal obligations that may require us to retain specific information.'
        },
        {
          subtitle: 'Objection and Restriction',
          text: 'You have the right to object to processing of your personal data and to request restriction of processing in certain circumstances, such as while we verify the accuracy of your data.'
        },
        {
          subtitle: 'Withdraw Consent',
          text: 'Where we rely on your consent to process your personal data, you have the right to withdraw that consent at any time. This will not affect the lawfulness of processing before withdrawal.'
        }
      ]
    },
    {
      icon: Lock,
      title: '5. Data Security',
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. This includes encryption, secure servers, and access controls.'
        },
        {
          subtitle: 'Data Retention',
          text: 'We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.'
        },
        {
          subtitle: 'Breach Notification',
          text: 'In the unlikely event of a data breach that affects your personal information, we will notify you and relevant authorities in accordance with applicable data protection laws.'
        }
      ]
    },
    {
      icon: Mail,
      title: '6. Cookies and Tracking Technologies',
      content: [
        {
          subtitle: 'Essential Cookies',
          text: 'These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.'
        },
        {
          subtitle: 'Analytics Cookies',
          text: 'We use analytics cookies (such as Google Analytics) to understand how visitors interact with our website. This helps us improve user experience and website performance.'
        },
        {
          subtitle: 'Marketing Cookies',
          text: 'With your consent, we may use marketing cookies to track your browsing habits and deliver personalised advertisements and content that may be of interest to you.'
        },
        {
          subtitle: 'Managing Cookies',
          text: 'You can control and manage cookies through your browser settings. Please note that disabling certain cookies may impact the functionality of our website.'
        }
      ]
    },
    {
      icon: Shield,
      title: '7. Third-Party Links',
      content: [
        {
          subtitle: 'External Websites',
          text: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.'
        }
      ]
    },
    {
      icon: FileText,
      title: '8. Children\'s Privacy',
      content: [
        {
          subtitle: 'Age Restrictions',
          text: 'Our services are not intended for children under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.'
        }
      ]
    },
    {
      icon: Lock,
      title: '9. International Data Transfers',
      content: [
        {
          subtitle: 'Data Processing',
          text: 'Your personal information may be transferred to and processed in countries outside the UK and European Economic Area (EEA). We ensure appropriate safeguards are in place to protect your data in accordance with UK GDPR and data protection laws.'
        }
      ]
    },
    {
      icon: Mail,
      title: '10. Changes to This Privacy Policy',
      content: [
        {
          subtitle: 'Policy Updates',
          text: 'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on this page with a revised "Last Updated" date.'
        },
        {
          subtitle: 'Your Continued Use',
          text: 'Your continued use of our website and services after any changes to this Privacy Policy constitutes your acceptance of the updated policy.'
        }
      ]
    }
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] flex items-center -mt-[88px] bg-gradient-to-br from-primary to-primary-600">
        <div className="relative z-10 w-full py-24 md:py-32 pt-32 md:pt-40">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Shield className="w-12 h-12" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight">
                  Privacy Policy
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-white/95">
                  Your privacy is important to us. Learn how we collect, use, and protect your personal information.
                </p>
                <p className="text-sm text-white/90">
                  Last Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Web-Smart.Co (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://web-smart.co" className="text-primary hover:text-primary-600">https://web-smart.co</a> or use our services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are located at 52 Walsworth Rd, Hitchin, Hertfordshire SG4 9SX, UK, and comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By using our website and services, you consent to the data practices described in this Privacy Policy. If you do not agree with this policy, please do not use our website or services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Sections */}
      {sections.map((section, index) => (
        <section
          key={index}
          className={`w-full py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                    {section.title}
                  </h2>
                </div>

                {/* Section Content */}
                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <section className="w-full py-16 bg-gradient-to-br from-primary to-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Questions About Your Privacy?
              </h2>
              <p className="text-lg text-white/95 mb-8 leading-relaxed">
                If you have any questions about this Privacy Policy, wish to exercise your data protection rights, or have concerns about how we handle your personal information, please contact us:
              </p>

              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Mail className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:enquiries@web-smart.co" className="text-white/90 hover:text-white">
                    enquiries@web-smart.co
                  </a>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a href="tel:01462544738" className="text-white/90 hover:text-white">
                    01462 544738
                  </a>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <FileText className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-white/90 text-sm">
                    52 Walsworth Rd<br />
                    Hitchin, Hertfordshire<br />
                    SG4 9SX, UK
                  </p>
                </div>
              </div>

              <p className="text-sm text-white/80 mt-8">
                You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO), the UK supervisory authority for data protection issues.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
