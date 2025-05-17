'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const gifs = [
  { name: 'checkered-1016_256' },
  { name: 'colorful-6965_256' },
  { name: 'dust-866_256' },
  { name: 'final-1003_256' },
  { name: 'pattern-14309_256' },
  { name: 'procedural-generation-11379_256' },
];

export default function WorkPage() {
  const [shrink, setShrink] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShrink(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-black px-8 sm:px-20 py-20">
      {/* Shrinking Plus Sign */}
      {shrink && (
        <motion.div
          initial={{ scale: 400 }}
          animate={{ scale: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed top-1/2 left-1/2 w-10 h-10 z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-0 w-full h-2 bg-white -translate-y-1/2" />
            <div className="absolute top-0 left-1/2 w-2 h-full bg-white -translate-x-1/2" />
          </div>
        </motion.div>
      )}
<h2 className="text-center text-6xl font-bold py-6">Work</h2>

      {/* Grid of GIF tiles */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl w-full px-4">
          {gifs.map(({ name }, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              <div className="relative w-full max-w-[250px] aspect-square overflow-hidden text-3xl rounded-xl bg-neutral-800 shadow-lg group">
                <Image
                  src={`/gifs/stills/${name}.png`}
                  alt={`${name} still`}
                  fill
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105 z-10"
                  unoptimized
                />
                <Image
                  src={`/gifs/${name}.gif`}
                  alt={`${name} gif`}
                  fill
                  className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 ease-in-out z-20"
                  unoptimized
                />
              </div>
              <h3 className="text-base font-semibold">%s ProjectLabel</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
