/* ── State ── */
let lang = 'ru';

/* ── Stars canvas ── */
(function initStars() {
  const canvas = document.getElementById('stars');
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

  resize();
  createStars(200);
  draw();
  window.addEventListener('resize', () => { resize(); createStars(200); });
})();

/* ── Navbar scroll ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* ── Burger menu ── */
const burger = document.getElementById('burger');
const navMobileMenu = document.getElementById('navMobileMenu');
burger.addEventListener('click', () => {
  navMobileMenu.classList.toggle('open');
  burger.classList.toggle('open');
});
[...navMobileMenu.querySelectorAll('a'), ...document.querySelectorAll('.nav-links a')].forEach(a => {
  a.addEventListener('click', () => {
    navMobileMenu.classList.remove('open');
    burger.classList.remove('open');
  });
});

/* ── Smooth scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ── Scroll animations ── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

/* ── Counter animation ── */
function animateCounter(el, target) {
  let start = 0;
  const duration = 1500;
  const step = timestamp => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-num').forEach(el => {
        animateCounter(el, parseInt(el.dataset.count));
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.hero-stats');
if (statsEl) statsObserver.observe(statsEl);

/* ── Language ── */
function applyLang(l) {
  lang = l;
  const t = window.TRANSLATIONS[l];
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
  const label = l === 'ru' ? 'EN' : 'RU';
  if (document.getElementById('langToggle')) document.getElementById('langToggle').textContent = label;
  if (document.getElementById('langToggleMobile')) document.getElementById('langToggleMobile').textContent = label;
  renderProjects(currentFilter);
}

document.getElementById('langToggle')?.addEventListener('click', () => {
  applyLang(lang === 'ru' ? 'en' : 'ru');
});

document.getElementById('langToggleMobile')?.addEventListener('click', () => {
  applyLang(lang === 'ru' ? 'en' : 'ru');
});

/* ── Projects ── */
let currentFilter = 'all';
let visibleProjectsCount = 6;

const integrationIcons = {
  'Телеграм': '✈️', 'Telegram': '✈️', 'API Телеграм': '✈️',
  'WhatsApp': '💬', 'WhatsApp API': '💬',
  'Сайт': '🌐',
  'Битрикс24': '🏢',
  'AmoCRM': '📊',
  'Notion': '📝',
  'Google таблица': '📋', 'Google Таблицы': '📋',
  'Google Календарь': '📅',
  'Google Apps Script': '⚙️',
  'Instagram': '📸', 'Инстаграмм': '📸',
  'Wildberries API': '🛍️',
  'НН.ру': '💼', 'НН.ру API': '💼',
  'OpenAI': '🧠',
  'API ПроТолк': '🔮', 'ProTalk': '🔮',
  'Сторонний сервис': '🔌',
  'Wapico': '📡'
};

const roleMap = {
  'Консультант': 'role.consultant',
  'Наставник': 'role.mentor',
  'HR-менеджер': 'role.hr',
  'Специалист по заявкам': 'role.specialist',
  'Личный ассистент': 'role.assistant',
  'Внутренние процессы': 'role.internal',
  'Менеджер по продажам': 'role.sales',
  'Мобильное приложение': 'role.mobile'
};

function getIcon(integration) {
  for (const key in integrationIcons) {
    if (integration.toLowerCase().includes(key.toLowerCase())) return integrationIcons[key];
  }
  return '🔧';
}

function renderProjects(filter, isLoadMore = false) {
  if (!isLoadMore) visibleProjectsCount = 6;
  currentFilter = filter;
  const grid = document.getElementById('projectsGrid');
  const t = window.TRANSLATIONS[lang];
  const loadMoreBtnContainer = document.querySelector('.projects-more-container');
  
  const mobileApps = window.PROJECTS.filter(p => p.role === 'Мобильное приложение');
  const allEmployees = window.PROJECTS.filter(p => p.role !== 'Мобильное приложение');
  const services = []; 

  // Determine which categories to show
  let categoriesToShow = [];
  if (filter === 'all') {
    categoriesToShow = [
      { id: 'mobile', title: t['projects.category.mobile'], items: mobileApps, icon: '📱' },
      { id: 'employee', title: t['projects.category.employees'], items: allEmployees, icon: '🤖' },
      { id: 'service', title: t['projects.category.services'], items: services, icon: '⚡' }
    ];
  } else if (filter === 'employee' || Object.values(roleMap).includes(filter) || filter.startsWith('role.') || allEmployees.some(p => p.role === filter)) {
    categoriesToShow = [{ id: 'employee', title: t['projects.category.employees'], items: allEmployees, icon: '🤖' }];
  } else if (filter === 'Мобильное приложение') {
    categoriesToShow = [{ id: 'mobile', title: t['projects.category.mobile'], items: mobileApps, icon: '📱' }];
  } else if (filter === 'service') {
    categoriesToShow = [{ id: 'service', title: t['projects.category.services'], items: services, icon: '⚡' }];
  }

  if (categoriesToShow.length > 0) {
    grid.innerHTML = categoriesToShow.map(cat => {
      if (cat.items.length === 0 && cat.id !== 'service') return ''; 
      if (cat.id === 'service' && cat.items.length === 0) {
         return `
           <div class="project-group" id="group-${cat.id}" style="grid-column: 1 / -1; margin-bottom: 96px; width: 100%; opacity: 0.5;">
             <div class="group-header" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 40px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 20px 24px; border-radius: 16px;">
               <div style="display: flex; align-items: center; gap: 20px;">
                 <span style="font-size: 2.25rem;">${cat.icon}</span>
                 <h2 style="font-size: 1.75rem; font-weight: 700; color: #F1F5F9; margin: 0;">${cat.title}</h2>
               </div>
             </div>
             <p style="text-align: center; color: #64748B; padding: 40px; border: 2px dashed rgba(255,255,255,0.05); border-radius: 16px;">В этом разделе пока нет проектов</p>
           </div>
         `;
      }

      let subFilterHtml = '';
      let displayItems = cat.items;

      if (cat.id === 'employee') {
        const roles = [...new Set(allEmployees.map(p => p.role))];
        subFilterHtml = `
          <div class="sub-filters" style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px;">
            <button class="sub-filter-btn ${currentFilter === 'all' || currentFilter === 'employee' ? 'active' : ''}" data-role="all" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #94A3B8; padding: 8px 16px; border-radius: 20px; font-size: 0.85rem; cursor: pointer; transition: 0.3s;">Все</button>
            ${roles.map(r => {
              const isActive = currentFilter === r;
              return `<button class="sub-filter-btn ${isActive ? 'active' : ''}" data-role="${r}" style="background: ${isActive ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255,255,255,0.05)'}; border: 1px solid ${isActive ? '#3B82F6' : 'rgba(255,255,255,0.1)'}; color: ${isActive ? '#FFF' : '#94A3B8'}; padding: 8px 16px; border-radius: 20px; font-size: 0.85rem; cursor: pointer; transition: 0.3s;">${t[roleMap[r]] || r}</button>`;
            }).join('')}
          </div>
        `;
        
        if (currentFilter !== 'all' && currentFilter !== 'employee' && cat.items.some(p => p.role === currentFilter)) {
          displayItems = cat.items.filter(p => p.role === currentFilter);
        }
      }

      const visible = displayItems.slice(0, isLoadMore ? 100 : (cat.id === 'employee' && filter !== 'all' ? 12 : 6));
      
      return `
        <div class="project-group" id="group-${cat.id}" style="grid-column: 1 / -1; margin-bottom: 96px; width: 100%;">
          <div class="group-header" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 40px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 20px 24px; border-radius: 16px; backdrop-filter: blur(10px);">
            <div style="display: flex; align-items: center; gap: 20px;">
              <span style="font-size: 2.25rem;">${cat.icon}</span>
              <div>
                <h2 style="font-size: 1.75rem; font-weight: 700; color: #F1F5F9; margin: 0; line-height: 1.2;">${cat.title}</h2>
                <p style="color: #64748B; font-size: 0.875rem; margin: 4px 0 0 0;">${displayItems.length} ${t['hero.stat1'] || 'кейсов'}</p>
              </div>
            </div>
            <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(59, 130, 246, 0.1); display: flex; align-items: center; justify-content: center; color: #3B82F6;">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
          ${subFilterHtml}
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 32px; width: 100%;">
            ${visible.map(p => renderProjectCard(p, t)).join('')}
          </div>
        </div>
      `;
    }).join('');
    
    loadMoreBtnContainer.style.display = isLoadMore ? 'none' : 'block';
  }

  // Bind sub-filter events
  grid.querySelectorAll('.sub-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const role = btn.dataset.role;
      if (role === 'all') renderProjects('employee');
      else renderProjects(role);
      
      // Fixed scrolling: only scroll if the header is not in view
      const groupEl = document.getElementById('group-employee');
      if (groupEl) {
        const rect = groupEl.getBoundingClientRect();
        if (rect.top < 0) {
          window.scrollTo({ top: window.scrollY + rect.top - 100, behavior: 'smooth' });
        }
      }
    });
  });

  // Bind events
  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', e => {
      const id = parseInt(card.dataset.id);
      if (e.target.closest('.project-youtube')) {
        const p = window.PROJECTS.find(x => x.id === id);
        if (p && p.youtube) window.open(p.youtube, '_blank');
        return;
      }
      if (e.target.closest('.project-rustore')) {
        const p = window.PROJECTS.find(x => x.id === id);
        if (p && p.rustore) window.open(p.rustore, '_blank');
        return;
      }
      openModal(id);
    });
  });
}

function renderProjectCard(p, t) {
  const name = lang === 'en' ? p.nameEn : p.name;
  const desc = lang === 'en' ? (p.descriptionEn || p.description) : p.description;
  const roleKey = roleMap[p.role] || p.role;
  const roleText = t[roleKey] || p.role;
  
  const intIcons = p.integrations.slice(0, 4).map(i =>
    `<span class="project-integration">${getIcon(i)} ${i}</span>`
  ).join('');
  
  const youtubeBtn = p.youtube ? `<div class="project-youtube">▶ ${t['modal.watch'] || 'Демо'}</div>` : '';
  const downloadBtn = p.rustore ? `<div class="project-rustore">⬇ ${t['modal.download'] || 'RuStore'}</div>` : '';

  return `
    <div class="project-card animate-on-scroll visible" data-id="${p.id}">
      <div class="project-card-top">
        <div class="project-emoji">${getIcon(p.integrations[0])}</div>
        <div class="project-role">${roleText}</div>
      </div>
      <h3 class="project-title">${name}</h3>
      <p class="project-desc">${desc}</p>
      <div class="project-integrations">${intIcons}</div>
      <div class="project-footer">
        <div style="display: flex; gap: 8px;">${youtubeBtn}${downloadBtn}</div>
        <div class="project-links"><div class="project-link">→</div></div>
      </div>
    </div>`;
}

/* ── Filter buttons ── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    visibleProjectsCount = 6;
    renderProjects(btn.dataset.filter);
  });
});

/* ── Load More button ── */
document.getElementById('loadMoreProjects')?.addEventListener('click', () => {
  visibleProjectsCount += 6;
  renderProjects(currentFilter, true);
});

/* ── Modal ── */
function openModal(id) {
  const p = window.PROJECTS.find(x => x.id === id);
  if (!p) return;
  const t = window.TRANSLATIONS[lang];
  const name = lang === 'en' ? p.nameEn : p.name;
  const desc = lang === 'en' ? (p.descriptionEn || p.description) : p.description;
  const roleKey = roleMap[p.role] || p.role;
  const roleText = t[roleKey] || p.role;

  const intList = p.integrations.map(i =>
    `<span class="project-integration">${getIcon(i)} ${i}</span>`
  ).join('');
  
  const ytBlock = p.youtube
    ? `<a href="${p.youtube}" class="btn-primary" target="_blank" rel="noopener" style="margin-top: 24px; width: 100%;">▶ ${t['modal.watch'] || 'Смотреть демо'}</a>`
    : '';
    
  const downloadBlock = p.rustore
    ? `<a href="${p.rustore}" class="btn-outline" target="_blank" rel="noopener" style="margin-top: 12px; width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;">⬇ ${t['modal.download'] || 'Скачать в RuStore'}</a>`
    : '';

  const galleryBlock = p.images && p.images.length > 0
    ? `<div class="modal-gallery" style="margin-top: 24px; display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px;">
        ${p.images.map(img => `<img src="${img}" style="width: 100%; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); cursor: pointer;" onclick="window.open('${img}', '_blank')">`).join('')}
       </div>`
    : '';

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title-wrap">
           <div class="project-role" style="margin-bottom: 12px;">${roleText}</div>
           <h2 class="modal-title">${name}</h2>
        </div>
        <button class="modal-close" onclick="closeModal()">×</button>
      </div>
      <div class="modal-body">
        <p style="margin-bottom: 24px;">${desc}</p>
        <div class="modal-section">
          <h4 style="color: #F1F5F9; margin-bottom: 12px; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em;">${t['modal.integrations'] || 'Интеграции'}</h4>
          <div class="project-integrations">${intList}</div>
        </div>
        ${galleryBlock}
        ${ytBlock}
        ${downloadBlock}
      </div>
    </div>
  `;

  const modal = document.getElementById('modal');
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose')?.addEventListener('click', closeModal);
document.getElementById('modalOverlay')?.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ── Image Modal ── */
function openImageModal(src) {
  const modal = document.getElementById('imageModal');
  const img = document.getElementById('modalImg');
  img.src = src;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeImageModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.getElementById('imageModalClose')?.addEventListener('click', closeImageModal);
document.getElementById('imageModalOverlay')?.addEventListener('click', closeImageModal);

/* ── Init ── */
renderProjects('all');
applyLang('ru');

// Bind cert images
document.querySelectorAll('.cert-card img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => openImageModal(img.src));
});
