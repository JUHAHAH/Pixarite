'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { headerLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const MobileNavigation = () => {
  const pathname = usePathname();
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          {headerLinks.map((nav) => {
            const isActive = pathname === nav.route;
            return (
              <li key={nav.route}>
                <SheetClose asChild key={nav.route}>
                  <Link href={nav.route}>{nav.label}</Link>
                </SheetClose>
              </li>
            );
          })}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
