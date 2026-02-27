/**
 * MyWeek - Animações (Intersection Observer: reveal, line chart)
 */
 (function () {
  'use strict';

  function initRevealOnScroll() {
    var hasGSAP = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
    var targets = document.querySelectorAll('[data-reveal], .reveal');
    if (!targets.length) return;

    if (hasGSAP) {
      gsap.registerPlugin(ScrollTrigger);

      // Reveal padrão para qualquer seção marcada com data-reveal / .reveal
      targets.forEach(function (el) {
        // Estado inicial (reforça o CSS .hidden)
        gsap.set(el, { opacity: 0, y: 60 });

        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          onStart: function () {
            el.classList.add('show');
            el.classList.add('active');
          }
        });
      });

      // Stagger específico para Bento Grid
      var bento = document.querySelector('.features-bento');
      if (bento) {
        var cards = bento.querySelectorAll('.feature-card');
        if (cards.length) {
          gsap.from(cards, {
            y: 40,
            duration: 0.8,
            ease: 'power4.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: bento,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          });
        }
      }

      // Stagger para itens do menu (animação na chegada da página)
      var nav = document.querySelector('.nav');
      if (nav) {
        var navLinks = nav.querySelectorAll('a');
        if (navLinks.length) {
          gsap.from(navLinks, {
            opacity: 0,
            y: -20,
            duration: 0.7,
            ease: 'power4.out',
            stagger: 0.1,
            delay: 0.15
          });
        }
      }

      return;
    }

    // Fallback: IntersectionObserver (sem GSAP)
    if (typeof IntersectionObserver === 'undefined') return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1
      }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initLineChartAnimation() {
    var charts = document.querySelectorAll('.line-chart');
    if (!charts.length || typeof IntersectionObserver === 'undefined') return;

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            el.classList.add('line-chart--animate');
            obs.unobserve(el);
          }
        });
      },
      {
        root: null,
        threshold: 0.4
      }
    );

    charts.forEach(function (chart) {
      observer.observe(chart);
    });
  }

  window.MyWeek = window.MyWeek || {};
  window.MyWeek.initRevealOnScroll = initRevealOnScroll;
  window.MyWeek.initLineChartAnimation = initLineChartAnimation;

  function initTiltEffects() {
    if (typeof window.VanillaTilt === 'undefined') return;
    var prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    var elements = document.querySelectorAll('.feature-card, .download-app__btn, .nav__login');
    if (!elements.length) return;

    window.VanillaTilt.init(elements, {
      max: 10,
      speed: 500,
      scale: 1.02,
      glare: true,
      'max-glare': 0.18,
      perspective: 800,
      gyroscope: true
    });
  }

  function initSpotlightFollower() {
    var supportsPointerFine =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(pointer: fine)').matches;
    if (!supportsPointerFine) return;

    var prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    var spotlight = document.createElement('div');
    spotlight.className = 'cursor-spotlight';
    spotlight.style.position = 'fixed';
    spotlight.style.width = '260px';
    spotlight.style.height = '260px';
    spotlight.style.borderRadius = '999px';
    spotlight.style.pointerEvents = 'none';
    spotlight.style.zIndex = '0';
    spotlight.style.background =
      'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.35), rgba(124, 58, 237, 0.0) 60%)';
    spotlight.style.filter = 'blur(40px)';
    spotlight.style.opacity = '0';
    spotlight.style.transform = 'translate3d(-130px, -130px, 0)';
    spotlight.style.transition = 'opacity 0.6s ease-out';

    document.body.appendChild(spotlight);
    document.documentElement.setAttribute('data-pointer', 'spotlight-ready');

    var radius = 130;
    var mouseX = 0;
    var mouseY = 0;
    var rafId = null;
    var activated = false;

    function update() {
      spotlight.style.transform =
        'translate3d(' + (mouseX - radius) + 'px,' + (mouseY - radius) + 'px,0)';
      rafId = null;
    }

    window.addEventListener(
      'mousemove',
      function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!activated) {
          spotlight.style.opacity = '0.18';
          activated = true;
        }
        if (!rafId) {
          rafId = window.requestAnimationFrame(update);
        }
      },
      { passive: true }
    );

    window.addEventListener(
      'mouseleave',
      function () {
        spotlight.style.opacity = '0';
      },
      { passive: true }
    );
  }

  window.MyWeek.initTiltEffects = initTiltEffects;
  window.MyWeek.initSpotlightFollower = initSpotlightFollower;
  window.MyWeek.spawnSuccessParticles = function (formEl) {
    if (typeof window.gsap === 'undefined') return;
    var prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    var submitBtn = formEl && formEl.querySelector && formEl.querySelector('.commercial__submit');
    var rect = submitBtn ? submitBtn.getBoundingClientRect() : null;
    var centerX = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    var centerY = rect ? rect.top + rect.height / 2 + window.scrollY : window.innerHeight / 2 + window.scrollY;

    var colors = ['#7c3aed', '#a855f7', '#22d3ee', '#38bdf8'];
    var particles = [];
    var count = 18;

    for (var i = 0; i < count; i++) {
      var p = document.createElement('span');
      p.style.position = 'absolute';
      p.style.left = centerX + 'px';
      p.style.top = centerY + 'px';
      p.style.width = '6px';
      p.style.height = '6px';
      p.style.borderRadius = '999px';
      p.style.pointerEvents = 'none';
      p.style.zIndex = '40';
      p.style.background = colors[i % colors.length];
      p.style.boxShadow = '0 0 16px ' + colors[i % colors.length];
      document.body.appendChild(p);
      particles.push(p);
    }

    particles.forEach(function (el) {
      var angle = Math.random() * Math.PI * 2;
      var distance = 40 + Math.random() * 40;
      var dx = Math.cos(angle) * distance;
      var dy = Math.sin(angle) * distance;

      gsap.to(el, {
        x: dx,
        y: dy,
        opacity: 0,
        scale: 0.3,
        duration: 0.6,
        ease: 'power4.out',
        onComplete: function () {
          el.remove();
        }
      });
    });
  };
})();
