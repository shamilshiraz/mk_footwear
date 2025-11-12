import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
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
    <section
      ref={ref}
      className="flex flex-col py-12 items-center justify-center w-full min-h-screen bg-white text-black overflow-hidden"
    >
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        className="flex flex-col items-center text-center max-w-3xl px-6 md:px-12 py-24"
      >
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
          ABOUT MK FOOTWEAR
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
          MK Footwear is a trusted name in Calicut’s footwear industry,
          connecting leading brands with local retailers and businesses. 
          Our goal is simple — to make high-quality, trendy, and durable footwear 
          accessible to every part of Kerala through a smooth, reliable supply chain.
        </p>
        <img
          src="/landing.png"
          alt="MK Footwear Storefront"
          className="rounded-3xl shadow-lg w-full max-w-3xl object-cover aspect-video"
        />
      </motion.div>

      {/* Section 2: Vision */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 px-6 md:px-20  items-center"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">
            Our Vision
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We envision a thriving footwear ecosystem in Kerala — 
            where every retailer, large or small, has access to 
            premium brands and fast-moving designs at competitive rates.  
            From the latest sneakers to durable work shoes, MK Footwear 
            ensures consistent quality and unmatched service that 
            keeps our partners ahead of market trends.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/landings.png"
            alt="Vision - Footwear Distribution"
            className="rounded-3xl shadow-md w-full max-w-md object-cover"
          />
        </div>
      </motion.div>

      {/* Section 3: What We Offer */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        className="w-full bg-gray-50 py-24 px-6 md:px-20 flex flex-col items-center text-center"
      >
        <h2 className="text-3xl md:text-4xl font-medium mb-8 tracking-tight">
          What We Offer
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-12 leading-relaxed">
          MK Footwear offers a seamless B2B experience — blending 
          technology, transparency, and trust. Our digital catalog 
          simplifies ordering, providing up-to-date information on 
          collections, specifications, and stock availability.  
          Whether you’re a retailer or a bulk buyer, our team ensures 
          every partnership runs efficiently and profitably.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/brands.jpg"
              alt="Brand Variety"
              className="rounded-2xl shadow-md w-full max-w-xs object-cover"
            />
            <p className="text-base md:text-lg text-gray-700 font-medium">
              Wide Range of Brands
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/warehouse.jpg"
              alt="Warehouse"
              className="rounded-2xl shadow-md w-full max-w-xs object-cover"
            />
            <p className="text-base md:text-lg text-gray-700 font-medium">
              Reliable Distribution
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/support.jpg"
              alt="Customer Support"
              className="rounded-2xl shadow-md w-full max-w-xs object-cover"
            />
            <p className="text-base md:text-lg text-gray-700 font-medium">
              Dedicated B2B Support
            </p>
          </div>
        </div>
      </motion.div>

      {/* Section 4: Call to Action */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        className="flex flex-col items-center justify-center py-24 px-6 md:px-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">
          Let’s Grow Together
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-10 leading-relaxed">
          Partner with MK Footwear and take your business to the next level. 
          Explore our collections, get quick quotations, and experience 
          a distribution network built on trust, speed, and transparency.
        </p>
        <a
          href="/contact"
          className="text-lg bg-black text-white px-10 py-4 rounded-lg hover:bg-gray-800 transition"
        >
          CONTACT US
        </a>
      </motion.div>
    </section>
  );
}
