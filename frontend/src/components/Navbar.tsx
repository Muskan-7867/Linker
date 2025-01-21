// App.tsx
import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; 

const App: React.FC = () => {
  return (
    <div>
      <nav className="top-0 left-0 z-10 fixed bg-white shadow-md px-4 py-3 w-full">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="src/assets/treelogo.png"
              alt="Tree Logo"
              className="mr-10 w-20 h-18"
            />
          </Link>

          {/* Navigation Items */}
          <ul className="hidden md:flex items-center space-x-4">
            <li>
              <Link to="/templates" className="text-blue-500 hover:text-blue-700">
                Templates
              </Link>
            </li>
            <li>
              <Link to="/login">
                <button className="bg-gray-200 hover:bg-blue-100 px-4 py-2 rounded-md text-blue-500 transition duration-200">
                  Login
                </button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="bg-blue-600 hover:bg-blue-300 px-4 py-2 rounded-[60px] text-white hover:text-blue-500 ">
                  Sign Up Free
                </button>
              </Link>
            </li>
          </ul>

          {/* Small Screen Items */}
          <div className="flex md:hidden items-center space-x-4">
          <Link to="/signup">
              <button className="bg-blue-600 hover:bg-blue-300 px-4 py-2 rounded-[60px] text-white hover:text-blue-500 transition duration-200 motion-preset-blink ">
                Sign Up Free
              </button>
            </Link>
            <Link to="/templates" className="text-blue-500">
              <FaBars className="w-6 h-6" /> {/* Icon for Templates */}
            </Link>
       
          </div>
        </div>
      </nav>
    </div>
  );
};

export default App;