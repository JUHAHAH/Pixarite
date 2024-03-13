import MobileNavigation from './MobileNavigation';
import MobileUserProfile from './MobileUserProfile';
import UserProfile from './UserProfile';

const Header = () => {
  return (
    <div className="flex justify-between md:justify-center">
      <div className="flex">
        <MobileNavigation />
        --ICON###--
        <a href="/"> Pixarite</a>
      </div>

      <MobileUserProfile />
    </div>
  );
};

export default Header;
