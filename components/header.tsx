import React from 'react';
import {ThemeToggle} from "@/components/theme-toggle";
import Link from "next/link";

const Header = () => {
  return (
    <header className='flex justify-between items-center p-4 sticky top-0'>
      <Link
        className='font-bold text-xl'
        href="/">Blog</Link>
      <ThemeToggle/>
    </header>
  );
};

export default Header;