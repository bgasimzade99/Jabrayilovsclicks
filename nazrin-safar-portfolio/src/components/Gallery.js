import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiZoomIn } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import gallery1 from '../images/gallery-1.jpg';
import gallery2 from '../images/gallery-2.jpg';
import gallery3 from '../images/gallery-3.jpg';
import gallery4 from '../images/gallery-4.jpg';
import gallery5 from '../images/gallery-5.jpg';
import gallery6 from '../images/gallery-6.jpg';
import './Gallery.css';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', label: t('all') },
    { id: 'portraits', label: t('portraits') },
    { id: 'weddings', label: t('weddings') },
    { id: 'events', label: t('events') }
  ];

  const galleryItems = [
    { id: 1, category: 'portraits', title: 'Portrait 1', description: 'Elegant portrait photography', image: gallery1 },
    { id: 2, category: 'weddings', title: 'Wedding 1', description: 'Beautiful wedding moments', image: gallery2 },
    { id: 3, category: 'portraits', title: 'Portrait 2', description: 'Natural portrait session', image: gallery3 },
    { id: 4, category: 'events', title: 'Event 1', description: 'Corporate event coverage', image: gallery4 },
    { id: 5, category: 'weddings', title: 'Wedding 2', description: 'Intimate wedding ceremony', image: gallery5 },
    { id: 6, category: 'portraits', title: 'Portrait 3', description: 'Family portrait session', image: gallery6 }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t('galleryTitle')}
        </motion.h2>

        <motion.div 
          className="gallery-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="gallery-grid"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="gallery-item"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => openLightbox(item)}
              >
                <div className="gallery-image-container">
                  <img src={item.image} alt={item.title} className="gallery-image" />
                  <div className="image-overlay">
                    <FiZoomIn className="zoom-icon" />
                  </div>
                </div>
                <div className="item-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="lightbox-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-lightbox" onClick={closeLightbox}>
                  <FiX />
                </button>
                <div className="lightbox-image">
                  <img src={selectedImage.image} alt={selectedImage.title} className="lightbox-img" />
                </div>
                <div className="lightbox-info">
                  <h3>{selectedImage.title}</h3>
                  <p>{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery; 