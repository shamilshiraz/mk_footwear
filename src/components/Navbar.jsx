import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'BLOGS', path: '/blogs' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    // Add initial fade-in for Navbar
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white shadow-sm border-b-5 border-red-500 fixed w-full top-0 left-0 z-50"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/logo.png"
                alt="MK Logo"
                className="h-16 rounded-full"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.06, opacity: 0.8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link
                  to={link.path}
                  className="text-gray-900 hover:text-gray-600 font-medium text-xl tracking-wide transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(true)}
              className="text-gray-900 hover:text-gray-700 focus:outline-none"
              whileTap={{ scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-gray-900"></div>
                <div className="w-6 h-0.5 bg-gray-900"></div>
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black  flex flex-col items-center justify-center space-y-10 md:hidden z-40"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-gray-700"
            >
              <X size={32} />
            </button>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.08, opacity: 0.7 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-700 text-3xl font-semibold tracking-wide"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
