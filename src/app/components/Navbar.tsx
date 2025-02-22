'use client';
import React from 'react';
import { useState } from 'react';
import { HoveredLink, Menu, MenuItem } from './ui/navbar-menu';
import { cn } from '../utils/cn';
import Link from 'next/link';

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        'fixed top-10 max-sm:text-sm  inset-x-0 max-w-2xl mx-auto z-50',
        className
      )}>
      <Menu setActive={setActive}>
        <Link href={'/'}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All courses</HoveredLink>
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses">Advance Composition</HoveredLink>
            <HoveredLink href="/courses">SongWriting</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={'/contact'}>
          <MenuItem setActive={setActive} active={active} item="Contact US" />
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
