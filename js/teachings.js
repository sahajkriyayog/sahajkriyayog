/* ============================================================
   KRIYAYOG ASHRAM — Teachings Page JavaScript
   Accordion functionality for technique descriptions
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initAccordion();
});

function initAccordion() {
  const headers = document.querySelectorAll('.accordion-header');
  
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('open');
      });

      // Open clicked if was closed
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // Open first item by default
  const firstItem = document.querySelector('.accordion-item');
  if (firstItem) firstItem.classList.add('open');
}
