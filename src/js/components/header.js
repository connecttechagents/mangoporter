/**
 * MangoPorter v2 — Shared Header Component
 * Injects the site header into #header-root
 */

const NAV_ITEMS = [
  { label: 'Our Story',        href: '/our-story.html'        },
  { label: 'Mangoes',          href: '/mangoes.html'          },
  { label: 'Sink Test',        href: '/sink-test.html'        },
  { label: 'How to Ripen',     href: '/how-to-ripen.html'     },
  { label: 'Community Drops',  href: '/community-drops.html'  },
  { label: 'Contact',          href: '/contact.html'          },
];

function getCurrentPage() {
  const path = window.location.pathname;
  return path === '/' || path === '/index.html' ? '/' : path;
}

export function initHeader() {
  const root = document.getElementById('header-root');
  if (!root) return;

  const currentPage = getCurrentPage();

  const navLinksHTML = NAV_ITEMS.map(item => {
    const isActive = currentPage === item.href ? ' active' : '';
    return `<a href="${item.href}" class="${isActive}">${item.label}</a>`;
  }).join('');

  const mobileLinksHTML = NAV_ITEMS.map(item => {
    return `<a href="${item.href}">${item.label}</a>`;
  }).join('');

  root.innerHTML = `
    <header class="site-header" id="site-header">
      <div class="header-inner">
        <a href="/" class="logo">
          <svg class="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" fill="#F6B93B" opacity="0.15"/>
            <path d="M20 6c-1 0-3 2-3 2s-1.5 3-1 6c.5 3 2 6 4 9s3 5 3 5 1-2 3-5 3.5-6 4-9c.5-3-1-6-1-6s-2-2-3-2c-1.5 0-2.5 1-3 1.5S21.5 6 20 6z" fill="#2E7D32"/>
            <path d="M20 8c-.5 0-2 1.5-2 1.5S16.5 12 17 14.5c.4 2 1.5 4.5 3 7 1.5-2.5 2.6-5 3-7 .5-2.5-.5-5-.5-5S21 8.5 20 8z" fill="#4CAF50"/>
          </svg>
          <span class="logo-text">Mango<span>Porter</span></span>
        </a>

        <nav class="nav-links" aria-label="Main Navigation">
          ${navLinksHTML}
        </nav>

        <a href="/community-drops.html#society-finder" class="btn btn-primary btn-sm nav-cta">
          Find My Society
        </a>

        <button class="hamburger" id="hamburger-btn" aria-label="Toggle Menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <div class="nav-backdrop" id="nav-backdrop"></div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile Navigation">
      ${mobileLinksHTML}
      <a href="/community-drops.html#society-finder" class="btn btn-primary">Find My Society</a>
    </nav>
  `;

  // --- Header scroll effect ---
  const header = document.getElementById('site-header');
  
  // Check if we are on a page with a dark hero (like home)
  const hasDarkHero = !!document.querySelector('.hero-section');
  if (hasDarkHero) {
    header.classList.add('is-light');
  }

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Mobile nav toggle ---
  const hamburger = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const backdrop = document.getElementById('nav-backdrop');

  function toggleMobileNav() {
    const isOpen = mobileNav.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', isOpen);
    backdrop.classList.toggle('is-visible', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  hamburger.addEventListener('click', toggleMobileNav);
  backdrop.addEventListener('click', toggleMobileNav);

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav.classList.contains('is-open')) {
        toggleMobileNav();
      }
    });
  });
}
