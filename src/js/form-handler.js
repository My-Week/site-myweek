/**
 * MyWeek - Formulário comercial (validação, envio, sucesso/divulgação)
 */
(function () {
  'use strict';

  var CONFIG = {
    interestEndpoint: '/api/events/interest',
    contactEndpoint: '/api/contact',
    useContactEndpoint: false,
    whatsappUrl: null
  };

  function getInterestUrl() {
    return CONFIG.useContactEndpoint ? CONFIG.contactEndpoint : CONFIG.interestEndpoint;
  }

  var PERSONAL_EMAIL_DOMAINS = [
    'gmail.com', 'googlemail.com', 'outlook.com', 'hotmail.com', 'hotmail.com.br',
    'live.com', 'yahoo.com', 'yahoo.com.br', 'icloud.com', 'me.com', 'mac.com',
    'bol.com.br', 'uol.com.br', 'ig.com.br', 'terra.com.br'
  ];

  function isPersonalEmail(email) {
    if (!email || typeof email !== 'string') return true;
    var domain = email.split('@')[1];
    if (!domain) return true;
    var normalized = domain.toLowerCase().trim();
    return PERSONAL_EMAIL_DOMAINS.some(function (d) { return normalized === d; });
  }

  function showFormMessage(formEl, message, isError) {
    var existing = formEl.querySelector('.form-message');
    if (existing) existing.remove();
    var div = document.createElement('div');
    div.className = 'form-message form-message--' + (isError ? 'error' : 'success');
    div.setAttribute('role', 'alert');
    div.textContent = message;
    formEl.appendChild(div);
  }

  function buildCommercialSuccessMessageHtml() {
    var whatsappUrl = CONFIG.whatsappUrl;
    var btnHtml = '';

    if (whatsappUrl) {
      btnHtml =
        '<a class="commercial__success-cta" href="' + whatsappUrl + '" target="_blank" rel="noopener noreferrer">' +
        'Falar com Especialista agora' +
        '</a>';
    }

    return (
      '<div class="commercial__success">' +
      '  <h3 class="commercial__success-title">Sua marca na vitrine da cena cultural.</h3>' +
      '  <p class="commercial__success-text">Recebemos seu interesse em potencializar seu evento com o MyWeek. Nossa equipe comercial analisará seu perfil e entrará em contato via WhatsApp/E-mail em até 24 horas para apresentar nossos pacotes de divulgação e curadoria estratégica.</p>' +
      '  <p class="commercial__success-highlight">Prepare-se para alcançar o público certo, no momento certo.</p>' +
      btnHtml +
      '</div>'
    );
  }

  function showCommercialSuccessMessage(formEl) {
    var existing = formEl.querySelector('.form-message');
    if (existing) existing.remove();

    var div = document.createElement('div');
    div.className = 'form-message form-message--success form-message--commercial';
    div.setAttribute('role', 'alert');
    div.innerHTML = buildCommercialSuccessMessageHtml();
    formEl.appendChild(div);
  }

  function setSubmitState(btn, loading) {
    btn.disabled = loading;
    btn.textContent = loading ? 'Enviando…' : 'Enviar';
  }

  function initContactFormProgress() {
    var form = document.querySelector('.commercial__form');
    if (!form) return;

    var fields = [];
    ['empresa', 'email', 'dificuldade'].forEach(function (nameOrId) {
      var field = form.querySelector('#' + nameOrId + ', [name="' + nameOrId + '"]');
      if (field) fields.push(field);
    });

    if (!fields.length) return;

    var submitBtn = form.querySelector('.commercial__submit');
    var formWrap = form.closest('.commercial__form-wrap') || form.parentElement;
    var glowEl = null;

    if (formWrap) {
      if (!formWrap.style.position || formWrap.style.position === 'static') {
        formWrap.style.position = 'relative';
      }
      glowEl = document.createElement('div');
      glowEl.className = 'commercial__submit-glow';
      var s = glowEl.style;
      s.position = 'absolute';
      s.left = '50%';
      s.bottom = '0';
      s.transform = 'translate(-50%, 55%)';
      s.width = '160%';
      s.height = '140px';
      s.borderRadius = '999px';
      s.background = 'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.9), rgba(6,182,212,0))';
      s.filter = 'blur(55px)';
      s.opacity = '0';
      s.pointerEvents = 'none';
      s.transition = 'opacity 0.35s ease';
      s.zIndex = '-1';
      formWrap.appendChild(glowEl);
    }

    function validateField(field) {
      if (!field) return false;
      var value = (field.value || '').trim();
      var name = (field.name || field.id || '').toLowerCase();

      if (name === 'empresa' || name === 'nome') {
        return value.length >= 2;
      }

      if (name === 'email') {
        if (!value) return false;
        var basicEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!basicEmail.test(value)) return false;
        return !isPersonalEmail(value);
      }

      if (name === 'dificuldade') {
        return value !== '' && value !== '0' && value.length >= 2;
      }

      return value.length > 0;
    }

    function updateVisualState() {
      var total = fields.length;
      var validCount = 0;

      fields.forEach(function (field) {
        var isValid = validateField(field);
        if (isValid) {
          field.classList.add('is-valid');
          validCount++;
        } else {
          field.classList.remove('is-valid');
        }
      });

      var progress = total ? validCount / total : 0;

      if (glowEl) {
        if (progress <= 0) {
          glowEl.style.opacity = '0';
        } else {
          var opacity = 0.15 + progress * 0.55;
          glowEl.style.opacity = String(opacity.toFixed(2));
        }
      }

      if (submitBtn) {
        if (progress === 1) {
          submitBtn.classList.add('commercial__submit--ready');
        } else {
          submitBtn.classList.remove('commercial__submit--ready');
        }
      }
    }

    fields.forEach(function (field) {
      field.addEventListener('input', updateVisualState);
      field.addEventListener('change', updateVisualState);
    });

    updateVisualState();
  }

  function initInterestForm() {
    var form = document.querySelector('.commercial__form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var empresa = form.querySelector('[name="empresa"]');
      var email = form.querySelector('[name="email"]');
      var submitBtn = form.querySelector('.commercial__submit');

      if (!empresa || !email || !submitBtn) return;

      var empresaVal = (empresa.value || '').trim();
      var emailVal = (email.value || '').trim();

      if (!empresaVal) {
        showFormMessage(form, 'Informe o nome da empresa.', true);
        empresa.focus();
        return;
      }

      if (!emailVal) {
        showFormMessage(form, 'Informe o e-mail corporativo.', true);
        email.focus();
        return;
      }

      if (isPersonalEmail(emailVal)) {
        showFormMessage(form, 'Use um e-mail corporativo (não use Gmail, Outlook ou outros provedores pessoais).', true);
        email.focus();
        return;
      }

      showFormMessage(form, '', false);
      setSubmitState(submitBtn, true);

      var payload = {
        empresa: empresaVal,
        email: emailVal
      };

      var url = getInterestUrl();

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          if (!res.ok) throw new Error('Erro ao enviar: ' + res.status);
          return res.json().catch(function () { return {}; });
        })
        .then(function () {
          showCommercialSuccessMessage(form);
          form.reset();
        })
        .catch(function (err) {
          showFormMessage(form, 'Não foi possível enviar. Tente novamente ou entre em contato por outro canal.', true);
          setSubmitState(submitBtn, false);
        })
        .then(function () {
          setSubmitState(submitBtn, false);
        });
    });
  }

  window.MyWeek = window.MyWeek || {};
  window.MyWeek.initContactFormProgress = initContactFormProgress;
  window.MyWeek.initInterestForm = initInterestForm;
})();
