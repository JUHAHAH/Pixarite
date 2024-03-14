'use client';

import { headerLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="max-md:hidden">
      <nav>
        <ul className="flex">
          {headerLinks.map((nav) => {
            const isActive = pathname === nav.route;
            return (
              <li key={nav.route} className="flex items-center px-3">
                <Link href={nav.route}>{nav.label}</Link>
              </li>
            );
          })}
          <UserButton />
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
