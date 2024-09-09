'use client';

import { Button } from '@/components/ui/button';
import HackerBg from '@/components/ui/hacker-bg';
import MeetingsAndMembership from './hero-components/meetings-and-memberships';
import StayConnected from './hero-components/stay-connected';

const Hero = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="h-full overflow-y-auto snap-y snap-mandatory">
        <section className="h-screen flex items-center justify-center p-8 bg-black animate-fade-in relative snap-start">
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
            >
              🌐 Learn More 🌐
            </Button>
          </div>
        </section>
        <section className="h-screen snap-start">
          <MeetingsAndMembership />
        </section>
        <section className="h-screen snap-start">
          <StayConnected />
        </section>
      </div>
    </div>
  );
};

export default Hero;
