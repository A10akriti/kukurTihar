import React from 'react';
import { motion } from 'framer-motion';

const GlobalVision = () => (
  <section className="bg-[#FFA500] py-16 text-white">
    <div className="max-w-[1200px] mx-auto px-4 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Join Our Global Vision
      </motion.h2>
      <p className="text-lg leading-relaxed mb-6">
        Help us spread the love for animals and promote Kukur Tihar worldwide...
      </p>
      <motion.button
        className="bg-white text-[#FFA500] font-medium py-3 px-6 rounded-md shadow hover:bg-gray-200"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        Learn More
      </motion.button>
    </div>
  </section>
);

export default GlobalVision;
