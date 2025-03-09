import React from 'react';
import { motion } from 'framer-motion';

const HowWeCelebrate = () => (
  <section className="bg-white py-16">
    <div className="max-w-[1200px] mx-auto px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        How We Celebrate
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Garlanding Dogs', 'Applying Tika', 'Giving Treats'].map((step, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-bold text-[#FFA500] mb-4">{step}</h3>
            <p className="text-gray-700">
              A cherished ritual symbolizing respect and gratitude for our furry friends.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowWeCelebrate;
