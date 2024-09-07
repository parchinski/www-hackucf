import Image from 'next/image';

import { Button } from '@/components/ui/button';
import HackUCFLogo from '@/public/hackucf-logo.svg';

const Navbar = () => {
  return (
    <header className="p-4 flex justify-between items-center bg-black sticky top-0 z-10">
      <div className="flex items-center space-x-2 pb-2">
        <Image src={HackUCFLogo} alt="HackUCF Logo" className="w-64" />
      </div>
      <nav className="flex space-x-1 mx-2">
        <Button
          variant="ghost"
          className="text-white hover:text-[#E6B800] hover:bg-white text-sm font-bold"
        >
          About Us
        </Button>
        <Button
          variant="ghost"
          className="text-white hover:text-[#E6B800] hover:bg-white text-sm font-bold"
        >
          Horse Plinko Cyber Challenge
        </Button>
        <Button
          variant="ghost"
          className="text-white hover:text-[#E6B800] hover:bg-white text-sm font-bold"
        >
          WiCyS
        </Button>
        <Button
          variant="ghost"
          className="text-white hover:text-[#E6B800] hover:bg-white text-sm font-bold"
        >
          What's Going On
        </Button>
        <Button
          variant="ghost"
          className="text-white hover:text-[#E6B800] hover:bg-white text-sm font-bold"
        >
          Contact Us
        </Button>
        <Button
          variant="ghost"
          className="text-white hover:text-[#E6B800] hover:bg-white text-sm font-bold"
        >
          Sponsorship
        </Button>
        <Button
          variant="ghost"
          className="text-white hover:text-[#E6B800] hover:bg-white text-sm font-bold"
        >
          Join Us
        </Button>
      </nav>
      <Button className="group relative overflow-hidden bg-gradient-to-r from-[#D2990B] to-[#dbad3b ] text-white font-semibold text-lg px-6 py-2 transition-all duration-300 ease-in-out hover:scale-105">
        <span className="text-black relative z-10 transition-colors duration-300 group-hover:text-white font-bold">
          Discord
        </span>
        <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></span>
      </Button>
    </header>
  );
};

export default Navbar;
