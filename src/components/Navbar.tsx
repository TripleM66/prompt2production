'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-white/10' 
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background rounded"
              onClick={closeMobileMenu}
            >
              P2P
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/academy" 
              className="text-foreground hover:text-accent-blue transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
            >
              Academy
            </Link>
            <Link 
              href="/solutions" 
              className="text-foreground hover:text-accent-orange transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
            >
              Solutions
            </Link>
            <Link 
              href="/about" 
              className="text-foreground hover:text-foreground/70 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-foreground/50 focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
            >
              Over ons
            </Link>
            <Link 
              href="/contact" 
              className="text-foreground hover:text-accent-blue transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background rounded p-1"
              aria-label={isMobileMenuOpen ? "Sluit menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-white/10">
            <Link 
              href="/academy" 
              className="block px-4 py-3 text-foreground hover:bg-accent-blue/10 hover:text-accent-blue transition-colors duration-200 font-medium rounded-lg"
              onClick={closeMobileMenu}
            >
              Academy
            </Link>
            <Link 
              href="/solutions" 
              className="block px-4 py-3 text-foreground hover:bg-accent-orange/10 hover:text-accent-orange transition-colors duration-200 font-medium rounded-lg"
              onClick={closeMobileMenu}
            >
              Solutions
            </Link>
            <Link 
              href="/about" 
              className="block px-4 py-3 text-foreground hover:bg-white/5 hover:text-foreground/70 transition-colors duration-200 font-medium rounded-lg"
              onClick={closeMobileMenu}
            >
              Over ons
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-3 text-foreground hover:bg-accent-blue/10 hover:text-accent-blue transition-colors duration-200 font-medium rounded-lg"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
