/* ── State ── */
let blogLang = 'ru';

/* ── Stars canvas ── */
(function initStars() {
  const canvas = document.getElementById('stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStars(count) {
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.2,
        alpha: Math.random(),
        speed: Math.random() * 0.003 + 0.001,
        drift: (Math.random() - 0.5) * 0.1
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.alpha += s.speed;
      if (s.alpha > 1 || s.alpha < 0) s.speed *= -1;
      s.x += s.drift;
      if (s.x < 0) s.x = canvas.width;
      if (s.x > canvas.width) s.x = 0;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); createStars(120); });
  resize();
  createStars(120);
  draw();
})();

/* ── Navbar scroll state ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 50);
});

/* ── Burger / mobile menu ── */
const burger = document.getElementById('burger');
const navMobileMenu = document.getElementById('navMobileMenu');
burger?.addEventListener('click', () => {
  navMobileMenu.classList.toggle('open');
  burger.classList.toggle('open');
});
[...(navMobileMenu?.querySelectorAll('a') || []), ...document.querySelectorAll('.nav-links a')].forEach(a => {
  a.addEventListener('click', () => {
    navMobileMenu?.classList.remove('open');
    burger?.classList.remove('open');
  });
});

/* ── Scroll animations ── */
const blogObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.animate-on-scroll').forEach(el => blogObserver.observe(el));

/* ── Posts grid ── */
function renderBlogPosts() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  const t = window.TRANSLATIONS[blogLang];
  const posts = window.BLOG_POSTS || [];

  if (posts.length === 0) {
    grid.innerHTML = `<p class="blog-empty">${t['blog.empty']}</p>`;
    return;
  }

  grid.innerHTML = posts.map(post => `
    <a href="${post.url}" class="blog-card animate-on-scroll">
      <h3 class="blog-card-title">${blogLang === 'ru' ? post.title : post.titleEn}</h3>
      <p class="blog-card-desc">${blogLang === 'ru' ? post.description : post.descriptionEn}</p>
      <span class="blog-card-date">${post.date}</span>
    </a>
  `).join('');
  document.querySelectorAll('.blog-card').forEach(el => blogObserver.observe(el));
}

/* ── Language ── */
function applyBlogLang(l) {
  blogLang = l;
  const t = window.TRANSLATIONS[l];
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
  const label = l === 'ru' ? 'EN' : 'RU';
  if (document.getElementById('langToggle')) document.getElementById('langToggle').textContent = label;
  if (document.getElementById('langToggleMobile')) document.getElementById('langToggleMobile').textContent = label;
  renderBlogPosts();
}

document.getElementById('langToggle')?.addEventListener('click', () => {
  applyBlogLang(blogLang === 'ru' ? 'en' : 'ru');
});
document.getElementById('langToggleMobile')?.addEventListener('click', () => {
  applyBlogLang(blogLang === 'ru' ? 'en' : 'ru');
});

applyBlogLang('ru');
