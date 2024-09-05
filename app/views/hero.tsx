'use client'

import React from 'react'
import { Instagram, Twitter, Github, Linkedin } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Hero() {
  return (
    <ScrollArea className="h-screen w-full bg-[#1c1c1c] text-white">
      <div className="min-h-screen flex flex-col">
        <header className="p-4 flex justify-between items-center bg-black sticky top-0 z-10">
          <div className="flex items-center space-x-2">
            <img src="/placeholder.svg?height=40&width=40" alt="HackUCF Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-[#ffc904]">HackUCF</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost" className="text-white hover:text-[#ffc904]">About Us</Button>
            <Button variant="ghost" className="text-white hover:text-[#ffc904]">Horse Plinko Cyber Challenge</Button>
            <Button variant="ghost" className="text-white hover:text-[#ffc904]">WiCyS</Button>
            <Button variant="ghost" className="text-white hover:text-[#ffc904]">What's Going On</Button>
            <Button variant="ghost" className="text-white hover:text-[#ffc904]">Contact Us</Button>
            <Button variant="ghost" className="text-white hover:text-[#ffc904]">Sponsorship</Button>
            <Button variant="ghost" className="text-white hover:text-[#ffc904]">Join Us</Button>
          </nav>
          <Button className="bg-[#ffc904] hover:bg-[#e6b800] text-black">Join Our Discord</Button>
        </header>

        <main className="flex-grow">
          <section className="min-h-screen flex items-center justify-center p-8 bg-black">
            <div className="max-w-4xl text-center">
              <h1 className="text-5xl font-bold mb-4 text-[#ffc904]">Collegiate Cyber Defense Club at UCF</h1>
              <p className="text-xl mb-8">
                We are the University of Central Florida's only defensive and offensive cybersecurity student organization.
              </p>
              <Button className="bg-[#ffc904] hover:bg-[#e6b800] text-black text-lg px-8 py-4">About Us</Button>
            </div>
          </section>

          <section className="py-16 px-8 bg-[#1c1c1c]">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#ffc904]">Meetings, Membership, and More!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {['Meetings', 'Cyber Teams', 'Cyber Games', 'Membership'].map((title, index) => (
                <Card key={index} className="bg-black border-[#ffc904] flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="text-[#ffc904]">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <img src={`/placeholder.svg?height=200&width=300`} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
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
              ))}
            </div>
          </section>

          <section className="py-16 px-8 bg-black">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#ffc904]">Stay Connected</h2>
            <p className="text-center max-w-2xl mx-auto mb-8">
               You can follow us on social media to stay tuned for job and internship opportunities, or get updated when we hold a meeting. Don't forget to join our Discord!
            </p>
            <div className="flex justify-center space-x-6">
              <Button variant="outline" size="icon" className="bg-[#ffc904] hover:bg-[#e6b800] text-black h-12 w-12">
                <Instagram className="h-6 w-6" />
              </Button>
              <Button variant="outline" size="icon" className="bg-[#ffc904] hover:bg-[#e6b800] text-black h-12 w-12">
                <Twitter className="h-6 w-6" />
              </Button>
              <Button variant="outline" size="icon" className="bg-[#ffc904] hover:bg-[#e6b800] text-black h-12 w-12">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="outline" size="icon" className="bg-[#ffc904] hover:bg-[#e6b800] text-black h-12 w-12">
                <Linkedin className="h-6 w-6" />
              </Button>
            </div>
          </section>

          <section className="py-16 px-8 bg-[#1c1c1c]">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#ffc904]">I Want To</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['Join the Fun', 'Hop on Discord', 'View the Calendar', 'Present at a Meeting', 'Join the Mailing List'].map((text, index) => (
                <Button key={index} variant="outline" className="bg-black hover:bg-[#ffc904] hover:text-black border-[#ffc904] text-[#ffc904]">
                  {text}
                </Button>
              ))}
            </div>
          </section>
        </main>

        <footer className="bg-black text-center py-8">
          <p className="text-[#ffc904]">&copy; 2023 HackUCF. All rights reserved.</p>
        </footer>
      </div>
    </ScrollArea>
  )
}

function getDescription(title: string) {
  switch (title) {
    case 'Meetings':
      return "We hold meetings during the fall and spring semesters. Topics range from current events to security software tools and even hardware. Often special guests from various businesses and organizations will present on advanced special topics like reverse engineering and exploitation."
    case 'Cyber Teams':
      return "One component of the club involves applying defensive security strategies in order to rigorously protect computers from being compromised. Our competition teams are dedicated to learning the 'ins and outs' of administering and hardening systems to defend against some of today's leading threats."
    case 'Cyber Games':
      return "A second component of the club involves learning how attackers leverage exploits and gain control of systems. At our CTF competitions, students have the opportunity to research, explore, and exploit vulnerabilities. Through collaborating on thought-provoking games and challenges, club members are able to learn the skills necessary to becoming a security professional."
    case 'Membership':
      return "If you like breaking stuff, problem solving, hacker-talk, or even just expressing your true 1337ness, then you definitely want to get involved. It is so neat to be around people with the same interests. It is at our meetings, competitions, and special events that we encourage you to unleash your inner nerd. Joining is a breeze. Don't skip out."
    default:
      return ""
  }
}

function getButtonText(title: string) {
  switch (title) {
    case 'Meetings':
      return "View Our Calendar"
    case 'Cyber Teams':
      return "About CCDC"
    case 'Cyber Games':
      return "About CTFs"
    case 'Membership':
      return "Join Now"
    default:
      return "Learn More"
  }
}
