import Image from 'next/image';
import MobileNavigation from './MobileNavigation';
import MobileUserProfile from './MobileUserProfile';
import Navigation from './Navigation';
import UserProfile from './UserProfile';

const Header = () => {
  return (
    <div>
      <div className="h-24 bg-primary"></div>

      <div className="flex justify-between items-center h-24 fixed top-0 w-full bg-gradient-to-b from-primary from-60% p-2 pb-10 z-50">
        <div className="flex items-center">
          <MobileNavigation />
          <a href="/" className="flex items-center px-2">
            <Image src={'/images/Logo.png'} alt="Logo" width={50} height={50} />
            <h1>Pixarite</h1>
          </a>
        </div>

        <div className="flex">
          <Navigation />

          <div className="md:hidden">
            <MobileUserProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
