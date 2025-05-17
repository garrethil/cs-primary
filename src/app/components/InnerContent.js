'use client';

import { useRef } from 'react';

export function InnerContent({ onWorkClick }) {
  const workRef = useRef();

  const handleClick = () => {
    if (workRef.current) {
      const rect = workRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      onWorkClick({ x: centerX, y: centerY });
    }
  };

  return (
    <div className="h-screen w-screen flex text-6xl leading-loose font-bold">
      <div
        className="flex-1 bg-[#e2228c] text-white flex items-center justify-center cursor-pointer"
        onClick={handleClick}
      >
        <span ref={workRef}>Work</span>
      </div>
      <div className="flex-1 bg-[#ffcf2d] text-white flex items-center justify-center">
        About
      </div>
      <div className="flex-1 bg-[#53c5d2] text-white flex items-center justify-center">
        Contact
      </div>
    </div>
  );
}
