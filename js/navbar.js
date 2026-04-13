/**
 * navbar.js — HoneyBedger Solutions
 * Injects the shared navbar into any page and handles mobile menu toggle.
 * Each page calls: initNavbar('home') | 'about' | 'services' | 'solutions' | 'work' | 'contact'
 */
function initNavbar(activePage) {
  const navHTML = `
  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <div class="navbar-inner">
      <a href="index.html" class="logo" aria-label="HoneyBedger Solutions – Home">
       <div class="logo-icon">
  <img src="images/mylogo.png" alt="HoneyBedger Logo" class="logo-img">
</div>
        <span class="logo-text">
          <span class="part-a">Honey</span><span class="part-b">Bedger</span><span class="part-c">solutions</span>
        </span>
      </a>

      <ul class="nav-links" role="list">
        <li><a href="index.html"      id="nl-home"      class="nav-link ${activePage === 'home' ? 'active' : ''}">Home</a></li>
        <li><a href="about.html"     id="nl-about"     class="nav-link ${activePage === 'about' ? 'active' : ''}">About</a></li>
        <li><a href="services.html"  id="nl-services"  class="nav-link ${activePage === 'services' ? 'active' : ''}">Services</a></li>
        <li><a href="solutions.html" id="nl-solutions" class="nav-link ${activePage === 'solutions' ? 'active' : ''}">Solutions</a></li>
        <li><a href="work.html"      id="nl-work"      class="nav-link ${activePage === 'work' ? 'active' : ''}">Our Work</a></li>
        <li><a href="contact.html"   id="nl-contact"   class="nav-cta  ${activePage === 'contact' ? 'active' : ''}">Contact Us</a></li>
      </ul>

      <button class="ham-btn" onclick="toggleMenu()" aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="mobileMenu">
        <span class="ham-line" id="h1" aria-hidden="true"></span>
        <span class="ham-line" id="h2" aria-hidden="true"></span>
        <span class="ham-line" id="h3" aria-hidden="true"></span>
      </button>
    </div>

    <div id="mobileMenu" role="dialog" aria-label="Mobile navigation" aria-hidden="true">
      <div class="mob-links">
        <a href="index.html"      class="mob-link ${activePage === 'home' ? 'active' : ''}">Home</a>
        <a href="about.html"     class="mob-link ${activePage === 'about' ? 'active' : ''}">About</a>
        <a href="services.html"  class="mob-link ${activePage === 'services' ? 'active' : ''}">Services</a>
        <a href="solutions.html" class="mob-link ${activePage === 'solutions' ? 'active' : ''}">Solutions</a>
        <a href="work.html"      class="mob-link ${activePage === 'work' ? 'active' : ''}">Our Work</a>
        <a href="contact.html"   class="mob-cta">Contact Us</a>
      </div>
    </div>
  </nav>`;

  // Inject before first child of body
  document.body.insertAdjacentHTML('afterbegin', navHTML);
}

/* ── Mobile hamburger toggle ── */
let menuOpen = false;
function toggleMenu() {
  menuOpen = !menuOpen;
  const menu = document.getElementById('mobileMenu');
  const btn = document.querySelector('.ham-btn');
  const h1 = document.getElementById('h1');
  const h2 = document.getElementById('h2');
  const h3 = document.getElementById('h3');

  menu.classList.toggle('open', menuOpen);
  btn.setAttribute('aria-expanded', menuOpen);
  menu.setAttribute('aria-hidden', !menuOpen);

  if (menuOpen) {
    h1.style.transform = 'rotate(45deg) translateY(7px)';
    h2.style.opacity = '0';
    h3.style.transform = 'rotate(-45deg) translateY(-7px)';
  } else {
    closeMobileMenu();
  }
}

function closeMobileMenu() {
  menuOpen = false;
  const menu = document.getElementById('mobileMenu');
  const btn = document.querySelector('.ham-btn');
  if (menu) { menu.classList.remove('open'); menu.setAttribute('aria-hidden', 'true'); }
  if (btn) { btn.setAttribute('aria-expanded', 'false'); }
  const h1 = document.getElementById('h1');
  const h2 = document.getElementById('h2');
  const h3 = document.getElementById('h3');
  if (h1) { h1.style.transform = ''; h1.style.opacity = '1'; }
  if (h2) { h2.style.transform = ''; h2.style.opacity = '1'; }
  if (h3) { h3.style.transform = ''; h3.style.opacity = '1'; }
}

/* ── Scroll reveal ── */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.card, .svc-detail, .sol-card, .port-card, .testi-card, .why-card, .val-card, .stat-box, .logo-box, .about-feat'
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.dataset.revealDelay) || 0;
        setTimeout(() => el.classList.add('visible'), delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach((el, i) => {
    el.classList.add('reveal');
    el.dataset.revealDelay = (i % 4) * 75;
    observer.observe(el);
  });
}

const whatsappFloat = `
<a href="https://wa.me/919894611814?text=Hi%20HoneyBedger%20Solutions%2C%20I%20have%20an%20enquiry"
   class="whatsapp-float"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Chat on WhatsApp">
   <i class="fa-brands fa-whatsapp"></i>
</a>
`;

document.body.insertAdjacentHTML("beforeend", whatsappFloat);