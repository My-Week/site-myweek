/**
 * MyWeek - Contagem para o lançamento (estimativa: início de fevereiro/2027)
 */
(function () {
  'use strict';

  var LAUNCH_ISO = '2027-02-01T00:00:00-03:00';
  var timerId = null;

  function t(key, fallback) {
    if (window.MyWeek && window.MyWeek.i18n && typeof window.MyWeek.i18n.get === 'function') {
      var value = window.MyWeek.i18n.get(key);
      if (value && value !== key) return value;
    }
    return fallback;
  }

  function format(num) {
    return num < 10 ? '0' + num : String(num);
  }

  function animateNumber(el, value) {
    if (el.textContent === value) return;
    el.textContent = value;
    el.classList.remove('countdown__number--anim');
    void el.offsetWidth;
    el.classList.add('countdown__number--anim');
  }

  function renderEnded(section) {
    var msg = t('countdown.ended', 'O MyWeek já está no ar. Comece agora!');
    section.innerHTML =
      '<div class="container countdown__inner countdown__inner--ended">' +
      '<p class="countdown__ended-message">' + msg + '</p>' +
      '</div>';
  }

  function initCountdownTimer() {
    var section = document.getElementById('countdown-timer');
    if (!section) return;

    var daysEl = document.getElementById('days');
    var hoursEl = document.getElementById('hours');
    var minutesEl = document.getElementById('minutes');
    var secondsEl = document.getElementById('seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    var launchTime = new Date(LAUNCH_ISO).getTime();

    function update() {
      var diff = launchTime - Date.now();

      if (diff <= 0) {
        renderEnded(section);
        if (timerId) clearInterval(timerId);
        timerId = null;
        return;
      }

      var totalSeconds = Math.floor(diff / 1000);
      var days = Math.floor(totalSeconds / (24 * 60 * 60));
      var hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
      var minutes = Math.floor((totalSeconds % 3600) / 60);
      var seconds = totalSeconds % 60;

      animateNumber(daysEl, format(days));
      animateNumber(hoursEl, format(hours));
      animateNumber(minutesEl, format(minutes));
      animateNumber(secondsEl, format(seconds));
    }

    if (timerId) clearInterval(timerId);
    update();
    timerId = setInterval(update, 1000);
  }

  window.MyWeek = window.MyWeek || {};
  window.MyWeek.initCountdownTimer = initCountdownTimer;
})();
