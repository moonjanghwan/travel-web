'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 
      ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-white">
            느린 여행
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="text-white hover:text-gray-300">홈</Link>
            <Link href="#travel-plan" className="text-white hover:text-gray-300">여행 계획</Link>
            <Link href="#blog" className="text-white hover:text-gray-300">블로그</Link>
            <Link href="#contact" className="text-white hover:text-gray-300">연락하기</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 