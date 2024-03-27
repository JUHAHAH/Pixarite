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
import { Button } from '@/components/ui/button';
import { headerLinks } from '@/constants';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const MobileNavigation = () => {
  const pathname = usePathname();
  return (
    <div className="md:hidden flex items-center justify-center">
      <Sheet>
        <SheetTrigger>
          <Menu className="transition duration-300 w-9 h-9 p-1 rounded-full hover:shadow-[0px_0px_8px_5px_rgba(247,247,253,0.3)]" />
        </SheetTrigger>
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
