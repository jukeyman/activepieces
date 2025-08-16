import { motion } from 'framer-motion';
import { ArrowRight, Zap, Brain, Rocket, Shield } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';

import { useRJBrand, useRJMetrics } from './RJBrandProvider';

// ═══════════════════════════════════════════════════════════════════════════════
// 🚀 RJ BUSINESS SOLUTIONS - HERO SECTION COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export const RJHeroSection: React.FC = () => {
  const brand = useRJBrand();
  const { formatted: metrics } = useRJMetrics();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rj-grid via-rj-primary to-rj-accent overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 rj-tech-grid opacity-20" />
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 text-rj-accent opacity-30"
        variants={floatingVariants}
        animate="animate"
      >
        <Brain size={40} />
      </motion.div>
      <motion.div 
        className="absolute top-40 right-20 text-rj-white opacity-20"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
      >
        <Zap size={50} />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-20 text-rj-accent opacity-25"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      >
        <Rocket size={35} />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Company Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-rj-white/10 backdrop-blur-sm rounded-full border border-rj-white/20">
              <Shield className="w-4 h-4 text-rj-accent mr-2" />
              <span className="text-rj-white font-rj-body text-sm font-medium">
                {brand.companyName} • Enterprise AI Solutions
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-rj-headline font-bold text-rj-white mb-6 leading-tight"
          >
            <span className="block">Active</span>
            <span className="block bg-gradient-to-r from-rj-accent to-rj-white bg-clip-text text-transparent">
              Superposition
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-rj-white/90 font-rj-body mb-4 max-w-4xl mx-auto"
          >
            {brand.tagline}
          </motion.p>

          {/* Mission Statement */}
          <motion.div 
            variants={itemVariants}
            className="mb-12"
          >
            <div className="inline-flex items-center px-6 py-3 bg-rj-accent/20 backdrop-blur-sm rounded-full border border-rj-accent/30">
              <span className="text-rj-white font-rj-body text-lg font-semibold tracking-wide">
                {brand.mission}
              </span>
            </div>
          </motion.div>

          {/* Founder Information */}
          <motion.div 
            variants={itemVariants}
            className="mb-12"
          >
            <p className="text-rj-white/80 font-rj-body text-lg mb-2">
              Founded by <span className="font-semibold text-rj-accent">{brand.founder.name}</span>
            </p>
            <p className="text-rj-white/70 font-rj-body">
              {brand.founder.title} • {brand.founder.phone} • {brand.founder.email}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              size="lg" 
              className="bg-rj-accent hover:bg-rj-accent/90 text-rj-white font-rj-body font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-rj-white/30 text-rj-white hover:bg-rj-white/10 font-rj-body font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              View Documentation
            </Button>
          </motion.div>

          {/* Metrics Dashboard */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center p-6 bg-rj-white/5 backdrop-blur-sm rounded-2xl border border-rj-white/10">
              <div className="text-3xl md:text-4xl font-rj-headline font-bold text-rj-accent mb-2">
                {metrics.clientsServed}
              </div>
              <div className="text-rj-white/70 font-rj-body text-sm">
                Businesses Engineered
              </div>
            </div>
            
            <div className="text-center p-6 bg-rj-white/5 backdrop-blur-sm rounded-2xl border border-rj-white/10">
              <div className="text-3xl md:text-4xl font-rj-headline font-bold text-rj-accent mb-2">
                {metrics.revenueGenerated}
              </div>
              <div className="text-rj-white/70 font-rj-body text-sm">
                Revenue Automated
              </div>
            </div>
            
            <div className="text-center p-6 bg-rj-white/5 backdrop-blur-sm rounded-2xl border border-rj-white/10">
              <div className="text-3xl md:text-4xl font-rj-headline font-bold text-rj-accent mb-2">
                {metrics.successRate}
              </div>
              <div className="text-rj-white/70 font-rj-body text-sm">
                Success Rate
              </div>
            </div>
            
            <div className="text-center p-6 bg-rj-white/5 backdrop-blur-sm rounded-2xl border border-rj-white/10">
              <div className="text-3xl md:text-4xl font-rj-headline font-bold text-rj-accent mb-2">
                {metrics.industriesServed}
              </div>
              <div className="text-rj-white/70 font-rj-body text-sm">
                Industries Served
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rj-white to-transparent" />
    </div>
  );
};

export default RJHeroSection;