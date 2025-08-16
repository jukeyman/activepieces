/**
 * RJ Business Solutions Button Component
 * Enterprise-grade button with RJ branding and animations
 */

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { RJButtonProps } from './types';

const buttonVariants = {
  primary: 'bg-rj-primary hover:bg-rj-primaryDark text-white border-rj-primary hover:border-rj-primaryDark',
  secondary: 'bg-rj-slate hover:bg-rj-slateDark text-white border-rj-slate hover:border-rj-slateDark',
  accent: 'bg-rj-accent hover:bg-rj-accentDark text-white border-rj-accent hover:border-rj-accentDark',
  outline: 'bg-transparent hover:bg-rj-primary text-rj-primary hover:text-white border-rj-primary',
  ghost: 'bg-transparent hover:bg-rj-primary hover:bg-opacity-10 text-rj-primary border-transparent',
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm font-medium rounded-lg',
  md: 'px-4 py-2 text-base font-medium rounded-xl',
  lg: 'px-6 py-3 text-lg font-semibold rounded-xl',
  xl: 'px-8 py-4 text-xl font-semibold rounded-2xl',
};

const LoadingSpinner: React.FC<{ size: string }> = ({ size }) => {
  const spinnerSize = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
  };

  return (
    <motion.div
      className={cn('border-2 border-current border-t-transparent rounded-full', spinnerSize[size as keyof typeof spinnerSize])}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );
};

export const RJButton: React.FC<RJButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  children,
  onClick,
  className,
  ...props
}) => {
  const buttonClasses = cn(
    // Base styles
    'inline-flex items-center justify-center gap-2',
    'border-2 transition-all duration-300 ease-in-out',
    'font-rj-body font-medium',
    'focus:outline-none focus:ring-4 focus:ring-rj-accent focus:ring-opacity-20',
    'relative overflow-hidden',
    
    // Variant styles
    buttonVariants[variant],
    
    // Size styles
    buttonSizes[size],
    
    // State styles
    disabled || isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    
    // Hover effects
    !disabled && !isLoading && 'hover:shadow-lg hover:scale-105 active:scale-95',
    
    className
  );

  const handleClick = () => {
    if (!disabled && !isLoading && onClick) {
      onClick();
    }
  };

  return (
    <motion.button
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled || isLoading}
      whileHover={!disabled && !isLoading ? { scale: 1.05 } : {}}
      whileTap={!disabled && !isLoading ? { scale: 0.95 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {/* Gradient overlay for enhanced visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-opacity-0 to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300" />
      
      {/* Loading state */}
      {isLoading && <LoadingSpinner size={size} />}
      
      {/* Button content */}
      <span className={cn('relative z-10', isLoading && 'opacity-70')}>
        {children}
      </span>
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white rounded-full opacity-0"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 4, opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

// Button group component for multiple buttons
interface RJButtonGroupProps {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'tight' | 'normal' | 'loose';
  className?: string;
}

export const RJButtonGroup: React.FC<RJButtonGroupProps> = ({
  children,
  orientation = 'horizontal',
  spacing = 'normal',
  className,
}) => {
  const spacingClasses = {
    tight: orientation === 'horizontal' ? 'space-x-2' : 'space-y-2',
    normal: orientation === 'horizontal' ? 'space-x-4' : 'space-y-4',
    loose: orientation === 'horizontal' ? 'space-x-6' : 'space-y-6',
  };

  const orientationClasses = {
    horizontal: 'flex flex-row items-center',
    vertical: 'flex flex-col items-start',
  };

  return (
    <div className={cn(
      orientationClasses[orientation],
      spacingClasses[spacing],
      className
    )}>
      {children}
    </div>
  );
};

export default RJButton;