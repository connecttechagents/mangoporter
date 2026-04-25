/**
 * MangoPorter v2 — Main Entry Point
 * Initializes shared components and global behaviors
 */

import { initHeader } from './components/header.js';
import { initFooter } from './components/footer.js';
import { initWhatsAppFAB } from './components/whatsapp-fab.js';

import { fetchSocieties, searchSocieties } from './services/society-data.js';
import { sendEmail } from './services/email-service.js';

// --- Initialize Shared Components ---
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initFooter();
  initWhatsAppFAB();
  initScrollAnimations();
  initSocietyFinder();
  initContactForms();
});

// --- Scroll Animations (Intersection Observer) ---
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

// --- Society Finder Logic ---
let cachedSocieties = [];

async function initSocietyFinder() {
  const searchInput = document.getElementById('society-search');
  const activeState = document.getElementById('active-state');
  const notListedState = document.getElementById('not-listed-state');

  if (!searchInput) return;

  // Pre-fetch data
  cachedSocieties = await fetchSocieties();

  searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase().trim();

    if (value.length < 2) {
      activeState.style.display = 'none';
      notListedState.style.display = 'none';
      return;
    }

    const results = searchSocieties(value, cachedSocieties);

    if (results.length > 0) {
      renderSocietyResults(results, activeState);
      activeState.style.display = 'block';
      notListedState.style.display = 'none';
    } else {
      activeState.style.display = 'none';
      notListedState.style.display = 'block';
    }
  });
}

function renderSocietyResults(results, container) {
  // Clear previous results but keep the header if needed
  const header = `
    <div class="flex align-center gap-lg mb-lg">
      <div class="fs-4xl">✅</div>
      <div>
        <h3 class="mb-sm">We found your society!</h3>
        <p>Join the WhatsApp group for your community to get the latest updates.</p>
      </div>
    </div>
  `;
  
  const resultsHtml = results.map(s => `
    <div class="society-result-item p-lg border-bottom flex align-center justify-between">
      <div>
        <strong>${s.name}</strong><br>
        <small class="text-ink-light">${s.area}</small>
      </div>
      <a href="${s.whatsapp}" target="_blank" class="btn btn-sm btn-primary">Join Group</a>
    </div>
  `).join('');

  container.innerHTML = header + '<div class="results-list">' + resultsHtml + '</div>';
}

// --- Contact Form Logic ---
function initContactForms() {
  const forms = [
    { id: 'drop-request-form', template: 'template_drop_request' },
    { id: 'general-inquiry-form', template: 'template_general' }
  ];
  
  forms.forEach(config => {
    const form = document.getElementById(config.id);
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      try {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
        
        await sendEmail(form, config.template);
        
        const successMsg = document.getElementById('form-success');
        form.style.display = 'none';
        if (successMsg) successMsg.classList.remove('hidden');
        
        // Scroll to success message
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } catch (error) {
        console.error('Email sending failed:', error);
        alert('Sorry, there was an error sending your message. Please try again or contact us via WhatsApp.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  });
}
