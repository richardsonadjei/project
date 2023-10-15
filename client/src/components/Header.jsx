import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiCoffeeBeans } from 'react-icons/gi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-green-500 to-blue-900 py-4 shadow-lg ">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/about" className="flex items-center text-white text-lg font-bold">
          <GiCoffeeBeans className="mr-2 text-2xl text-gold" />
          Pador Farms
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/signin"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/signout"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Sign Out
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-white focus:outline-none"
          >
            &#9776;
          </button>
          {isMenuOpen && (
            <div className="absolute top-16 right-4 bg-gradient-to-r from-green-500 to-blue-900 p-4 shadow-md rounded-lg">
              <ul className="space-y-2">
                <li>
                  <Link to="/signin" className="text-white hover:underline">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/signout" className="text-white hover:underline">
                    Sign Out
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="text-white hover:underline">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}