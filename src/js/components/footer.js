/**
 * MangoPorter v2 — Shared Footer Component
 * Injects the site footer into #footer-root
 */

export function initFooter() {
  const root = document.getElementById('footer-root');
  if (!root) return;

  const currentYear = new Date().getFullYear();

  root.innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <a href="/" class="logo">
            <span class="logo-text" style="color: white;">Mango<span>Porter</span></span>
          </a>
          <p>
            Premium Chittoor mangoes from NetraaNikhilam Farms, delivered direct to your Bangalore society.
            <br><br>
            <em>"We only sell what we eat."</em>
          </p>
        </div>

        <div class="footer-section">
          <h4>Explore</h4>
          <a href="/our-story.html">Our Story</a>
          <a href="/mangoes.html">Our Mangoes</a>
          <a href="/sink-test.html">Sink Test</a>
          <a href="/how-to-ripen.html">How to Ripen</a>
        </div>

        <div class="footer-section">
          <h4>Connect</h4>
          <a href="/community-drops.html">Community Drops</a>
          <a href="/contact.html">Contact Us</a>
          <a href="https://wa.me/919019522193" target="_blank" rel="noopener">WhatsApp</a>
        </div>

        <div class="footer-section">
          <h4>Get in Touch</h4>
          <a href="mailto:mangoporter.in@gmail.com">mangoporter.in@gmail.com</a>
          <a href="https://wa.me/919019522193" target="_blank" rel="noopener">+91 90195 22193</a>
          <p style="color: rgba(255,255,255,0.5); font-size: 0.75rem; margin-top: 1rem;">
            NetraaNikhilam Farms<br>
            Chittoor, Andhra Pradesh
          </p>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© ${currentYear} MangoPorter by NetraaNikhilam Farms. All rights reserved.</span>
        <span>Farm-fresh mangoes, delivered with love 🥭</span>
      </div>
    </footer>
  `;
}
