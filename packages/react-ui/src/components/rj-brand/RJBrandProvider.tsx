import React, { createContext, useContext, ReactNode } from 'react';

// ═══════════════════════════════════════════════════════════════════════════════
// 🎨 RJ BUSINESS SOLUTIONS - BRAND PROVIDER COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
// 
// Rick Jefferson - AI Systems Architect | Full-Stack Developer
// Phone: +1 877-561-8001 | Email: rick@rjbizsolution.com
// Website: rjbusiness.io | Mission: Intelligent. Executable. Profitable.
// ═══════════════════════════════════════════════════════════════════════════════

interface RJBrandConfig {
  // Brand Identity
  companyName: string;
  platformName: string;
  tagline: string;
  mission: string;
  
  // Contact Information
  founder: {
    name: string;
    title: string;
    phone: string;
    email: string;
  };
  
  // Brand Colors (RJ Brand Guidelines)
  colors: {
    primary: string;           // #003D91 - Primary Blue
    accent: string;            // #1455D1 - Royal Accent Blue
    white: string;             // #FFFFFF - White
    slate: string;             // #2F3E4D - Slate Gray
    grid: string;              // #0E1C2F - Digital Grid Overlay
  };
  
  // Typography System
  fonts: {
    headline: string[];        // DM Serif Display, Inter Tight
    body: string[];            // DM Sans, Open Sans
    code: string[];            // JetBrains Mono, IBM Plex Mono
  };
  
  // Business Metrics
  metrics: {
    clientsServed: number;     // 500+
    revenueGenerated: number;  // $50M+
    successRate: number;       // 100%
    industriesServed: number;  // 25+
  };
  
  // URLs and Links
  urls: {
    website: string;
    documentation: string;
    support: string;
    github: string;
    linkedin: string;
  };
}

const defaultRJBrandConfig: RJBrandConfig = {
  companyName: 'RJ Business Solutions',
  platformName: 'Active Superposition',
  tagline: 'AI-Native Automation & Multi-Agent Framework Platform',
  mission: 'Intelligent. Executable. Profitable.',
  
  founder: {
    name: 'Rick Jefferson',
    title: 'AI Systems Architect',
    phone: '+1 877-561-8001',
    email: 'rick@rjbizsolution.com',
  },
  
  colors: {
    primary: '#003D91',
    accent: '#1455D1',
    white: '#FFFFFF',
    slate: '#2F3E4D',
    grid: '#0E1C2F',
  },
  
  fonts: {
    headline: ['DM Serif Display', 'Inter Tight', 'serif'],
    body: ['DM Sans', 'Open Sans', 'sans-serif'],
    code: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
  },
  
  metrics: {
    clientsServed: 500,
    revenueGenerated: 50000000,
    successRate: 100,
    industriesServed: 25,
  },
  
  urls: {
    website: 'https://rjbusiness.io',
    documentation: 'https://docs.active-superposition.rjbusiness.io',
    support: 'mailto:rick@rjbizsolution.com',
    github: 'https://github.com/rjbizsolution23-wq',
    linkedin: 'https://www.linkedin.com/in/rick-jefferson-314998235/',
  },
};

const RJBrandContext = createContext<RJBrandConfig>(defaultRJBrandConfig);

interface RJBrandProviderProps {
  children: ReactNode;
  config?: Partial<RJBrandConfig>;
}

export const RJBrandProvider: React.FC<RJBrandProviderProps> = ({
  children,
  config = {},
}) => {
  const brandConfig = { ...defaultRJBrandConfig, ...config };

  // Apply CSS custom properties for dynamic theming
  React.useEffect(() => {
    const root = document.documentElement;
    
    // Set RJ brand CSS variables
    root.style.setProperty('--rj-primary', brandConfig.colors.primary);
    root.style.setProperty('--rj-accent', brandConfig.colors.accent);
    root.style.setProperty('--rj-white', brandConfig.colors.white);
    root.style.setProperty('--rj-slate', brandConfig.colors.slate);
    root.style.setProperty('--rj-grid', brandConfig.colors.grid);
    
    // Update primary theme colors to use RJ branding
    root.style.setProperty('--primary', `219 100% 28%`); // RJ Primary Blue in HSL
    root.style.setProperty('--primary-foreground', `0 0% 100%`); // White
    root.style.setProperty('--accent', `219 82% 46%`); // RJ Accent Blue in HSL
    root.style.setProperty('--accent-foreground', `0 0% 100%`); // White
    
    // Set font families
    root.style.setProperty('--font-headline', brandConfig.fonts.headline.join(', '));
    root.style.setProperty('--font-body', brandConfig.fonts.body.join(', '));
    root.style.setProperty('--font-code', brandConfig.fonts.code.join(', '));
    
    // Update document title and meta
    document.title = `${brandConfig.companyName} ${brandConfig.platformName}`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        `${brandConfig.tagline} - ${brandConfig.mission} Founded by ${brandConfig.founder.name}, ${brandConfig.founder.title}.`
      );
    }
    
  }, [brandConfig]);

  return (
    <RJBrandContext.Provider value={brandConfig}>
      {children}
    </RJBrandContext.Provider>
  );
};

export const useRJBrand = (): RJBrandConfig => {
  const context = useContext(RJBrandContext);
  if (!context) {
    throw new Error('useRJBrand must be used within a RJBrandProvider');
  }
  return context;
};

// Utility hook for brand colors
export const useRJColors = () => {
  const { colors } = useRJBrand();
  return colors;
};

// Utility hook for brand fonts
export const useRJFonts = () => {
  const { fonts } = useRJBrand();
  return fonts;
};

// Utility hook for business metrics
export const useRJMetrics = () => {
  const { metrics } = useRJBrand();
  
  const formatMetrics = {
    clientsServed: `${metrics.clientsServed}+`,
    revenueGenerated: `$${(metrics.revenueGenerated / 1000000).toFixed(0)}M+`,
    successRate: `${metrics.successRate}%`,
    industriesServed: `${metrics.industriesServed}+`,
  };
  
  return { raw: metrics, formatted: formatMetrics };
};

export default RJBrandProvider;