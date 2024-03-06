import Link from 'next/link';
import MobileNav from './MobileNav';
import MobileProfile from './MobileProfile';

const Header = () => {
  return (
    <div>
      <div>
        <MobileNav />
        <Link href={'/'}>ICON_HERE</Link>
        PIXARITE
      </div>
      <div>
        <MobileProfile />
      </div>
    </div>
  );
};

export default Header;
