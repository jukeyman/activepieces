/**
 * RJ Business Solutions Brand Constants
 * Design system tokens and business information
 */

import { RJColorPalette, RJTypography, RJSpacing, RJBreakpoints, RJAnimation, RJBusinessInfo } from './types';

export const RJ_COLORS: RJColorPalette = {
  // Primary Brand Colors
  primary: '#003D91',           // Primary Blue
  accent: '#1455D1',            // Royal Accent Blue
  white: '#FFFFFF',             // White
  slate: '#2F3E4D',             // Slate Gray
  grid: '#0E1C2F',              // Digital Grid Overlay
  
  // Extended Palette
  primaryLight: '#1B4DAA',      // Lighter Primary
  primaryDark: '#002A66',       // Darker Primary
  accentLight: '#3D6FD8',       // Lighter Accent
  accentDark: '#0F3FB5',        // Darker Accent
  slateLight: '#475569',        // Lighter Slate
  slateDark: '#1E293B',         // Darker Slate
  
  // Functional Colors
  success: '#10B981',           // Success Green
  warning: '#F59E0B',           // Warning Orange
  error: '#EF4444',             // Error Red
  info: '#3B82F6',              // Info Blue
  
  // Neutral Colors
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',
  
  // Background Colors
  background: '#FFFFFF',
  backgroundDark: '#0E1C2F',
  backgroundGrid: 'radial-gradient(circle at 2px 2px, rgba(20, 85, 209, 0.15) 1px, transparent 0)',
  
  // Gradient Colors
  gradientPrimary: 'linear-gradient(135deg, #003D91 0%, #1455D1 50%, #0E1C2F 100%)',
  gradientAccent: 'linear-gradient(135deg, #1455D1 0%, #003D91 100%)',
  gradientTech: 'linear-gradient(135deg, #0E1C2F 0%, #2F3E4D 100%)',
};

export const RJ_TYPOGRAPHY: RJTypography = {
  // Font Families
  fontFamilies: {
    headline: ['DM Serif Display', 'Inter Tight', 'serif'],
    body: ['DM Sans', 'Open Sans', 'sans-serif'],
    code: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
  },
  
  // Font Sizes (rem)
  fontSizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },
  
  // Font Weights
  fontWeights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  
  // Line Heights
  lineHeights: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
  
  // Letter Spacing
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
  },
};

export const RJ_SPACING: RJSpacing = {
  // Base spacing unit (rem)
  base: '0.25rem', // 4px
  
  // Spacing scale
  '0': '0',
  '1': '0.25rem',   // 4px
  '2': '0.5rem',    // 8px
  '3': '0.75rem',   // 12px
  '4': '1rem',      // 16px
  '5': '1.25rem',   // 20px
  '6': '1.5rem',    // 24px
  '8': '2rem',      // 32px
  '10': '2.5rem',   // 40px
  '12': '3rem',     // 48px
  '16': '4rem',     // 64px
  '20': '5rem',     // 80px
  '24': '6rem',     // 96px
  '32': '8rem',     // 128px
  '40': '10rem',    // 160px
  '48': '12rem',    // 192px
  '56': '14rem',    // 224px
  '64': '16rem',    // 256px
};

export const RJ_BREAKPOINTS: RJBreakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const RJ_ANIMATIONS: RJAnimation = {
  // Duration
  durations: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '750ms',
  },
  
  // Easing
  easings: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    expandOut: 'cubic-bezier(0.35, 0, 0.25, 1)',
  },
  
  // Keyframes
  keyframes: {
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    slideInUp: {
      '0%': { transform: 'translateY(100%)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    slideInRight: {
      '0%': { transform: 'translateX(-100%)', opacity: '0' },
      '100%': { transform: 'translateX(0)', opacity: '1' },
    },
    pulse: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.5' },
    },
    spin: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    techGrid: {
      '0%': { backgroundPosition: '0% 0%' },
      '50%': { backgroundPosition: '100% 100%' },
      '100%': { backgroundPosition: '0% 0%' },
    },
  },
};

export const RJ_BUSINESS_INFO: RJBusinessInfo = {
  // Company Information
  companyName: 'RJ Business Solutions',
  platformName: 'Active Superposition',
  tagline: 'AI-Native Automation & Multi-Agent Framework Platform',
  mission: 'Intelligent. Executable. Profitable.',
  
  // Founder Information
  founder: {
    name: 'Rick Jefferson',
    title: 'AI Systems Architect | Agent Framework Engineer | Full-Stack Code Commander',
    email: 'rick@rjbizsolution.com',
    phone: '+1 877-561-8001',
    headshot: 'https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb81d6379294532defac26.jpeg',
  },
  
  // Business Metrics
  metrics: {
    businessesServed: 500,
    revenueGenerated: 50000000,
    industriesOptimized: 25,
    uptimeSLA: 99.9,
  },
  
  // Contact Information
  contact: {
    website: 'https://rjbusiness.io',
    email: 'rick@rjbizsolution.com',
    phone: '+1 877-561-8001',
    address: {
      street: '1342 NM 333, Ste C5254',
      city: 'Tijeras',
      state: 'New Mexico',
      zip: '87059',
      country: 'United States',
    },
    social: {
      linkedin: 'https://www.linkedin.com/in/rick-jefferson-314998235/',
      github: 'https://github.com/rjbizsolution23-wq',
      twitter: 'https://twitter.com/rjbizsolutions',
      youtube: 'https://youtube.com/@rjbizsolutions',
      instagram: 'https://www.instagram.com/rickjeffsolutions',
      facebook: 'https://www.facebook.com/RICKJEFFERSON1123',
    },
  },
  
  // Brand Assets
  assets: {
    logo: 'https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg',
    logoIcon: 'https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg',
    favicon: 'https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg',
    headshot: 'https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb81d6379294532defac26.jpeg',
    teaching: 'https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb81d6c5f22a035fb5c9ed.jpeg',
    clientPic: 'https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb81d6c5f22ac9beb5c9ec.jpeg',
  },
};