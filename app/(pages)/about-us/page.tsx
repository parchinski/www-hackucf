import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function AboutUs() {
  const navLinks = [
    { name: 'Competitions', href: '/competitions' },
    { name: 'Capture The Flag Competitions', href: '/ctf' },
    { name: 'CCDC Competition', href: '/ccdc' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Constitution', href: '/constitution' },
  ];

  const partnerLinks = [
    { name: 'Citrussec', href: 'https://www.citrussec.com/' },
    { name: 'KnightHacks', href: 'https://club.knighthacks.org/' },
    {
      name: 'Cybersecurity Club @ FSU',
      href: 'https://cybersecurity.fsu.edu/club/',
    },
    { name: "USF's WhiteHatters", href: 'https://wcsc.info/' },
    { name: "UF's Kernel Sanders", href: 'https://ufsit.club/' },
    { name: "Florida Polytechnic's Cyber Club ", href: 'https://floridapoly.presence.io/organization/cybersecurity-club' },
    { name: 'CyberPatriot', href: 'https://www.uscyberpatriot.org/home' },
    {
      name: 'Florida Cyber Alliance',
      href: 'https://www.floridacyberalliance.org/',
    },
    {
      name: '(ISC)² Central Florida Chapter',
      href: 'https://isc2orlando.org/',
    },
    { name: 'OWASP Orlando', href: 'https://owasp.org/www-chapter-orlando/' },
    { name: 'SPARSA', href: 'https://www.sparsa.org/' },
    {
      name: 'Electronic Frontier Alliance',
      href: 'https://www.eff.org/fight/',
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen mt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-16 text-center">About Us</h1>

        <nav className="bg-black mb-16">
          <div className="container mx-auto px-4">
            <ul className="flex flex-wrap justify-center gap-4">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Button
                    variant="outline"
                    className="border-2 bg-black hover:bg-[#D2990B] text-lg hover:text-black border-[#D2990B] text-[#D2990B] rounded-full p-4 animate-slide-up animation-delay-200"
                    asChild
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-[#D2990B]">
            Our Mission
          </h2>
          <p className="text-lg">
            We strive to foster a generation that is aware of information
            security, specifically in the Central Florida area. We expect to
            fulfill our mission through getting the campus community involved in
            the cyber realm through education and experience in both offensive
            and defensive security strategies.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-[#D2990B]">
            Our Story
          </h2>
          <div className="space-y-4">
            <p>
              The Collegiate Cyber Defense Club @ UCF was founded back in Fall
              2012 by a small group of eager, security-enthused students. Word
              about the club spread quickly, drawing in dozens of students from
              a variety of majors—even those not belonging to the College of
              Engineering and Computer Science. In Spring 2013, the club
              founders applied to be an official club; the Student Government
              Association named Collegiate Cyber Defense Club a registered
              student organization.
            </p>
            <p>
              The official name, Collegiate Cyber Defense Club, stems from the
              similarly named{' '}
              <Link href="#" className="text-[#D2990B] hover:underline">
                Collegiate Cyber Defense Competition
              </Link>{' '}
              (CCDC). It should be no surprise that we participate in this
              competition; however, that is not all we do. With over 400+
              members to date, we continue to bring that much-needed cyber
              security presence to the campus of University of Central Florida
              through a number of methods:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Compete in offense-based virtual Capture the Flag (CTF)
                competitions
              </li>
              <li>
                Provide tutorials, talks, and workshops to discuss and apply
                offensive and defensive security strategies
              </li>
              <li>
                Invite guest speakers from major companies and corporations in
                the region to discuss security
              </li>
              <li>Take special trips to various companies</li>
            </ul>
            <p>
              For more information, choose a path:{' '}
              <Link href="#" className="text-[#D2990B] hover:underline">
                Defensive Security
              </Link>{' '}
              or{' '}
              <Link href="#" className="text-[#D2990B] hover:underline">
                Offensive Security
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-[#D2990B]">
            Our Aliases
          </h2>
          <p className="mb-4">
            We go by several names, often depending on context—whether
            we&apos;re representing ourselves on-campus, for instance, or
            competing in virtual competitions:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Hack@UCF</li>
            <li>CCDC</li>
            <li>KnightSec</li>
          </ul>
          <p className="mt-4">
            Check out our{' '}
            <Link href="#" className="text-[#D2990B] hover:underline">
              frequently asked questions
            </Link>{' '}
            for more information about us.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 text-[#D2990B]">
            Our Allies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {partnerLinks.map((ally, index) => (
              <Link
                key={index}
                href={ally.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-black border-2 border-[#D2990B] p-4 rounded-lg hover:bg-[#D2990B] transition-colors group">
                  <span className="text-[#D2990B] group-hover:text-black transition-colors">
                    {ally.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
