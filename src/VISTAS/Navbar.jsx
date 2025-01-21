import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        style={{ marginBottom: "-10px", marginTop: "-10px" }}
        className="bg-slateCustom p-4"
      >
        <div className="flex justify-between items-center">
          <div className="text-white text-lg font-bold">KTH</div>
          <button
            className="text-white md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/niveles" className="text-white hover:text-gray-300">
              Niveles
            </Link>
            <Link to="/sim" className="text-white hover:text-gray-300">
              Simulador
            </Link>
          </div>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden mt-2 space-y-2`}
        >
          <Link
            to="/"
            className="block text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
