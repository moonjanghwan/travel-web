import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SkipLink from '@/components/common/SkipLink';
import ThemeToggle from '@/components/ThemeToggle';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '2025 유럽 여행 계획',
  description: '2025년 유럽 한 달 여행 계획과 준비 과정을 기록하는 웹사이트입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <SkipLink />
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
