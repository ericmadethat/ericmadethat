
console.log('test');

// Reveal Effect
window.sr = ScrollReveal({ reset: true });
sr.reveal('.hero-logo-wrap', {distance: '30px', duration: 1000});
sr.reveal('.hero-text-container .subtext', {distance: '100px', delay: 300, duration: 1000});

heroLogo = $('.hero-logo');
heroLogo.tilt({
  maxTilt: 15,
  glare: true,
  maxGlare: 0.9
});

$('.image-coding-tilt').tilt({
  axis: 'x',
  maxTilt: 15
})
