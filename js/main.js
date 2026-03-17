// ================================================
// js/main.js — Utilitaires, nav, footer, cards
// ================================================

/* ---- Nav + menu mobile ---- */
function initNav() {
  const nav    = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');

  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
  }

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  // Lien actif
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ---- Animations scroll ---- */
function initScrollAnimations() {
  const els = document.querySelectorAll('[data-anim]');
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || i * 80;
        setTimeout(() => {
          entry.target.classList.add('anim-in');
        }, parseInt(delay));
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => {
    el.classList.add('anim-ready');
    obs.observe(el);
  });
}

/* ---- Compteur animé ---- */
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target  = el.dataset.count;
    const isPlus  = target.includes('+');
    const num     = parseInt(target.replace(/[^0-9]/g, ''));
    const dur     = 1500;
    const step    = dur / 60;
    let current   = 0;

    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const interval = setInterval(() => {
        current += num / (dur / step);
        if (current >= num) {
          current = num;
          clearInterval(interval);
        }
        el.textContent = Math.floor(current).toLocaleString('fr-FR') + (isPlus ? '+' : '');
      }, step);
    });
    obs.observe(el);
  });
}

/* ---- Utilitaires ---- */
function formatDate(d) {
  return new Date(d).toLocaleDateString('fr-FR', { day:'numeric', month:'long', year:'numeric' });
}

function niveauBadge(n) {
  return n === 'Débutant' ? 'badge-green' : n === 'Avancé' ? 'badge-gold' : 'badge-dim';
}

/* ---- Card formation ---- */
function cardFormation(f) {
  return `
    <article class="card ${!f.gratuit ? 'premium' : ''}"
             onclick="location.href='formation.html?id=${f.id}'">
      <div class="card-img">
        ${f.image
          ? `<img src="${f.image}" alt="${f.titre}" loading="lazy">`
          : `<div class="card-img-placeholder">${f.emoji}</div>`}
        <div class="card-badges">
          <span class="badge ${f.gratuit ? 'badge-green' : 'badge-gold'}">
            ${f.gratuit ? '✓ Gratuit' : '⭐ Premium'}
          </span>
          <span class="badge ${niveauBadge(f.niveau)}">${f.niveau}</span>
        </div>
        <span class="card-count">${f.gratuit ? '▶' : '🔒'} ${f.nbVideos} vidéos</span>
      </div>
      <div class="card-body">
        <div class="card-tags">${f.tags.map(t=>`<span class="card-tag">${t}</span>`).join('')}</div>
        <h3 class="card-title">${f.titre}</h3>
        <p class="card-desc">${f.desc}</p>
        <div class="card-meta">
          <span class="card-meta-item">🕐 ${f.duree}</span>
          <span class="card-meta-item">▶ ${f.nbVideos} vidéos</span>
        </div>
      </div>
      <div class="card-footer">
        ${f.gratuit
          ? `<span class="card-action">Voir la formation <span>→</span></span>`
          : `<span class="card-prix">${f.prix}</span>
             <span class="card-action">Voir <span>→</span></span>`}
      </div>
    </article>`;
}

/* ---- Card article ---- */
function cardArticle(a) {
  return `
    <article class="card"
             onclick="location.href='article.html?id=${a.id}'">
      <div class="card-img">
        ${a.image
          ? `<img src="${a.image}" alt="${a.titre}" loading="lazy">`
          : `<div class="card-img-placeholder">${a.emoji}</div>`}
        <div class="card-badges">
          <span class="badge badge-green">▶ ${a.videos.length} vidéo${a.videos.length>1?'s':''}</span>
        </div>
        <span class="card-count">📖 ${a.lecture}</span>
      </div>
      <div class="card-body">
        <div class="card-tags">${a.tags.map(t=>`<span class="card-tag">${t}</span>`).join('')}</div>
        <h3 class="card-title">${a.titre}</h3>
        <p class="card-desc">${a.desc}</p>
        <div class="card-meta">
          <span class="card-meta-item">📅 ${formatDate(a.date)}</span>
          <span class="card-meta-item">📖 ${a.lecture}</span>
        </div>
      </div>
      <div class="card-footer">
        <span class="card-action">Lire l'article <span>→</span></span>
      </div>
    </article>`;
}

/* ---- Nav HTML ---- */
function navHTML() {
  return `
    <nav class="nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">
          <div class="nav-logo-mark"><img src="images/logo.png" 
       alt="Astuces Excel" loading="lazy"
       style="height:30px;width:auto;border-radius:5px;" /></div>
          Astuces <span>Excel</span>
        </a>
        <button class="nav-toggle" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-links">
          <a href="index.html"      class="nav-link">Accueil</a>
          <a href="formations.html" class="nav-link">Formations</a>
          <a href="blog.html"       class="nav-link">Blog</a>
          <a href="index.html#contact" class="nav-link nav-cta">Contact</a>
        </div>
      </div>
    </nav>`;
}

/* ---- Footer HTML ---- */
function footerHTML() {
  const { nom, description, email, youtube, facebook, pinterest } = DATA.site;
  return `
    <footer class="footer">
      <div class="footer-inner">
        <div>
          <div class="footer-logo">
            <div class="footer-logo-mark"><img src="images/logo.png" 
       alt="Astuces Excel" loading="lazy"
       style="height:30px;width:auto;border-radius:5px;" /></div>
            ${nom}
          </div>
          <p class="footer-desc">${description}</p>
          <div class="footer-social">
            <a href="${youtube}" target="_blank" class="footer-soc-link" aria-label="YouTube">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="${facebook}" target="_blank" class="footer-soc-link" aria-label="Facebook">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="${pinterest}" target="_blank" class="footer-soc-link" aria-label="Pinterest">
              <i class="fab fa-pinterest"></i>
            </a>
            <a href="mailto:${email}" class="footer-soc-link" aria-label="Email">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Navigation</div>
          <ul class="footer-links">
            <li><a href="index.html">Accueil</a></li>
            <li><a href="formations.html">Formations</a></li>
            <li><a href="blog.html">Blog</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Contact</div>
          <ul class="footer-links">
            <li><a href="mailto:${email}">${email}</a></li>
            <li><a href="${youtube}" target="_blank">Chaîne YouTube</a></li>
            <li><a href="${facebook}" target="_blank">Page Facebook</a></li>
            <li><a href="${pinterest}" target="_blank">Plaque Pinterest</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">© ${new Date().getFullYear()} ${nom}. Tous droits réservés.</span>
        <span class="footer-credit">
          Conçu par <a href="https://wa.me/237657159941" target="_blank">Stéphanie Takam</a>
        </span>
      </div>
    </footer>`;
}

/* ---- CSS animations globales ---- */
const animStyle = document.createElement('style');
animStyle.textContent = `
  .anim-ready {
    opacity:0; transform:translateY(32px);
    transition:opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1);
  }
  .anim-in { opacity:1 !important; transform:translateY(0) !important; }
`;
document.head.appendChild(animStyle);

/* ---- Init au chargement ---- */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollAnimations();
  animateCounters();
});
