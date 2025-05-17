'use client';

import Link from 'next/link';
import { useState } from 'react';
import ExpandingOverlay from './ExpandingPlus';

export default function NavBar() {
  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <>
      <nav className="w-full px-6 py-4 flex justify-between items-center bg-black shadow-md fixed top-0 left-0 z-50">


        <button
          onClick={() => setOverlayOpen(true)}
          className="ml-4 text-3xl font-bold text-white w-10 h-10 flex items-center justify-center rounded-full relative z-50"
          aria-label="Open overlay"
        >
          +
        </button>
      </nav>

      <ExpandingOverlay isOpen={overlayOpen} onClose={() => setOverlayOpen(false)} />
    </>
  );
}
