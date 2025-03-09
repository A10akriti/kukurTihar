import React from "react";
import dogImage from "../assets/GroupofDogs.jpeg"; // Ensure this path is correct

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center px-4 py-16">
      {/* Main Layout */}
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={dogImage}
            alt="Group of Dogs"
            className="w-full h-auto max-w-[500px] rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-12 bg-white p-8 rounded-lg shadow-md">
          {/* Section: Our Story */}
          <div>
            <h2 className="text-3xl font-bold text-[#FFA500] mb-4">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Kukur Tihar, a cherished day in Nepal’s Tihar festival, is dedicated
              to honoring dogs for their loyalty, companionship, and spiritual role.
              Dogs are revered as the messengers of Yama, the god of death, and are
              adorned with garlands, a tika on their foreheads, and given special
              meals.
            </p>
          </div>

          {/* Section: Why We Celebrate */}
          <div>
            <h2 className="text-3xl font-bold text-[#FFA500] mb-4">Why We Celebrate</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Dogs hold a special place in Nepali culture and spirituality.
              Celebrating Kukur Tihar allows us to acknowledge their contributions
              and the joy they bring into our lives. This unique tradition spreads a
              global message of love, gratitude, and respect for all animals.
            </p>
          </div>

          {/* Section: Our Vision */}
          <div>
            <h2 className="text-3xl font-bold text-[#FFA500] mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to share the values of Kukur Tihar beyond Nepal, inspiring
              communities around the world to honor and cherish the bond between humans
              and dogs. Together, we can create a compassionate world for our furry
              friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
