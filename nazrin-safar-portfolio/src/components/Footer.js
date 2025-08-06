import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/gallery', label: t('gallery') },
    { path: '/contact', label: t('contact') }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-brand">
            <motion.div
              className="footer-logo-container"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
                             <svg width="160" height="50" viewBox="0 0 160 50" xmlns="http://www.w3.org/2000/svg" className="footer-logo">
                 {/* Camera lens */}
                 <circle cx="25" cy="25" r="18" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.9"/>
                 <circle cx="25" cy="25" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
                 <circle cx="25" cy="25" r="6" fill="currentColor"/>
                 
                 {/* Camera body */}
                 <rect x="18" y="32" width="14" height="5" rx="1.5" fill="currentColor"/>
                 <rect x="32" y="33" width="3" height="8" rx="1.5" fill="currentColor"/>
                 
                 {/* Text */}
                 <text x="55" y="22" fontFamily="'Old Standard TT', serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="0.8">Nazrin</text>
                 <text x="55" y="38" fontFamily="'Old Standard TT', serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="0.8">Safar</text>
                 
                 {/* Decorative line */}
                 <line x1="55" y1="42" x2="140" y2="42" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
                 
                 {/* Small dots */}
                 <circle cx="145" cy="22" r="1.5" fill="currentColor" opacity="0.7"/>
                 <circle cx="149" cy="22" r="1.5" fill="currentColor" opacity="0.5"/>
                 <circle cx="153" cy="22" r="1.5" fill="currentColor" opacity="0.3"/>
               </svg>
            </motion.div>
            <p>{t('capturingLife')}</p>
          </div>
          
          <div className="footer-links">
            {footerLinks.map((link, index) => (
              <motion.div key={link.path}>
                <Link 
                  to={link.path}
                  className="footer-link"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {currentYear} Nazrin & Safar Photography. {t('allRightsReserved')}
          </p>
          <p className="footer-heart">
            {t('madeWith')} <FiHeart /> {t('by')} BGDev
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 