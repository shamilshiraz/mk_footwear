import React from "react";
import { motion } from "framer-motion";

const categories = [
  { title: "Men Casual", image: "/casuals.png" },
  { title: "Men Formal", image: "/formals.png" },
  { title: "Men Clogs", image: "/clogs.png" },
  { title: "Men Slippers", image: "/slippers.png" },
  { title: "Ladies Casuals", image: "/wcasuals.png" },
  { title: "Ladies Clogs", image: "/wclogs.png" },
  { title: "Ladies Slippers", image: "/wslippers.png" },
  { title: "Kids Casuals", image: "/kidscas.png" },
  { title: "Kids Clogs", image: "/kidsclogs.png" },
  { title: "Kids Slippers", image: "/kidsslippers.png" },
];

export default function Products() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Our Product Categories
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Explore the wide range of footwear categories we offer
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl shadow-lg group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

              {/* Category Text */}
              <div className="absolute bottom-0 w-full p-5">
                <h3 className="text-white text-lg md:text-xl font-semibold tracking-wide">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
