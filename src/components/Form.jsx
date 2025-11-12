import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Form() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center min-h-screen w-full bg-white text-black px-6 lg:px-24 py-16"
    >
      {/* Heading */}
      <motion.h2
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        className="text-4xl font-medium mb-4 tracking-tight text-center"
      >
        REACH OUT TO US
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        className="text-xl text-gray-700 text-center mb-8 max-w-2xl"
      >
        Have queries? Contact us on WhatsApp or fill this form for us to reach out to
        you.
      </motion.p>

      {/* WhatsApp Contact */}
      <motion.a
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        href="https://wa.me/919876543210" // replace with your actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl bg-green-600 text-white px-10 py-3 rounded-md hover:bg-green-700 transition mb-10"
      >
        CONTACT ON WHATSAPP
      </motion.a>

      {/* Contact Form */}
      <motion.form
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        action="https://api.web3forms.com/submit"
        method="POST"
        className="w-full max-w-lg flex flex-col space-y-6"
      >
        <input
          type="hidden"
          name="access_key"
          value="YOUR_WEB3FORMS_ACCESS_KEY" // replace with your key
        />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black resize-none"
        ></textarea>

        {/* Centered Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black text-white text-lg px-10 py-3 rounded-md hover:bg-gray-800 transition"
          >
            SUBMIT
          </button>
        </div>
      </motion.form>
    </section>
  );
}
