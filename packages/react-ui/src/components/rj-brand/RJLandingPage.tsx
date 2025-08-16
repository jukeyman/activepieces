import { motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Code,
  Globe,
  Rocket,
  Shield,
  Star,
  Users,
  Zap,
} from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import RJHeroSection from './RJHeroSection';
import { useRJBrand, useRJMetrics } from './RJBrandProvider';

// ═══════════════════════════════════════════════════════════════════════════════
// 🌟 RJ BUSINESS SOLUTIONS - LANDING PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export const RJLandingPage: React.FC = () => {
  const brand = useRJBrand();
  const { formatted: metrics } = useRJMetrics();

  const features = [
    {
      icon: Brain,
      title: 'AI-Native Architecture',
      description: 'Built from the ground up with artificial intelligence at its core, enabling intelligent automation and self-optimizing workflows.',
      benefits: ['Multi-Agent Systems', 'Real-Time Learning', 'Predictive Analytics'],
    },
    {
      icon: Rocket,
      title: 'Production-Ready Deployment',
      description: 'Zero-MVP philosophy ensures every deployment is enterprise-grade, scalable, and ready for immediate business impact.',
      benefits: ['Auto-Scaling', 'Load Balancing', '99.9% Uptime SLA'],
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade security with end-to-end encryption, compliance certifications, and advanced threat protection.',
      benefits: ['SOC 2 Type II', 'GDPR Compliant', 'Zero-Trust Architecture'],
    },
    {
      icon: Globe,
      title: 'Cloud-Agnostic Platform',
      description: 'Deploy seamlessly across AWS, GCP, and Azure with unified management and cross-cloud orchestration.',
      benefits: ['Multi-Cloud Support', 'Edge Computing', 'Global CDN'],
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechFlow Industries',
      company: 'Fortune 500',
      content: 'Rick Jefferson\'s Active Superposition platform transformed our entire automation strategy. We saw 300% ROI in the first quarter.',
      rating: 5,
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP of Operations',
      company: 'Global Manufacturing',
      content: 'The AI agents handle complex workflows that would have taken our team months to develop. Truly revolutionary technology.',
      rating: 5,
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Chief Innovation Officer',
      company: 'HealthTech Solutions',
      content: 'RJ Business Solutions delivered exactly what they promised - intelligent, executable, and profitable automation solutions.',
      rating: 5,
    },
  ];

  const pricingTiers = [
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Perfect for growing businesses ready to automate core processes',
      features: [
        'Up to 100 automations',
        'Multi-agent workflows',
        'Advanced analytics',
        'Email & chat support',
        'API access',
      ],
      popular: false,
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'Comprehensive solution for large organizations with complex needs',
      features: [
        'Unlimited automations',
        'Custom AI agents',
        'Dedicated infrastructure',
        '24/7 priority support',
        'Custom integrations',
        'SLA guarantees',
      ],
      popular: true,
    },
    {
      name: 'Custom',
      price: 'Contact Us',
      period: '',
      description: 'Tailored solutions for unique enterprise requirements',
      features: [
        'Bespoke development',
        'On-premise deployment',
        'Dedicated team',
        'Executive support',
        'Custom training',
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-rj-white">
      {/* Hero Section */}
      <RJHeroSection />

      {/* Features Section */}
      <section className="py-24 bg-rj-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-rj-headline font-bold text-rj-primary mb-6">
              Why Choose Active Superposition?
            </h2>
            <p className="text-xl text-rj-slate/80 font-rj-body max-w-3xl mx-auto">
              Built by Rick Jefferson, an AI Systems Architect with a proven track record of delivering 
              enterprise-grade solutions that scale intelligently and perform flawlessly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full border-rj-slate/10 hover:border-rj-accent/30 transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-rj-primary to-rj-accent rounded-2xl flex items-center justify-center mb-4">
                      <feature.icon className="w-8 h-8 text-rj-white" />
                    </div>
                    <CardTitle className="text-2xl font-rj-headline text-rj-primary">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-rj-slate/80 font-rj-body mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-rj-accent flex-shrink-0" />
                          <span className="text-rj-slate font-rj-body">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-rj-grid/5 to-rj-primary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-rj-headline font-bold text-rj-primary mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-rj-slate/80 font-rj-body max-w-3xl mx-auto">
              See how organizations across {metrics.industriesServed} industries have transformed 
              their operations with RJ Business Solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full bg-rj-white/80 backdrop-blur-sm border-rj-slate/10">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-rj-slate font-rj-body mb-6 italic">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="border-t border-rj-slate/10 pt-4">
                      <div className="font-rj-body font-semibold text-rj-primary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-rj-slate/70">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-rj-accent">
                        {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-rj-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-rj-headline font-bold text-rj-primary mb-6">
              Enterprise-Grade Pricing
            </h2>
            <p className="text-xl text-rj-slate/80 font-rj-body max-w-3xl mx-auto">
              Transparent pricing that scales with your success. No hidden fees, no surprises.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className={`h-full relative ${
                  tier.popular 
                    ? 'border-rj-accent/50 shadow-xl ring-2 ring-rj-accent/20' 
                    : 'border-rj-slate/10'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-rj-accent text-rj-white px-4 py-1 rounded-full text-sm font-rj-body font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl font-rj-headline text-rj-primary">
                      {tier.name}
                    </CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-rj-headline font-bold text-rj-slate">
                        {tier.price}
                      </span>
                      <span className="text-rj-slate/60 font-rj-body">
                        {tier.period}
                      </span>
                    </div>
                    <p className="text-rj-slate/80 font-rj-body mt-4">
                      {tier.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-rj-accent flex-shrink-0" />
                          <span className="text-rj-slate font-rj-body">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full font-rj-body font-semibold ${
                        tier.popular
                          ? 'bg-rj-accent hover:bg-rj-accent/90 text-rj-white'
                          : 'border-rj-accent text-rj-accent hover:bg-rj-accent hover:text-rj-white'
                      }`}
                      variant={tier.popular ? 'default' : 'outline'}
                    >
                      {tier.name === 'Custom' ? 'Contact Sales' : 'Get Started'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-rj-primary via-rj-accent to-rj-grid">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-rj-headline font-bold text-rj-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-rj-white/90 font-rj-body mb-12">
              Join {metrics.clientsServed} businesses that have already revolutionized their operations 
              with Rick Jefferson's AI-native automation platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Input
                type="email"
                placeholder="Enter your business email"
                className="max-w-md bg-rj-white/10 border-rj-white/20 text-rj-white placeholder:text-rj-white/60 font-rj-body"
              />
              <Button
                size="lg"
                className="bg-rj-white text-rj-primary hover:bg-rj-white/90 font-rj-body font-semibold px-8"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Contact Information */}
            <div className="border-t border-rj-white/20 pt-12">
              <p className="text-rj-white/80 font-rj-body mb-4">
                Ready to discuss your specific needs?
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-rj-white">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span className="font-rj-body">{brand.founder.name}, {brand.founder.title}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-rj-body">{brand.founder.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-rj-body">{brand.founder.email}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-rj-slate text-rj-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="mb-8">
              <img 
                src="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg" 
                alt="RJ Business Solutions Logo"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-xl font-rj-headline font-bold">
                {brand.companyName}
              </h3>
              <p className="text-rj-white/70 font-rj-body mt-2">
                {brand.mission}
              </p>
            </div>
            
            <div className="border-t border-rj-white/10 pt-8">
              <p className="text-rj-white/60 font-rj-body text-sm">
                © 2024 {brand.companyName}. All rights reserved. | 
                Built by {brand.founder.name} | 
                {brand.urls.website}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RJLandingPage;