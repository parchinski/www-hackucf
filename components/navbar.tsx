"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import HackUCFLogo from '../public/hackucf-logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    'About Us',
    'Horse Plinko Cyber Challenge',
    'WiCyS',
    "What's Going On",
    'Contact Us',
    'Sponsorship',
  ]

  return (
    <header className="p-4 flex justify-between items-center bg-black top-0 z-40 fixed w-full">
      <div className="flex items-center pb-1">
        <Image src={HackUCFLogo} alt="HackUCF Logo" className="w-48 md:w-64" />
      </div>
      <nav className="hidden md:flex space-x-1 mx-2">
        {navItems.map((item) => (
          <Button
            key={item}
            variant="ghost"
            className="text-white hover:text-black hover:bg-white text-sm"
          >
            {item}
          </Button>
        ))}
      </nav>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="bg-black hover:bg-[#D2990B] hover:text-black border-[#D2990B] text-[#D2990B] text-sm hidden md:inline-flex"
        >
          Join Our Discord
        </Button>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black">
            <SheetHeader>
              <SheetTitle className="text-white">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="text-white hover:text-black hover:bg-white text-sm justify-start"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Button>
              ))}
              <Button
                variant="outline"
                className="bg-black hover:bg-[#D2990B] hover:text-black border-[#D2990B] text-[#D2990B] text-sm"
                onClick={() => setIsOpen(false)}
              >
                Join Our Discord
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Navbar
