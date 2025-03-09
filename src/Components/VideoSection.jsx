import React from 'react';

const VideoSection = () => (
  <section className="bg-gray-100 py-16 px-6">
    <div className="max-w-[1200px] mx-auto text-center space-y-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Experience <span className="text-[#FFA500]">Kukur Tihar</span> in Action
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Watch this short video to immerse yourself in the vibrant traditions of Kukur Tihar. Learn how people honor dogs and celebrate their loyalty.
      </p>
      <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/sample-video"
          title="Kukur Tihar Festival"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </section>
);

export default VideoSection;
