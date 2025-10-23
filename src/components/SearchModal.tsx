'use client';

import { useState } from 'react';

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`ul-search-form-wrapper flex-grow-1 flex-shrink-0 ${isOpen ? 'active' : ''}`}>
      <button 
        className="ul-search-closer"
        onClick={() => setIsOpen(false)}
      >
        <i className="flaticon-close"></i>
      </button>

      <form action="#" className="ul-search-form">
        <div className="ul-search-form-right">
          <input 
            type="search" 
            name="search" 
            id="ul-search" 
            placeholder="Search Here"
          />
          <button type="submit">
            <span className="icon">
              <i className="flaticon-search"></i>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
