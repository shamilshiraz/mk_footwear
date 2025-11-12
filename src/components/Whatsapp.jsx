import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react"; // WhatsApp-like icon

export default function Whatsapp() {
  const whatsappNumber = "919876543210"; // Replace with your actual number
  const message = encodeURIComponent("Hi! I have some queries about your products.");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
      className="fixed bottom-10 right-6 flex flex-col items-end z-50"
    >
      {/* Text Bubble */}


      {/* WhatsApp Floating Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <MessageCircle size={26} />
      </motion.a>
    </motion.div>
  );
}
