import React from 'react';
import { motion } from 'framer-motion';

export default function Landing() {
  // Parent container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // soft stagger between text elements
        delayChildren: 0.3,
      },
    },
  };

  // Child text animation
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative flex items-center justify-center w-full h-screen"
      style={{
        backgroundImage: 'url(/landings.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative pt-30 z-10 flex flex-col items-center justify-center text-center px-4"
      >
                <motion.h1
          variants={textVariants}
          className="text-white text-3xl md:text-5xl font-medium leading-tight mb-4"
        >
          MK FOOTWEAR
        </motion.h1>
        <motion.h1
          variants={textVariants}
          className="text-white text-3xl md:text-5xl font-medium leading-tight mb-4"
        >
          YOUR WHOLESALE FOOTWEAR SOLUTIONS
        </motion.h1>

        <motion.p
          variants={textVariants}
          className="text-white text-base md:text-lg mb-8 max-w-5xl"
        >
Trusted by retailers across Kerala, we specialize in premium footwear wholesale — combining quality craftsmanship, competitive pricing, and consistent supply to help your business grow.        </motion.p>

        <motion.a
          variants={textVariants}
          href="#"
          className="inline-block bg-white text-black px-8 py-3 font-semibold text-lg transition-colors duration-200 hover:bg-gray-200"
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 250 }}
        >
          SHOP NOW
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
