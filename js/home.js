/* ============================================================
   KRIYAYOG ASHRAM — Home Page JavaScript
   Hero Slider & Testimonial Carousel
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
});

/* ---------- Hero Slider ---------- */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  
  if (!slides.length) return;

  let current = 0;
  let interval;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    current = index;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function startAutoplay() {
    interval = setInterval(nextSlide, 6000);
  }

  function resetAutoplay() {
    clearInterval(interval);
    startAutoplay();
  }

  // Dot click handlers
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      resetAutoplay();
    });
  });

  // Init
  showSlide(0);
  startAutoplay();

  // Pause on hover
  const slider = document.querySelector('.hero-slider');
  if (slider) {
    slider.addEventListener('mouseenter', () => clearInterval(interval));
    slider.addEventListener('mouseleave', startAutoplay);
  }
}
