const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobileMenu');

if (navToggle && mobileMenu) {
  const setMenuState = (open) => {
    mobileMenu.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  };

  navToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu.classList.contains('open')) {
      setMenuState(false);
    }
  });
}

const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach((element) => revealObserver.observe(element));
  window.addEventListener('load', () => {
    revealElements.forEach((element) => element.classList.add('in'));
  });
}
