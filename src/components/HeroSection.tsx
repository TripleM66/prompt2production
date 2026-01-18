'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [hoveredSide, setHoveredSide] = useState<'academy' | 'solutions' | null>(null);

  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Grote "2" op achtergrond */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="text-[40rem] font-bold text-foreground/5 select-none leading-none">
          2
        </span>
      </div>

      {/* P2P Academy - Linkerkant */}
      <div 
        className="flex-1 relative group z-10"
        onMouseEnter={() => setHoveredSide('academy')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Blauwe gloed achtergrond - subtiel */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/15 via-accent-blue/5 to-transparent transition-opacity duration-500 group-hover:from-accent-blue/25 group-hover:via-accent-blue/10" />
        
        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-8 lg:px-16 py-20 lg:py-32">
          <div className="max-w-2xl mx-auto transition-transform duration-300 group-hover:scale-[1.02] flex flex-col justify-center min-h-[400px]">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              The Prompt:<br />
              <span className="text-accent-blue">Ontketen Innovatie</span>
            </h1>
            <p className="text-lg lg:text-xl text-foreground/80 mb-8 leading-relaxed max-w-lg mx-auto min-h-[80px] flex items-center justify-center">
              Professionaliseer vibecoding. Stop Shadow AI en PoC Purgatory. Transformeer je team naar gecertificeerde AI-architecten.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/academy"
                className="inline-flex items-center px-8 py-4 border-2 border-accent-blue text-accent-blue font-semibold rounded-full hover:bg-accent-blue hover:text-background transition-all duration-300 shadow-[0_0_15px_rgba(0,102,255,0.3)] hover:shadow-[0_0_25px_rgba(0,102,255,0.5)] focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background"
              >
                Ontdek de Academy
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent hidden lg:block transform -translate-x-1/2 z-10" />

      {/* P2P Solutions - Rechterkant */}
      <div 
        className="flex-1 relative group z-10"
        onMouseEnter={() => setHoveredSide('solutions')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Oranje/metalen gloed achtergrond - subtiel */}
        <div className="absolute inset-0 bg-gradient-to-bl from-accent-orange/15 via-accent-gold/5 to-transparent transition-opacity duration-500 group-hover:from-accent-orange/25 group-hover:via-accent-gold/10" />
        
        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-8 lg:px-16 py-20 lg:py-32">
          <div className="max-w-2xl mx-auto transition-transform duration-300 group-hover:scale-[1.02] flex flex-col justify-center min-h-[400px]">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
              The Production:<br />
              <span className="text-accent-orange">Bouw voor de Toekomst</span>
            </h1>
            <p className="text-lg lg:text-xl text-foreground/80 mb-8 leading-relaxed max-w-lg mx-auto min-h-[80px] flex items-center justify-center">
              Fix de 'AI Hangover'. Saneer technical debt, implementeer agentic workflows en word 100% AI Act compliant.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/solutions"
                className="inline-flex items-center px-8 py-4 border-2 border-accent-orange text-accent-orange font-semibold rounded-full hover:bg-accent-orange hover:text-background transition-all duration-300 shadow-[0_0_15px_rgba(255,107,53,0.3)] hover:shadow-[0_0_25px_rgba(255,107,53,0.5)] focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-background"
              >
                Ontdek Solutions
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
