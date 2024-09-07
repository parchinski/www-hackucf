import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

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
      </>
  );
}
