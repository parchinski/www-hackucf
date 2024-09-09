import React from "react";
import { Instagram, Twitter, Github, Linkedin } from 'lucide-react';

import { Button } from '@/components/ui/button';

const StayConnected: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-black px-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#D2990B]">
          Stay Connected
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-8 text-white">
          You can follow us on social media to stay tuned for job and internship
          opportunities, or get updated when we hold a meeting. Don&apos;t forget to
          join our Discord!
        </p>
        <div className="flex justify-center space-x-6">
          <Button
            variant="outline"
            size="icon"
            className="bg-[#D2990B] hover:bg-[#e6b800] text-black h-12 w-12"
          >
            <Instagram className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-[#D2990B] hover:bg-[#e6b800] text-black h-12 w-12"
          >
            <Twitter className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-[#D2990B] hover:bg-[#e6b800] text-black h-12 w-12"
          >
            <Github className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-[#D2990B] hover:bg-[#e6b800] text-black h-12 w-12"
          >
            <Linkedin className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {[
          'Join the Fun',
          'Hop on Discord',
          'View the Calendar',
          'Present at a Meeting',
          'Join the Mailing List',
        ].map((text, index) => (
          <Button
            key={index}
            variant="outline"
            className="bg-black hover:bg-[#D2990B] hover:text-black border-[#D2990B] text-[#D2990B]"
          >
            {text}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default StayConnected;
