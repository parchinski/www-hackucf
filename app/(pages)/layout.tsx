"use client"
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './_components/footer';
import Navbar from './_components/navbar';

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
