import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <footer
      ref={ref}
      className="bg-black text-white w-full px-6 md:px-20  py-10"
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20"
      >
        {/* Logo + Address */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-3">
            <img src="./logo.png" className="w-16 h-auto flex items-center justify-center text-sm"/>

            <h2 className="text-2xl font-medium tracking-tight">MK FOOTWEAR</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            Mk footwear, Calicut beach<br />
            Near 6th Avenue, 673001<br />
            Kozhikode, Kerala
          </p>
        </div>

        {/* Sitemap */}
        <div>
          <h3 className="text-sm mb-4 tracking-wider text-gray-400">SITEMAP</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gray-400 transition">HOME</Link></li>
            <li><Link to="/about" className="hover:text-gray-400 transition">ABOUT</Link></li>
            <li><Link to="/products" className="hover:text-gray-400 transition">PRODUCTS</Link></li>
            <li><Link to="/blogs" className="hover:text-gray-400 transition">BLOGS</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400 transition">CONTACT</Link></li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm mb-4 tracking-wider text-gray-400">LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition"
              >
                INSTAGRAM
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition"
              >
                WHATSAPP
              </a>
            </li>
            <li>
              <a
                href="mailto:info@mkfootwear.com"
                className="hover:text-gray-400 transition"
              >
                MAIL
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Bottom Copyright */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-500"
      >
        mkfootwear all rights reserved
      </motion.div>
    </footer>
  );
}
