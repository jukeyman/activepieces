import { motion } from 'framer-motion';
import { 
  Bell, 
  ChevronDown, 
  Menu, 
  Search, 
  Settings, 
  User, 
  Zap,
  X 
} from 'lucide-react';
import React, { useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { useRJBrand } from './RJBrandProvider';

// ═══════════════════════════════════════════════════════════════════════════════
// 🧭 RJ BUSINESS SOLUTIONS - NAVIGATION HEADER COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

interface RJNavigationHeaderProps {
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
  onSearch?: (query: string) => void;
  onNotificationClick?: () => void;
  notificationCount?: number;
}

export const RJNavigationHeader: React.FC<RJNavigationHeaderProps> = ({
  user = {
    name: 'Rick Jefferson',
    email: 'rick@rjbizsolution.com',
    avatar: 'https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb81d6379294532defac26.jpeg'
  },
  onSearch,
  onNotificationClick,
  notificationCount = 3,
}) => {
  const brand = useRJBrand();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const navigationItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Automations', href: '/automations' },
    { label: 'AI Agents', href: '/agents' },
    { label: 'Analytics', href: '/analytics' },
    { label: 'Integrations', href: '/integrations' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full border-b border-rj-slate/10 bg-rj-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-rj-white/80"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-rj-primary to-rj-accent rounded-xl flex items-center justify-center shadow-lg">
                <img 
                  src="https://storage.googleapis.com/msgsndr/qQnxRHDtyx0uydPd5sRl/media/67eb83c5e519ed689430646b.jpeg" 
                  alt="RJ Business Solutions Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-rj-headline font-bold text-rj-primary">
                  {brand.companyName}
                </h1>
                <p className="text-xs text-rj-slate/70 font-rj-body">
                  {brand.platformName}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-rj-slate hover:text-rj-primary font-rj-body font-medium transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rj-accent group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rj-slate/50 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search automations, agents, workflows..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-rj-slate/20 focus:border-rj-accent focus:ring-rj-accent/20 font-rj-body rounded-xl bg-rj-white/50"
              />
            </form>
          </div>

          {/* Actions and User Menu */}
          <div className="flex items-center space-x-4">
            {/* Quick Action Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex items-center space-x-2 border-rj-accent/30 text-rj-accent hover:bg-rj-accent hover:text-rj-white font-rj-body transition-all duration-300"
              >
                <Zap className="h-4 w-4" />
                <span>Create Agent</span>
              </Button>
            </motion.div>

            {/* Notifications */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={onNotificationClick}
                className="relative p-2 text-rj-slate hover:text-rj-primary hover:bg-rj-primary/5"
              >
                <Bell className="h-5 w-5" />
                {notificationCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-rj-accent text-rj-white text-xs flex items-center justify-center font-rj-body font-semibold"
                  >
                    {notificationCount}
                  </motion.span>
                )}
              </Button>
            </motion.div>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <Avatar className="h-8 w-8 ring-2 ring-rj-accent/20">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-rj-primary text-rj-white font-rj-body font-semibold">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-rj-body font-semibold text-rj-slate">
                      {user.name}
                    </p>
                    <p className="text-xs text-rj-slate/60 font-rj-body">
                      {brand.founder.title}
                    </p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-rj-slate/60" />
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-56 mt-2 border-rj-slate/10 shadow-xl"
              >
                <DropdownMenuLabel className="font-rj-body">
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-xs text-rj-slate/60">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="font-rj-body">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="font-rj-body">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="font-rj-body text-red-600">
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Trigger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden p-2 text-rj-slate hover:text-rj-primary hover:bg-rj-primary/5"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 py-6">
                  {/* Mobile Search */}
                  <form onSubmit={handleSearch} className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rj-slate/50 h-4 w-4" />
                    <Input
                      type="search"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 w-full border-rj-slate/20 focus:border-rj-accent focus:ring-rj-accent/20 font-rj-body rounded-xl"
                    />
                  </form>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4">
                    {navigationItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-rj-slate hover:text-rj-primary font-rj-body font-medium py-2 px-4 rounded-lg hover:bg-rj-primary/5 transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  {/* Mobile Quick Action */}
                  <Button
                    className="w-full bg-rj-accent hover:bg-rj-accent/90 text-rj-white font-rj-body"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Zap className="mr-2 h-4 w-4" />
                    Create Agent
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default RJNavigationHeader;