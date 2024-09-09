import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MeetingsAndMembership: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-[#1c1c1c] px-4 py-8 overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
        {['Meetings', 'Cyber Teams', 'Cyber Games', 'Membership'].map(
          (title, index) => (
            <Card
              key={index}
              className="bg-black border-[#D2990B] flex flex-col"
            >
              <CardHeader className="py-3">
                <CardTitle className="text-[#D2990B] text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow py-2">
                <CardDescription className="text-white text-sm">
                  {getDescription(title)}
                </CardDescription>
              </CardContent>
              <CardFooter className="py-3">
                <Button className="w-full bg-[#D2990B] hover:bg-[#e6b800] text-black text-sm">
                  {getButtonText(title)}
                </Button>
              </CardFooter>
            </Card>
          ),
        )}
      </div>
    </section>
  );
};

export default MeetingsAndMembership;

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

function getImageURL(title: string) {
  switch (title) {
    case 'Meetings':
      return '/meetings.jpg';
    case 'Cyber Teams':
      return '/cyber-teams.jpg';
    case 'Cyber Games':
      return '/cyber-games.jpg';
    case 'Membership':
      return '/membership.jpg';
    default:
      return '';
  }
}
