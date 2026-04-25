/**
 * MangoPorter v2 — Floating WhatsApp Button
 * Injects the WhatsApp FAB into #whatsapp-fab-root
 */

const WHATSAPP_NUMBER = '919019522193';
const DEFAULT_MESSAGE = 'Hi! I am interested in MangoPorter mangoes. Could you share more details?';

export function initWhatsAppFAB() {
  const root = document.getElementById('whatsapp-fab-root');
  if (!root) return;

  const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  root.innerHTML = `
    <a href="${waURL}" 
       target="_blank" 
       rel="noopener noreferrer" 
       class="whatsapp-fab" 
       aria-label="Chat with us on WhatsApp"
       title="Chat with us on WhatsApp">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.004 0C7.165 0 0 7.163 0 16.001c0 2.82.736 5.573 2.137 7.998L.072 32l8.204-2.148A15.945 15.945 0 0 0 16.004 32C24.838 32 32 24.837 32 16.001 32 7.163 24.838 0 16.004 0zm0 29.39a13.377 13.377 0 0 1-6.834-1.874l-.49-.29-5.08 1.332 1.356-4.95-.32-.508A13.332 13.332 0 0 1 2.608 16C2.608 8.6 8.604 2.606 16.004 2.606S29.4 8.6 29.4 16c0 7.398-5.998 13.39-13.396 13.39zm7.342-10.027c-.402-.201-2.38-1.174-2.75-1.308-.37-.134-.64-.201-.908.201-.27.402-1.042 1.308-1.278 1.577-.236.268-.471.302-.873.1-.402-.2-1.698-.625-3.234-1.993-1.195-1.065-2.001-2.38-2.237-2.782-.235-.402-.025-.62.177-.82.182-.18.402-.47.603-.706.202-.235.269-.402.403-.67.134-.268.067-.503-.034-.704-.1-.201-.908-2.188-1.244-2.995-.327-.786-.66-.68-.908-.692l-.774-.013c-.268 0-.705.1-1.074.503-.37.402-1.412 1.38-1.412 3.365 0 1.986 1.445 3.904 1.647 4.172.2.268 2.844 4.34 6.89 6.085.963.415 1.714.663 2.3.849.966.307 1.847.264 2.542.16.776-.116 2.38-.973 2.716-1.912.335-.94.335-1.745.234-1.913-.1-.168-.368-.268-.77-.47z"/>
      </svg>
    </a>
  `;
}
