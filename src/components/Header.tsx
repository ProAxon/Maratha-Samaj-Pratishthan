'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="ul-header">
      <div className="ul-header-bottom to-be-sticky">
        <div className="ul-header-bottom-wrapper ul-header-container">
          <div className="logo-container">
            <Link href="/" className="d-inline-block">
              <Image 
                src="/assets/img/logo.svg" 
                alt="logo" 
                className="logo img-responsive"
                width={120}
                height={40}
              />
            </Link>
          </div>

          {/* header nav */}
          <div className="ul-header-nav-wrapper">
            <div className="to-go-to-sidebar-in-mobile">
              <nav className="ul-header-nav">
                <Link href="/">मुख्यपृष्ठ</Link>
                <Link href="/about">आमच्याबद्दल</Link>
                <Link href="/services">सेवा</Link>
                <Link href="/donations">उपक्रम</Link>
                <Link href="/events">कार्यक्रम</Link>
                <Link href="/team">संघ</Link>
                <Link href="/contact">संपर्क</Link>
              </nav>
            </div>
          </div>

          {/* actions */}
          <div className="ul-header-actions">
            <button 
              className="ul-header-search-opener"
              onClick={() => setIsSearchOpen(true)}
            >
              <i className="flaticon-search"></i>
            </button>
            <Link href="/contact" className="ul-btn d-sm-inline-flex d-none">
              <i className="flaticon-fast-forward-double-right-arrows-symbol"></i> सामील व्हा
            </Link>
            <button 
              className="ul-header-sidebar-opener d-lg-none d-inline-flex"
              onClick={() => setIsSidebarOpen(true)}
            >
              <i className="flaticon-menu"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
