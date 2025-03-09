import React from 'react';
import worshipDog from '../assets/worshipDog.jpeg';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[400px] flex items-center justify-center" style={{ backgroundImage: `url(${worshipDog})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-4xl md:text-6xl font-bold text-[#FFA500]">About Us</h1>
      </div>

      {/* About Content */}
      <div className="max-w-[1200px] mx-auto py-16 px-4 md:px-8 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FFA500]">Our Story</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Kukur Tihar is a beautiful and unique tradition celebrated in Nepal during the Tihar festival. This day is dedicated to honoring our beloved dogs for their loyalty, companionship, and service to humans. As part of the celebration, dogs are adorned with garlands, tika (a red mark on their foreheads), and offered delicious treats as symbols of love and respect.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Our mission is to spread awareness about this wonderful tradition and encourage people worldwide to appreciate the bond between humans and dogs. We believe that by celebrating Kukur Tihar, we can promote kindness, compassion, and respect for all animals.
          </p>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={worshipDog}
            alt="Worshipping a dog"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-8">Our Mission & Vision</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Our mission is to inspire a global movement that celebrates the unique relationship between humans and animals, starting with dogs. Through Kukur Tihar, we aim to foster a sense of gratitude and awareness for the countless ways dogs contribute to our lives.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            We envision a world where every dog is treated with dignity, care, and love, and where traditions like Kukur Tihar remind us of our responsibility to protect and cherish all living beings.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-[#FFA500] text-white py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us in Celebrating Kukur Tihar</h2>
          <p className="text-lg leading-relaxed mb-6">
            Be part of this meaningful tradition and help us spread the message of love and respect for dogs across the globe.
          </p>
          <button className="bg-white text-[#FFA500] font-semibold py-3 px-6 rounded-md shadow hover:bg-gray-200 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
