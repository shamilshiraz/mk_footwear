import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/inag.png",
  "/inag2.png",
  "/inag3.png",
  "/inaggr.png",
    "partners.png",
  "/main.png",
  "/group.png",
  "/core.png",
  "/shop.png",
  "/godow.jpg",
  "/godown.jpg",
  "godown2.jpg"
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="w-full px-6 lg:px-24 py-16 bg-white">
      <h2 className="text-3xl md:text-5xl font-semibold mb-10 text-center tracking-tight">
     Gallery
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-2xl shadow-md cursor-pointer"
            onClick={() => setActiveImage(img)}
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-60 object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <motion.img
            src={activeImage}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-[90%] max-h-[85%] rounded-2xl shadow-xl"
          />
        </div>
      )}
    </section>
  );
}
