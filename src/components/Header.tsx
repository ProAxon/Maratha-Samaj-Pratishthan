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
        <Link href="/" className="d-inline-block">
              <Image 
                src="/assets/img/logo.png" 
                alt="logo" 
                className="logo img-responsive"
                width={80}
                height={40}
              />
            </Link>

          {/* header nav */}
          <div className="ul-header-nav-wrapper">
            <div className="to-go-to-sidebar-in-mobile">
              <nav className="ul-header-nav">
                <a href="#home">मुख्यपृष्ठ</a>
                <a href="#about">आमच्याबद्दल</a>
                <a href="#programs">उपक्रम</a>
                <a href="#events">कार्यक्रम</a>
                <a href="#team">संघ</a>
                <a href="#contact">संपर्क</a>
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
            <a href="#contact" className="ul-btn d-sm-inline-flex d-none">
              <i className="flaticon-fast-forward-double-right-arrows-symbol"></i> सामील व्हा
            </a>
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
