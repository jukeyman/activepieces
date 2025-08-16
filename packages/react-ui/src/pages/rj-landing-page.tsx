/**
 * RJ Business Solutions Active Superposition - Landing Page
 * Professional marketing page with enterprise positioning and conversion optimization
 */

import React from 'react';
import { motion } from 'framer-motion';
import { 
  RJHeroBanner, 
  RJStatsSection, 
  RJFeatureGrid, 
  RJCallToAction,
  RJTestimonials,
  RJContactCard,
  RJContainer,
  RJSection
} from '@/components/rj-brand';
import { RJ_BUSINESS_INFO } from '@/components/rj-brand/constants';

const RJLandingPage: React.FC = () => {
  const { founder, metrics, contact } = RJ_BUSINESS_INFO;

  // Feature data for AI automation platform
  const platformFeatures = [
    {
      title: 'AI-Native Automation',
      description: 'Multi-agent systems with CrewAI, LangChain, and Reflexion frameworks for autonomous business operations.',
      icon: '🤖',
    },
    {
      title: 'Enterprise Scaling',
      description: 'Production-ready infrastructure with Docker, Kubernetes, and cloud-native deployments across AWS, GCP, Azure.',
      icon: '☁️',
    },
    {
      title: 'Real-Time Intelligence',
      description: 'Vector databases, predictive analytics, and memory-embedded decision loops for intelligent automation.',
      icon: '⚡',
    },
    {
      title: 'Zero-MVP Philosophy',
      description: 'Only production-grade, enterprise-ready solutions. No prototypes, only scalable digital infrastructure.',
      icon: '🏆',
    },
    {
      title: 'Full-Stack Mastery',
      description: 'Python, JavaScript, Go, Rust across frontend, backend, data engineering, and AI framework development.',
      icon: '💻',
    },
    {
      title: 'Revenue-Focused Results',
      description: 'Every system is designed to generate measurable business value and ROI for sustainable growth.',
      icon: '📈',
    },
  ];

  // Client testimonials
  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'CTO, TechFlow Industries',
      company: 'Fortune 500 Manufacturing',
      quote: 'Rick transformed our entire automation infrastructure. We saw 300% efficiency gains and $2M in cost savings within 6 months.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612e2e0?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Michael Rodriguez',
      title: 'VP of Operations',
      company: 'Global Logistics Corp',
      quote: 'The Active Superposition platform handles our complex supply chain automation flawlessly. Rick delivers exactly what he promises.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Jennifer Park',
      title: 'Chief Data Officer',
      company: 'FinTech Innovations',
      quote: 'Rick\'s AI agents process millions of transactions daily with 99.9% accuracy. The ROI has been phenomenal.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
  ];

  // Key metrics for hero section
  const heroStats = [
    {
      label: 'Businesses Engineered',
      value: `${metrics.businessesServed}+`,
      icon: '🏢',
      description: 'Enterprise clients across 25+ industries',
    },
    {
      label: 'Revenue Generated',
      value: `$${(metrics.revenueGenerated / 1000000).toFixed(0)}M+`,
      icon: '💰',
      description: 'In automated revenue for clients',
    },
    {
      label: 'Industries Optimized',
      value: `${metrics.industriesOptimized}+`,
      icon: '🚀',
      description: 'Sectors transformed with AI automation',
    },
    {
      label: 'Uptime SLA',
      value: `${metrics.uptimeSLA}%`,
      icon: '⚡',
      description: 'Enterprise-grade reliability guarantee',
    },
  ];

  // Service tiers
  const serviceTiers = [
    {
      name: 'AI Automation Audit',
      price: '$5,000',
      description: 'Comprehensive analysis of your automation opportunities',
      features: [
        'Business Process Analysis',
        'AI Readiness Assessment',
        'ROI Projections',
        '30-Day Implementation Roadmap',
        'Technology Stack Recommendations',
      ],
      cta: 'Schedule Audit',
      popular: false,
    },
    {
      name: 'Active Superposition Platform',
      price: '$25,000/month',
      description: 'Full platform deployment with ongoing optimization',
      features: [
        'Complete Platform Setup',
        'Custom AI Agent Development',
        'Multi-Cloud Deployment',
        '24/7 Monitoring & Support',
        'Monthly Performance Reviews',
        'Unlimited Workflow Automation',
      ],
      cta: 'Deploy Platform',
      popular: true,
    },
    {
      name: 'Enterprise AI Transformation',
      price: 'Custom Pricing',
      description: 'Organization-wide AI automation implementation',
      features: [
        'Enterprise Architecture Design',
        'Multi-Department Integration',
        'Custom AI Model Development',
        'Staff Training & Certification',
        'Dedicated Success Manager',
        'White-Label Solutions Available',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <RJHeroBanner
        title="Active Superposition"
        subtitle="AI-Native Automation Platform"
        description="Transform your business with Rick Jefferson's production-ready AI automation platform. No MVPs, only enterprise-grade solutions that scale intelligently and deliver measurable ROI."
        ctaText="Deploy Your Platform"
        ctaAction={() => window.open('https://rjbusiness.io/get-started', '_blank')}
        backgroundVariant="gradient"
        showMetrics={true}
      />

      {/* Founder Introduction */}
      <RJSection className="py-20 bg-gray-50">
        <RJContainer>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={founder.headshot}
                alt={founder.name}
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-rj-headline font-bold text-rj-primary mb-6">
                Meet Rick Jefferson
              </h2>
              <p className="text-xl text-rj-slate mb-6 leading-relaxed">
                AI Systems Architect, Agent Framework Engineer, and Full-Stack Code Commander who transforms 
                businesses through intelligent automation.
              </p>
              <p className="text-lg text-rj-slate mb-8 leading-relaxed">
                With expertise spanning Python, JavaScript, Go, and cutting-edge AI frameworks like CrewAI, 
                LangChain, and Reflexion, Rick builds production-ready systems that scale intelligently and 
                deliver measurable business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-rj-accent hover:bg-rj-accentDark text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                  View Portfolio
                </button>
                <button className="border-2 border-rj-primary text-rj-primary hover:bg-rj-primary hover:text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                  Download Resume
                </button>
              </div>
            </motion.div>
          </div>
        </RJContainer>
      </RJSection>

      {/* Features Section */}
      <RJSection className="py-20">
        <RJContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-rj-headline font-bold text-rj-primary mb-6">
              Why Choose Active Superposition?
            </h2>
            <p className="text-xl text-rj-slate max-w-3xl mx-auto">
              Built on Rick Jefferson's proven methodology of intelligent, executable, and profitable AI solutions.
            </p>
          </motion.div>

          <RJFeatureGrid
            title="Platform Capabilities"
            description="Enterprise-grade features for intelligent automation"
            features={platformFeatures}
            variant="cards"
          />
        </RJContainer>
      </RJSection>

      {/* Stats Section */}
      <RJSection className="py-20 bg-rj-grid rj-tech-grid text-white">
        <RJContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-rj-headline font-bold mb-6">
              Proven Track Record
            </h2>
            <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Numbers that matter: Real results from enterprise deployments.
            </p>
          </motion.div>

          <RJStatsSection
            stats={heroStats}
            variant="cards"
            columns={4}
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20"
          />
        </RJContainer>
      </RJSection>

      {/* Testimonials */}
      <RJSection className="py-20 bg-gray-50">
        <RJContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-rj-headline font-bold text-rj-primary mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-rj-slate max-w-3xl mx-auto">
              Hear from enterprise leaders who've transformed their operations with Active Superposition.
            </p>
          </motion.div>

          <RJTestimonials testimonials={testimonials} />
        </RJContainer>
      </RJSection>

      {/* Pricing Section */}
      <RJSection className="py-20">
        <RJContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-rj-headline font-bold text-rj-primary mb-6">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-rj-slate max-w-3xl mx-auto">
              Professional services designed for businesses ready to scale with AI automation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  'relative bg-white rounded-2xl shadow-lg p-8 border-2',
                  tier.popular ? 'border-rj-accent scale-105' : 'border-gray-200'
                )}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-rj-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-rj-headline font-bold text-rj-primary mb-4">
                  {tier.name}
                </h3>
                <div className="text-3xl font-bold text-rj-slate mb-2">
                  {tier.price}
                </div>
                <p className="text-rj-slate mb-6">
                  {tier.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-rj-accent mr-2">✓</span>
                      <span className="text-rj-slate">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={cn(
                    'w-full py-3 rounded-xl font-semibold transition-colors',
                    tier.popular
                      ? 'bg-rj-accent hover:bg-rj-accentDark text-white'
                      : 'border-2 border-rj-primary text-rj-primary hover:bg-rj-primary hover:text-white'
                  )}
                >
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </RJContainer>
      </RJSection>

      {/* Contact Section */}
      <RJSection className="py-20 bg-rj-primary text-white">
        <RJContainer>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-rj-headline font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white text-opacity-90 mb-8 leading-relaxed">
                Let's discuss how Active Superposition can automate your operations, 
                scale your business, and deliver measurable ROI through intelligent AI systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-rj-accent hover:bg-rj-accentDark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-rj-primary px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
                  View Case Studies
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <RJContactCard
                showAvatar={true}
                showSocial={true}
                variant="card"
                className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20"
              />
            </motion.div>
          </div>
        </RJContainer>
      </RJSection>

      {/* Final CTA */}
      <RJCallToAction
        title="Start Your AI Transformation Today"
        description="Join 500+ businesses that have automated their operations and scaled with intelligent systems."
        primaryCta="Deploy Active Superposition"
        secondaryCta="Schedule Discovery Call"
        onPrimaryClick={() => window.open('https://rjbusiness.io/deploy', '_blank')}
        onSecondaryClick={() => window.open('https://rjbusiness.io/consultation', '_blank')}
      />
    </div>
  );
};

export default RJLandingPage;