import { useLocation } from 'react-router-dom';
import './navbar.css';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Headroom from 'react-headroom';
import { FaHome } from 'react-icons/fa';
import { MdAlternateEmail, MdArchive } from 'react-icons/md';
import { RiShareBoxLine } from 'react-icons/ri';
import { BiUserCircle } from 'react-icons/bi'; // About icon
import BurgerMenu from './BurgerMenu';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarItems1 = [
    { id: 1, title: 'Home', link: '#', icon: <FaHome /> },
    { id: 2, title: 'About', link: '#aboutUs', icon: <BiUserCircle /> }, // Added About
    { id: 3, title: 'Projects', link: '#projects', icon: <RiShareBoxLine /> },
    {
      id: 4,
      title: 'Contact Me',
      link: '#contactUs',
      icon: <MdAlternateEmail />,
    },

    {
      id: 5,
      title: 'Certificates',
      link: '#certificates',
      icon: <MdArchive />,
    },
  ];

  return (
    <div className="fixed top-0 text-white/70 text-lg z-10">
      <AnimatePresence initial={true} mode="wait">
        <Headroom>
          <nav
            key={location.pathname}
            location={location}
            className={`flex w-screen lg:pl-9 lg:pr-28 pl-3 justify-between lg:py-3 py-2 ${
              scrolled ? 'backdrop-blur-md bg-black/20' : ''
            }`}
          >
            <motion.img
              src="https://i.ibb.co.com/7dsWhyL8/TAWHID-3.png"
              className="w-24"
              alt="Logo"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
            <div className="lg:gap-24 gap-10 lg:flex hidden">
              {navbarItems1.map(navbarItem => (
                <span
                  key={navbarItem.id}
                  className="group items-center bg-transparent cursor-default hover:cursor-pointer flex gap-1 text-white hover:text-white/80 transition-colors duration-400"
                >
                  {navbarItem.icon}
                  <a
                    href={navbarItem.link}
                    className={`text-center relative after:transition-transform after:duration-700 after:ease-in-out after:absolute after:-bottom-[3.1px] after:left-0 after:block after:h-[3px] after:w-full after:scale-x-0 after:bg-[#2282ff] after:content-[''] after:group-hover:scale-x-100 transition-colors`}
                  >
                    {navbarItem.title}
                  </a>
                </span>
              ))}
            </div>
            <div className="lg:hidden block">
              <BurgerMenu />
            </div>
          </nav>
        </Headroom>
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
