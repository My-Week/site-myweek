/**
 * MyWeek - Animações (Intersection Observer: reveal, line chart)
 */
(function () {
  'use strict';

  function initRevealOnScroll() {
    var targets = document.querySelectorAll('[data-reveal], .reveal');
    if (!targets.length) return;

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
})();
