/**
 * MyWeek - Carrossel de screens (fade + dots + prev/next + autoplay)
 * Slides empilhados no mesmo grid-area — só o .is-active fica visível.
 */
(function () {
  'use strict';

  function initCarousel(root) {
    var slides = root.querySelectorAll('.screen-carousel__slide');
    var prevBtn = root.querySelector('.screen-carousel__btn--prev');
    var nextBtn = root.querySelector('.screen-carousel__btn--next');
    var dotsWrap = root.querySelector('.screen-carousel__dots');
    if (slides.length < 2) return;

    var index = 0;
    var timer = null;
    var interval = parseInt(root.getAttribute('data-interval') || '5500', 10);
    var reducedMotion = false;
    try {
      reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {}

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (slide, n) {
        var active = n === index;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
      });
      if (dotsWrap) {
        dotsWrap.querySelectorAll('.screen-carousel__dot').forEach(function (dot, n) {
          var on = n === index;
          dot.classList.toggle('is-active', on);
          dot.setAttribute('aria-current', on ? 'true' : 'false');
        });
      }
    }

    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }

    function stopAuto() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function startAuto() {
      stopAuto();
      if (reducedMotion || interval <= 0) return;
      timer = setInterval(next, interval);
    }

    if (dotsWrap) {
      dotsWrap.innerHTML = '';
      for (var d = 0; d < slides.length; d++) {
        (function (n) {
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'screen-carousel__dot' + (n === 0 ? ' is-active' : '');
          btn.setAttribute('aria-label', 'Slide ' + (n + 1));
          if (n === 0) btn.setAttribute('aria-current', 'true');
          btn.addEventListener('click', function () {
            goTo(n);
            startAuto();
          });
          dotsWrap.appendChild(btn);
        })(d);
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        prev();
        startAuto();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        next();
        startAuto();
      });
    }

    root.addEventListener('mouseenter', stopAuto);
    root.addEventListener('mouseleave', startAuto);
    root.addEventListener('focusin', stopAuto);
    root.addEventListener('focusout', function (e) {
      if (!root.contains(e.relatedTarget)) startAuto();
    });

    var touchX = null;
    root.addEventListener('touchstart', function (e) {
      if (e.changedTouches && e.changedTouches[0]) {
        touchX = e.changedTouches[0].clientX;
        stopAuto();
      }
    }, { passive: true });
    root.addEventListener('touchend', function (e) {
      if (touchX == null || !e.changedTouches || !e.changedTouches[0]) return;
      var dx = e.changedTouches[0].clientX - touchX;
      touchX = null;
      if (Math.abs(dx) < 40) {
        startAuto();
        return;
      }
      if (dx < 0) next();
      else prev();
      startAuto();
    }, { passive: true });

    goTo(0);
    startAuto();
  }

  function initAll() {
    document.querySelectorAll('[data-carousel]').forEach(initCarousel);
  }

  window.MyWeek = window.MyWeek || {};
  window.MyWeek.initCarousels = initAll;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
