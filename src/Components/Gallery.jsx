import React from 'react';
import { motion } from 'framer-motion';
import worshipDog from '../assets/worshipDog.jpeg';

const Gallery = () => (
  <section className="py-16 bg-gray-100">
    <div className="max-w-[1200px] mx-auto px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Gallery
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Array(6).fill(null).map((_, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <img
              src={worshipDog}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
