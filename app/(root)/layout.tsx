import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en" className="flex flex-col text-primarytxt bg-primary">
      <Header />
      <main className="flex">{children}</main>
      <Footer />
    </div>
  );
}
