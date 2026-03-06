import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      brand: 'Web人',
      nav: { about: 'About', features: 'Features', services: 'Services', contact: 'Contact' },
      hero: {
        title: 'Build Your Dream Website Today',
        subtitle: 'Web人 is a modern web development company specializing in speedy and cutting-edge web solutions.',
        cta1: 'Get Started',
        cta2: 'View Our Work'
      },
      features: {
        title: 'Why Choose Web人?',
        subtitle: 'We deliver websites that stand out',
        items: [
          { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized for speed with seamless browsing experience.' },
          { icon: '🎨', title: 'Modern Design', desc: 'Beautiful, contemporary designs that capture attention.' },
          { icon: '📱', title: 'Fully Responsive', desc: 'Perfect look on all devices from desktop to mobile.' },
          { icon: '🔧', title: 'Easy Maintenance', desc: 'Clean code with React & TailwindCSS.' }
        ]
      },
      services: {
        title: 'Advanced Integrations',
        items: [
          { title: 'SEO Integration', desc: 'Built-in SEO to rank higher in search results.' },
          { title: 'GEO Targeting', desc: 'Local search optimization for your area.' },
          { title: 'AIO Solutions', desc: 'All-in-One platform combining all tools.' }
        ]
      },
      about: {
        title: 'About Web人',
        desc: 'Forward-thinking web development creating speedy and modern websites.',
        stats: { projects: 'Projects', speed: 'Speed', support: 'Support' }
      },
      contact: { title: 'Ready to Start?', subtitle: 'Contact us to build your modern website!', cta: 'Contact Us' },
      footer: 'Built with React & TailwindCSS'
    }
  },
  zh: {
    translation: {
      brand: 'Web人',
      nav: { about: '關於我們', features: '功能特色', services: '服務項目', contact: '聯絡我們' },
      hero: {
        title: '打造您的夢想網站',
        subtitle: 'Web人是現代化網頁開發公司，專注於快速且尖端的網頁解決方案。',
        cta1: '立即開始',
        cta2: '查看作品'
      },
      features: {
        title: '為什麼選擇Web人？',
        subtitle: '我們打造獨特出眾的網站',
        items: [
          { icon: '⚡', title: '極速體驗', desc: '優化速度，提供流暢的瀏覽體驗。' },
          { icon: '🎨', title: '現代設計', desc: '精美新穎的設計，吸引目光。' },
          { icon: '📱', title: '全裝置響應', desc: '從桌機到手機，完美呈現。' },
          { icon: '🔧', title: '輕鬆維護', desc: 'React與TailwindCSS打造簡潔程式碼。' }
        ]
      },
      services: {
        title: '進階整合功能',
        items: [
          { title: 'SEO搜尋優化', desc: '內建SEO功能，提升搜尋排名。' },
          { title: '地理定位', desc: '本地搜尋優化，連結當地客戶。' },
          { title: '整合方案', desc: '一站式平台，整合所有工具。' }
        ]
      },
      about: {
        title: '關於Web人',
        desc: '前瞻性網頁開發，打造快速現代化網站。',
        stats: { projects: '專案數', speed: '效能', support: '支援' }
      },
      contact: { title: '準備開始了嗎？', subtitle: '聯絡我們，打造您的現代化網站！', cta: '聯絡我們' },
      footer: '使用 React & TailwindCSS 打造'
    }
  },
  id: {
    translation: {
      brand: 'Web人',
      nav: { about: 'Tentang', features: 'Fitur', services: 'Layanan', contact: 'Kontak' },
      hero: {
        title: 'Bangun Website Impian Anda',
        subtitle: 'Web人 adalah perusahaan pengembangan web modern yang mengkhususkan diri dalam solusi web cepat dan mutakhir.',
        cta1: 'Mulai Sekarang',
        cta2: 'Lihat Karya'
      },
      features: {
        title: 'Mengapa Memilih Web人?',
        subtitle: 'Kami menghadirkan website yang menonjol',
        items: [
          { icon: '⚡', title: 'Super Cepat', desc: 'Dioptimalkan untuk kecepatan dan pengalaman browsing mulus.' },
          { icon: '🎨', title: 'Desain Modern', desc: 'Desain cantik dan kontemporer yang menarik perhatian.' },
          { icon: '📱', title: 'Responsif Penuh', desc: 'Tampilan sempurna di semua perangkat.' },
          { icon: '🔧', title: 'Mudah Dipelihara', desc: 'Kode bersih dengan React & TailwindCSS.' }
        ]
      },
      services: {
        title: 'Integrasi Lanjutan',
        items: [
          { title: 'Integrasi SEO', desc: 'SEO terintegrasi untuk peringkat lebih tinggi.' },
          { title: 'Penargetan GEO', desc: 'Optimasi pencarian lokal untuk area Anda.' },
          { title: 'Solusi AIO', desc: 'Platform All-in-One yang menggabungkan semua alat.' }
        ]
      },
      about: {
        title: 'Tentang Web人',
        desc: 'Pengembangan web visioner yang menciptakan website cepat dan modern.',
        stats: { projects: 'Proyek', speed: 'Kecepatan', support: 'Dukungan' }
      },
      contact: { title: 'Siap Memulai?', subtitle: 'Hubungi kami untuk membangun website modern Anda!', cta: 'Hubungi Kami' },
      footer: 'Dibangun dengan React & TailwindCSS'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
