var LANG = {
  en: {
    // nav
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.skills': 'Skills',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    // hero
    'hero.tagline': 'Backend Developer & Linux Systems',
    'hero.bio': 'High school student at SMK Telkom Banjarbaru, Software Engineering major. I build WhatsApp automation with <a href="https://github.com/whiskeysockets/baileys" target="_blank" rel="noopener">Baileys</a>, manage Linux infrastructure, and write scripts so I don\'t have to do the same thing twice. Web dev isn\'t really my thing \u2014 but this site exists, so make of that what you will.',
    'hero.btn.work': 'See my work',
    'hero.btn.contact': 'Get in touch',

    // work
    'work.title': 'Selected Work',
    'work.subtitle': 'Stuff I built and actually use.',
    'work.wa.desc': 'Group management, media handling, custom commands. Talks directly to the WA Web API through Baileys \u2014 no third-party wrappers.',
    'work.server.desc': 'Old laptop running Debian, set up from scratch. CasaOS for the web UI, Immich for photo backups, Tailscale for remote access. Doubles as personal cloud storage and hosts my WhatsApp bot 24/7.',
    'work.arch.desc': 'Neovim, zsh, WM configs. Everything version-controlled so I can nuke and reinstall without thinking.',

    // skills
    'skills.title': 'Skills',
    'skills.subtitle': 'Tools I reach for daily.',
    'skills.languages': 'Languages',
    'skills.platforms': 'Platforms',
    'skills.infra': 'Infra',

    // contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Want to talk? Pick your channel.',

    // blog
    'blog.back': '← Back',
    'blog.title': 'Blog',
    'blog.subtitle': 'Thoughts, notes, and stuff I learned along the way.',
    'blog.post1.title': 'Why I Run a Home Server on an Old Laptop',
    'blog.post1.body': 'Most people throw away their old laptops. I turned mine into a Debian home server — CasaOS for management, Immich for photo backups, Tailscale so I can access everything from anywhere. It hosts my WhatsApp bot too. Total cost: zero. Sometimes the best server is the one you already own.',
    'blog.nav.home': 'Home',
    'blog.nav.blog': 'Blog',

    // footer
    'footer.copy': '\u00a9 2026 Nabil Abhitah Abyasha'
  },
  id: {
    // nav
    'nav.about': 'Tentang',
    'nav.work': 'Karya',
    'nav.skills': 'Keahlian',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontak',

    // hero
    'hero.tagline': 'Backend Developer & Sistem Linux',
    'hero.bio': 'Siswa SMK Telkom Banjarbaru, jurusan Rekayasa Perangkat Lunak. Saya membuat automasi WhatsApp dengan <a href="https://github.com/whiskeysockets/baileys" target="_blank" rel="noopener">Baileys</a>, mengelola infrastruktur Linux, dan menulis script supaya tidak perlu mengulang hal yang sama. Web dev bukan keahlian utama saya \u2014 tapi website ini ada, jadi silakan nilai sendiri.',
    'hero.btn.work': 'Lihat karya',
    'hero.btn.contact': 'Hubungi saya',

    // work
    'work.title': 'Karya Pilihan',
    'work.subtitle': 'Yang saya bangun dan benar-benar pakai.',
    'work.wa.desc': 'Manajemen grup, penanganan media, perintah kustom. Terhubung langsung ke WA Web API lewat Baileys \u2014 tanpa wrapper pihak ketiga.',
    'work.server.desc': 'Laptop lama yang menjalankan Debian, di-setup dari nol. CasaOS untuk web UI, Immich untuk backup foto, Tailscale untuk akses jarak jauh. Berfungsi juga sebagai cloud storage pribadi dan menjalankan bot WhatsApp 24/7.',
    'work.arch.desc': 'Neovim, zsh, konfigurasi WM. Semuanya di-version control supaya bisa format ulang dan install tanpa mikir.',

    // skills
    'skills.title': 'Keahlian',
    'skills.subtitle': 'Tools yang saya pakai sehari-hari.',
    'skills.languages': 'Bahasa',
    'skills.platforms': 'Platform',
    'skills.infra': 'Infra',

    // contact
    'contact.title': 'Kontak',
    'contact.subtitle': 'Mau ngobrol? Pilih channel-nya.',

    // blog
    'blog.back': '← Kembali',
    'blog.title': 'Blog',
    'blog.subtitle': 'Pemikiran, catatan, dan hal-hal yang saya pelajari.',
    'blog.post1.title': 'Kenapa Saya Pakai Laptop Lama Sebagai Home Server',
    'blog.post1.body': 'Kebanyakan orang membuang laptop lama mereka. Saya ubah jadi home server Debian — CasaOS untuk manajemen, Immich untuk backup foto, Tailscale supaya bisa diakses dari mana saja. Bot WhatsApp saya juga jalan di situ. Total biaya: nol. Kadang server terbaik adalah yang sudah kamu punya.',
    'blog.nav.home': 'Beranda',
    'blog.nav.blog': 'Blog',

    // footer
    'footer.copy': '\u00a9 2026 Nabil Abhitah Abyasha'
  }
};

function setLang(lang) {
  document.documentElement.lang = lang;
  var els = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < els.length; i++) {
    var key = els[i].getAttribute('data-i18n');
    if (LANG[lang][key]) {
      els[i].innerHTML = LANG[lang][key];
    }
  }
  var btn = document.querySelector('.lang-toggle');
  if (btn) btn.textContent = lang === 'en' ? 'ID' : 'EN';
  localStorage.setItem('lang', lang);
}

function toggleLang() {
  var current = localStorage.getItem('lang') || 'en';
  setLang(current === 'en' ? 'id' : 'en');
}

document.addEventListener('DOMContentLoaded', function () {
  var saved = localStorage.getItem('lang') || 'en';
  setLang(saved);
});
