(function () {
  'use strict';

  var nav = document.querySelector('.nav');

  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

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
