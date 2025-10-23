'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`ul-sidebar ${isOpen ? 'active' : ''}`}>
      {/* header */}
      <div className="ul-sidebar-header">
        <div className="ul-sidebar-header-logo">
          <Link href="/">
            <Image 
              src="/assets/img/logo.svg" 
              alt="logo" 
              className="logo img-responsive"
              width={120}
              height={40}
            />
          </Link>
        </div>
        {/* sidebar closer */}
        <button 
          className="ul-sidebar-closer"
          onClick={() => setIsOpen(false)}
        >
          <i className="flaticon-close"></i>
        </button>
      </div>

      <div className="ul-sidebar-header-nav-wrapper d-block d-lg-none"></div>

      {/* sidebar footer */}
      <div className="ul-sidebar-footer">
        <span className="ul-sidebar-footer-title">Follow us</span>

        <div className="ul-sidebar-footer-social">
          <a href="#"><i className="flaticon-facebook"></i></a>
          <a href="#"><i className="flaticon-twitter"></i></a>
          <a href="#"><i className="flaticon-instagram"></i></a>
          <a href="#"><i className="flaticon-youtube"></i></a>
        </div>
      </div>
    </div>
  );
}
