import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-32 bg-white text-black"
    >
      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="text-4xl md:text-5xl font-medium mb-4 text-center"
      >
        REACH OUT TO US
      </motion.h1>

      {/* Subheading */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        transition={{ delay: 0.1 }}
        className="text-lg md:text-xl text-gray-700 text-center max-w-2xl mb-12"
      >
        Have queries? Contact us on WhatsApp or fill this form for us to reach out to you.
      </motion.p>

      {/* WhatsApp CTA */}
      <motion.a
        href="https://wa.me/919876543210" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-green-600 transition mb-16"
      >
        <FaWhatsapp size={22} />
        Chat on WhatsApp
      </motion.a>

      {/* Contact Form */}
      <motion.form
        action="https://api.web3forms.com/submit"
        method="POST"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        transition={{ delay: 0.3 }}
        className="w-full max-w-xl space-y-6"
      >
        {/* Web3Forms Access Key */}
        <input
          type="hidden"
          name="access_key"
          value="YOUR_ACCESS_KEY_HERE" // Replace with your Web3Forms key
        />

        <div className="flex flex-col">
          <label className="text-base font-medium mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-base font-medium mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black transition"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-base font-medium mb-2">Message</label>
          <textarea
            name="message"
            required
            placeholder="Write your message..."
            className="border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-black transition"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black text-white text-lg px-8 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </div>
      </motion.form>
    </section>
  );
}
