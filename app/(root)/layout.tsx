import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en" className="flex flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
