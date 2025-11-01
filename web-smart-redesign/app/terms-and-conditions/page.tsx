'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import { FileText, Scale, AlertCircle, Shield, DollarSign, Ban, CheckCircle, Mail, Phone } from 'lucide-react';

export default function TermsAndConditionsPage() {
  const sections = [
    {
      icon: FileText,
      title: '1. Acceptance of Terms',
      content: [
        {
          subtitle: 'Agreement to Terms',
          text: 'By accessing and using the Web-Smart.Co website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.'
        },
        {
          subtitle: 'Changes to Terms',
          text: 'We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services following any changes constitutes acceptance of those changes.'
        }
      ]
    },
    {
      icon: Scale,
      title: '2. Services Provided',
      content: [
        {
          subtitle: 'Scope of Services',
          text: 'Web-Smart.Co provides web design, SEO services, content writing, digital marketing, Google Ads management, and related services as described on our website. Specific service details, timelines, and deliverables will be outlined in individual service agreements or proposals.'
        },
        {
          subtitle: 'Service Modifications',
          text: 'We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. We will not be liable to you or any third party for any modification, suspension, or discontinuance of services.'
        }
      ]
    },
    {
      icon: DollarSign,
      title: '3. Pricing and Payment',
      content: [
        {
          subtitle: 'Service Fees',
          text: 'Prices for our services are as quoted in proposals, invoices, or as displayed on our website. All prices are in GBP (£) and exclude VAT unless otherwise stated. We reserve the right to change our prices at any time.'
        },
        {
          subtitle: 'Payment Terms',
          text: 'Payment terms will be specified in individual service agreements. Typically, deposits may be required before work commences, with final payment due upon completion or according to agreed milestones. Late payments may incur interest charges.'
        },
        {
          subtitle: 'Refunds',
          text: 'Refund eligibility depends on the specific service purchased and the stage of project completion. Refund requests will be considered on a case-by-case basis. Work completed prior to cancellation is non-refundable.'
        }
      ]
    },
    {
      icon: Shield,
      title: '4. Intellectual Property Rights',
      content: [
        {
          subtitle: 'Website Content',
          text: 'All content on the Web-Smart.Co website, including text, graphics, logos, images, and software, is the property of Web-Smart.Co or its content suppliers and is protected by UK and international copyright laws.'
        },
        {
          subtitle: 'Client-Provided Content',
          text: 'You retain ownership of any content, materials, or information you provide to us. By providing content, you grant us a licence to use, reproduce, modify, and distribute the content solely for the purpose of providing our services to you.'
        },
        {
          subtitle: 'Work Product',
          text: 'Upon full payment for services, ownership of deliverables (such as website designs, content, etc.) transfers to you, subject to our retention of the right to use the work for portfolio and promotional purposes unless otherwise agreed in writing.'
        }
      ]
    },
    {
      icon: CheckCircle,
      title: '5. Client Responsibilities',
      content: [
        {
          subtitle: 'Information Accuracy',
          text: 'You are responsible for providing accurate, complete, and timely information necessary for us to perform our services. Delays or issues arising from incomplete or inaccurate information may impact project timelines and costs.'
        },
        {
          subtitle: 'Content Approval',
          text: 'You are responsible for reviewing and approving all deliverables. Once approved, you accept responsibility for the accuracy and appropriateness of the content. Additional changes after approval may incur extra charges.'
        },
        {
          subtitle: 'Third-Party Services',
          text: 'Some services may require third-party accounts (e.g., Google Analytics, hosting services). You are responsible for obtaining and maintaining these accounts and complying with their terms of service.'
        }
      ]
    },
    {
      icon: Ban,
      title: '6. Acceptable Use',
      content: [
        {
          subtitle: 'Prohibited Activities',
          text: 'You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our services. Prohibited activities include but are not limited to: distributing malware, spamming, infringing intellectual property rights, or engaging in fraudulent activities.'
        },
        {
          subtitle: 'Content Standards',
          text: 'Any content you provide or request us to create must comply with all applicable laws and regulations. We reserve the right to refuse service or remove content that we deem inappropriate, offensive, or illegal.'
        }
      ]
    },
    {
      icon: AlertCircle,
      title: '7. Disclaimers and Limitations of Liability',
      content: [
        {
          subtitle: 'Service Warranty',
          text: 'While we strive to provide high-quality services, we make no warranties or representations about the accuracy, reliability, or suitability of our services for your particular purposes. Our services are provided "as is" and "as available".'
        },
        {
          subtitle: 'Results Disclaimer',
          text: 'We cannot guarantee specific results from SEO services, digital marketing campaigns, or other performance-based services. Results depend on various factors beyond our control, including market conditions, competition, and search engine algorithms.'
        },
        {
          subtitle: 'Limitation of Liability',
          text: 'To the fullest extent permitted by law, Web-Smart.Co shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.'
        },
        {
          subtitle: 'Third-Party Services',
          text: 'We are not responsible for the performance, availability, or content of third-party services or websites. Any interactions with third-party services are at your own risk.'
        }
      ]
    },
    {
      icon: Shield,
      title: '8. Confidentiality',
      content: [
        {
          subtitle: 'Confidential Information',
          text: 'Both parties agree to keep confidential any proprietary or sensitive information disclosed during the course of our business relationship. This obligation survives the termination of our services.'
        },
        {
          subtitle: 'Exceptions',
          text: 'Confidentiality obligations do not apply to information that: (a) is publicly available, (b) was known prior to disclosure, (c) is independently developed, or (d) must be disclosed by law.'
        }
      ]
    },
    {
      icon: FileText,
      title: '9. Termination',
      content: [
        {
          subtitle: 'Termination by Client',
          text: 'You may terminate services at any time by providing written notice. You will be responsible for payment for all work completed up to the termination date, plus any non-refundable expenses incurred.'
        },
        {
          subtitle: 'Termination by Web-Smart.Co',
          text: 'We reserve the right to terminate or suspend services immediately if you breach these Terms and Conditions, fail to make payments, or engage in activities that we deem harmful to our business or reputation.'
        },
        {
          subtitle: 'Effect of Termination',
          text: 'Upon termination, your right to use our services ceases immediately. Provisions relating to intellectual property, confidentiality, disclaimers, and limitations of liability survive termination.'
        }
      ]
    },
    {
      icon: Scale,
      title: '10. Indemnification',
      content: [
        {
          subtitle: 'Client Indemnity',
          text: 'You agree to indemnify and hold harmless Web-Smart.Co, its directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from: (a) your breach of these Terms, (b) your use of our services, or (c) content you provide to us.'
        }
      ]
    },
    {
      icon: FileText,
      title: '11. Governing Law and Jurisdiction',
      content: [
        {
          subtitle: 'Applicable Law',
          text: 'These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales, without regard to conflict of law principles.'
        },
        {
          subtitle: 'Dispute Resolution',
          text: 'Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales. We encourage clients to contact us first to resolve any issues amicably.'
        }
      ]
    },
    {
      icon: CheckCircle,
      title: '12. General Provisions',
      content: [
        {
          subtitle: 'Entire Agreement',
          text: 'These Terms and Conditions, together with any written service agreements, constitute the entire agreement between you and Web-Smart.Co regarding the use of our services and supersede all prior agreements.'
        },
        {
          subtitle: 'Severability',
          text: 'If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.'
        },
        {
          subtitle: 'Waiver',
          text: 'Our failure to enforce any provision of these Terms shall not constitute a waiver of that provision or our right to enforce it in the future.'
        },
        {
          subtitle: 'Assignment',
          text: 'You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations to a third party at any time.'
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
                  <Scale className="w-12 h-12" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight">
                  Terms and Conditions
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-white/95">
                  Please read these terms carefully before using our services.
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
                Welcome to Web-Smart.Co. These Terms and Conditions (&quot;Terms&quot;) govern your use of our website <a href="https://web-smart.co" className="text-primary hover:text-primary-600">https://web-smart.co</a> and the services we provide. By accessing our website or engaging our services, you agree to comply with and be bound by these Terms.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Web-Smart.Co is a digital marketing and web design agency based at 52 Walsworth Rd, Hitchin, Hertfordshire SG4 9SX, UK. We specialise in web design, SEO services, content writing, Google Ads management, and digital marketing solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                These Terms apply to all users, visitors, and clients of Web-Smart.Co. Please read them carefully. If you have any questions, please contact us before using our services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
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
                Questions About Our Terms?
              </h2>
              <p className="text-lg text-white/95 mb-8 leading-relaxed">
                If you have any questions about these Terms and Conditions or need clarification on any aspect of our services, please don't hesitate to contact us:
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
                We're here to help clarify any questions you may have about working with Web-Smart.Co.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
