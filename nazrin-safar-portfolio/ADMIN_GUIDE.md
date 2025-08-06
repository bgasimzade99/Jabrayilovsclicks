# Admin Panel İstifadə Təlimatı

## Giriş

Bu admin paneli Nazrin Safar portfoliyasının qalereya bölməsini idarə etmək üçün yaradılmışdır.

## Admin Panelə Giriş

1. Brauzerinizdə saytın ünvanına `/admin` əlavə edin
   - Məsələn: `https://jabrayilovsclicks.netlify.app/admin`

2. İstifadəçi adı və şifrəni daxil edin:
   - **İstifadəçi adı:** `nazrin`
   - **Şifrə:** `Nezrin2001%`

## Funksiyalar

### Qalereya İdarəetməsi

#### Yeni Şəkil Əlavə Etmək
1. "Yeni Şəkil Əlavə Et" düyməsinə basın
2. Şəkli seçin
3. Kateqoriyanı seçin (Portretlər, Toylar, Tədbirlər)
4. Başlıq və təsvir yazın
5. "Yüklə" düyməsinə basın

#### Şəkli Redaktə Etmək
1. Şəklin üzərinə gəlin
2. Qırmızı düyməyə (redaktə) basın
3. Məlumatları dəyişin
4. "Saxla" düyməsinə basın

#### Şəkli Silmək
1. Şəklin üzərinə gəlin
2. Qırmızı düyməyə (sil) basın
3. Təsdiqləyin

## Təhlükəsizlik

- Admin paneli istifadəçi adı və şifrə ilə qorunur
- İstehsal mühitində daha güclü autentifikasiya istifadə edin
- Məlumatları dəyişmək üçün `Admin.js` faylında `ADMIN_USERNAME` və `ADMIN_PASSWORD` dəyişənlərini yeniləyin

## Texniki Detallar

- React və Framer Motion istifadə edilir
- Responsive dizayn
- Real-time şəkil önizləməsi
- Drag & drop şəkil yükləməsi

## Dəstək

Hər hansı problem yaranarsa, developer ilə əlaqə saxlayın. 