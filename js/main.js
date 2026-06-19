/* ============================================================
   KRIYAYOG ASHRAM — Shared JavaScript
   Header, Footer, Navigation, Scroll Effects
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
  setupScrollEffects();
  setupRevealAnimations();
});

/* ---------- Current page detection ---------- */
function getCurrentPage() {
  const path = window.location.pathname;
  const file = path.split('/').pop() || 'index.html';
  return file.replace('.html', '') || 'index';
}

/* ---------- Header Injection ---------- */
function injectHeader() {
  const page = getCurrentPage();
  const header = document.createElement('header');
  header.className = 'site-header';
  header.id = 'site-header';

  const navLinks = [
    { href: 'index.html', label: 'Home', id: 'index' },
    { href: 'about.html', label: 'Guru Lineage', id: 'about' },
    { href: 'teachings.html', label: 'Teachings', id: 'teachings' },
    { href: 'ashram.html', label: 'Ashram', id: 'ashram' },
    { href: 'events.html', label: 'Events & Blog', id: 'events' },
    { href: 'contact.html', label: 'Contact', id: 'contact' },
  ];

  header.innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="logo" id="logo-link">
        <img src="images/om-symbol.png" alt="Om" class="logo-icon" />
        <span class="logo-text">
          Sahaj Kriyayog Sadhan kendra
          <small>Kriya Yoga Lineage</small>
        </span>
      </a>
      
      <nav class="nav-desktop" id="nav-desktop">
        ${navLinks.map(link => `
          <a href="${link.href}" class="nav-link${page === link.id ? ' active' : ''}" id="nav-${link.id}">
            ${link.label}
          </a>
        `).join('')}
      </nav>

      <div class="hamburger" id="hamburger" aria-label="Toggle navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <nav class="nav-mobile" id="nav-mobile">
      ${navLinks.map(link => `
        <a href="${link.href}" class="nav-link${page === link.id ? ' active' : ''}" id="nav-mobile-${link.id}">
          ${link.label}
        </a>
      `).join('')}
    </nav>

    <div class="mobile-overlay" id="mobile-overlay"></div>
  `;

  document.body.prepend(header);

  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('nav-mobile');
  const overlay = document.getElementById('mobile-overlay');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMobile.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = navMobile.classList.contains('open') ? 'hidden' : '';
  });

  overlay.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMobile.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  });
}

/* ---------- Footer Injection ---------- */
function injectFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.id = 'site-footer';

  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo-text">
            🙏 Brahmarshi Satyananda Sannyas Ashram
          </div>
          <p>
            A sacred sanctuary dedicated to preserving the ancient science of Kriya Yoga. 
            Connecting souls to the pure lineage of Babaji Maharaj, Lahiri Mahasaya, 
            and the revered Gurus who carry this timeless tradition forward.
          </p>
          <div class="gold-separator" style="justify-content: flex-start; margin: 1rem 0;">
            <span class="om">ॐ</span>
          </div>
        </div>

        <div>
          <h4 class="footer-heading">Quick Links</h4>
          <div class="footer-links">
            <a href="index.html">Home</a>
            <a href="about.html">Guru Lineage</a>
            <a href="teachings.html">Teachings</a>
            <a href="ashram.html">Ashram</a>
            <a href="events.html">Events & Blog</a>
            <a href="contact.html">Contact</a>
          </div>
        </div>

        <div>
          <h4 class="footer-heading">Teachings</h4>
          <div class="footer-links">
            <a href="teachings.html#what-is-yoga">What is Yoga?</a>
            <a href="teachings.html#kriya-yoga">Kriya Yoga</a>
            <a href="teachings.html#three-pillars">Three Pillars</a>
            <a href="teachings.html#techniques">Techniques</a>
          </div>
        </div>

        <div>
          <h4 class="footer-heading">Contact</h4>
          <div class="footer-links">
            <a href="mailto:info@kriyayoga.org">info@kriyayoga.org</a>
            <a href="tel:+910000000000">+91-0000000000</a>
            <a href="contact.html">Visit Ashram</a>
            <a href="contact.html#donate">Support Us</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Brahmarshi Satyananda Sannyas Ashram. All rights reserved.</p>
        <p>Gita Prachar Mandali &bull; Serving Humanity Since Inception</p>
      </div>
    </div>
    <img src="images/om-symbol.png" alt="" class="footer-om" aria-hidden="true" />
  `;

  document.body.appendChild(footer);
}

/* ---------- Scroll Effects ---------- */
function setupScrollEffects() {
  const header = document.getElementById('site-header');

  const handleScroll = () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/* ---------- Scroll Reveal Animations ---------- */
function setupRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}
