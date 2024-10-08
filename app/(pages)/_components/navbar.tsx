'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import HackUCFLogo from '@/public/hackucf-logo.svg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Sponsorship', href: '/sponsorship' },
    { name: "What's Going On", href: '/whats-going-on' },
    { name: 'WiCyS', href: '/wicys' },
    { name: 'Horse Plinko Cyber Challenge', href: 'https://plinko.horse' },
  ];

  return (
    <header className="p-4 flex justify-between items-center bg-black top-0 z-40 fixed w-full border-b border-stone-800 shadow-[0_0_10px_rgba(120,120,120,0.1)]">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={HackUCFLogo}
            alt="HackUCF Logo"
            className="w-48 md:w-64"
            priority
          />
        </Link>
      </div>
      <nav className="hidden lg:flex space-x-4 mx-2">
        {navItems.map(item => (
          <Link href={item.href} key={item.name} prefetch={!item.href.startsWith('http')}>
            <Button
              variant="ghost"
              className="text-white hover:text-black hover:bg-white transition-colors text-sm"
            >
              {item.name}
            </Button>
          </Link>
        ))}
      </nav>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="bg-black hover:bg-[#D2990B] hover:text-black border-[#D2990B] text-[#D2990B] text-sm hidden lg:inline-flex border-2"
        >
          Join Our Discord
        </Button>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white lg:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-black"
          >
            <SheetHeader>
              <SheetTitle className="text-[#D2990B] text-2xl">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map(item => (
                <Link href={item.href} key={item.name} prefetch={!item.href.startsWith('http')}>
                  <Button
                    variant="ghost"
                    className="transition-colors text-white hover:text-black hover:bg-white text-sm justify-start w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
              <Button
                variant="outline"
                className="bg-black hover:bg-[#D2990B] hover:text-black border-[#D2990B] text-[#D2990B] text-sm transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Join Our Discord
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
