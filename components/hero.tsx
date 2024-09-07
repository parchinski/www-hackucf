'use client';

import { Instagram, Twitter, Github, Linkedin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Hero = () => {
  return (
    <ScrollArea className="w-full bg-black text-white">
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <section className="min-h-screen flex items-center justify-center p-8 bg-black bg-[url('/cyberlab.png')] bg-cover bg-center bg-no-repeat animate-fade-in">
            <div className="max-w-4xl text-center">
              <h1 className="text-5xl font-bold mb-4 bg-white text-transparent bg-clip-text drop-shadow-[0_5px_3px_rgba(0,0,0,0.9)] py-1">
                Collegiate Cyber Defense Club at UCF
              </h1>
              <p className="text-2xl mb-8 text-white font-semibold drop-shadow-[0_3px_2px_rgba(0,0,0,0.5)] animate-slide-up animation-delay-200">
                We are the University of Central Florida's only defensive and
                offensive cybersecurity student organization.
              </p>
              <Button className="group relative overflow-hidden bg-gradient-to-r from-[#D2990B] to-[#dbad3b ] text-white font-semibold text-lg px-6 py-2 transition-all duration-300 ease-in-out hover:scale-105">
                <span className="text-black relative z-10 transition-colors duration-300 group-hover:text-white font-bold">
                  About Us
                </span>
                <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></span>
              </Button>
            </div>
          </section>

          <section className="py-16 px-8 bg-[#1c1c1c]">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#ffc904]">
              Meetings, Membership, and More!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {['Meetings', 'Cyber Teams', 'Cyber Games', 'Membership'].map(
                (title, index) => (
                  <Card
                    key={index}
                    className="bg-black border-[#ffc904] flex flex-col h-full"
                  >
                    <CardHeader>
                      <CardTitle className="text-[#ffc904]">{title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <img
                        src={`/placeholder.svg?height=200&width=300`}
                        alt={title}
                        className="w-full h-48 object-cover mb-4 rounded"
                      />
                      <CardDescription className="text-white">
                        {getDescription(title)}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button className="w-full bg-[#ffc904] hover:bg-[#e6b800] text-black">
                        {getButtonText(title)}
                      </Button>
                    </CardFooter>
                  </Card>
                ),
              )}
            </div>
          </section>

          <section className="py-16 px-8 bg-black">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#ffc904]">
              Stay Connected
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-8">
              You can follow us on social media to stay tuned for job and
              internship opportunities, or get updated when we hold a meeting.
              Don't forget to join our Discord!
            </p>
            <div className="flex justify-center space-x-6">
              <Button
                variant="outline"
                size="icon"
                className="bg-[#ffc904] hover:bg-[#e6b800] text-black h-12 w-12"
              >
                <Instagram className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-[#ffc904] hover:bg-[#e6b800] text-black h-12 w-12"
              >
                <Twitter className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-[#ffc904] hover:bg-[#e6b800] text-black h-12 w-12"
              >
                <Github className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-[#ffc904] hover:bg-[#e6b800] text-black h-12 w-12"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            </div>
          </section>

          <section className="py-16 px-8 bg-[#1c1c1c]">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#ffc904]">
              I Want To
            </h2>
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
                  className="bg-black hover:bg-[#ffc904] hover:text-black border-[#ffc904] text-[#ffc904]"
                >
                  {text}
                </Button>
              ))}
            </div>
          </section>
        </main>
      </div>
    </ScrollArea>
  );
};

function getDescription(title: string) {
  switch (title) {
    case 'Meetings':
      return 'We hold meetings during the fall and spring semesters. Topics range from current events to security software tools and even hardware. Often special guests from various businesses and organizations will present on advanced special topics like reverse engineering and exploitation.';
    case 'Cyber Teams':
      return "One component of the club involves applying defensive security strategies in order to rigorously protect computers from being compromised. Our competition teams are dedicated to learning the 'ins and outs' of administering and hardening systems to defend against some of today's leading threats.";
    case 'Cyber Games':
      return 'A second component of the club involves learning how attackers leverage exploits and gain control of systems. At our CTF competitions, students have the opportunity to research, explore, and exploit vulnerabilities. Through collaborating on thought-provoking games and challenges, club members are able to learn the skills necessary to becoming a security professional.';
    case 'Membership':
      return "If you like breaking stuff, problem solving, hacker-talk, or even just expressing your true 1337ness, then you definitely want to get involved. It is so neat to be around people with the same interests. It is at our meetings, competitions, and special events that we encourage you to unleash your inner nerd. Joining is a breeze. Don't skip out.";
    default:
      return '';
  }
}

function getButtonText(title: string) {
  switch (title) {
    case 'Meetings':
      return 'View Our Calendar';
    case 'Cyber Teams':
      return 'About CCDC';
    case 'Cyber Games':
      return 'About CTFs';
    case 'Membership':
      return 'Join Now';
    default:
      return 'Learn More';
  }
}

export default Hero;
