"use client";

import s from './nav-button.module.css';
import { usePathname } from 'next/navigation';

const NavButton = ({ rout, children }) => {
  const pathname = usePathname();
  const isActive = rout === pathname;

  return (
    <a
      href={rout}
      className={`${s.navButton} ${isActive ? s.active : ''}`}
    >
      {children}
    </a>
  );
};

export default NavButton;