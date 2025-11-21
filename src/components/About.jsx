import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full bg-white text-black overflow-hidden"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-28 space-y-32"
      >
        {/* Hero Section */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center text-center space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            ABOUT MK FOOTWEAR
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
            MK Footwear is a trusted name in Calicut’s footwear industry,
            connecting leading brands with local retailers and businesses.
            Our mission is to deliver premium-quality, trend-forward, and
            durable footwear across Kerala through a dependable and
            professionally-managed supply chain.
          </p>
          <motion.img
            src="/partners2.png"
            alt="MK Footwear Storefront"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="rounded-[2rem] shadow-xl w-full max-w-5xl object-cover aspect-video"
          />
        </motion.div>

        {/* Expanded About Content */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24 items-center"
        >
          <motion.div variants={fadeUp} className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">
              About M.K Footwear Trading Co.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Established over 15 years ago, M.K Footwear Trading Co. has grown
              into one of Kerala’s most reliable footwear distribution networks,
              proudly powering over 800 retail partners across the state. From
              urban showrooms to local outlets, our consistent service and
              trusted logistics ensure uninterrupted product availability and
              timely deliveries.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We offer an extensive portfolio of men’s, women’s, and children’s
              footwear — spanning casual, formal, lifestyle, and fashion-forward
              collections sourced from top-performing brands. Every product is
              curated with attention to comfort, durability, design innovation,
              and evolving consumer demand.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Rooted in professionalism and integrity, our operations are driven
              by long-term partnerships, transparent business practices, and a
              relentless commitment to quality. As we continue to expand our
              footprint across Kerala, we remain focused on empowering retailers
              and keeping the state stepping forward in style.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-6"
          >
            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm">
              <h3 className="text-3xl font-semibold">15+ Years</h3>
              <p className="text-gray-600 mt-2">Proven industry experience</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm">
              <h3 className="text-3xl font-semibold">800+ Retailers</h3>
              <p className="text-gray-600 mt-2">Trusted business partners</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm">
              <h3 className="text-3xl font-semibold">All Kerala Reach</h3>
              <p className="text-gray-600 mt-2">Wide distribution network</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Our Vision
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We envision a thriving footwear ecosystem in Kerala — where every
              retailer, large or small, gains access to premium brands and
              fast-moving designs at competitive rates. From trend-led
              sneakers to durable work shoes, MK Footwear ensures consistent
              quality, streamlined logistics, and service excellence.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center"
          >
            <img
              src="/shop2.png"
              alt="Vision - Footwear Distribution"
              className="rounded-[2rem] shadow-lg w-full max-w-md object-cover"
            />
          </motion.div>
        </motion.div>

        {/* What We Offer */}
        <motion.div
          variants={fadeUp}
          className="bg-gray-50 rounded-[2.5rem] py-20 px-8 md:px-16 flex flex-col items-center text-center space-y-10"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            What We Offer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            MK Footwear delivers a seamless B2B experience blending
            technology, transparency, and reliability. Our digital catalog
            simplifies ordering with real-time stock insights, making
            procurement efficient and stress-free for retailers and bulk
            buyers alike.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
            {[
              { img: "/shop.png", text: "Wide Range of Brands" },
              { img: "/distribution.png", text: "Reliable Distribution" },
              { img: "/handshake.png", text: "Dedicated B2B Support" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center space-y-4"
              >
                <img
                  src={item.img}
                  alt={item.text}
                  className="rounded-2xl shadow-md w-full max-w-sm object-cover"
                />
                <p className="text-base md:text-lg font-medium text-gray-700">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center text-center space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Let’s Grow Together
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Partner with MK Footwear and elevate your business. Access our
            collections, receive quick quotations, and benefit from a
            distribution network built on trust, speed, and transparency.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-12 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-gray-900 transition"
          >
            CONTACT US
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
