'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import HackerBg from '@/components/ui/hacker-bg';
import MeetingsAndMembership from './hero-components/meetings-and-memberships';
import StayConnected from './hero-components/stay-connected';

const Hero = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setActiveSection(hash || 'home');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="h-full overflow-y-auto snap-y snap-proximity scroll-smooth">
        <section className="h-screen flex items-center justify-center p-8 bg-black animate-fade-in relative snap-start" id="home">
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
            >
              🌐 Learn More 🌐
            </Button>
          </div>
        </section>
        <section className="min-h-screen snap-start" id="meetings">
          <MeetingsAndMembership />
        </section>
        <section className="min-h-screen snap-start" id="connect">
          <StayConnected />
        </section>
      </div>
      <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <ul className="flex space-x-5">
          {['home', 'meetings', 'connect'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`w-3 h-3 block rounded-full bg-[#D2990B] ${
                  activeSection === section ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                }`}
              ></a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Hero;
