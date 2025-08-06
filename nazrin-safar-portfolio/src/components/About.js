import React from 'react';
import { motion } from 'framer-motion';
import { FiCamera, FiHeart, FiUsers } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import aboutImage from '../images/gallery-1.jpg';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const features = [
    {
      icon: <FiCamera />,
      title: t('authenticStorytelling'),
      description: t('authenticStorytellingDesc')
    },
    {
      icon: <FiHeart />,
      title: t('passionForPhotography'),
      description: t('passionForPhotographyDesc')
    },
    {
      icon: <FiUsers />,
      title: t('personalConnection'),
      description: t('personalConnectionDesc')
    }
  ];

  return (
    <section className="about">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {t('ourStory')}
            </motion.h2>

            <div className="about-message">
              <motion.h3
                className="greeting"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {t('greeting')}
              </motion.h3>

              {t('aboutMessage').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {paragraph}
                </motion.p>
              ))}

              <motion.div
                className="signature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p>{t('signature')}</p>
                <h4>{t('photographers')}</h4>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="about-image" variants={itemVariants}>
            <div className="about-image-container">
              <img src={aboutImage} alt="Nazrin & Safar" className="about-photo" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="features-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="features-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {t('whatWeOffer')}
          </motion.h3>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 