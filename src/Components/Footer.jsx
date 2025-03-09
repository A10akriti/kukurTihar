import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage('Please enter a valid email.');
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccessMessage('Thank you for subscribing!');
        setEmail('');
        setErrorMessage('');
      } else {
        setErrorMessage('Failed to subscribe. Please try again.');
      }
    } catch (err) {
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <footer className="text-black py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Brand Description */}
        <div>
          <h1 className="text-2xl font-bold text-[#FFA500]">Kukur Tihar</h1>
          <p className="py-4 text-gray-600">
            Celebrating the unique bond between humans and dogs. Join us in spreading love and devotion through this meaningful tradition.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-[#FFA500] transition" size={20} />
            <FaTwitter className="cursor-pointer hover:text-[#FFA500] transition" size={20} />
            <FaInstagram className="cursor-pointer hover:text-[#FFA500] transition" size={20} />
            <FaLinkedinIn className="cursor-pointer hover:text-[#FFA500] transition" size={20} />
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h2 className="text-lg font-semibold pb-4 text-[#FFA500]">Subscribe to Updates</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFA500] text-black"
            />
            <button type="submit" className="bg-[#FFA500] text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition">
              Subscribe
            </button>
            {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-600 pt-8 border-t border-gray-300">
        <p>© 2024 Kukur Tihar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
