/**
 * MyWeek - Alternador Dark/Light (localStorage + ícone Sol/Lua)
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'myweek_theme';
  var DEFAULT_THEME = 'dark';

  function getStoredTheme() {
    try {
      if (typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)) {
        var t = localStorage.getItem(STORAGE_KEY);
        if (t === 'dark' || t === 'light') return t;
      }
    } catch (e) {}
    return null;
  }

  function setTheme(theme) {
    if (theme !== 'dark' && theme !== 'light') theme = DEFAULT_THEME;
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}

    var btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
      var icon = btn.querySelector('.theme-toggle__icon');
      if (icon) {
        icon.innerHTML = theme === 'dark' ? sunSvg() : moonSvg();
      }
    }
  }

  function sunSvg() {
    return '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  }

  function moonSvg() {
    return '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  function initThemeToggle() {
    var stored = getStoredTheme();
    var theme = stored || DEFAULT_THEME;
    setTheme(theme);

    var nav = document.querySelector('.nav');
    if (!nav) return;

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
    btn.setAttribute('title', theme === 'dark' ? 'Modo claro' : 'Modo escuro');
    var icon = document.createElement('span');
    icon.className = 'theme-toggle__icon';
    icon.innerHTML = theme === 'dark' ? sunSvg() : moonSvg();
    btn.appendChild(icon);

    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || DEFAULT_THEME;
      var next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });

    var langSwitcher = nav.querySelector('.lang-switcher');
    if (langSwitcher && langSwitcher.parentNode) {
      nav.insertBefore(btn, langSwitcher);
    } else {
      var loginLink = nav.querySelector('.nav__login');
      if (loginLink && loginLink.parentNode) {
        loginLink.parentNode.insertBefore(btn, loginLink);
      } else {
        nav.appendChild(btn);
      }
    }
  }

  window.MyWeek = window.MyWeek || {};
  window.MyWeek.theme = {
    setTheme: setTheme,
    getTheme: function () { return document.documentElement.getAttribute('data-theme') || DEFAULT_THEME; },
    initThemeToggle: initThemeToggle
  };
})();
