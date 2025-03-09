import React, { useState, useEffect } from 'react';
import worshipDog from '../assets/GroupofDogs.jpeg'; 

const Hero = () => {
  const strings = ['Honoring Dogs as Gods', 'Spreading Love & Devotion', 'Celebrating Kukur Tihar Worldwide'];
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let typingInterval;

    if (typing) {
      typingInterval = setInterval(() => {
        setCurrentText((prev) => {
          const nextChar = strings[currentIndex].slice(0, prev.length + 1);
          if (nextChar === strings[currentIndex]) {
            setTyping(false);
          }
          return nextChar;
        });
      }, 100);
    } else {
      setTimeout(() => {
        setTyping(true);
        setCurrentIndex((prev) => (prev + 1) % strings.length);
        setCurrentText('');
      }, 1500);
    }

    return () => clearInterval(typingInterval);
  }, [typing, currentIndex]);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center h-screen max-w-[1200px] mx-auto px-6">
      <div className="w-full md:w-1/2 flex flex-col items-start text-left">
        <p className="text-[#FFA500] font-semibold text-lg sm:text-xl md:text-2xl mb-4 uppercase tracking-wider">
          Celebrate the Bond Between Humans and Dogs
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Experience the Spirit of <span className="text-[#FFA500]">Kukur Tihar</span>
        </h1>
        <div className="flex flex-col sm:flex-row justify-start items-center mb-6">
          <p className="text-lg sm:text-xl md:text-2xl font-medium">Spreading</p>
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#FFA500] md:pl-4 pl-2">
            {currentText}
          </span>
        </div>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 max-w-[800px]">
          Join us in celebrating this unique festival where dogs are worshipped as gods.
          Let’s spread this beautiful tradition across the world.
        </p>
        <button className="bg-[#FFA500] text-black font-medium py-3 px-8 rounded-full shadow-lg hover:bg-orange-600 transition duration-300">
          Learn More
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img 
          src={worshipDog} 
          alt="Group of Dogs Worshipped" 
          className="w-full max-w-sm rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
