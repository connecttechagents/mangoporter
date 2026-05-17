/**
 * MangoPorter v2 — Shared Header Component
 * Injects the site header into #header-root
 */

const NAV_ITEMS = [
  { label: 'Home',             href: '/'                      },
  { label: 'Community Drops',  href: '/community-drops.html'  },
  { label: 'Our Story',        href: '/our-story.html'        },
  { label: 'Our Mangoes',      href: '/mangoes.html'          },
  { label: 'How to Ripen',     href: '/how-to-ripen.html'     },
  { label: 'Sink Test',        href: '/sink-test.html'        },
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
          <img src="/images/logo.png" alt="MangoPorter by NetraaNikhilam Farms" class="site-logo-img" style="height: 60px; width: auto; object-fit: contain;">
        </a>

        <nav class="nav-links" aria-label="Main Navigation">
          ${navLinksHTML}
        </nav>

        <div style="display:flex; align-items:center; gap: var(--space-md);">
          <a href="/community-drops.html#society-finder" class="btn btn-primary btn-sm nav-cta" style="margin-left: 0;">
            Find My Society Drop
          </a>
        </div>

        <button class="hamburger" id="hamburger-btn" aria-label="Toggle Menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div id="header-marquee-container" class="header-marquee-container hidden">
        <div id="header-batch-indicator" class="header-marquee-content">Current batch: Loading...</div>
      </div>
    </header>

    <div class="nav-backdrop" id="nav-backdrop"></div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile Navigation">
      ${mobileLinksHTML}
      <a href="/community-drops.html#society-finder" class="btn btn-primary">Find My Society Drop</a>
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
