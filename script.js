(function () {
  'use strict';

  var nav = document.querySelector('.nav');

  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  var sections = document.querySelectorAll('.page-section, .hero-wrapper');

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

  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    }
  });

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

  var asciiBox = document.querySelector('.hero-card pre');
  if (asciiBox) {
    var raw = asciiBox.textContent.trim();
    var lines = raw.split('\n');
    asciiBox.innerHTML = '';
    
    var scanline = document.createElement('div');
    scanline.className = 'scanline';
    asciiBox.appendChild(scanline);
    
    lines.forEach(function(line) {
      var span = document.createElement('span');
      span.className = 'ascii-line';
      span.textContent = line || '\u00a0';
      asciiBox.appendChild(span);
    });
    
    var spans = asciiBox.querySelectorAll('.ascii-line');
    spans.forEach(function(s, i) {
      setTimeout(function() {
        s.classList.add('visible');
      }, i * 60 + 200); 
    });
    
    setTimeout(function() {
      scanline.classList.add('active');
      asciiBox.classList.add('glow');
    }, spans.length * 60 + 400);
  }

})();
