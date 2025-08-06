import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowDown } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import heroImage from '../images/hero-1.jpg';
import About from './About';
import Gallery from './Gallery';
import FAQ from './FAQ';
import Contact from './Contact';
import './Home.css';

const Home = () => {
  const { t } = useLanguage();

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <section className="home">
        <div className="hero-background" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t('heroTitle')}
          </motion.h1>
          
          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {t('heroSubtitle')}
          </motion.h2>
          
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {t('heroDescription')}
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link to="/gallery">
              <motion.button
                className="cta-button primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('viewOurWork')}
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            onClick={scrollToBottom}
            className="scroll-button"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <FiArrowDown />
          </motion.button>
        </motion.div>
      </section>
      <About />
      <Gallery />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home; 