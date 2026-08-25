/**
 * MyWeek - #feedbacks: 3 cards em grid, 3 aleatórios (cenários, não clientes)
 */
(function () {
  'use strict';

  function pickRandom(arr, n) {
    var copy = arr.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = copy[i];
      copy[i] = copy[j];
      copy[j] = t;
    }
    return copy.slice(0, n);
  }

  function getFeedbacksList() {
    if (window.MyWeek && window.MyWeek.i18n && typeof window.MyWeek.i18n.getFeedbacks === 'function') {
      return window.MyWeek.i18n.getFeedbacks();
    }
    return [];
  }

  function renderFeedbacks() {
    var gridEl = document.querySelector('.feedbacks__grid');
    if (!gridEl) return;

    var list = getFeedbacksList();
    if (!Array.isArray(list) || list.length === 0) return;

    var toShow = list.length <= 3 ? list : pickRandom(list, 3);
    var html = toShow
      .map(function (item) {
        var q = (item.quote || '').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        var a = (item.author || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        var r = (item.role || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return (
          '<article class="feedback-card" data-tilt>' +
          '<blockquote class="feedback-card__quote">"' + q + '"</blockquote>' +
          '<footer class="feedback-card__footer">' +
          '<span class="feedback-card__author">' + a + '</span>' +
          '<span class="feedback-card__role">' + r + '</span>' +
          '</footer></article>'
        );
      })
      .join('');

    gridEl.innerHTML = html;
    initTilt();
  }

  function initTilt() {
    var cards = document.querySelectorAll('.feedback-card');
    var isMobile = window.innerWidth < 768 || ('ontouchstart' in window && window.innerWidth < 1024);
    var maxTilt = isMobile ? 0 : 5;

    [].forEach.call(cards, function (card) {
      if (card._tiltBound) return;
      card._tiltBound = true;
      if (maxTilt === 0) return;
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        var rotateY = x * maxTilt;
        var rotateX = y * -maxTilt;
        card.style.transform =
          'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderFeedbacks();
    window.addEventListener('languagechange', function () {
      renderFeedbacks();
    });
  });
})();
