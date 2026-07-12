/*
  script.js
  ---------
  Two small features:
  1. Show a border on the nav when the page is scrolled
  2. Fade sections in as they scroll into view

  No libraries. Uses IntersectionObserver (supported everywhere modern).
*/

(function () {
  'use strict';

  // -- Nav scroll indicator --
  // Adds a bottom border to the nav once you scroll down a bit.
  // Without this the nav blends into the hero on load, which looks cleaner.

  var nav = document.querySelector('.nav');

  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true }); // passive = better scroll perf


  // -- Scroll reveal --
  // Sections start at opacity:0 (set in CSS).
  // When a section enters the viewport, we add .visible to trigger
  // the CSS transition. Each section only animates once.

  var sections = document.querySelectorAll('.page-section, .hero');

  var observer = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add('visible');
        observer.unobserve(entries[i].target);
      }
    }
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  for (var i = 0; i < sections.length; i++) {
    observer.observe(sections[i]);
  }


  // -- Smooth scroll for anchor links --
  // The CSS scroll-behavior:smooth already works, but this
  // version prevents the default jump so the URL doesn't change
  // until after the scroll finishes (less jarring).

  var anchors = document.querySelectorAll('a[href^="#"]');

  for (var j = 0; j < anchors.length; j++) {
    anchors[j].addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      var el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

})();
