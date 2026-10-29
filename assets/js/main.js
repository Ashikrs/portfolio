'use strict';

const CASE_STUDIES = {
  india112: {
    category: '01 / CITIZEN SAFETY · ANDROID + iOS',
    title: '112 India',
    description: 'A citizen-facing emergency assistance mobile application built using Flutter, supporting access to SOS and emergency response services on Android and iOS.',
    contributions: [
      'Implemented emergency SOS workflows and API integration for response services.',
      'Built background location tracking and location-sharing functionality.',
      'Implemented SMS fallback and Firebase push notification handling.',
      'Participated in production delivery for Google Play and Apple App Store.'
    ],
    technologies: ['Flutter', 'Dart', 'REST APIs', 'Firebase', 'Location services']
  },
  supervisor: {
    category: '02 / OPERATIONAL ANALYTICS · ANDROID + iOS',
    title: '112 Supervisor',
    description: 'A supervisory mobile application for monitoring emergency response activities and viewing operational statistics through clear, API-driven dashboards.',
    contributions: [
      'Delivered a Flutter-based application for Android and iOS.',
      'Developed daily and weekly dashboards with analytical summaries.',
      'Built district-level views, event metrics and interactive reporting charts.',
      'Integrated backend REST APIs for current operational information.'
    ],
    technologies: ['Flutter', 'Dart', 'REST APIs', 'Data visualization', 'Charts']
  },
  nhai: {
    category: '03 / HIGHWAY SERVICES · ANDROID + iOS',
    title: 'NHAI Rajmargyatra',
    description: 'Native Android and iOS highway services features, including FASTag-related journeys, toll plaza information, route planning and user support workflows.',
    contributions: [
      'Developed native Android (Kotlin/Java) and native iOS (Swift/SwiftUI) features.',
      'Worked on FASTag Annual Pass and separate FASTag Local Pass functionality.',
      'Implemented FASTag porting, eligibility verification and related workflows.',
      'Built route-planning and toll plaza information features with map integration.',
      'Integrated payment-related flows, complaints, feedback and REST APIs.'
    ],
    technologies: ['Kotlin', 'Java', 'Swift', 'SwiftUI', 'Mappls', 'REST APIs']
  },
  pft: {
    category: '04 / FIELD OPERATIONS · ANDROID',
    title: 'Police Force Terminal (PFT / MDT)',
    description: 'An officer-facing emergency response application for dispatch support, event handling and field operations, published for Android.',
    contributions: [
      'Developed the Flutter application using GetX with an MVC-style project architecture.',
      'Built emergency event lifecycle and field-unit operational workflows.',
      'Implemented real-time and background location tracking and map-based features.',
      'Integrated REST APIs, push notifications and application reliability features.'
    ],
    technologies: ['Flutter', 'Dart', 'GetX', 'Google Maps', 'REST APIs', 'Background services']
  }
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

// Persisted theme selection. System/browser defaults to the dark visual theme.
const root = document.documentElement;
const themeToggle = $('#theme-toggle');
function setTheme(theme) {
  root.dataset.theme = theme;
  if (themeToggle) themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  try { localStorage.setItem('ashik-portfolio-theme', theme); } catch (_) {}
}
try { setTheme(localStorage.getItem('ashik-portfolio-theme') === 'light' ? 'light' : 'dark'); }
catch (_) { setTheme('dark'); }
themeToggle?.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

const navLinks = $('#nav-links');
const menuToggle = $('#menu-toggle');
function closeMenu() {
  navLinks?.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Open navigation menu');
}
menuToggle?.addEventListener('click', () => {
  const opening = !navLinks?.classList.contains('is-open');
  navLinks?.classList.toggle('is-open', opening);
  menuToggle.setAttribute('aria-expanded', String(opening));
  menuToggle.setAttribute('aria-label', opening ? 'Close navigation menu' : 'Open navigation menu');
});
$$('#nav-links a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
document.addEventListener('click', e => {
  if (navLinks?.classList.contains('is-open') && !e.target.closest('.nav')) closeMenu();
});
const header = $('.site-header');
window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 20), { passive: true });

// Project filtering
$$('.filter-button').forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  $$('.filter-button').forEach(b => {
    const active = b === button;
    b.classList.toggle('is-active', active);
    b.setAttribute('aria-pressed', String(active));
  });
  $$('.project-card').forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
}));

// Native <dialog> provides focus management and Escape-to-close behavior.
const dialog = $('#project-dialog');
function showCaseStudy(key) {
  const project = CASE_STUDIES[key];
  if (!project || !dialog) return;
  $('#dialog-category').textContent = project.category;
  $('#dialog-title').textContent = project.title;
  $('#dialog-description').textContent = project.description;
  $('#dialog-bullets').replaceChildren(...project.contributions.map(entry => {
    const li = document.createElement('li');
    li.textContent = entry;
    return li;
  }));
  $('#dialog-tags').replaceChildren(...project.technologies.map(entry => {
    const tag = document.createElement('span');
    tag.textContent = entry;
    return tag;
  }));
  if (!dialog.open) dialog.showModal();
}
$$('[data-project]').forEach(button => button.addEventListener('click', () => showCaseStudy(button.dataset.project)));
$('#dialog-close')?.addEventListener('click', () => dialog.close());
$('#dialog-done')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });

// Copy contact email; gracefully fall back to mailto on unsupported contexts.
$('#copy-email')?.addEventListener('click', async e => {
  const button = e.currentTarget;
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(button.dataset.email);
    $('#copy-label').textContent = 'Copied!';
    setTimeout(() => { $('#copy-label').textContent = 'Copy'; }, 2400);
  } catch (_) {
    window.location.href = `mailto:${button.dataset.email}`;
  }
});
$('#year').textContent = String(new Date().getFullYear());
