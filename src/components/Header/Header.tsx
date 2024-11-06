'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 
      ${isScrolled 
        ? 'bg-background dark:bg-background-dark shadow-md' 
        : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-text dark:text-text-dark">
            느린 여행
          </Link>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#home" 
              className="text-text dark:text-text-dark hover:text-primary dark:hover:text-primary-dark">
              홈
            </Link>
            <Link href="#travel-plan" 
              className="text-text dark:text-text-dark hover:text-primary dark:hover:text-primary-dark">
              여행 계획
            </Link>
            {/* ... 다른 메뉴 항목들 ... */}
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden text-text dark:text-text-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <FadeInView>
            <div className="md:hidden bg-background dark:bg-background-dark">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="#home" 
                  className="block px-3 py-2 rounded-md text-text dark:text-text-dark 
                    hover:bg-gray-100 dark:hover:bg-gray-800"
                >홈</Link>
                {/* ... 다른 메뉴 항목들 ... */}
              </div>
            </div>
          </FadeInView>
        )}
      </div>
    </header>
  );
};

export default Header; 