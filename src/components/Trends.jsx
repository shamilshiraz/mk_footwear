import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function BlogTrend2025() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="flex flex-col items-start my-14 md:items-center w-full min-h-screen bg-white px-4 py-14 md:py-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-start md:items-center text-left md:text-center w-full max-w-2xl space-y-10"
      >
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-medium font-sans tracking-tight leading-tight mb-4">
          TOP FOOTWEAR TRENDS IN CALICUT
        </h1>

        {/* Image */}
        <div className="w-full flex justify-start md:justify-center mb-6">
          <img
            src="./samba.png"
            alt="Trendy Sneakers"
            className="sm:w-[60vw] rounded-3xl shadow-lg object-cover aspect-video"
            loading="lazy"
          />
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 text-left md:text-center tracking-normal px-0 md:px-8 mb-2">
          Footwear in India has become a powerful fashion statement, constantly
          evolving with global and local trends. For 2025, sneakers are now
          essentials paired with both traditional and western clothing, while
          comfort-driven casual shoes and vibrant flip-flops make everyday style
          effortless. Sustainability is a key theme—buyers in Calicut look for
          eco-friendly soles and recycled materials as fashion meets values. MK
          Footwear stays ahead with trendy sneakers, locally-inspired styles,
          and exclusive summer collections catering to the city’s youthful vibe.
        </p>

        {/* Button (centered) */}
        <div className="w-full flex justify-center">
          <button className="mt-8 px-7 py-3 bg-black text-white text-lg tracking-wider shadow-md hover:bg-gray-900 transition-colors">
            BLOGS
          </button>
        </div>
      </motion.div>
    </section>
  );
}
