'use client';

import { motion } from 'framer-motion';

export default function ExpandingPlus({ isOpen }) {
  return (
    <motion.div
      initial={{ scale: 1, opacity: 1 }}
      animate={
        isOpen
          ? { scale: [1, 400, 1], opacity: 1 }
          : { scale: 1, opacity: 1 }
      }
      transition={{ duration: 1.1, ease: 'easeInOut' }}
      className="fixed top-6 right-6 w-10 h-10 z-30 origin-center pointer-events-none"
    >
      <div className="absolute inset-0">
        {/* Horizontal bar */}
        <div className="absolute top-1/2 left-0 w-full h-2 bg-white -translate-y-1/2" />
        {/* Vertical bar */}
        <div className="absolute top-0 left-1/2 w-2 h-full bg-white -translate-x-1/2" />
      </div>
    </motion.div>
  );
}
