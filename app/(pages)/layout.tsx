"use client"

import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <main>{children}</main>
      </div>
      <Footer />
      <SpeedInsights />
    </>
  );
}
