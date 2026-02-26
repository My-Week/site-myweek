/**
 * MyWeek - Countdown Timer (lançamento)
 */
(function () {
  'use strict';

  function initCountdownTimer() {
    var section = document.getElementById('countdown-timer');
    if (!section) return;

    var daysEl = document.getElementById('days');
    var hoursEl = document.getElementById('hours');
    var minutesEl = document.getElementById('minutes');
    var secondsEl = document.getElementById('seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    var launchTime = Date.now() + 180 * 24 * 60 * 60 * 1000;

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

    function update() {
      var now = Date.now();
      var diff = launchTime - now;

      if (diff <= 0) {
        section.innerHTML =
          '<div class="container countdown__inner countdown__inner--ended">' +
          '<p class="countdown__ended-message">O MyWeek já está entre nós. Comece agora!</p>' +
          '</div>';
        clearInterval(timerId);
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

    update();
    var timerId = setInterval(update, 1000);
  }

  window.MyWeek = window.MyWeek || {};
  window.MyWeek.initCountdownTimer = initCountdownTimer;
})();
