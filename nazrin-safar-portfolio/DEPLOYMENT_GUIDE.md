# Admin Panel Deploy Təlimatı

## 🚀 Real Deploy üçün Təlimatlar

### 1. Netlify API Token Alın

1. [Netlify Dashboard](https://app.netlify.com/) -a daxil olun
2. User Settings > Applications > Personal access tokens
3. "New access token" düyməsinə basın
4. Token-a ad verin (məsələn: "Admin Panel Deploy")
5. Token-ı kopyalayın və təhlükəsiz yerdə saxlayın

### 2. Environment Variables Təyin Edin

Proyekt qovluğunda `.env` faylı yaradın:

```env
REACT_APP_NETLIFY_TOKEN=your_actual_token_here
REACT_APP_NETLIFY_SITE_ID=jabrayilovsclicks
REACT_APP_WEBSITE_URL=https://jabrayilovsclicks.netlify.app/
```

### 3. Deploy Funksiyası

Admin panel-də "Deploy Et" düyməsinə basdıqda:

✅ **Uğurlu Deploy:**
- Dəyişikliklər https://jabrayilovsclicks.netlify.app/ -ə deploy olunur
- 2-3 dəqiqə ərzində canlı olur
- Bütün istifadəçilər yeni dəyişiklikləri görəcək

❌ **Token yoxdursa:**
- Manual deploy təlimatları göstərilir
- GitHub commit və Netlify Dashboard istifadə edin

### 4. Manual Deploy (Alternativ)

Əgər API token yoxdursa:

1. **GitHub-da dəyişiklikləri commit edin:**
   ```bash
   git add .
   git commit -m "Admin panel updates"
   git push origin main
   ```

2. **Netlify Dashboard-da:**
   - Site Settings > Build & deploy
   - "Trigger deploy" düyməsinə basın

3. **Netlify CLI ilə:**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

### 5. Təhlükəsizlik

- `.env` faylını heç vaxt GitHub-a push etməyin
- Token-ı heç kimə verməyin
- `.gitignore` faylında `.env` olduğundan əmin olun

### 6. Deploy Status

Deploy zamanı:
- "Deploy edilir..." mesajı göstərilir
- Uğurlu olduqda sayt linki göstərilir
- Xəta olduqda manual təlimatlar göstərilir

---

**Qeyd:** Bu deploy funksiyası yalnız admin panel-dəki dəyişiklikləri deploy edir. Əsas sayt dəyişiklikləri üçün GitHub commit tələb olunur. 