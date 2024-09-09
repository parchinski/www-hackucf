'use client';
import React, { useState, useEffect, useCallback } from 'react';

import { Button } from '@/components/ui/button';
import HackerBg from '@/components/ui/hacker-bg';
import MeetingsAndMembership from './hero-components/meetings-and-memberships';
import StayConnected from './hero-components/stay-connected';

const Hero: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = useCallback(() => {
    if (isMobile) return;
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const sections = ['home', 'meetings', 'connect'];

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && scrollPosition >= section.offsetTop - windowHeight / 2) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, [isMobile]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className={`min-h-screen w-full ${isMobile ? 'overflow-y-auto' : ''}`}>
      <div className="h-full overflow-y-auto">
        <section className="h-screen flex items-center justify-center p-8 bg-black animate-fade-in relative" id="home">
          <HackerBg className="absolute inset-0 w-full h-full" />
          <div className="max-w-4xl text-center z-10 mt-16">
            <h1 className="text-5xl font-bold mb-4 bg-white text-transparent bg-clip-text drop-shadow-[0_5px_3px_rgba(0,0,0,1)] py-1">
              Collegiate Cyber Defense Club at UCF
            </h1>
            <p className="text-2xl mb-8 text-white font-semibold drop-shadow-[0_3px_2px_rgba(0,0,0,1)] animate-slide-up animation-delay-200">
              We are the University of Central Florida&apos;s only defensive and
              offensive cybersecurity student organization.
            </p>
            <Button
              variant="outline"
              className="border-2 bg-black hover:bg-[#D2990B] text-lg hover:text-black border-[#D2990B] text-[#D2990B] rounded-full p-4 animate-slide-up animation-delay-200"
              aria-label="Learn more about Collegiate Cyber Defense Club"
              onClick={() => scrollToSection('meetings')}
            >
              🌐 Learn More 🌐
            </Button>
          </div>
        </section>
        <section className="min-h-screen" id="meetings">
          <MeetingsAndMembership />
        </section>
        <section className="min-h-screen" id="connect">
          <StayConnected />
        </section>
      </div>
      {!isMobile && (
        <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <ul className="flex space-x-5">
            {['home', 'meetings', 'connect'].map((section) => (
              <li key={section}>
                <button
                  className={`w-3 h-3 block rounded-full transition-opacity duration-300 ${activeSection === section ? 'bg-[#D2990B] opacity-100' : 'bg-[#D2990B] opacity-50 hover:opacity-100'
                    }`}
                  aria-label={`Navigate to ${section} section`}
                  onClick={() => scrollToSection(section)}
                />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Hero;
