const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobileMenu');
if (navToggle && mobileMenu) {
  const setMenuState = (open) => {
    mobileMenu.classList.toggle('open', open);
    mobileMenu.hidden = !open;
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة');
  };
  navToggle.addEventListener('click', () => {
    setMenuState(navToggle.getAttribute('aria-expanded') !== 'true');
  });
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu.classList.contains('open')) {
      setMenuState(false);
      navToggle.focus();
    }
  });
}
const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length) {
  const revealObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 })
    : null;
  revealElements.forEach((element) => {
    if (revealObserver) revealObserver.observe(element);
    else element.classList.add('in');
  });
  window.addEventListener('load', () => {
    revealElements.forEach((element) => element.classList.add('in'));
  });
}

// Conversion Tracking (Pixels)
const trackConversion = (eventName) => {
  if (typeof fbq !== 'undefined') {
    fbq('track', eventName);
  }
  if (typeof ttq !== 'undefined') {
    ttq.track('Contact');
  }
};

document.querySelectorAll('.btn-book').forEach(btn => {
  btn.addEventListener('click', () => trackConversion('Lead'));
});
document.querySelectorAll('.btn-whatsapp').forEach(btn => {
  btn.addEventListener('click', () => trackConversion('Contact'));
});
