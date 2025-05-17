'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { InnerContent } from './components/InnerContent';
import ExpandingPlus from './components/ExpandingPlus';
import WorkTransitionPlus from './components/WorkTransitionPlus';
import Image from 'next/image';

export default function HomePage() {
  const [opened, setOpened] = useState(false);
  const [workOrigin, setWorkOrigin] = useState(null);
  const [showWorkPlus, setShowWorkPlus] = useState(false);
  const router = useRouter();

  const handleWorkClick = (position) => {
    setWorkOrigin(position);
    setShowWorkPlus(true);
  };

  const handleExpandComplete = () => {
    router.push('/work');
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <InnerContent onWorkClick={handleWorkClick} />
        </motion.div>
      )}

      <ExpandingPlus isOpen={opened} />

      {showWorkPlus && (
        <WorkTransitionPlus
          triggerExit={true}
          origin={workOrigin}
          onExpandComplete={handleExpandComplete}
        />
      )}

      {!opened && (
        <>
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black z-0" />

          {/* Image opposite the plus sign */}
          <div className="fixed top-6 left-6 z-30 w-24 h-24">
          <Image
              src="/logo.png"
              alt="Left Placeholder"
              fill
              className="object-contain"
            />
          </div>

          {/* Centered image */}
          <div className="fixed top-1/2 left-1/2 z-30 w-48 h-48 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/cs-symbol.svg"
              alt="Center Placeholder"
              fill
              className="object-contain"
            />
          </div>

          {/* Actual spinning plus sign on hover */}
          <button
            onClick={() => setOpened(true)}
            className="fixed top-6 right-6 w-10 h-10 z-40 flex items-center justify-center group"
            aria-label="Open site"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="relative w-full h-full"
            >
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white -translate-y-1/2" />
              <div className="absolute top-0 left-1/2 w-[2px] h-full bg-white -translate-x-1/2" />
            </motion.div>
          </button>
        </>
      )}
    </div>
  );
}
