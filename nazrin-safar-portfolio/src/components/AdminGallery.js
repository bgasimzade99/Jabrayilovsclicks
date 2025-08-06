import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUpload, FiEdit, FiTrash2, FiX, FiSave, FiPlus, FiCrop, FiImage } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './AdminGallery.css';

const AdminGallery = () => {
  const { language } = useLanguage();
  const [galleryItems, setGalleryItems] = useState([
    { id: 1, category: 'portraits', title: 'Portrait 1', description: 'Elegant portrait photography', image: require('../images/gallery-1.jpg') },
    { id: 2, category: 'weddings', title: 'Wedding 1', description: 'Beautiful wedding moments', image: require('../images/gallery-2.jpg') },
    { id: 3, category: 'portraits', title: 'Portrait 2', description: 'Natural portrait session', image: require('../images/gallery-3.jpg') },
    { id: 4, category: 'events', title: 'Event 1', description: 'Corporate event coverage', image: require('../images/gallery-4.jpg') },
    { id: 5, category: 'weddings', title: 'Wedding 2', description: 'Intimate wedding ceremony', image: require('../images/gallery-5.jpg') },
    { id: 6, category: 'portraits', title: 'Portrait 3', description: 'Family portrait session', image: require('../images/gallery-6.jpg') }
  ]);

  const [editingItem, setEditingItem] = useState(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [showCropModal, setShowCropModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [cropImage, setCropImage] = useState(null);
  const fileInputRef = useRef(null);

  const categories = [
    { id: 'portraits', label: language === 'az' ? 'Portretlər' : language === 'ru' ? 'Портреты' : language === 'tr' ? 'Portreler' : 'Portraits' },
    { id: 'weddings', label: language === 'az' ? 'Toylar' : language === 'ru' ? 'Свадьбы' : language === 'tr' ? 'Düğünler' : 'Weddings' },
    { id: 'events', label: language === 'az' ? 'Tədbirlər' : language === 'ru' ? 'Мероприятия' : language === 'tr' ? 'Etkinlikler' : 'Events' }
  ];

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setPreviewUrl(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = {
      id: Date.now(),
      category: formData.get('category'),
      title: formData.get('title'),
      description: formData.get('description'),
      image: previewUrl || require('../images/gallery-1.jpg') // Fallback image
    };

    setGalleryItems([...galleryItems, newItem]);
    setShowUploadForm(false);
    setSelectedFile(null);
    setPreviewUrl('');
    e.target.reset();
  };

  const handleEdit = (item) => {
    setEditingItem({ ...item });
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedItem = {
      ...editingItem,
      category: formData.get('category'),
      title: formData.get('title'),
      description: formData.get('description')
    };

    setGalleryItems(galleryItems.map(item => 
      item.id === editingItem.id ? updatedItem : item
    ));
    setEditingItem(null);
  };

  const handleDelete = (id) => {
    const confirmMessage = language === 'az' ? 'Bu şəkli silmək istədiyinizə əminsiniz?' : language === 'ru' ? 'Вы уверены, что хотите удалить это изображение?' : language === 'tr' ? 'Bu resmi silmek istediğinizden emin misiniz?' : 'Are you sure you want to delete this image?';
    if (window.confirm(confirmMessage)) {
      setGalleryItems(galleryItems.filter(item => item.id !== id));
    }
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
  };

  const handleChangePhoto = (item) => {
    setEditingItem(item);
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target.result);
        setCropImage(e.target.result);
        setShowCropModal(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCrop = () => {
    // Burada crop funksiyası olacaq
    setShowCropModal(false);
    // Crop edilmiş şəkli preview olaraq göstər
    setPreviewUrl(cropImage);
  };

  const handleSaveNewPhoto = () => {
    if (editingItem && previewUrl) {
      const updatedItem = {
        ...editingItem,
        image: previewUrl
      };
      setGalleryItems(galleryItems.map(item => 
        item.id === editingItem.id ? updatedItem : item
      ));
      setEditingItem(null);
      setSelectedFile(null);
      setPreviewUrl('');
      setCropImage(null);
    }
  };

  return (
    <div className="admin-gallery">
      {/* Hidden file input for change photo */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
             <div className="gallery-header">
                   <h2>{language === 'az' ? 'Qalereya İdarəetməsi' : language === 'ru' ? 'Управление галереей' : language === 'tr' ? 'Galeri Yönetimi' : 'Gallery Management'}</h2>
         <motion.button
           className="add-photo-button"
           onClick={() => setShowUploadForm(true)}
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
         >
           <FiPlus />
                       {language === 'az' ? 'Yeni Şəkil Əlavə Et' : language === 'ru' ? 'Добавить новое фото' : language === 'tr' ? 'Yeni Fotoğraf Ekle' : 'Add New Photo'}
         </motion.button>
       </div>

      {/* Upload Form */}
      <AnimatePresence>
        {showUploadForm && (
          <motion.div
            className="upload-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="upload-form"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
                             <div className="form-header">
                                   <h3>{language === 'az' ? 'Yeni Şəkil Əlavə Et' : language === 'ru' ? 'Добавить новое фото' : language === 'tr' ? 'Yeni Fotoğraf Ekle' : 'Add New Photo'}</h3>
                 <button onClick={() => setShowUploadForm(false)}>
                   <FiX />
                 </button>
               </div>

              <form onSubmit={handleUpload}>
                                 <div className="form-group">
                                       <label>{language === 'az' ? 'Şəkil seçin:' : language === 'ru' ? 'Выберите изображение:' : language === 'tr' ? 'Resim seçin:' : 'Select image:'}</label>
                   <input
                     type="file"
                     accept="image/*"
                     onChange={handleFileSelect}
                     required
                   />
                  {previewUrl && (
                    <div className="image-preview">
                      <img src={previewUrl} alt="Preview" />
                    </div>
                  )}
                </div>

                                                                    <div className="form-group">
                                        <label>{language === 'az' ? 'Kateqoriya:' : language === 'ru' ? 'Категория:' : language === 'tr' ? 'Kategori:' : 'Category:'}</label>
                     <select name="category" required>
                     {categories.map(cat => (
                       <option key={cat.id} value={cat.id}>{cat.label}</option>
                     ))}
                   </select>
                 </div>

                                   <div className="form-group">
                                        <label>{language === 'az' ? 'Başlıq:' : language === 'ru' ? 'Заголовок:' : language === 'tr' ? 'Başlık:' : 'Title:'}</label>
                    <input type="text" name="title" required />
                 </div>

                                   <div className="form-group">
                                        <label>{language === 'az' ? 'Təsvir:' : language === 'ru' ? 'Описание:' : language === 'tr' ? 'Açıklama:' : 'Description:'}</label>
                    <textarea name="description" rows="3" required></textarea>
                 </div>

                                 <div className="form-actions">
                                                            <button type="button" onClick={() => setShowUploadForm(false)}>
                       {language === 'az' ? 'Ləğv et' : language === 'ru' ? 'Отмена' : language === 'tr' ? 'İptal' : 'Cancel'}
                     </button>
                                       <button type="submit">
                      <FiUpload />
                      {language === 'az' ? 'Yüklə' : language === 'ru' ? 'Загрузить' : language === 'tr' ? 'Yükle' : 'Upload'}
                    </button>
                 </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edit Form */}
      <AnimatePresence>
        {editingItem && (
          <motion.div
            className="edit-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="edit-form"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
                             <div className="form-header">
                                   <h3>{language === 'az' ? 'Şəkli Redaktə Et' : language === 'ru' ? 'Редактировать изображение' : language === 'tr' ? 'Resmi Düzenle' : 'Edit Image'}</h3>
                 <button onClick={handleCancelEdit}>
                   <FiX />
                 </button>
               </div>

              <form onSubmit={handleSaveEdit}>
                                  <div className="form-group">
                                      <label>{language === 'az' ? 'Kateqoriya:' : language === 'ru' ? 'Категория:' : language === 'tr' ? 'Kategori:' : 'Category:'}</label>
                   <select name="category" defaultValue={editingItem.category} required>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.label}</option>
                    ))}
                  </select>
                </div>

                                 <div className="form-group">
                                      <label>{language === 'az' ? 'Başlıq:' : language === 'ru' ? 'Заголовок:' : language === 'tr' ? 'Başlık:' : 'Title:'}</label>
                   <input type="text" name="title" defaultValue={editingItem.title} required />
                </div>

                                 <div className="form-group">
                                      <label>{language === 'az' ? 'Təsvir:' : language === 'ru' ? 'Описание:' : language === 'tr' ? 'Açıklama:' : 'Description:'}</label>
                   <textarea name="description" rows="3" defaultValue={editingItem.description} required></textarea>
                </div>

                                 <div className="form-actions">
                                                            <button type="button" onClick={handleCancelEdit}>
                       {language === 'az' ? 'Ləğv et' : language === 'ru' ? 'Отмена' : language === 'tr' ? 'İptal' : 'Cancel'}
                     </button>
                                       <button type="submit">
                      <FiSave />
                      {language === 'az' ? 'Saxla' : language === 'ru' ? 'Сохранить' : language === 'tr' ? 'Kaydet' : 'Save'}
                    </button>
                 </div>
              </form>
            </motion.div>
          </motion.div>
                 )}
       </AnimatePresence>

       {/* Crop Modal */}
       <AnimatePresence>
         {showCropModal && (
           <motion.div
             className="crop-overlay"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
           >
             <motion.div
               className="crop-modal"
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.8, opacity: 0 }}
             >
                               <div className="crop-header">
                  <h3>{language === 'az' ? 'Şəkli Kəs' : language === 'ru' ? 'Обрезать изображение' : language === 'tr' ? 'Resmi Kırp' : 'Crop Image'}</h3>
                 <button onClick={() => setShowCropModal(false)}>
                   <FiX />
                 </button>
               </div>
               
               <div className="crop-content">
                 <div className="crop-preview">
                   <img src={cropImage} alt="Crop Preview" />
                 </div>
                 
                 <div className="crop-controls">
                                       <p>{language === 'az' ? 'Şəkli kəsmək üçün sahəni seçin' : language === 'ru' ? 'Выберите область для обрезки изображения' : language === 'tr' ? 'Resmi kırpmak için alan seçin' : 'Select area to crop the image'}</p>
                   <div className="crop-buttons">
                                           <button onClick={() => setShowCropModal(false)}>
                        {language === 'az' ? 'Ləğv et' : language === 'ru' ? 'Отмена' : language === 'tr' ? 'İptal' : 'Cancel'}
                      </button>
                                           <button onClick={handleCrop} className="crop-save">
                        <FiCrop />
                        {language === 'az' ? 'Kəs' : language === 'ru' ? 'Обрезать' : language === 'tr' ? 'Kırp' : 'Crop'}
                      </button>
                   </div>
                 </div>
               </div>
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>

       {/* Gallery Grid */}
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            className="gallery-item"
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="item-image">
              <img src={item.image} alt={item.title} />
              <div className="item-overlay">
                                 <div className="item-actions">
                   <motion.button
                     className="edit-button"
                     onClick={() => handleEdit(item)}
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                                           title={language === 'az' ? 'Redaktə et' : language === 'ru' ? 'Редактировать' : language === 'tr' ? 'Düzenle' : 'Edit'}
                   >
                     <FiEdit />
                   </motion.button>
                   <motion.button
                     className="change-photo-button"
                     onClick={() => handleChangePhoto(item)}
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                                           title={language === 'az' ? 'Şəkli dəyiş' : language === 'ru' ? 'Изменить фото' : language === 'tr' ? 'Resmi Değiştir' : 'Change Photo'}
                   >
                     <FiImage />
                   </motion.button>
                   <motion.button
                     className="delete-button"
                     onClick={() => handleDelete(item.id)}
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                                           title={language === 'az' ? 'Sil' : language === 'ru' ? 'Удалить' : language === 'tr' ? 'Sil' : 'Delete'}
                   >
                     <FiTrash2 />
                   </motion.button>
                 </div>
              </div>
            </div>
            <div className="item-info">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <span className="category-tag">{categories.find(cat => cat.id === item.category)?.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminGallery; 