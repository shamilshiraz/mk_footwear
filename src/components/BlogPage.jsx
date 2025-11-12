import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import blogsData from "../data/blogs.json";
import { motion, useInView } from "framer-motion";

export default function BlogPage() {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!blog)
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Blog not found
      </div>
    );

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-white text-black px-6 md:px-24 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full max-h-[60vh] object-cover rounded-2xl mb-10"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-500 mb-8">{blog.date}</p>

        <div className="max-w-4xl text-lg leading-relaxed text-gray-800">
          {blog.content}
        </div>

        <div className="mt-12">
          <Link
            to="/blogs"
            className="text-black underline underline-offset-4 hover:opacity-70 transition"
          >
            ← Back to Blogs
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}
