import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const MeetingsAndMembership: React.FC = () => {
  const CARD_DATA = [
    {
      title: 'Meetings',
      description:
        'We hold meetings during the fall and spring semesters. Topics range from current events to security software tools and even hardware. Often special guests from various businesses and organizations will present on advanced special topics like reverse engineering and exploitation.',
      buttonText: 'View Our Calendar',
      imageURL: '/meetings.jpg',
    },
    {
      title: 'Cyber Teams',
      description:
        "One component of the club involves applying defensive security strategies in order to rigorously protect computers from being compromised. Our competition teams are dedicated to learning the 'ins and outs' of administering and hardening systems to defend against some of today's leading threats.",
      buttonText: 'About CCDC',
      imageURL: '/cyber-teams.jpg',
    },
    {
      title: 'Cyber Games',
      description:
        'A second component of the club involves learning how attackers leverage exploits and gain control of systems. At our CTF competitions, students have the opportunity to research, explore, and exploit vulnerabilities. Through collaborating on thought-provoking games and challenges, club members are able to learn the skills necessary to becoming a security professional.',
      buttonText: 'About CTFs',
      imageURL: '/cyber-games.jpg',
    },
    {
      title: 'Membership',
      description:
        "If you like breaking stuff, problem solving, hacker-talk, or even just expressing your true 1337ness, then you definitely want to get involved. It is so neat to be around people with the same interests. It is at our meetings, competitions, and special events that we encourage you to unleash your inner nerd. Joining is a breeze. Don't skip out.",
      buttonText: 'Join Now',
      imageURL: '/membership.jpg',
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center bg-black px-4 py-8 overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
        {CARD_DATA.map((card, index) => (
          <Card
            key={index}
            className="bg-black border-[#D2990B] flex flex-col mt-12 border-2"
          >
            <CardHeader className="py-3">
              <CardTitle className="text-[#D2990B] text-lg font-bold">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col pb-2 justify-top space-y-4">
              <Image
                src={card.imageURL}
                alt="card image"
                width={340}
                height={300}
              />
              <CardDescription className="text-white text-sm">
                {card.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="py-3">
              <Button className="w-full bg-[#D2990B] hover:bg-[#e6b800] text-black text-sm">
                {card.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MeetingsAndMembership;
