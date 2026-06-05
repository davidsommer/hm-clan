const root = document.body.dataset.root || '';
const home = root || './';

const siteNav = [
  ['Home', home],
  ['Geschichte', root + 'geschichte/'],
  ['Konzerte', root + 'konzerte/'],
  ['Videos', root + 'videos/'],
];

const icons = {
  facebook: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13.5 21v-7h2.35l.45-3h-2.8V9.05c0-.82.4-1.62 1.7-1.62h1.43V4.88S15.34 4.66 14.1 4.66c-2.58 0-4.27 1.56-4.27 4.39V11H7.2v3h2.63v7h3.67Z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M21.6 7.2s-.2-1.45-.82-2.08c-.78-.82-1.65-.82-2.05-.87C15.86 4.04 12 4.04 12 4.04h-.01s-3.86 0-6.73.21c-.4.05-1.27.05-2.05.87-.62.63-.82 2.08-.82 2.08S2.18 8.9 2.18 10.7v1.68c0 1.8.21 3.5.21 3.5s.2 1.45.82 2.08c.78.82 1.8.79 2.25.88 1.63.16 6.54.21 6.54.21s3.87-.01 6.74-.22c.4-.05 1.27-.05 2.05-.87.62-.63.82-2.08.82-2.08s.21-1.8.21-3.5V10.7c0-1.8-.21-3.5-.21-3.5ZM9.95 14.17V8.9l5.02 2.64-5.02 2.63Z"/></svg>',
  spotify: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.58 14.42a.75.75 0 0 1-1.03.25c-2.82-1.72-6.36-2.11-10.54-1.16a.75.75 0 0 1-.33-1.46c4.58-1.04 8.51-.59 11.65 1.33.35.22.46.68.25 1.04Zm1.3-2.9a.9.9 0 0 1-1.24.3c-3.23-1.98-8.15-2.56-11.97-1.4a.9.9 0 1 1-.52-1.72c4.34-1.32 9.74-.67 12.94 1.58.42.26.55.82.29 1.24Zm.11-3.02C14.12 8.2 7.73 7.98 4.9 8.62a1.05 1.05 0 1 1-.46-2.05c3.25-.73 10.25-.47 14.61 2.12a1.05 1.05 0 0 1-1.07 1.81Z"/></svg>',
  photo: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-13C4.67 20 4 19.33 4 18.5v-13Zm2 1V15l3.3-3.3a1 1 0 0 1 1.4 0l2.05 2.05 1.35-1.35a1 1 0 0 1 1.4 0L18 14.9V6.5H6Zm11.8 11-3.2-3.2-1.35 1.35a1 1 0 0 1-1.4 0L10 13.8l-3.7 3.7h11.5ZM8.9 9.2a1.4 1.4 0 1 1 2.8 0 1.4 1.4 0 0 1-2.8 0Z"/></svg>',
  video: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5.5 5h9A2.5 2.5 0 0 1 17 7.5v.95l2.65-1.72A.9.9 0 0 1 21 7.48v9.04a.9.9 0 0 1-1.35.75L17 15.55v.95a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 16.5v-9A2.5 2.5 0 0 1 5.5 5Zm0 2A.5.5 0 0 0 5 7.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-9Z"/></svg>',
};

const renderHeader = () => {
  const mount = document.querySelector('[data-site-header]');
  if (!mount) return;

  mount.innerHTML = `
    <header class="site-header">
      <a class="brand" href="${home}" aria-label="hm-clan Home">
        <span class="brand-mark"><span class="brand-name">hm-clan</span><span class="brand-tag">history makers</span></span>
      </a>
      <button class="nav-toggle" id="navToggle" type="button" aria-label="Navigation öffnen" aria-expanded="false" aria-controls="mainNav"><span></span><span></span><span></span></button>
      <nav class="main-nav" id="mainNav" aria-label="Hauptnavigation">
        ${siteNav.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
        <button class="nav-contact" type="button" data-contact-open>Kontakt</button>
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
        <a class="footer-logo" href="${home}" aria-label="hm-clan Home"><img src="${root}img/hm-logo-transparent.png" alt="hm-clan Logo" width="800" height="368" loading="lazy" decoding="async"></a>
        <nav aria-label="Footer Navigation">${siteNav.filter(([label]) => label !== 'Home').map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}</nav>
        <button class="footer-contact" type="button" data-contact-open>Kontakt</button>
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

const renderContactModal = () => {
  const modal = document.createElement('div');
  modal.className = 'contact-modal';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="contact-panel" role="dialog" aria-modal="true" aria-labelledby="contactTitle">
      <button class="contact-close" type="button" aria-label="Kontakt schliessen">&times;</button>
      <p class="kicker">Kontakt</p>
      <h2 id="contactTitle">Schreib hm-clan</h2>
      <form class="contact-form" novalidate>
        <div class="contact-field">
          <label for="contactName">Name</label>
          <input id="contactName" name="name" type="text" autocomplete="name" required>
        </div>
        <div class="contact-field">
          <label for="contactEmail">E-Mail</label>
          <input id="contactEmail" name="email" type="email" autocomplete="email" required>
        </div>
        <div class="contact-field">
          <label for="contactMessage">Nachricht</label>
          <textarea id="contactMessage" name="message" rows="6" required></textarea>
        </div>
        <div class="contact-trap" aria-hidden="true">
          <label for="contactWebsite">Website</label>
          <input id="contactWebsite" name="website" type="text" tabindex="-1" autocomplete="off">
        </div>
        <p class="contact-note">Das Formular öffnet dein E-Mail-Programm. Die Adresse wird erst beim Absenden zusammengesetzt.</p>
        <p class="contact-error" aria-live="polite"></p>
        <button class="btn" type="submit">Nachricht vorbereiten</button>
      </form>
    </div>
  `;
  document.body.appendChild(modal);

  const form = modal.querySelector('.contact-form');
  const error = modal.querySelector('.contact-error');
  const openedAt = { value: 0 };

  const openContact = () => {
    body.classList.remove('nav-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    body.style.overflow = 'hidden';
    openedAt.value = Date.now();
    error.textContent = '';
    setTimeout(() => modal.querySelector('#contactName')?.focus(), 40);
  };

  const closeContact = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    body.style.overflow = '';
  };

  document.querySelectorAll('[data-contact-open]').forEach((button) => {
    button.addEventListener('click', openContact);
  });

  modal.querySelector('.contact-close')?.addEventListener('click', closeContact);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeContact();
  });

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    error.textContent = '';

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const trap = String(formData.get('website') || '').trim();

    if (trap) return;
    if (Date.now() - openedAt.value < 1200) return;
    if (!name || !email || !message || !form.checkValidity()) {
      error.textContent = 'Bitte Name, E-Mail und Nachricht ausfüllen.';
      return;
    }

    const recipient = ['info', 'hm-clan', 'ch'];
    const to = `${recipient[0]}@${recipient[1]}.${recipient[2]}`;
    const subject = `Kontakt über hm-clan.ch von ${name}`;
    const bodyText = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      '',
      message,
    ].join('\n');

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    closeContact();
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) closeContact();
  });
};

renderContactModal();

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

const knownSlugs = ['geschichte', 'konzerte', 'videos'];
const lastSegment = window.location.pathname.replace(/\/index\.html$/, '/').replace(/\/+$/, '').split('/').pop();
const currentSlug = knownSlugs.includes(lastSegment) ? lastSegment : '';
document.querySelectorAll('.main-nav a').forEach((link) => {
  const match = link.getAttribute('href').match(/(geschichte|konzerte|videos)\/?$/);
  const linkSlug = match ? match[1] : '';
  if (linkSlug === currentSlug) {
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

const animateCount = (el) => {
  const target = parseInt(el.dataset.count, 10);
  if (Number.isNaN(target)) return;
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  let startTime = null;
  const step = (now) => {
    if (startTime === null) startTime = now;
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target + suffix;
    }
  };
  requestAnimationFrame(step);
};

const counters = document.querySelectorAll('[data-count]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (counters.length && 'IntersectionObserver' in window && !reduceMotion) {
  counters.forEach((el) => {
    el.textContent = `0${el.dataset.suffix || ''}`;
  });
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  counters.forEach((el) => countObserver.observe(el));
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

document.querySelectorAll('.youtube-lite').forEach((button) => {
  button.addEventListener('click', () => {
    const videoId = button.dataset.youtubeId;
    const title = button.dataset.title || 'YouTube Video';
    if (!videoId) return;

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
    iframe.title = title;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;
    button.replaceWith(iframe);
  });
});

const concertMediaIndex = window.hmConcertMediaIndex || [];
const initialConcertMedia = window.hmConcertMedia || [];
if (concertMediaIndex.length || initialConcertMedia.length) {
  const modal = document.createElement('div');
  modal.className = 'concert-modal';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="concert-modal-panel" role="dialog" aria-modal="true" aria-labelledby="concertModalTitle">
      <button class="concert-modal-close" type="button" aria-label="Modal schliessen">&times;</button>
      <p class="kicker" id="concertModalKicker"></p>
      <h2 id="concertModalTitle"></h2>
      <div class="concert-modal-body"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.classList.remove('is-photo-view');
    modal.setAttribute('aria-hidden', 'true');
    modal.querySelector('.concert-modal-body').innerHTML = '';
    body.style.overflow = '';
  };

  let activePhotos = [];
  let activePhotoIndex = 0;

  const showPhoto = (index) => {
    if (!activePhotos.length) return;
    activePhotoIndex = (index + activePhotos.length) % activePhotos.length;
    const photo = activePhotos[activePhotoIndex];
    const bodyEl = modal.querySelector('.concert-modal-body');
    bodyEl.innerHTML = `
      <div class="concert-photo-viewer">
        <button class="photo-nav photo-prev" type="button" aria-label="Vorheriges Foto">&lsaquo;</button>
        <figure>
          <img src="${photo.src}" alt="${photo.alt}" width="${photo.width}" height="${photo.height}">
          <figcaption>${activePhotoIndex + 1} / ${activePhotos.length}</figcaption>
        </figure>
        <button class="photo-nav photo-next" type="button" aria-label="Naechstes Foto">&rsaquo;</button>
      </div>
    `;
    modal.classList.add('is-photo-view');
    bodyEl.querySelector('.photo-prev')?.addEventListener('click', () => showPhoto(activePhotoIndex - 1));
    bodyEl.querySelector('.photo-next')?.addEventListener('click', () => showPhoto(activePhotoIndex + 1));
  };

  const showPhotoGrid = (eventData) => {
    activePhotos = eventData.photos;
    modal.classList.remove('is-photo-view');
    const bodyEl = modal.querySelector('.concert-modal-body');
    bodyEl.innerHTML = `
      <div class="concert-photo-grid">
        ${eventData.photos.map((photo, index) => `
          <button class="concert-photo-thumb" type="button" data-photo-index="${index}">
            <img src="${photo.thumb || photo.src}" alt="${photo.alt}" width="${photo.thumbWidth || photo.width}" height="${photo.thumbHeight || photo.height}" loading="lazy" decoding="async">
          </button>
        `).join('')}
      </div>
    `;
    bodyEl.querySelectorAll('[data-photo-index]').forEach((button) => {
      button.addEventListener('click', () => showPhoto(Number(button.dataset.photoIndex)));
    });
  };

  const openConcertModal = (eventData, type) => {
    const bodyEl = modal.querySelector('.concert-modal-body');
    modal.querySelector('#concertModalKicker').textContent = type === 'photos' ? 'Fotos' : 'Videos';
    modal.querySelector('#concertModalTitle').textContent = eventData.title;

    if (type === 'photos') {
      showPhotoGrid(eventData);
    } else {
      activePhotos = [];
      modal.classList.remove('is-photo-view');
      bodyEl.innerHTML = `
        <div class="concert-video-list">
          ${eventData.videos.map((video) => `
            <iframe src="${video.src}" title="${video.title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          `).join('')}
        </div>
      `;
    }

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    body.style.overflow = 'hidden';
  };

  const addMediaActions = (item, eventData) => {
    if (item.querySelector('[data-concert-media-actions]')) return;

    const target = item.querySelector('div');
    if (!target) return;

    const actions = document.createElement('div');
    actions.className = 'concert-media-actions';
    actions.dataset.concertMediaActions = 'true';

    if (eventData.photos.length) {
      const photosButton = document.createElement('button');
      photosButton.type = 'button';
      photosButton.innerHTML = `${icons.photo}<span>Fotos (${eventData.photos.length})</span>`;
      photosButton.addEventListener('click', () => openConcertModal(eventData, 'photos'));
      actions.appendChild(photosButton);
    }

    if (eventData.videos.length) {
      const videosButton = document.createElement('button');
      videosButton.type = 'button';
      videosButton.innerHTML = `${icons.video}<span>Videos (${eventData.videos.length})</span>`;
      videosButton.addEventListener('click', () => openConcertModal(eventData, 'videos'));
      actions.appendChild(videosButton);
    }

    if (actions.children.length) target.appendChild(actions);
    if (actions.children.length) item.classList.add('has-media');
  };

  const attachYearMedia = (events) => {
    const byDate = new Map(events.map((eventData) => [eventData.date, eventData]));
    document.querySelectorAll('.concert-year li').forEach((item) => {
      const date = item.querySelector('time')?.textContent.trim();
      const eventData = byDate.get(date);
      if (eventData) addMediaActions(item, eventData);
    });
  };

  const loadedYears = new Set();
  const loadingYears = new Map();
  const yearSources = new Map(concertMediaIndex.map((entry) => [entry.year, entry.src]));

  const loadYearMedia = (year) => {
    if (!year || loadedYears.has(year)) return Promise.resolve();
    if (loadingYears.has(year)) return loadingYears.get(year);

    const src = yearSources.get(year);
    if (!src) {
      loadedYears.add(year);
      return Promise.resolve();
    }

    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.defer = true;
      script.onload = () => {
        const events = window.hmConcertMediaYears?.[year] || [];
        attachYearMedia(events);
        loadedYears.add(year);
        resolve();
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });

    loadingYears.set(year, promise);
    return promise;
  };

  if (initialConcertMedia.length) attachYearMedia(initialConcertMedia);

  document.querySelectorAll('.concert-year').forEach((details) => {
    const year = details.querySelector('summary span')?.textContent.trim();
    if (details.open) loadYearMedia(year);
    details.addEventListener('toggle', () => {
      if (details.open) loadYearMedia(year);
    });
  });

  modal.querySelector('.concert-modal-close')?.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });
  window.addEventListener('keydown', (event) => {
    if (!modal.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeModal();
    if (modal.classList.contains('is-photo-view') && event.key === 'ArrowLeft') showPhoto(activePhotoIndex - 1);
    if (modal.classList.contains('is-photo-view') && event.key === 'ArrowRight') showPhoto(activePhotoIndex + 1);
  });
}

