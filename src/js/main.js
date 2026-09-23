/**
 * MyWeek - Inicialização (nav, header scroll, active link, login, lojas)
 */
(function () {
  'use strict';

  var CONFIG = {
    loginUrl: 'https://dashboard.myweekoficial.com.br/login',
    whatsappUrl: 'https://wa.me/5571993184341',
    storeUrls: {
      ios: null,
      android: null
    }
  };

  function initNavToggle() {
    var navToggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.nav');

    function setMenuOpen(open) {
      if (!nav || !navToggle) return;
      if (open) {
        nav.classList.add('is-open');
        navToggle.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      } else {
        nav.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        document.body.style.overflow = '';
      }
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    }

    var navBackdrop = document.querySelector('.nav-backdrop');
    if (navToggle && nav) {
      navToggle.addEventListener('click', function () {
        setMenuOpen(!nav.classList.contains('is-open'));
      });
      if (navBackdrop) {
        navBackdrop.addEventListener('click', function () {
          setMenuOpen(false);
        });
      }

      nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          setMenuOpen(false);
        });
      });

      var navClose = nav.querySelector('.nav-close');
      if (navClose) {
        navClose.addEventListener('click', function () {
          setMenuOpen(false);
        });
      }
    }
  }

  function initHeroVideo() {
    var video = document.querySelector('.hero-video');
    if (!video) return;

    function tryPlay() {
      if (video.paused && !video.ended && document.visibilityState === 'visible') {
        video.play().catch(function () {});
      }
    }

    video.play().catch(function () {});

    video.addEventListener('pause', function () {
      if (document.visibilityState !== 'visible') return;
      setTimeout(function () { tryPlay(); }, 150);
    });

    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') tryPlay();
    });
  }

  function initHeaderScroll() {
    var header = document.querySelector('.header');
    if (!header) return;

    var scrollThreshold = 60;

    function updateHeader() {
      if (window.scrollY > scrollThreshold) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    }

    window.addEventListener('scroll', function () {
      updateHeader();
    }, { passive: true });
    updateHeader();
  }

  function initActiveLink() {
    var nav = document.querySelector('.nav');
    if (!nav) return;

    var links = [].slice.call(nav.querySelectorAll('a[href^="#"]')).filter(function (link) {
      var href = link.getAttribute('href');
      return href && href.length > 1;
    });
    var sectionIds = links.map(function (link) { return link.getAttribute('href').slice(1); });

    var sections = sectionIds
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);

    if (!sections.length) return;

    var activeId = null;

    function setActiveFromScroll() {
      var scrollY = window.scrollY || window.pageYOffset;
      var top = scrollY + 120;
      var next = null;
      for (var i = sections.length - 1; i >= 0; i--) {
        var el = sections[i];
        var elTop = el.getBoundingClientRect().top + scrollY;
        if (elTop <= top) {
          next = el.id;
          break;
        }
      }
      if (!next && sections[0]) next = sections[0].id;
      if (next) {
        activeId = next;
        links.forEach(function (link) {
          var href = link.getAttribute('href');
          var linkId = href && href !== '#' ? href.slice(1) : null;
          if (linkId === activeId) link.classList.add('active');
          else link.classList.remove('active');
        });
      }
    }

    window.addEventListener('scroll', function () {
      setActiveFromScroll();
    }, { passive: true });
    setActiveFromScroll();
  }

  function initLoginUrl() {
    var loginLinks = document.querySelectorAll('.js-login-url');
    if (!loginLinks.length) return;

    var url = CONFIG.loginUrl;

    loginLinks.forEach(function (loginLink) {
      if (url) {
        loginLink.setAttribute('href', url);
        loginLink.setAttribute('target', '_blank');
        loginLink.setAttribute('rel', 'noopener noreferrer');
      } else {
        loginLink.addEventListener('click', function (e) {
          e.preventDefault();
        });
      }
    });
  }

  function initStoreLinks() {
    var links = document.querySelectorAll('.js-store-link');
    links.forEach(function (link) {
      var store = link.getAttribute('data-store');
      var url = store ? CONFIG.storeUrls[store] : null;

      if (url) {
        link.setAttribute('href', url);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }

      link.addEventListener('click', function (e) {
        if (url) {
          return;
        }
        // App ainda nao publicado: em vez de um alert sem saida, leva para a
        // lista de espera e foca o campo de e-mail.
        e.preventDefault();
        var target = document.getElementById('lista-espera');
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        var emailField = target.querySelector('[name="email"]');
        if (emailField) {
          window.setTimeout(function () {
            try { emailField.focus({ preventScroll: true }); } catch (err) { emailField.focus(); }
          }, 600);
        }
      });
    });
  }

  function initWhatsappLinks() {
    if (!CONFIG.whatsappUrl) return;
    document.querySelectorAll('.js-whatsapp-url').forEach(function (el) {
      el.setAttribute('href', CONFIG.whatsappUrl);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });
  }

  window.MyWeek = window.MyWeek || {};
  window.MyWeek.whatsappUrl = CONFIG.whatsappUrl;

  document.addEventListener('DOMContentLoaded', function () {
    initNavToggle();
    initWhatsappLinks();
    initHeroVideo();
    initHeaderScroll();
    initActiveLink();
    initLoginUrl();
    initStoreLinks();

    if (window.MyWeek && window.MyWeek.i18n && window.MyWeek.i18n.initLangSelector) {
      window.MyWeek.i18n.initLangSelector();
    }
    if (window.MyWeek && window.MyWeek.theme && window.MyWeek.theme.initThemeToggle) {
      window.MyWeek.theme.initThemeToggle();
    }

    if (window.MyWeek) {
      if (window.MyWeek.initContactFormProgress) window.MyWeek.initContactFormProgress();
      if (window.MyWeek.initInterestForm) window.MyWeek.initInterestForm();
      if (window.MyWeek.initRevealOnScroll) window.MyWeek.initRevealOnScroll();
      if (window.MyWeek.initLineChartAnimation) window.MyWeek.initLineChartAnimation();
      if (window.MyWeek.initCountdownTimer) window.MyWeek.initCountdownTimer();
      if (window.MyWeek.initTiltEffects) window.MyWeek.initTiltEffects();
      if (window.MyWeek.initSpotlightFollower) window.MyWeek.initSpotlightFollower();
    }
  });
})();
