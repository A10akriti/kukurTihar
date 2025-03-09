import React from 'react';
import { motion } from 'framer-motion';
import worshipDog from '../assets/worshipDog.jpeg';

const AboutKukurTihar = () => (
  <section className="max-w-[1200px] mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
        About <span className="text-[#FFA500]">Kukur Tihar</span>
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Kukur Tihar, part of the larger Tihar festival in Nepal, is a sacred day
        dedicated to honoring dogs. Known as the "Day of the Dogs," this
        tradition recognizes the bond between humans and their canine companions.
        Dogs are adorned with garlands, tilak (a red mark on the forehead), and
        offered delicious food as a token of respect and gratitude.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        This practice stems from ancient Hindu beliefs, where dogs are seen as
        the messengers of Yama, the god of death. Their loyalty and protective
        nature are celebrated, symbolizing their importance in both mythology
        and daily life. Kukur Tihar beautifully underscores the cultural reverence
        for all living beings.
      </p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={worshipDog}
        alt="Worshipping a dog"
        className="w-full max-w-sm mx-auto rounded-lg shadow-xl border border-gray-200"
      />
    </motion.div>
  </section>
);

export default AboutKukurTihar;
