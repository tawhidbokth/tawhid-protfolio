import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-5">
        {/* Logo */}
        <img
          src="https://i.ibb.co.com/xmdsBKR/DALL-E-2025-01-04-17-49-51-A-modern-and-minimalist-logo-design-featuring-the-letter-T-prominently-re.webp"
          alt=""
          className="w-[60px] rounded-full"
        />

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li className="hover:text-teal-400 transition duration-300">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-teal-400 transition duration-300">
            <a href="#aboutUs">About</a>
          </li>
          <li className="hover:text-teal-400 transition duration-300">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-teal-400 transition duration-300">
            <a href="#contactUs">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <ul className="md:hidden bg-black text-center space-y-4 py-4">
          <li className="hover:text-teal-400 transition duration-300">
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li className="hover:text-teal-400 transition duration-300">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li className="hover:text-teal-400 transition duration-300">
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li className="hover:text-teal-400 transition duration-300">
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
