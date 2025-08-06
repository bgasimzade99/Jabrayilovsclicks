import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLock, FiUnlock, FiImage, FiSettings, FiLogOut, FiEye, FiEyeOff } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import AdminGallery from './AdminGallery';
import './Admin.css';

const Admin = () => {
  const { t, language } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentSection, setCurrentSection] = useState('gallery');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // Settings state
  const [settings, setSettings] = useState({
    websiteTitle: 'Jabrayilovs Clicks',
    contactEmail: 'nazjabrail@gmail.com',
    phone: '+994555903584',
    instagram: 'https://www.instagram.com/jabrailovsclicks?igsh=MWd4bjJjeTN5bW9mMg==',
    facebook: 'jabrailovsclicks',
    youtube: 'Jabrayilovs Clicks'
  });

  // Simple authentication (in production, use proper authentication)
  const ADMIN_USERNAME = 'nazrin';
  const ADMIN_PASSWORD = 'Nezrin2001%';

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError(language === 'az' ? 'Yanlış istifadəçi adı və ya şifrə!' : language === 'ru' ? 'Неверное имя пользователя или пароль!' : language === 'tr' ? 'Yanlış kullanıcı adı veya şifre!' : 'Incorrect username or password!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setCurrentSection('gallery');
  };

  const handleDeploy = async () => {
    try {
      // Deploy status göstər
      const deployStatus = language === 'az' ? 'Deploy edilir...' : language === 'tr' ? 'Yayınlanıyor...' : 'Deploying...';
      alert(deployStatus);
      
      // Git commit və push - avtomatik
      try {
        // Git add
        const addResponse = await fetch('http://localhost:3001/api/git/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        });
        
        if (!addResponse.ok) {
          throw new Error('Git add failed');
        }
        
        // Git commit
        const commitResponse = await fetch('http://localhost:3001/api/git/commit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: `Admin panel updates - ${new Date().toLocaleString()}`
          })
        });
        
        if (!commitResponse.ok) {
          throw new Error('Git commit failed');
        }
        
        // Git push
        const pushResponse = await fetch('http://localhost:3001/api/git/push', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        });
        
        if (!pushResponse.ok) {
          throw new Error('Git push failed');
        }
        
        // Git uğurlu oldu, indi Netlify deploy et
        const deployMessage = language === 'az' 
          ? `✅ Git commit və push uğurla tamamlandı!\n\n🌐 Sayt: https://jabrayilovsclicks.netlify.app/\n\n⏱️ Dəyişikliklər 2-3 dəqiqə ərzində canlı olacaq.\n\n📝 Dəyişikliklər:\n• Sayt Başlığı: ${settings.websiteTitle}\n• Email: ${settings.contactEmail}\n• Telefon: ${settings.phone}\n• Instagram: ${settings.instagram}\n• Facebook: ${settings.facebook}\n• YouTube: ${settings.youtube}`
          : language === 'tr'
          ? `✅ Git commit ve push başarıyla tamamlandı!\n\n🌐 Site: https://jabrayilovsclicks.netlify.app/\n\n⏱️ Değişiklikler 2-3 dakika içinde canlı olacak.\n\n📝 Değişiklikler:\n• Site Başlığı: ${settings.websiteTitle}\n• Email: ${settings.contactEmail}\n• Telefon: ${settings.phone}\n• Instagram: ${settings.instagram}\n• Facebook: ${settings.facebook}\n• YouTube: ${settings.youtube}`
          : `✅ Git commit and push completed successfully!\n\n🌐 Website: https://jabrayilovsclicks.netlify.app/\n\n⏱️ Changes will be live in 2-3 minutes.\n\n📝 Changes:\n• Website Title: ${settings.websiteTitle}\n• Email: ${settings.contactEmail}\n• Phone: ${settings.phone}\n• Instagram: ${settings.instagram}\n• Facebook: ${settings.facebook}\n• YouTube: ${settings.youtube}`;
        
        alert(deployMessage);
        
      } catch (gitError) {
        console.error('Git error:', gitError);
        // Git xətası olsa da, manual deploy təlimatları göstər
        const manualDeployMessage = language === 'az' 
          ? `🚀 Git xətası baş verdi. Manual deploy edin:\n\n1. Terminal açın və bu əmrləri yazın:\n   git add .\n   git commit -m "Admin panel updates"\n   git push origin main\n\n2. Netlify Dashboard-a daxil olun:\n   https://app.netlify.com/sites/jabrayilovsclicks\n\n3. "Trigger deploy" düyməsinə basın\n\n4. Sayt: https://jabrayilovsclicks.netlify.app/\n\nDəyişikliklər 2-3 dəqiqə ərzində canlı olacaq!`
          : language === 'tr'
          ? `🚀 Git hatası oluştu. Manuel deploy edin:\n\n1. Terminal açın ve bu komutları yazın:\n   git add .\n   git commit -m "Admin panel updates"\n   git push origin main\n\n2. Netlify Dashboard'a gidin:\n   https://app.netlify.com/sites/jabrayilovsclicks\n\n3. "Trigger deploy" düğmesine tıklayın\n\n4. Site: https://jabrayilovsclicks.netlify.app/\n\nDeğişiklikler 2-3 dakika içinde canlı olacak!`
          : `🚀 Git error occurred. Please deploy manually:\n\n1. Open terminal and run these commands:\n   git add .\n   git commit -m "Admin panel updates"\n   git push origin main\n\n2. Go to Netlify Dashboard:\n   https://app.netlify.com/sites/jabrayilovsclicks\n\n3. Click "Trigger deploy" button\n\n4. Website: https://jabrayilovsclicks.netlify.app/\n\nChanges will be live in 2-3 minutes!`;
        
        alert(manualDeployMessage);
      }
      
    } catch (error) {
      console.error('Deploy error:', error);
      const errorMessage = language === 'az' 
         ? '❌ Deploy xətası baş verdi. Zəhmət olmasa manual deploy edin.\n\n📖 DEPLOYMENT_GUIDE.md faylına baxın.'
         : language === 'tr'
         ? '❌ Yayınlama hatası oluştu. Lütfen manuel olarak yayınlayın.\n\n📖 DEPLOYMENT_GUIDE.md dosyasını kontrol edin.'
         : '❌ Deploy error occurred. Please deploy manually.\n\n📖 Check DEPLOYMENT_GUIDE.md file.';
      alert(errorMessage);
    }
  };

  const handleSettingChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <motion.div 
          className="login-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
                     <div className="login-header">
             <FiLock className="lock-icon" />
                           <h2>{language === 'az' ? 'Admin Panel' : language === 'ru' ? 'Панель администратора' : language === 'tr' ? 'Admin Paneli' : 'Admin Panel'}</h2>
              <p>{language === 'az' ? 'Qalereya idarə etmək üçün daxil olun' : language === 'ru' ? 'Войдите для управления галереей' : language === 'tr' ? 'Galeriyi yönetmek için giriş yapın' : 'Login to manage the gallery'}</p>
           </div>
          
          <form onSubmit={handleLogin} className="login-form">
            <div className="input-group">
                             <input
                 type="text"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                                   placeholder={language === 'az' ? 'İstifadəçi adı' : language === 'ru' ? 'Имя пользователя' : language === 'tr' ? 'Kullanıcı adı' : 'Username'}
                 required
               />
             </div>
                           <div className="input-group">
                <div className="password-input-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                                         placeholder={language === 'az' ? 'Şifrəni daxil edin' : language === 'ru' ? 'Введите пароль' : language === 'tr' ? 'Şifrenizi girin' : 'Enter password'}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>
            
            {error && <div className="error-message">{error}</div>}
            
                         <motion.button
               type="submit"
               className="login-button"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <FiUnlock />
                               {language === 'az' ? 'Daxil ol' : language === 'ru' ? 'Войти' : language === 'tr' ? 'Giriş Yap' : 'Login'}
             </motion.button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="admin-panel">
             <div className="admin-header">
                   <h1>{language === 'az' ? 'Admin Panel' : language === 'ru' ? 'Панель администратора' : language === 'tr' ? 'Admin Paneli' : 'Admin Panel'}</h1>
         <motion.button
           className="logout-button"
           onClick={handleLogout}
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
         >
           <FiLogOut />
                       {language === 'az' ? 'Çıxış' : language === 'ru' ? 'Выйти' : language === 'tr' ? 'Çıkış' : 'Logout'}
         </motion.button>
       </div>

      <div className="admin-navigation">
                 <motion.button
           className={`nav-button ${currentSection === 'gallery' ? 'active' : ''}`}
           onClick={() => setCurrentSection('gallery')}
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
         >
           <FiImage />
                       {language === 'az' ? 'Qalereya' : language === 'ru' ? 'Галерея' : language === 'tr' ? 'Galeri' : 'Gallery'}
         </motion.button>
         
         <motion.button
           className={`nav-button ${currentSection === 'settings' ? 'active' : ''}`}
           onClick={() => setCurrentSection('settings')}
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
         >
           <FiSettings />
                       {language === 'az' ? 'Tənzimləmələr' : language === 'ru' ? 'Настройки' : language === 'tr' ? 'Ayarlar' : 'Settings'}
         </motion.button>
      </div>

      <div className="admin-content">
        {currentSection === 'gallery' && <AdminGallery />}
                 {currentSection === 'settings' && (
           <div className="settings-section">
                           <h3>{language === 'az' ? 'Tənzimləmələr' : language === 'ru' ? 'Настройки' : language === 'tr' ? 'Ayarlar' : 'Settings'}</h3>
             
             <div className="settings-grid">
                               <div className="setting-card">
                  <h4>{language === 'az' ? 'Sayt Tənzimləmələri' : language === 'ru' ? 'Настройки сайта' : language === 'tr' ? 'Site Ayarları' : 'Website Settings'}</h4>
                  <div className="setting-item">
                                         <label>{language === 'az' ? 'Sayt Başlığı:' : language === 'ru' ? 'Заголовок сайта:' : language === 'tr' ? 'Site Başlığı:' : 'Website Title:'}</label>
                    <input 
                      type="text" 
                      value={settings.websiteTitle}
                      onChange={(e) => handleSettingChange('websiteTitle', e.target.value)}
                    />
                  </div>
                  <div className="setting-item">
                                         <label>{language === 'az' ? 'Əlaqə Email:' : language === 'ru' ? 'Контактный Email:' : language === 'tr' ? 'İletişim Email:' : 'Contact Email:'}</label>
                    <input 
                      type="email" 
                      value={settings.contactEmail}
                      onChange={(e) => handleSettingChange('contactEmail', e.target.value)}
                    />
                  </div>
                  <div className="setting-item">
                                         <label>{language === 'az' ? 'Telefon:' : language === 'ru' ? 'Телефон:' : language === 'tr' ? 'Telefon:' : 'Phone:'}</label>
                    <input 
                      type="tel" 
                      value={settings.phone}
                      onChange={(e) => handleSettingChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div className="setting-card">
                  <h4>{language === 'az' ? 'Sosial Media' : language === 'ru' ? 'Социальные сети' : language === 'tr' ? 'Sosyal Medya' : 'Social Media'}</h4>
                  <div className="setting-item">
                    <label>Instagram:</label>
                    <input 
                      type="text" 
                      value={settings.instagram}
                      onChange={(e) => handleSettingChange('instagram', e.target.value)}
                    />
                  </div>
                  <div className="setting-item">
                    <label>Facebook:</label>
                    <input 
                      type="text" 
                      value={settings.facebook}
                      onChange={(e) => handleSettingChange('facebook', e.target.value)}
                    />
                  </div>
                  <div className="setting-item">
                    <label>YouTube:</label>
                    <input 
                      type="text" 
                      value={settings.youtube}
                      onChange={(e) => handleSettingChange('youtube', e.target.value)}
                    />
                  </div>
                </div>

               <div className="setting-card">
                                   <h4>{language === 'az' ? 'Deploy Dəyişikliklər' : language === 'ru' ? 'Развернуть изменения' : language === 'tr' ? 'Değişiklikleri Yayınla' : 'Deploy Changes'}</h4>
                  <p>{language === 'az' ? 'Bütün dəyişiklikləri canlı sayta yükləyin' : language === 'ru' ? 'Загрузить все изменения на живой сайт' : language === 'tr' ? 'Tüm değişiklikleri canlı siteye yükleyin' : 'Deploy all changes to live website'}</p>
                 <motion.button
                   className="deploy-button"
                   onClick={handleDeploy}
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                 >
                                       {language === 'az' ? 'Deploy Et' : language === 'ru' ? 'Развернуть' : language === 'tr' ? 'Yayınla' : 'Deploy'}
                 </motion.button>
               </div>
             </div>
           </div>
         )}
      </div>
    </div>
  );
};

export default Admin; 