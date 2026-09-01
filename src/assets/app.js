(function () {
  'use strict';

  var menuButton = document.querySelector('[data-menu-button]');
  var mobileMenu = document.querySelector('[data-mobile-menu]');
  var modal = document.querySelector('[data-line-modal]');
  var closeButton = document.querySelector('[data-modal-close]');
  var lastTrigger = null;

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function () {
      var open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', open ? 'false' : 'true');
      mobileMenu.classList.toggle('is-open', !open);
    });
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-language]'), function (link) {
    link.addEventListener('click', function () {
      try { localStorage.setItem('site-language', link.getAttribute('data-language')); } catch (error) { /* Browser storage is optional. */ }
    });
  });

  function openModal(trigger) {
    if (!modal) return;
    lastTrigger = trigger;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    if (closeButton) closeButton.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastTrigger) lastTrigger.focus();
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-line-trigger]'), function (trigger) {
    trigger.addEventListener('click', function () {
      var isMobile = window.matchMedia('(max-width: 767px)').matches;
      if (isMobile) window.location.href = trigger.getAttribute('data-line-url');
      else openModal(trigger);
    });
  });

  if (closeButton) closeButton.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', function (event) { if (event.target === modal) closeModal(); });
    modal.addEventListener('keydown', function (event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        if (closeButton) closeButton.focus();
      }
    });
  }
  document.addEventListener('keydown', function (event) { if (event.key === 'Escape' && modal && !modal.hidden) closeModal(); });

  Array.prototype.forEach.call(document.querySelectorAll('[data-faq-button]'), function (button) {
    button.addEventListener('click', function () {
      var open = button.getAttribute('aria-expanded') === 'true';
      var answer = document.getElementById(button.getAttribute('aria-controls'));
      button.setAttribute('aria-expanded', open ? 'false' : 'true');
      if (answer) answer.hidden = open;
    });
  });

  Array.prototype.forEach.call(document.querySelectorAll('[data-filter]'), function (button) {
    button.addEventListener('click', function () {
      var filter = button.getAttribute('data-filter');
      Array.prototype.forEach.call(document.querySelectorAll('[data-filter]'), function (item) { item.setAttribute('aria-pressed', item === button ? 'true' : 'false'); });
      Array.prototype.forEach.call(document.querySelectorAll('[data-case-category]'), function (card) { card.hidden = filter !== 'all' && card.getAttribute('data-case-category') !== filter; });
    });
  });

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(reveals, function (item) { item.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    Array.prototype.forEach.call(reveals, function (item) { observer.observe(item); });
  }
}());
