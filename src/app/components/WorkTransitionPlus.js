'use client';

import { motion } from 'framer-motion';

export default function WorkTransitionPlus({ triggerExit, origin, onExpandComplete }) {
  if (!origin) return null;

  const style = {
    left: origin.x,
    top: origin.y,
    transform: 'translate(-50%, -50%)',
  };

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 400 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      onAnimationComplete={onExpandComplete}
      className="fixed w-10 h-10 z-50 pointer-events-none"
      style={style}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-2 bg-white -translate-y-1/2" />
        <div className="absolute top-0 left-1/2 w-2 h-full bg-white -translate-x-1/2" />
      </div>
    </motion.div>
  );
}
