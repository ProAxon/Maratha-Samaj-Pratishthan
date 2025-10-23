'use client';

import { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import SearchModal from './SearchModal';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="preloader" id="preloader">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <Sidebar />
      <SearchModal />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
