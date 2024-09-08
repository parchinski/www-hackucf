import Image from 'next/image';

import { Button } from '@/components/ui/button';
import HackUCFLogo from '@/public/hackucf-logo.svg';

const Navbar = () => {
  return (
    <header className="p-4 flex justify-evenly items-center bg-black top-0 z-40 fixed w-full">
      <div className="hidden md:flex items-center pb-1">
        <Image src={HackUCFLogo} alt="HackUCF Logo" className="w-64" />
      </div>
      <nav className="flex space-x-1 mx-2">
        <Button
          variant="ghost"
          className="text-white hover:text-black hover:bg-white text-sm "
        >
          About Us
        </Button>
        <Button
          variant="ghost"
          className="text-white hover:text-black hover:bg-white text-sm "
        >
          Horse Plinko Cyber Challenge
        </Button>
        <Button
          variant="ghost"
          className="text-white hover:text-black hover:bg-white text-sm "
        >
          WiCyS
        </Button>
        <Button
          variant="ghost"
          className="text-white hover:text-black hover:bg-white text-sm "
        >
          What's Going On
        </Button>
        <Button
          variant="ghost"
          className="text-white hover:text-black hover:bg-white text-sm "
        >
          Contact Us
        </Button>
        <Button
          variant="ghost"
          className="text-white hover:text-black hover:bg-white text-sm "
        >
          Sponsorship
        </Button>
      </nav>
      <Button
        variant="outline"
        className="bg-black hover:bg-[#D2990B] hover:text-black border-[#D2990B] text-[#D2990B]"
      >
        Join Our Discord
      </Button>
    </header>
  );
};

export default Navbar;
