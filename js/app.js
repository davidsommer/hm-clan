const siteNav = [
  ['Home', 'index.html'],
  ['Geschichte', 'geschichte.html'],
  ['Konzerte', 'konzerte.html'],
  ['Videos', 'videos.html'],
];

const icons = {
  facebook: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13.5 21v-7h2.35l.45-3h-2.8V9.05c0-.82.4-1.62 1.7-1.62h1.43V4.88S15.34 4.66 14.1 4.66c-2.58 0-4.27 1.56-4.27 4.39V11H7.2v3h2.63v7h3.67Z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.6 7.2s-.2-1.45-.82-2.08c-.78-.82-1.65-.82-2.05-.87C15.86 4.04 12 4.04 12 4.04h-.01s-3.86 0-6.73.21c-.4.05-1.27.05-2.05.87-.62.63-.82 2.08-.82 2.08S2.18 8.9 2.18 10.7v1.68c0 1.8.21 3.5.21 3.5s.2 1.45.82 2.08c.78.82 1.8.79 2.25.88 1.63.16 6.54.21 6.54.21s3.87-.01 6.74-.22c.4-.05 1.27-.05 2.05-.87.62-.63.82-2.08.82-2.08s.21-1.8.21-3.5V10.7c0-1.8-.21-3.5-.21-3.5ZM9.95 14.17V8.9l5.02 2.64-5.02 2.63Z"/></svg>',
  spotify: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.58 14.42a.75.75 0 0 1-1.03.25c-2.82-1.72-6.36-2.11-10.54-1.16a.75.75 0 0 1-.33-1.46c4.58-1.04 8.51-.59 11.65 1.33.35.22.46.68.25 1.04Zm1.3-2.9a.9.9 0 0 1-1.24.3c-3.23-1.98-8.15-2.56-11.97-1.4a.9.9 0 1 1-.52-1.72c4.34-1.32 9.74-.67 12.94 1.58.42.26.55.82.29 1.24Zm.11-3.02C14.12 8.2 7.73 7.98 4.9 8.62a1.05 1.05 0 1 1-.46-2.05c3.25-.73 10.25-.47 14.61 2.12a1.05 1.05 0 0 1-1.07 1.81Z"/></svg>',
};

const renderHeader = () => {
  const mount = document.querySelector('[data-site-header]');
  if (!mount) return;

  mount.innerHTML = `
    <header class="site-header">
      <a class="brand" href="index.html" aria-label="hm-clan Home">
        <span class="brand-mark"><span class="brand-name">hm-clan</span><span class="brand-tag">history makers</span></span>
      </a>
      <button class="nav-toggle" id="navToggle" type="button" aria-label="Navigation öffnen" aria-expanded="false" aria-controls="mainNav"><span></span><span></span><span></span></button>
      <nav class="main-nav" id="mainNav" aria-label="Hauptnavigation">
        ${siteNav.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
      </nav>
    </header>
  `;
};

const renderFooter = () => {
  const mount = document.querySelector('[data-site-footer]');
  if (!mount) return;

  mount.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <a class="footer-logo" href="index.html" aria-label="hm-clan Home"><img src="img/hm-logo-transparent.png" alt="hm-clan Logo"></a>
        <nav aria-label="Footer Navigation">${siteNav.filter(([label]) => label !== 'Home').map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}</nav>
        <div class="footer-socials" aria-label="Social Links">
          <a class="social-link social-facebook" href="https://www.facebook.com/hmclan" target="_blank" rel="noopener" aria-label="hm-clan auf Facebook">${icons.facebook}</a>
          <a class="social-link social-youtube" href="https://www.youtube.com/@hmclan" target="_blank" rel="noopener" aria-label="hm-clan auf YouTube">${icons.youtube}</a>
          <a class="social-link social-spotify" href="https://open.spotify.com/intl-de/artist/0jUcev8Xkl7U9ZYzrL7odF?si=A6EIE3UtQQ-MbpiYGyW6OA" target="_blank" rel="noopener" aria-label="hm-clan auf Spotify">${icons.spotify}</a>
        </div>
      </div>
    </footer>
  `;
};

renderHeader();
renderFooter();

const body = document.body;
const header = document.querySelector('.site-header');
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.main-nav a').forEach((link) => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('is-active');
  }
});

const onScroll = () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 24);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lightboxImage = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('p');
  const closeButton = lightbox.querySelector('.lightbox-close');

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    body.style.overflow = '';
  };

  document.querySelectorAll('.photo').forEach((button) => {
    button.addEventListener('click', () => {
      lightboxImage.src = button.dataset.full;
      lightboxImage.alt = button.querySelector('img')?.alt || '';
      lightboxCaption.textContent = button.dataset.caption || '';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      body.style.overflow = 'hidden';
    });
  });

  closeButton?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });
}
