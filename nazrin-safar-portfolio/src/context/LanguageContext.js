import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      // Navigation
      home: 'Home',
      about: 'About',
      gallery: 'Gallery',
      faq: 'FAQ',
      contact: 'Contact',
      
      // Hero Section
      heroTitle: 'Nazrin & Safar',
      heroSubtitle: 'Photography',
      heroDescription: 'Capturing moments, love, and life through authentic storytelling',
      viewOurWork: 'View Our Work',
      
      // About Section
      ourStory: 'Our Story',
      greeting: 'HELLO EVERYONE!',
      aboutMessage: [
        'Welcome to our little world of light, emotion, and storytelling.',
        "We're Nazrin & Safar - two photographers who live for laughter, love, and perfectly imperfect moments. Our love for photography started years ago with simple cameras and big dreams. What began as a hobby soon became a shared passion, and now, a growing photography journey that we cherish every single day.",
        "To us, every photograph is a chapter of a story — your story. We're not just here to take pictures; we're here to freeze moments that would otherwise pass in a heartbeat. The joy in your eyes, the touch of a hand, a spontaneous laugh — those are the memories we chase.",
        "Our photography style is all about comfort, connection, and authenticity. Just show up as yourself, be in the moment, and let us turn your real emotions into beautiful memories.",
        "We'd love to be part of your story — to capture your moments, your love, and your life, exactly as it is. Let's create something unforgettable together!"
      ],
      signature: 'With love,',
      photographers: 'Nazrin & Safar',
      
      // Features
      whatWeOffer: 'What We Offer',
      authenticStorytelling: 'Authentic Storytelling',
      authenticStorytellingDesc: 'Every photograph tells a unique story, capturing genuine moments and emotions.',
      passionForPhotography: 'Passion for Photography',
      passionForPhotographyDesc: 'Years of experience and love for the craft, turning moments into memories.',
      personalConnection: 'Personal Connection',
      personalConnectionDesc: 'We build relationships with our clients to create comfortable, natural sessions.',
      
      // Gallery Section
      galleryTitle: 'Gallery',
      all: 'All',
      portraits: 'Portraits',
      weddings: 'Weddings',
      events: 'Events',
      
             // FAQ Section
       faqTitle: 'Frequently Asked Questions',
       faqSubtitle: 'Everything you need to know about our photography services',
       stillHaveQuestions: "Still have questions? We'd love to hear from you!",
       contactUs: 'Contact Us',
       
       // FAQ Questions
       faqQuestions: [
         {
           question: "What types of photography sessions do you offer?",
           answer: "We specialize in portrait photography, wedding photography, engagement sessions, family portraits, and special events. Each session is tailored to capture your unique story and personality."
         },
         {
           question: "How far in advance should I book my session?",
           answer: "We recommend booking at least 2-3 weeks in advance for portrait sessions and 6-12 months in advance for weddings. This ensures we can accommodate your preferred date and time."
         },
         {
           question: "What should I wear for my photography session?",
           answer: "We suggest wearing solid colors, avoiding busy patterns, and choosing outfits that make you feel confident and comfortable. We'll provide a detailed style guide before your session to help you prepare."
         },
         {
           question: "How long does a typical session last?",
           answer: "Portrait sessions typically last 1-2 hours, while wedding coverage can range from 4-8 hours depending on your package. We'll discuss timing during our consultation to ensure we capture everything you want."
         },
         {
           question: "When will I receive my photos?",
           answer: "Portrait sessions are delivered within 2-3 weeks, and wedding galleries are typically ready within 4-6 weeks. We'll provide you with a sneak peek within 48 hours of your session."
         },
         {
           question: "Do you offer digital files and prints?",
           answer: "Yes! All our packages include high-resolution digital files with print rights. We also offer professional printing services and custom albums. You'll have full access to your images for personal use."
         },
         {
           question: "What if the weather is bad on my session date?",
           answer: "For outdoor sessions, we monitor the weather closely and will reschedule if conditions aren't ideal. We want to ensure you get the best possible photos, so we're flexible with rescheduling."
         },
         {
           question: "Do you travel for sessions?",
           answer: "Absolutely! We love traveling for special occasions. We offer travel packages for destinations within reasonable distance, and we're always excited to capture your story in unique locations."
         }
       ],
      
      // Contact Section
      letsCreateTogether: "Let's Create Together",
      getInTouch: 'Get In Touch',
      readyToTellStory: "Ready to tell your story? We'd love to hear from you.",
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      instagram: 'Instagram',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      subject: 'Subject',
      tellUsAboutVision: 'Tell us about your vision...',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      thankYouMessage: "Thank you for your message! We'll get back to you soon.",
      
      // Footer
      capturingLife: "Capturing life's beautiful moments",
      allRightsReserved: 'All rights reserved.',
      madeWith: 'Made with',
      by: 'by',
      
      // Language Selector
      language: 'Language',
      english: 'English',
      azerbaijani: 'Azerbaijani',
      turkish: 'Turkish'
    },
    
    az: {
      // Navigation
      home: 'Ana Səhifə',
      about: 'Haqqımızda',
      gallery: 'Qalereya',
      faq: 'FAQ',
      contact: 'Əlaqə',
      
      // Hero Section
      heroTitle: 'Nazrin & Safar',
      heroSubtitle: 'Fotoqrafiya',
      heroDescription: 'Anları, sevgiyi və həyatı səmimi hekayəçilik vasitəsilə əks etdiririk',
      viewOurWork: 'İşlərimizə Baxın',
      
      // About Section
      ourStory: 'Hekayəmiz',
      greeting: 'HAMIYA SALAM!',
      aboutMessage: [
        'İşıq, emosiya və hekayəçilik dünyamıza xoş gəlmisiniz.',
        'Biz Nazrin və Safarıq - gülüş, sevgi və mükəmməl qüsurlu anlar üçün yaşayan iki fotoqrafıq. Fotoqrafiyaya olan sevgimiz illər əvvəl sadə kameralar və böyük arzularla başladı. Hobbi kimi başlayan şey tezliklə ortaq ehtiras oldu və indi hər gün qiymətləndirdiyimiz böyüyən fotoqrafiya səyahətimizə çevrildi.',
        'Bizə görə, hər fotoqraf hekayənin bir fəsli - sizin hekayənizdir. Biz sadəcə şəkil çəkmək üçün burada deyilik; biz ürəyin döyüntüsündə keçəcək anları dondurmaq üçün buradağı. Gözlərinizdəki sevinc, əl toxunuşu, təbii gülüş - bunlar bizim izlədiyimiz xatirələrdir.',
        'Fotoqrafiya stilimiz rahatlıq, əlaqə və səmimiyyət haqqındadır. Sadəcə özünüz kimi gəlin, anın içində olun və biz sizin həqiqi emosiyalarınızı gözəl xatirələrə çevirək.',
        'Sizin hekayənizin bir hissəsi olmağı istəyirik - anlarınızı, sevginizi və həyatınızı olduğu kimi əks etdirmək üçün. Gəlin unudulmaz bir şey yaradaq!'
      ],
      signature: 'Sevgi ilə,',
      photographers: 'Nazrin & Safar',
      
      // Features
      whatWeOffer: 'Nə Təklif Edirik',
      authenticStorytelling: 'Səmimi Hekayəçilik',
      authenticStorytellingDesc: 'Hər fotoqraf unikal hekayə danışır, həqiqi anları və emosiyaları əks etdirir.',
      passionForPhotography: 'Fotoqrafiyaya Ehtiras',
      passionForPhotographyDesc: 'Sənətə olan illərlərin təcrübəsi və sevgisi, anları xatirələrə çevirir.',
      personalConnection: 'Şəxsi Əlaqə',
      personalConnectionDesc: 'Müştərilərimizlə rahat, təbii sessiyalar yaratmaq üçün münasibətlər qururuq.',
      
      // Gallery Section
      galleryTitle: 'Qalereya',
      all: 'Hamısı',
      portraits: 'Portretlər',
      weddings: 'Toylar',
      events: 'Tədbirlər',
      
             // FAQ Section
       faqTitle: 'Tez-tez Verilən Suallar',
       faqSubtitle: 'Fotoqrafiya xidmətlərimiz haqqında bilməli olduğunuz hər şey',
       stillHaveQuestions: 'Hələ də suallarınız var? Sizdən eşitməyi istəyirik!',
       contactUs: 'Əlaqə Saxlayın',
       
       // FAQ Questions
       faqQuestions: [
         {
           question: "Hansı növ fotoqrafiya sessiyaları təklif edirsiniz?",
           answer: "Biz portret fotoqrafiyası, toy fotoqrafiyası, nişan sessiyaları, ailə portretləri və xüsusi tədbirlər sahəsində ixtisaslaşmışıq. Hər sessiya sizin unikal hekayənizi və şəxsiyyətinizi əks etdirmək üçün uyğunlaşdırılır."
         },
         {
           question: "Sessiyamı nə qədər əvvəlcədən rezerv etməliyəm?",
           answer: "Portret sessiyaları üçün ən azı 2-3 həftə, toylar üçün isə 6-12 ay əvvəlcədən rezerv etməyi tövsiyə edirik. Bu, seçdiyiniz tarix və vaxtı təmin etməyimizi təmin edir."
         },
         {
           question: "Fotoqrafiya sessiyam üçün nə geyinməliyəm?",
           answer: "Bərk rənglər geyinməyi, qarışıq naxışlardan çəkinməyi və özünüzü əmin və rahat hiss etdiyiniz geyimlər seçməyi təklif edirik. Sessiyadan əvvəl sizə hazırlanmağa kömək etmək üçün ətraflı stil təlimatı təqdim edəcəyik."
         },
         {
           question: "Tipik sessiya nə qədər davam edir?",
           answer: "Portret sessiyaları adətən 1-2 saat davam edir, toy əhatəsi isə paketinizə görə 4-8 saat arasında dəyişə bilər. Hər şeyi əks etdirdiyimizə əmin olmaq üçün məsləhətləşmə zamanı vaxtı müzakirə edəcəyik."
         },
         {
           question: "Fotolarımı nə vaxt alacağam?",
           answer: "Portret sessiyaları 2-3 həftə ərzində, toy qalereyaları isə adətən 4-6 həftə ərzində hazır olur. Sessiyanızdan 48 saat ərzində sizə önbaxış təqdim edəcəyik."
         },
         {
           question: "Rəqəmsal fayllar və çap xidmətləri təklif edirsinizmi?",
           answer: "Bəli! Bütün paketlərimiz çap hüquqları ilə yüksək keyfiyyətli rəqəmsal faylları əhatə edir. Həmçinin peşəkar çap xidmətləri və fərdi albomlar təklif edirik. Şəxsi istifadə üçün şəkillərinizə tam girişiniz olacaq."
         },
         {
           question: "Sessiya tariximdə hava pis olarsa nə olar?",
           answer: "Küçədə keçirilən sessiyalar üçün havanı diqqətlə izləyirik və şərait ideal deyilsə yenidən planlaşdıracağıq. Ən yaxşı mümkün fotoları almanızı istəyirik, buna görə də yenidən planlaşdırmaqda çevikiyik."
         },
         {
           question: "Sessiyalar üçün səyahət edirsinizmi?",
           answer: "Əlbəttə! Xüsusi tədbirlər üçün səyahət etməyi sevirik. Məqbul məsafədəki məkanlar üçün səyahət paketləri təklif edirik və hekayənizi unikal məkanlarda əks etdirməkdən həmişə həyəcanlanırıq."
         }
       ],
      
      // Contact Section
      letsCreateTogether: 'Gəlin Birlikdə Yaradaq',
      getInTouch: 'Əlaqə Saxlayın',
      readyToTellStory: 'Hekayənizi danışmağa hazırsınız? Sizdən eşitməyi istəyirik.',
      email: 'E-poçt',
      phone: 'Telefon',
      location: 'Yer',
      instagram: 'İnstaqram',
      yourName: 'Adınız',
      yourEmail: 'E-poçtunuz',
      subject: 'Mövzu',
      tellUsAboutVision: 'Vizyonunuz haqqında bizə deyin...',
      sendMessage: 'Mesaj Göndər',
      sending: 'Göndərilir...',
      thankYouMessage: 'Mesajınız üçün təşəkkür edirik! Tezliklə sizinlə əlaqə saxlayacağıq.',
      
      // Footer
      capturingLife: 'Həyatın gözəl anlarını əks etdiririk',
      allRightsReserved: 'Bütün hüquqlar qorunur.',
      madeWith: 'Sevgi ilə hazırlanıb',
      by: 'tərəfindən',
      
      // Language Selector
      language: 'Dil',
      english: 'English',
      azerbaijani: 'Azərbaycan',
      turkish: 'Türkçə'
    },
    
    tr: {
      // Navigation
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      gallery: 'Galeri',
      faq: 'SSS',
      contact: 'İletişim',
      
      // Hero Section
      heroTitle: 'Nazrin & Safar',
      heroSubtitle: 'Fotoğrafçılık',
      heroDescription: 'Anları, aşkı ve hayatı samimi hikaye anlatımıyla yakalıyoruz',
      viewOurWork: 'Çalışmalarımızı Görün',
      
      // About Section
      ourStory: 'Hikayemiz',
      greeting: 'HERKESE MERHABA!',
      aboutMessage: [
        'Işık, duygu ve hikaye anlatımının küçük dünyamıza hoş geldiniz.',
        'Biz Nazrin ve Safarız - kahkaha, aşk ve mükemmel kusurlu anlar için yaşayan iki fotoğrafçıyız. Fotoğrafçılığa olan sevgimiz yıllar önce basit kameralar ve büyük hayallerle başladı. Hobi olarak başlayan şey kısa sürede ortak tutku haline geldi ve şimdi her gün değer verdiğimiz büyüyen bir fotoğrafçılık yolculuğuna dönüştü.',
        'Bizim için her fotoğraf bir hikayenin bölümü - sizin hikayeniz. Biz sadece fotoğraf çekmek için burada değiliz; biz kalp atışında geçecek anları dondurmak için buradayız. Gözlerinizdeki neşe, el dokunuşu, doğal gülüş - bunlar bizim peşinde olduğumuz anılardır.',
        'Fotoğrafçılık stilimiz rahatlık, bağlantı ve samimiyet hakkındadır. Sadece kendiniz gibi gelin, anın içinde olun ve biz sizin gerçek duygularınızı güzel anılara dönüştürelim.',
        'Hikayenizin bir parçası olmayı istiyoruz - anlarınızı, aşkınızı ve hayatınızı olduğu gibi yakalamak için. Gelin unutulmaz bir şey yaratalım!'
      ],
      signature: 'Sevgiyle,',
      photographers: 'Nazrin & Safar',
      
      // Features
      whatWeOffer: 'Neler Sunuyoruz',
      authenticStorytelling: 'Samimi Hikaye Anlatımı',
      authenticStorytellingDesc: 'Her fotoğraf benzersiz bir hikaye anlatır, gerçek anları ve duyguları yakalar.',
      passionForPhotography: 'Fotoğrafçılığa Tutku',
      passionForPhotographyDesc: 'Sanata olan yılların deneyimi ve sevgisi, anları anılara dönüştürür.',
      personalConnection: 'Kişisel Bağlantı',
      personalConnectionDesc: 'Müşterilerimizle rahat, doğal seanslar yaratmak için ilişkiler kuruyoruz.',
      
      // Gallery Section
      galleryTitle: 'Galeri',
      all: 'Tümü',
      portraits: 'Portreler',
      weddings: 'Düğünler',
      events: 'Etkinlikler',
      
             // FAQ Section
       faqTitle: 'Sık Sorulan Sorular',
       faqSubtitle: 'Fotoğrafçılık hizmetlerimiz hakkında bilmeniz gereken her şey',
       stillHaveQuestions: 'Hala sorularınız var mı? Sizden duymayı istiyoruz!',
       contactUs: 'İletişime Geçin',
       
       // FAQ Questions
       faqQuestions: [
         {
           question: "Hangi tür fotoğrafçılık seansları sunuyorsunuz?",
           answer: "Portre fotoğrafçılığı, düğün fotoğrafçılığı, nişan seansları, aile portreleri ve özel etkinlikler alanında uzmanlaşmışızdır. Her seans benzersiz hikayenizi ve kişiliğinizi yakalamak için özelleştirilir."
         },
         {
           question: "Seansımı ne kadar önceden rezerve etmeliyim?",
           answer: "Portre seansları için en az 2-3 hafta, düğünler için ise 6-12 ay önceden rezerve etmeyi öneririz. Bu, tercih ettiğiniz tarih ve saati karşılamamızı sağlar."
         },
         {
           question: "Fotoğrafçılık seansım için ne giymeliyim?",
           answer: "Düz renkler giymeyi, karmaşık desenlerden kaçınmayı ve kendinizi güvenli ve rahat hissettiğiniz kıyafetler seçmeyi öneririz. Seansınızdan önce hazırlanmanıza yardımcı olmak için detaylı stil rehberi sunacağız."
         },
         {
           question: "Tipik bir seans ne kadar sürer?",
           answer: "Portre seansları genellikle 1-2 saat sürer, düğün kapsamı ise paketinize bağlı olarak 4-8 saat arasında değişebilir. Her şeyi yakaladığımızdan emin olmak için danışma sırasında zamanlamayı tartışacağız."
         },
         {
           question: "Fotoğraflarımı ne zaman alacağım?",
           answer: "Portre seansları 2-3 hafta içinde, düğün galerileri ise genellikle 4-6 hafta içinde hazır olur. Seansınızdan 48 saat içinde size ön izleme sunacağız."
         },
         {
           question: "Dijital dosyalar ve baskı hizmetleri sunuyor musunuz?",
           answer: "Evet! Tüm paketlerimiz baskı hakları ile yüksek kaliteli dijital dosyaları içerir. Ayrıca profesyonel baskı hizmetleri ve özel albümler sunuyoruz. Kişisel kullanım için fotoğraflarınıza tam erişiminiz olacak."
         },
         {
           question: "Seans tarihimde hava kötü olursa ne olur?",
           answer: "Açık havada yapılan seanslar için havayı dikkatle takip ediyoruz ve koşullar ideal değilse yeniden planlayacağız. En iyi mümkün fotoğrafları almanızı istiyoruz, bu yüzden yeniden planlamada esnekiz."
         },
         {
           question: "Seanslar için seyahat ediyor musunuz?",
           answer: "Kesinlikle! Özel günler için seyahat etmeyi seviyoruz. Makul mesafedeki lokasyonlar için seyahat paketleri sunuyoruz ve hikayenizi benzersiz mekanlarda yakalamaktan her zaman heyecan duyuyoruz."
         }
       ],
      
      // Contact Section
      letsCreateTogether: 'Gelin Birlikte Yaratın',
      getInTouch: 'İletişime Geçin',
      readyToTellStory: 'Hikayenizi anlatmaya hazır mısınız? Sizden duymayı istiyoruz.',
      email: 'E-posta',
      phone: 'Telefon',
      location: 'Konum',
      instagram: 'Instagram',
      yourName: 'Adınız',
      yourEmail: 'E-posta Adresiniz',
      subject: 'Konu',
      tellUsAboutVision: 'Vizyonunuz hakkında bize anlatın...',
      sendMessage: 'Mesaj Gönder',
      sending: 'Gönderiliyor...',
      thankYouMessage: 'Mesajınız için teşekkür ederiz! Yakında sizinle iletişime geçeceğiz.',
      
      // Footer
      capturingLife: 'Hayatın güzel anlarını yakalıyoruz',
      allRightsReserved: 'Tüm hakları saklıdır.',
      madeWith: 'Sevgiyle yapıldı',
      by: 'tarafından',
      
      // Language Selector
      language: 'Dil',
      english: 'English',
      azerbaijani: 'Azərbaycan',
      turkish: 'Türkçe'
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const value = {
    language,
    changeLanguage,
    t,
    translations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 