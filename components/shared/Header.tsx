import Image from 'next/image';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import MobileUserProfile from './MobileUserProfile';

const HeaderNew = () => {
  return (
    <div>
      <div className="fixed top-0 z-50 w-full">
        <div className="top-0 h-24 backdrop-blur-sm gradient-mask-b-40 bg-cover">
          <div className="flex justify-between items-center bg-gradient-to-b from-primary text-xl p-2 pb-10">
            <div className="flex items-center">
              <MobileNavigation />
              <a href="/" className="flex items-center px-2">
                <Image
                  src={'/images/Logo.png'}
                  alt="Logo"
                  width={38}
                  height={38}
                />
                <h1 className="text-2xl px-1">Pixarite</h1>
              </a>
            </div>

            <div className="flex">
              <Navigation />

              <div className="flex md:hidden items-center justify-center">
                <MobileUserProfile />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-24 bg-transparent"></div>
    </div>
  );
};

export default HeaderNew;
