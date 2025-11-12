import React, { useRef } from "react";
import { Link } from "react-router-dom";
import blogsData from "../data/blogs.json";
import { motion, useInView } from "framer-motion";

export default function Blogs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen bg-white text-black px-6 md:px-16 py-30"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-semibold text-center mb-14"
      >
        Industry Insights & Footwear Trends
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12"
      >
        {blogsData.map((blog) => (
          <motion.div
            key={blog.id}
            variants={cardVariants}
            className="rounded-2xl overflow-hidden shadow-md bg-gray-50 hover:shadow-xl transition-all duration-300"
          >
            <motion.img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
              <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
              <p className="text-gray-700 mb-4 line-clamp-3">{blog.excerpt}</p>
              <Link
                to={`/blogs/${blog.slug}`}
                className="text-black border-b border-black hover:opacity-70 transition"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
