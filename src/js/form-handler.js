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

  /** Formato válido: local@domínio.tld (aceita Gmail, Outlook, etc.) */
  function isValidEmailFormat(email) {
    if (!email || typeof email !== 'string') return false;
    var trimmed = email.trim();
    if (trimmed.length < 6) return false;
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
    return re.test(trimmed);
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
      '  <p class="commercial__success-text">Nossa equipe entrará em contato em até 24 horas.</p>' +
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
    ['empresa', 'email', 'telefone'].forEach(function (nameOrId) {
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
        return value.length > 0 && isValidEmailFormat(value);
      }

      if (name === 'telefone') {
        var digits = value.replace(/\D/g, '');
        return digits.length >= 10 && digits.length <= 11;
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
      var telefone = form.querySelector('[name="telefone"]');
      var submitBtn = form.querySelector('.commercial__submit');

      if (!empresa || !email || !telefone || !submitBtn) return;

      var empresaVal = (empresa.value || '').trim();
      var emailVal = (email.value || '').trim();
      var telefoneVal = (telefone.value || '').trim().replace(/\D/g, '');

      if (!empresaVal) {
        showFormMessage(form, 'Informe o nome da empresa.', true);
        empresa.focus();
        return;
      }

      if (!emailVal) {
        showFormMessage(form, 'Informe o e-mail.', true);
        email.focus();
        return;
      }

      if (!isValidEmailFormat(emailVal)) {
        showFormMessage(form, 'Informe um e-mail válido (ex.: nome@dominio.com).', true);
        email.focus();
        return;
      }

      if (telefoneVal.length < 10 || telefoneVal.length > 11) {
        showFormMessage(form, 'Informe o celular para contato por WhatsApp ou ligação (10 ou 11 dígitos).', true);
        telefone.focus();
        return;
      }

      /* Honeypot: se bot-field foi preenchido, não envia */
      var botField = form.querySelector('[name="bot-field"]');
      if (botField && (botField.value || '').trim() !== '') {
        showCommercialSuccessMessage(form);
        form.reset();
        return;
      }

      showFormMessage(form, '', false);
      setSubmitState(submitBtn, true);

      var formData = new FormData(form);
      var body = new URLSearchParams(formData).toString();
      if (body.indexOf('form-name') === -1) {
        body = 'form-name=contato-comercial&' + body;
      }

      var submitUrl = window.location.origin + (window.location.pathname || '/');
      if (!submitUrl.endsWith('/') && !/\.[a-z0-9]+$/i.test(window.location.pathname)) {
        submitUrl += '/';
      }

      fetch(submitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
      })
        .then(function (res) {
          if (!res.ok) throw new Error('Erro ao enviar: ' + res.status);
          return res.text();
        })
        .then(function () {
          if (typeof console !== 'undefined' && console.log) {
            console.log('[MyWeek] Formulário enviado com sucesso.');
          }
          showCommercialSuccessMessage(form);
          form.reset();
        })
        .catch(function () {
          showFormMessage(form, 'Não foi possível enviar. Tente novamente ou entre em contato por outro canal.', true);
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
