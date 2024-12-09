// pages/Home/Home.tsx
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between mt-0 sm:mt-[15%] ml-0 sm:ml-2 md:ml-10 p-6 md:p-10 h-screen main-content">
      {/* Text Section */}
      <div className="flex flex-col items-center sm:items-start">
        <h1 className="mb-2 font-extrabold text-white text-3xl sm:text-5xl animate-pulse md:text-4xl lg:text-5xl text-center sm:text-left">
          Welcome to Our Website!!
        </h1>
        <p className="mb-6 text-sm text-white sm:text-base animate-pulse md:text-lg lg:text-xl text-center sm:text-left">
          Explore our templates and get started today!
        </p>
        <Link to="/templates">
          <button className="bg-blue-600 motion-preset-wobble  hover:bg-blue-300 px-4 sm:px-6 py-2 sm:py-3 rounded-md text-white transition duration-200">
            Get Started
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="mt-6 sm:mt-0 sm:ml-6 flex justify-center items-center sm:w-1/2">
        <img 
          src="src/assets/welcomeg.png" 
          alt="Description of the image" 
          className="w-full sm:w-auto max-w-xl sm:max-w-lg animate-wiggle"
        />
      </div>
    </div>
  );
};

export default Home;