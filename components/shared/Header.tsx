import Image from 'next/image';
import MobileNavigation from './MobileNavigation';
import MobileUserProfile from './MobileUserProfile';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div className="text-xl">
      <div className="flex justify-between items-center h-24 fixed top-0 w-full bg-gradient-to-b from-primary from-60% p-2 pb-10 z-50">
        <div className="flex items-center">
          <MobileNavigation />
          <a href="/" className="flex items-center px-3">
            <Image src={'/images/Logo.png'} alt="Logo" width={50} height={50} />
            <h1 className="text-xl">Pixarite</h1>
          </a>
        </div>

        <div className="flex">
          <Navigation />

          <div className="flex md:hidden items-center justify-center">
            <MobileUserProfile />
          </div>
        </div>
      </div>

      <div className="flex h-24 bg-primary"></div>
    </div>
  );
};

export default Header;
