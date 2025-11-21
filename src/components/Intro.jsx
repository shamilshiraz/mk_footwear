import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

export default function FootwearWholesalers() {
  const ref = React.useRef(null);
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
      className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen py-12 w-full bg-white text-black px-6 lg:px-24 py-10"
    >
      {/* Content Section */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        className="w-full lg:w-1/2 lg:pr-12 mt-10 lg:mt-0 text-left flex flex-col"
      >
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 tracking-tight">
          BEST FOOTWEAR WHOLESALERS IN CALICUT
        </h2>

        <p className="text-base md:text-xl leading-relaxed text-gray-700 mb-8 max-w-xl">
          MK Footwears is dedicated to powering your business with a vast and reliable
          supply of in-demand footwear. Our digital catalog is your essential
          resource for instantly viewing product details, specifications, and minimum
          order quantities across all collections. When you are ready to move
          forward, our Inquiry List streamlines your selection process, ensuring you
          receive a fast, personalized quote and dedicated attention from our B2B
          sales specialists.
        </p>

        {/* Centered Button */}
        <div className="w-full flex justify-center lg:justify-start">
          <Link
            to="/about"
            className="bg-black text-white text-sm px-6 py-3 mb-10 rounded-lg hover:bg-gray-800 transition"
          >
            KNOW MORE
          </Link>
        </div>
      </motion.div>

      {/* Image Section */}
{/* Image Section */}
<motion.div
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={fadeUp}
  className="w-full lg:w-1/2 flex justify-center items-center"
>
  <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
    
    {/* Large Bento Image */}
    <div className="col-span-2 h-56 md:h-72">
      <img
        src="/lcas.jpg"
        alt="Footwear 1"
        className="w-full h-full object-cover rounded-2xl shadow-lg"
      />
    </div>

    {/* Small Image 1 */}
    <div className="h-40 md:h-52">
      <img
        src="/ladso.jpg"
        alt="Footwear 2"
        className="w-full h-full object-cover rounded-2xl shadow-lg"
      />
    </div>

    {/* Small Image 2 */}
    <div className="h-40 md:h-52">
      <img
        src="/kidso.jpg"
        alt="Footwear 3"
        className="w-full h-full object-cover rounded-2xl shadow-lg"
      />
    </div>

  </div>
</motion.div>

    </section>
  );
}
