
console.log('test');

// Reveal Effect
window.sr = ScrollReveal({ reset: true });
sr.reveal('.hero-logo-wrap', {distance: '30px', duration: 1000});
sr.reveal('.hero-text-container .subtext', {distance: '100px', delay: 500, duration: 1000});
sr.reveal('#blog', { origin: 'right' });

heroLogo = $('.hero-logo');
heroLogo.tilt({
  maxTilt: 15,
  // perspective: 1000,
  glare: true,
  maxGlare: 0.9
})