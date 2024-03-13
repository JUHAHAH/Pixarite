'use client';

import { headerLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import React from 'react';
import { SheetClose } from '../ui/sheet';
import Link from 'next/link';

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul>
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
      </ul>
    </nav>
  );
};

export default Navigation;
