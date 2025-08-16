/**
 * RJ Business Solutions Hero Banner Component
 * Professional hero section with RJ branding and animations
 */

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { RJ_BUSINESS_INFO } from './constants';
import { RJButton } from './rj-button';
import { RJStatsSection } from './rj-stats-section';
import { RJHeroBannerProps } from './types';

export const RJHeroBanner: React.FC<RJHeroBannerProps> = ({
  title,
  subtitle,
  description,
  ctaText = 'Get Started',
  ctaAction,
  backgroundVariant = 'gradient',
  showMetrics = true,
  className,
}) => {
  const { founder, metrics, tagline } = RJ_BUSINESS_INFO;

  const backgroundClasses = {
    gradient: 'bg-gradient-to-br from-rj-primary via-rj-accent to-rj-grid rj-tech-grid',
    tech: 'bg-rj-grid rj-tech-grid',
    solid: 'bg-rj-primary',
  };

  const heroStats = [
    {
      label: 'Businesses Engineered',
      value: `${metrics.businessesServed}+`,
      icon: '🏢',
    },
    {
      label: 'Revenue Generated',
      value: `$${(metrics.revenueGenerated / 1000000).toFixed(0)}M+`,
      icon: '💰',
    },
    {
      label: 'Industries Optimized',
      value: `${metrics.industriesOptimized}+`,
      icon: '🚀',
    },
    {
      label: 'Uptime SLA',
      value: `${metrics.uptimeSLA}%`,
      icon: '⚡',
    },
  ];

  return (
    <section className={cn(
      'relative min-h-screen flex items-center justify-center overflow-hidden',
      backgroundClasses[backgroundVariant],
      className
    )}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Founder Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white border-opacity-20"
          >
            <img
              src={founder.headshot}
              alt={founder.name}
              className="w-8 h-8 rounded-full mr-3"
            />
            <span className="text-sm font-rj-body font-medium">
              {founder.name}, {founder.title.split('|')[0].trim()}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-rj-headline font-bold mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-rj-body font-semibold mb-6 text-rj-accent"
          >
            {subtitle}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl font-rj-body font-medium mb-8 text-white text-opacity-90"
          >
            {tagline}
          </motion.p>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg font-rj-body mb-12 text-white text-opacity-80 max-w-3xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <RJButton
              variant="accent"
              size="lg"
              onClick={ctaAction}
              className="bg-rj-accent hover:bg-rj-accentDark text-white px-8 py-4 text-lg font-semibold"
            >
              {ctaText}
            </RJButton>
            <RJButton
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-rj-primary px-8 py-4 text-lg font-semibold"
            >
              Learn More
            </RJButton>
          </motion.div>

          {/* Stats Section */}
          {showMetrics && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <RJStatsSection
                stats={heroStats}
                variant="cards"
                columns={4}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20"
              />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Animated Elements */}
      <motion.div
        className="absolute top-20 left-10 w-2 h-2 bg-rj-accent rounded-full opacity-60"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-3 h-3 bg-white rounded-full opacity-40"
        animate={{
          y: [-10, 10, -10],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-1 h-1 bg-rj-accent rounded-full opacity-80"
        animate={{
          x: [-5, 5, -5],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default RJHeroBanner;