import MobileNavigation from './MobileNavigation';
import MobileUserProfile from './MobileUserProfile';
import Navigation from './Navigation';
import UserProfile from './UserProfile';

const Header = () => {
  return (
    <div className="flex justify-between items-center h-14 bg-red-300">
      <div className="flex">
        <MobileNavigation />
        --ICON###--
        <a href="/" className="flex px-2">
          {' '}
          Pixarite
        </a>
      </div>

      <div className="flex">
        <Navigation />

        <div className="md:hidden">
          <MobileUserProfile />
        </div>
      </div>
    </div>
  );
};

export default Header;
