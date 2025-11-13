import React from "react";

const HowWorks = () => {
  return (
    <div className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-green-800">How It Works</h2>
        <p className="text-gray-600 mt-2">
          Join, track, and share your eco journey!
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 max-w-5xl mx-auto">
        {/* 1 */}
        <div className="text-center">
          <div className="bg-green-100 p-6 rounded-full mx-auto w-24  h-24 flex items-center justify-center text-5xl">
            🌏
          </div>
          <h3 className=" mt-4 font-bold text-lg text-gray-800">
            1. Join a challenge
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Pick a green goal that inspires you.
          </p>
        </div>
        {/* 2 */}
        <div className="text-center">
          <div className="bg-green-100 p-6 rounded-full mx-auto w-24  h-24 flex items-center justify-center text-5xl">
            📊
          </div>
          <h3 className=" mt-4 font-bold text-lg text-gray-800">
            2. Track Progress
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Measure your daily eco-impact easily.
          </p>
        </div>
        {/* 3 */}
        <div className="text-center">
          <div className="bg-green-100 p-6 rounded-full mx-auto w-24  h-24 flex items-center justify-center text-5xl">
            💬
          </div>
          <h3 className=" mt-4 font-bold text-lg text-gray-800">
            3. SHare Tips
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Inspire others with your sustainability stories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
