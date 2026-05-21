// RUS Stencyl Forge — настройки Firebase Auth
// Версия для Cloudflare Pages

const firebaseConfig = {
  apiKey: "AIzaSyCk4A4LlE7zBVsAP-ZqQ8zhRHW5dSt5ZZU",
  authDomain: "rsf-ef100.firebaseapp.com",
  projectId: "rsf-ef100",
  storageBucket: "rsf-ef100.firebasestorage.app",
  messagingSenderId: "160945628740",
  appId: "1:160945628740:web:9f3cc2b8e8511ffbad7e11"
};

// Инициализация
firebase.initializeApp(firebaseConfig);

// Сокращения для других страниц
const auth = firebase.auth();