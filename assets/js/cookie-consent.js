/* ── Cookie consent + analytics loader ── */
(function () {
  const CONSENT_KEY = 'cookieConsent';

  function loadYandexMetrika(counterId) {
    window.ym = window.ym || function () { (window.ym.a = window.ym.a || []).push(arguments); };
    window.ym.l = Date.now();
    const script = document.createElement('script');
    script.src = 'https://mc.yandex.ru/metrika/tag.js';
    script.onload = () => window.ym(counterId, 'init', { webvisor: true, clickmap: true, accurateTrackBounce: true });
    document.head.appendChild(script);
  }

  function loadGoogleAnalytics(measurementId) {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId);
  }

  function loadAnalytics() {
    if (window.YM_COUNTER_ID) loadYandexMetrika(window.YM_COUNTER_ID);
    if (window.GA_MEASUREMENT_ID) loadGoogleAnalytics(window.GA_MEASUREMENT_ID);
  }

  const banner = document.getElementById('cookieBanner');
  const acceptBtn = document.getElementById('cookieAccept');

  if (localStorage.getItem(CONSENT_KEY) === 'accepted') {
    loadAnalytics();
  } else if (banner) {
    banner.classList.add('visible');
  }

  acceptBtn?.addEventListener('click', () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    banner.classList.remove('visible');
    loadAnalytics();
  });
})();
