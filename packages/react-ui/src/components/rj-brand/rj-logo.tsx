/**
 * RJ Business Solutions Logo Component
 * Responsive logo with multiple variants and sizes
 */

import React from 'react';
import { cn } from '@/lib/utils';
import { RJ_BUSINESS_INFO } from './constants';

interface RJLogoProps {
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  theme?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

const sizeClasses = {
  sm: 'h-8 w-auto',
  md: 'h-12 w-auto',
  lg: 'h-16 w-auto',
  xl: 'h-20 w-auto',
  '2xl': 'h-24 w-auto',
};

const textSizeClasses = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-3xl',
  '2xl': 'text-4xl',
};

const taglineSizeClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
  xl: 'text-lg',
  '2xl': 'text-xl',
};

export const RJLogo: React.FC<RJLogoProps> = ({
  variant = 'full',
  size = 'md',
  theme = 'auto',
  showTagline = false,
  className,
  onClick,
}) => {
  const { companyName, platformName, tagline, assets } = RJ_BUSINESS_INFO;

  const logoClasses = cn(
    'transition-all duration-300 ease-in-out',
    sizeClasses[size],
    onClick && 'cursor-pointer hover:opacity-80',
    className
  );

  const textClasses = cn(
    'font-rj-headline font-bold',
    textSizeClasses[size],
    theme === 'dark' ? 'text-rj-white' : 'text-rj-primary',
    onClick && 'cursor-pointer hover:opacity-80'
  );

  const taglineClasses = cn(
    'font-rj-body font-medium mt-1',
    taglineSizeClasses[size],
    theme === 'dark' ? 'text-rj-accent' : 'text-rj-slate'
  );

  if (variant === 'icon') {
    return (
      <div className={cn('flex flex-col items-center', className)} onClick={onClick}>
        <img
          src={assets.logoIcon}
          alt={`${companyName} Icon`}
          className={logoClasses}
        />
        {showTagline && (
          <p className={taglineClasses}>
            {tagline}
          </p>
        )}
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={cn('flex flex-col', className)} onClick={onClick}>
        <div className={textClasses}>
          <span className="text-rj-primary">{companyName}</span>
          <br />
          <span className="text-rj-accent">{platformName}</span>
        </div>
        {showTagline && (
          <p className={taglineClasses}>
            {tagline}
          </p>
        )}
      </div>
    );
  }

  // Full variant (default)
  return (
    <div className={cn('flex items-center space-x-3', className)} onClick={onClick}>
      <img
        src={assets.logo}
        alt={`${companyName} ${platformName} Logo`}
        className={logoClasses}
      />
      <div className="flex flex-col">
        <div className={textClasses}>
          <span className="text-rj-primary">{companyName}</span>
          <br />
          <span className="text-rj-accent">{platformName}</span>
        </div>
        {showTagline && (
          <p className={taglineClasses}>
            {tagline}
          </p>
        )}
      </div>
    </div>
  );
};

export default RJLogo;