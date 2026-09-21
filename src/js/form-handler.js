/**
 * MyWeek - Formulário comercial (validação, envio, sucesso/divulgação)
 */
(function () {
  'use strict';

  var CONFIG = {
    whatsappUrl: 'https://wa.me/5571993184341'
  };

  /** Formato válido: local@domínio.tld (aceita Gmail, Outlook, etc.) */
  function isValidEmailFormat(email) {
    if (!email || typeof email !== 'string') return false;
    var trimmed = email.trim();
    if (trimmed.length < 6) return false;
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
    return re.test(trimmed);
  }

  // Controle de auto-fechamento das mensagens (timeout + saída da seção)
  var messageAutoClose = { timeoutId: null, observer: null, onClose: null };

  function clearMessageAutoClose() {
    if (messageAutoClose.timeoutId) {
      clearTimeout(messageAutoClose.timeoutId);
      messageAutoClose.timeoutId = null;
    }
    if (messageAutoClose.observer) {
      messageAutoClose.observer.disconnect();
      messageAutoClose.observer = null;
    }
    messageAutoClose.onClose = null;
  }

  function removeFormMessage(formEl) {
    if (!formEl) return;
    var msg = formEl.querySelector('.form-message');
    if (msg) {
      msg.remove();
    }
    if (typeof messageAutoClose.onClose === 'function') {
      var cb = messageAutoClose.onClose;
      clearMessageAutoClose();
      try {
        cb();
      } catch (e) {
        // fail-safe: não quebrar a experiência se callback falhar
      }
    } else {
      clearMessageAutoClose();
    }
  }

  function scheduleMessageAutoClose(formEl, onClose, durationMs) {
    var msg = formEl.querySelector('.form-message');
    if (!msg) return;
    clearMessageAutoClose();
    messageAutoClose.onClose = typeof onClose === 'function' ? onClose : null;

    messageAutoClose.timeoutId = setTimeout(function () {
      messageAutoClose.timeoutId = null;
      removeFormMessage(formEl);
    }, typeof durationMs === 'number' ? durationMs : 15000);

    var section = formEl.closest('.commercial') || formEl.closest('section');
    if (section && typeof IntersectionObserver !== 'undefined') {
      messageAutoClose.observer = new IntersectionObserver(
        function (entries) {
          var ent = entries[0];
          if (ent && !ent.isIntersecting) {
            removeFormMessage(formEl);
          }
        },
        { threshold: 0, rootMargin: '0px' }
      );
      messageAutoClose.observer.observe(section);
    }
  }

  function showFormMessage(formEl, message, isError) {
    removeFormMessage(formEl);
    if (!message) {
      // apenas limpar mensagens existentes
      return;
    }
    var div = document.createElement('div');
    div.className = 'form-message form-message--' + (isError ? 'error' : 'success');
    div.setAttribute('role', 'alert');
    div.textContent = message;
    formEl.appendChild(div);
    // Erros e mensagens genéricas: apenas auto-fecham, não travam o formulário
    scheduleMessageAutoClose(formEl, null);
  }

  function getI18n(key) {
    if (window.MyWeek && window.MyWeek.i18n && typeof window.MyWeek.i18n.get === 'function') {
      return window.MyWeek.i18n.get(key);
    }
    return key;
  }

  function buildCommercialSuccessMessageHtml() {
    var whatsappUrl = CONFIG.whatsappUrl;
    var btnHtml = '';
    var cta = getI18n('form.successCta');
    var title = getI18n('form.successTitle');
    var text = getI18n('form.successText');
    var highlight = getI18n('form.successHighlight');

    if (whatsappUrl) {
      btnHtml =
        '<a class="commercial__success-cta" href="' + whatsappUrl + '" target="_blank" rel="noopener noreferrer">' +
        cta +
        '</a>';
    }

    return (
      '<div class="commercial__success">' +
      '  <h3 class="commercial__success-title">' + title + '</h3>' +
      '  <p class="commercial__success-text">' + text + '</p>' +
      '  <p class="commercial__success-highlight">' + highlight + '</p>' +
      btnHtml +
      '</div>'
    );
  }

  function showCommercialSuccessMessage(formEl) {
    removeFormMessage(formEl);

    var div = document.createElement('div');
    div.className = 'form-message form-message--success form-message--commercial';
    div.setAttribute('role', 'alert');
    div.innerHTML = buildCommercialSuccessMessageHtml();
    formEl.appendChild(div);
  }

  function lockCommercialForm(formEl) {
    if (!formEl) return;
    var fields = formEl.querySelectorAll('input, textarea, select, button');
    Array.prototype.forEach.call(fields, function (el) {
      el.disabled = true;
    });
    formEl.classList.add('commercial__form--locked');
  }

  function showCommercialSuccessMessageWithAutoCloseAndLock(formEl) {
    showCommercialSuccessMessage(formEl);
    if (window.MyWeek && typeof window.MyWeek.spawnSuccessParticles === 'function') {
      try {
        window.MyWeek.spawnSuccessParticles(formEl);
      } catch (e) {
        // não interromper fluxo do formulário se partículas falharem
      }
    }
    // Quando a mensagem sumir (timeout ou rolagem para fora da seção), trava o formulário
    scheduleMessageAutoClose(formEl, function () {
      lockCommercialForm(formEl);
    });
  }

  function setSubmitState(btn, loading) {
    btn.disabled = loading;
    btn.textContent = loading ? getI18n('form.sending') : getI18n('form.submit');
  }

  var ALLOWED_CANAL = { organizer: true, partner: true, both: true, platform: true };

  function getCanalParam() {
    var canal = '';
    try {
      canal = (new URLSearchParams(window.location.search).get('canal') || '').toLowerCase();
    } catch (e) {}
    if (ALLOWED_CANAL[canal]) return canal;

    var hash = window.location.hash || '';
    var qIndex = hash.indexOf('?');
    if (qIndex !== -1) {
      try {
        canal = (new URLSearchParams(hash.slice(qIndex + 1)).get('canal') || '').toLowerCase();
      } catch (e) {}
      if (ALLOWED_CANAL[canal]) return canal;
    }
    return '';
  }

  function applyCanalFromLocation(formEl) {
    if (!formEl) return;
    var select = formEl.querySelector('[name="canal"]');
    var canal = getCanalParam();
    if (!select || !canal) return;
    select.value = canal;
  }

  function normalizeContactHash() {
    var hash = window.location.hash || '';
    if (hash.indexOf('#contact-form?') !== 0) return;
    var canal = getCanalParam();
    try {
      var url = new URL(window.location.href);
      url.hash = '#contact-form';
      if (canal && !url.searchParams.get('canal')) {
        url.searchParams.set('canal', canal);
      }
      window.history.replaceState({}, '', url.toString());
    } catch (e) {
      window.location.hash = 'contact-form';
    }
  }

  function resetCommercialFormState(formEl) {
    if (!formEl) return;
    try {
      formEl.reset();
    } catch (e) {
      // ignore
    }
    applyCanalFromLocation(formEl);
    var fields = formEl.querySelectorAll('.form-input, .form-select, .form-textarea');
    Array.prototype.forEach.call(fields, function (field) {
      field.classList.remove('is-valid');
    });
    var submitBtn = formEl.querySelector('.commercial__submit');
    if (submitBtn) {
      submitBtn.classList.remove('commercial__submit--ready');
      setSubmitState(submitBtn, false);
    }
    var wrap = formEl.closest('.commercial__form-wrap') || formEl.parentElement;
    if (wrap) {
      var glow = wrap.querySelector('.commercial__submit-glow');
      if (glow) {
        glow.style.opacity = '0';
      }
    }
  }

  function initContactFormProgress() {
    var form = document.querySelector('.commercial__form');
    if (!form) return;

    normalizeContactHash();
    applyCanalFromLocation(form);

    var fields = [];
    ['canal', 'praca', 'empresa', 'email', 'telefone'].forEach(function (nameOrId) {
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

      if (name === 'canal') {
        return !!ALLOWED_CANAL[value];
      }

      if (name === 'praca') {
        return value.length >= 2;
      }

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

    window.addEventListener('hashchange', function () {
      normalizeContactHash();
      applyCanalFromLocation(form);
      updateVisualState();
    });

    window.addEventListener('languagechange', function () {
      applyCanalFromLocation(form);
      updateVisualState();
    });

    updateVisualState();
  }

  function initInterestForm() {
    var form = document.querySelector('.commercial__form');
    if (!form) return;

    // Se nesta sessão o usuário já enviou o formulário com sucesso, mantém bloqueado
    try {
      if (typeof window !== 'undefined' && window.sessionStorage && window.sessionStorage.getItem('myweek_commercial_submitted') === '1') {
        lockCommercialForm(form);
        // Opcional: mostra novamente a mensagem de sucesso, que some sozinha depois
        showCommercialSuccessMessage(form);
        scheduleMessageAutoClose(form, null);
      }
    } catch (e) {
      // se sessionStorage não estiver disponível, segue fluxo normal
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var canal = form.querySelector('[name="canal"]');
      var praca = form.querySelector('[name="praca"]');
      var empresa = form.querySelector('[name="empresa"]');
      var email = form.querySelector('[name="email"]');
      var telefone = form.querySelector('[name="telefone"]');
      var submitBtn = form.querySelector('.commercial__submit');

      if (!canal || !praca || !empresa || !email || !telefone || !submitBtn) return;

      var canalVal = (canal.value || '').trim();
      var pracaVal = (praca.value || '').trim();
      var empresaVal = (empresa.value || '').trim();
      var emailVal = (email.value || '').trim();
      var telefoneVal = (telefone.value || '').trim().replace(/\D/g, '');

      if (!ALLOWED_CANAL[canalVal]) {
        showFormMessage(form, getI18n('form.errorCanal'), true);
        canal.focus();
        return;
      }

      if (pracaVal.length < 2) {
        showFormMessage(form, getI18n('form.errorCity'), true);
        praca.focus();
        return;
      }

      if (!empresaVal) {
        showFormMessage(form, getI18n('form.errorCompany'), true);
        empresa.focus();
        return;
      }

      if (!emailVal) {
        showFormMessage(form, getI18n('form.errorEmail'), true);
        email.focus();
        return;
      }

      if (!isValidEmailFormat(emailVal)) {
        showFormMessage(form, getI18n('form.errorEmailInvalid'), true);
        email.focus();
        return;
      }

      if (telefoneVal.length < 10 || telefoneVal.length > 11) {
        showFormMessage(form, getI18n('form.errorPhone'), true);
        telefone.focus();
        return;
      }

      /* Honeypot: se bot-field foi preenchido, não envia */
      var botField = form.querySelector('[name="bot-field"]');
      if (botField && (botField.value || '').trim() !== '') {
        showCommercialSuccessMessageWithAutoCloseAndLock(form);
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
          try {
            if (typeof window !== 'undefined' && window.sessionStorage) {
              window.sessionStorage.setItem('myweek_commercial_submitted', '1');
            }
          } catch (e) {
            // ignore falhas de sessionStorage
          }
          if (typeof console !== 'undefined' && console.log) {
            console.log('[MyWeek] Formulário enviado com sucesso.');
          }
          showCommercialSuccessMessageWithAutoCloseAndLock(form);
          form.reset();
        })
        .catch(function () {
          showFormMessage(form, getI18n('form.sendError'), true);
          // Falha no envio: mensagem dura 8s, depois limpa formulário e volta tudo ao estado inicial
          scheduleMessageAutoClose(form, function () {
            resetCommercialFormState(form);
          }, 8000);
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
