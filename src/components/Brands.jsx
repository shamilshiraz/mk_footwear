import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function OurBrands() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const brands = [
    { name: "Lancer", img: "/lancer.png" },
    { name: "Abros", img: "/abros.webp" },
    { name: "Paragon", img: "/action.png" },
    { name: "Kipsta", img: "/dotcom.jpg" },
    { name: "Red Tape", img: "/g&d.png" },
    { name: "Aqualite", img: "/aqualite.jpeg" },
    { name: "Campus", img: "/kats.png" },
        { name: "Oofoam", img: "/oofoam.jpg" },
            { name: "Red Tape", img: "/oxer.png" },
    { name: "Aqualite", img: "/tucson.jpg" },
    { name: "Campus", img: "/walkline.png" },
        { name: "Oofoam", img: "/welcome.png" },
                { name: "Oofoam", img: "/qtfoam.jpg" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      ref={ref}
      className="flex flex-col items-center justify-center h-screen w-full bg-white text-black px-8"
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      <motion.h2
        variants={item}
        className="text-4xl font-medium mb-12 tracking-tight"
      >
        OUR BRANDS
      </motion.h2>

      {/* Brands Grid */}
      <motion.div
        variants={container}
        className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-16"
      >
        {brands.map((brand) => (
          <motion.div
            key={brand.name}
            variants={item}
            className="flex justify-center items-center"
          >
            <img
              src={brand.img}
              alt={brand.name}
              className="w-36 md:w-44 object-contain"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Catalog Button */}
      <motion.a
        variants={item}
        href="/products"
        className="text-xl bg-black text-white px-10 py-3 rounded-sm hover:bg-gray-800 transition"
      >
        CATALOG
      </motion.a>
    </motion.section>
  );
}
