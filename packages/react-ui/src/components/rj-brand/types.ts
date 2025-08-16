/**
 * RJ Business Solutions Brand Type Definitions
 * TypeScript interfaces and types for the brand design system
 */

export interface RJColorPalette {
  // Primary Brand Colors
  primary: string;
  accent: string;
  white: string;
  slate: string;
  grid: string;
  
  // Extended Palette
  primaryLight: string;
  primaryDark: string;
  accentLight: string;
  accentDark: string;
  slateLight: string;
  slateDark: string;
  
  // Functional Colors
  success: string;
  warning: string;
  error: string;
  info: string;
  
  // Neutral Colors
  gray50: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
  
  // Background Colors
  background: string;
  backgroundDark: string;
  backgroundGrid: string;
  
  // Gradient Colors
  gradientPrimary: string;
  gradientAccent: string;
  gradientTech: string;
}

export interface RJTypography {
  fontFamilies: {
    headline: string[];
    body: string[];
    code: string[];
  };
  fontSizes: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
    '7xl': string;
  };
  fontWeights: {
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
    extrabold: string;
  };
  lineHeights: {
    tight: string;
    normal: string;
    relaxed: string;
  };
  letterSpacing: {
    tight: string;
    normal: string;
    wide: string;
    wider: string;
  };
}

export interface RJSpacing {
  base: string;
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '8': string;
  '10': string;
  '12': string;
  '16': string;
  '20': string;
  '24': string;
  '32': string;
  '40': string;
  '48': string;
  '56': string;
  '64': string;
}

export interface RJBreakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

export interface RJAnimation {
  durations: {
    fast: string;
    normal: string;
    slow: string;
    slower: string;
  };
  easings: {
    linear: string;
    easeIn: string;
    easeOut: string;
    easeInOut: string;
    bounce: string;
    expandOut: string;
  };
  keyframes: {
    fadeIn: Record<string, any>;
    slideInUp: Record<string, any>;
    slideInRight: Record<string, any>;
    pulse: Record<string, any>;
    spin: Record<string, any>;
    techGrid: Record<string, any>;
  };
}

export interface RJBusinessInfo {
  companyName: string;
  platformName: string;
  tagline: string;
  mission: string;
  
  founder: {
    name: string;
    title: string;
    email: string;
    phone: string;
    headshot: string;
  };
  
  metrics: {
    businessesServed: number;
    revenueGenerated: number;
    industriesOptimized: number;
    uptimeSLA: number;
  };
  
  contact: {
    website: string;
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
    social: {
      linkedin: string;
      github: string;
      twitter: string;
      youtube: string;
      instagram: string;
      facebook: string;
    };
  };
  
  assets: {
    logo: string;
    logoIcon: string;
    favicon: string;
    headshot: string;
    teaching: string;
    clientPic: string;
  };
}

export interface RJBrandConfig {
  colors: RJColorPalette;
  typography: RJTypography;
  spacing: RJSpacing;
  breakpoints: RJBreakpoints;
  animations: RJAnimation;
  businessInfo: RJBusinessInfo;
}

// Component Props Types
export interface RJBrandProviderProps {
  children: React.ReactNode;
  config?: Partial<RJBrandConfig>;
}

export interface RJButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface RJCardProps {
  variant?: 'default' | 'elevated' | 'outline' | 'tech';
  padding?: keyof RJSpacing;
  children: React.ReactNode;
  className?: string;
}

export interface RJHeroBannerProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaAction?: () => void;
  backgroundVariant?: 'gradient' | 'tech' | 'solid';
  showMetrics?: boolean;
  className?: string;
}

export interface RJStatsProps {
  stats: Array<{
    label: string;
    value: string | number;
    icon?: React.ReactNode;
    description?: string;
  }>;
  variant?: 'default' | 'minimal' | 'cards';
  columns?: 2 | 3 | 4;
  className?: string;
}

export interface RJFeatureProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  features: Array<{
    title: string;
    description: string;
    icon?: React.ReactNode;
  }>;
  variant?: 'grid' | 'list' | 'cards';
  className?: string;
}

export interface RJContactCardProps {
  showAvatar?: boolean;
  showSocial?: boolean;
  variant?: 'card' | 'inline' | 'minimal';
  className?: string;
}

export interface RJAIAgentCardProps {
  name: string;
  description: string;
  status: 'active' | 'idle' | 'processing' | 'error';
  metrics?: {
    tasksCompleted: number;
    accuracy: number;
    uptime: number;
  };
  actions?: Array<{
    label: string;
    action: () => void;
  }>;
  className?: string;
}

export interface RJMetricsDisplayProps {
  metrics: Array<{
    key: string;
    label: string;
    value: number | string;
    unit?: string;
    trend?: 'up' | 'down' | 'neutral';
    trendValue?: number;
  }>;
  variant?: 'dashboard' | 'compact' | 'detailed';
  refreshInterval?: number;
  className?: string;
}

// Hook Types
export interface UseRJBrandReturn {
  colors: RJColorPalette;
  typography: RJTypography;
  spacing: RJSpacing;
  breakpoints: RJBreakpoints;
  animations: RJAnimation;
  businessInfo: RJBusinessInfo;
}

export interface UseRJMetricsReturn {
  metrics: RJBusinessInfo['metrics'];
  formatCurrency: (amount: number) => string;
  formatNumber: (num: number) => string;
  formatPercentage: (num: number) => string;
}

// Animation Types
export type RJAnimationType = 
  | 'fadeIn' 
  | 'slideInUp' 
  | 'slideInRight' 
  | 'pulse' 
  | 'spin' 
  | 'techGrid';

export type RJAnimationDuration = 'fast' | 'normal' | 'slow' | 'slower';
export type RJAnimationEasing = 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' | 'bounce' | 'expandOut';

// Theme Types
export type RJTheme = 'light' | 'dark' | 'auto';

export interface RJThemeConfig {
  theme: RJTheme;
  colors: RJColorPalette;
  typography: RJTypography;
}

// Responsive Types
export type RJResponsiveValue<T> = T | Partial<Record<keyof RJBreakpoints, T>>;

// Grid Types
export interface RJGridProps {
  columns?: RJResponsiveValue<number>;
  gap?: keyof RJSpacing;
  children: React.ReactNode;
  className?: string;
}

// Container Types
export interface RJContainerProps {
  maxWidth?: keyof RJBreakpoints | 'full';
  padding?: keyof RJSpacing;
  center?: boolean;
  children: React.ReactNode;
  className?: string;
}