import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/gallery', label: t('gallery') },
    { path: '/faq', label: t('faq') },
    { path: '/contact', label: t('contact') }
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <motion.div
            className="logo-container"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
                         <svg width="180" height="45" viewBox="0 0 180 45" xmlns="http://www.w3.org/2000/svg" className="nav-logo-img">
               {/* Camera lens */}
               <circle cx="25" cy="22" r="15" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.9"/>
               <circle cx="25" cy="22" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
               <circle cx="25" cy="22" r="5" fill="currentColor"/>
               
               {/* Camera body */}
               <rect x="18" y="30" width="14" height="5" rx="1.5" fill="currentColor"/>
               <rect x="32" y="31" width="3" height="7" rx="1.5" fill="currentColor"/>
               
               {/* Text */}
               <text x="55" y="18" fontFamily="'Old Standard TT', serif" fontSize="16" fontWeight="700" fill="currentColor" letterSpacing="0.8">Nazrin</text>
               <text x="55" y="32" fontFamily="'Old Standard TT', serif" fontSize="16" fontWeight="700" fill="currentColor" letterSpacing="0.8">Safar</text>
               
               {/* Decorative line */}
               <line x1="55" y1="36" x2="150" y2="36" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
               
               {/* Small dots */}
               <circle cx="155" cy="18" r="1.2" fill="currentColor" opacity="0.7"/>
               <circle cx="159" cy="18" r="1.2" fill="currentColor" opacity="0.5"/>
               <circle cx="163" cy="18" r="1.2" fill="currentColor" opacity="0.3"/>
             </svg>
          </motion.div>
        </Link>

        <div className="nav-menu-container">
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <motion.li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="nav-actions">
            <LanguageSelector />
            
            <motion.div 
              className="hamburger"
              onClick={toggleMenu}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 