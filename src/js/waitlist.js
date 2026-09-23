/**
 * MyWeek - Lista de espera do app (Netlify Forms: "lista-espera")
 * Captura o interesse do público enquanto o app não está nas lojas.
 */
(function () {
  'use strict';

  var FORM_NAME = 'lista-espera';
  var SESSION_KEY = 'myweek_waitlist_submitted';

  function isValidEmailFormat(email) {
    if (!email || typeof email !== 'string') return false;
    var trimmed = email.trim();
    if (trimmed.length < 6) return false;
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
    return re.test(trimmed);
  }

  function getI18n(key) {
    if (window.MyWeek && window.MyWeek.i18n && typeof window.MyWeek.i18n.get === 'function') {
      return window.MyWeek.i18n.get(key);
    }
    return key;
  }

  function removeMessage(formEl) {
    var msg = formEl.querySelector('.form-message');
    if (msg) msg.remove();
  }

  function showError(formEl, message) {
    removeMessage(formEl);
    var div = document.createElement('div');
    div.className = 'form-message form-message--error';
    div.setAttribute('role', 'alert');
    div.textContent = message;
    formEl.appendChild(div);
    window.setTimeout(function () {
      if (div.parentNode) div.remove();
    }, 8000);
  }

  function showSuccess(formEl) {
    removeMessage(formEl);
    var div = document.createElement('div');
    div.className = 'form-message form-message--success waitlist__success';
    div.setAttribute('role', 'status');

    var title = document.createElement('p');
    title.className = 'waitlist__success-title';
    title.textContent = getI18n('waitlist.successTitle');

    var text = document.createElement('p');
    text.className = 'waitlist__success-text';
    text.textContent = getI18n('waitlist.successText');

    div.appendChild(title);
    div.appendChild(text);
    formEl.appendChild(div);
  }

  function lockForm(formEl) {
    formEl.querySelectorAll('input, button').forEach(function (el) {
      el.disabled = true;
    });
    formEl.classList.add('waitlist__form--locked');
  }

  function setSubmitState(btn, loading) {
    if (!btn) return;
    btn.disabled = loading;
    btn.textContent = loading ? getI18n('waitlist.sending') : getI18n('waitlist.submit');
  }

  function initWaitlistForm() {
    var form = document.querySelector('.waitlist__form');
    if (!form) return;

    try {
      if (window.sessionStorage && window.sessionStorage.getItem(SESSION_KEY) === '1') {
        showSuccess(form);
        lockForm(form);
        return;
      }
    } catch (e) {
      // sem sessionStorage: segue o fluxo normal
    }

    // Mantém o rótulo do botão em dia quando o idioma muda
    window.addEventListener('languagechange', function () {
      var btn = form.querySelector('.waitlist__submit');
      if (btn && !btn.disabled) btn.textContent = getI18n('waitlist.submit');
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var email = form.querySelector('[name="email"]');
      var cidade = form.querySelector('[name="cidade"]');
      var submitBtn = form.querySelector('.waitlist__submit');
      if (!email || !cidade) return;

      var emailVal = (email.value || '').trim();
      var cidadeVal = (cidade.value || '').trim();

      if (!emailVal) {
        showError(form, getI18n('waitlist.errorEmail'));
        email.focus();
        return;
      }
      if (!isValidEmailFormat(emailVal)) {
        showError(form, getI18n('waitlist.errorEmailInvalid'));
        email.focus();
        return;
      }
      if (cidadeVal.length < 2) {
        showError(form, getI18n('waitlist.errorCity'));
        cidade.focus();
        return;
      }

      var botField = form.querySelector('[name="bot-field"]');
      if (botField && (botField.value || '').trim() !== '') {
        showSuccess(form);
        lockForm(form);
        return;
      }

      removeMessage(form);
      setSubmitState(submitBtn, true);

      var body = new URLSearchParams(new FormData(form)).toString();
      if (body.indexOf('form-name') === -1) {
        body = 'form-name=' + FORM_NAME + '&' + body;
      }

      fetch(window.location.origin + '/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body
      })
        .then(function (res) {
          if (!res.ok) throw new Error('Erro ao enviar: ' + res.status);
          return res.text();
        })
        .then(function () {
          try {
            if (window.sessionStorage) window.sessionStorage.setItem(SESSION_KEY, '1');
          } catch (err) {
            // ignore
          }
          showSuccess(form);
          lockForm(form);
        })
        .catch(function () {
          setSubmitState(submitBtn, false);
          showError(form, getI18n('waitlist.sendError'));
        });
    });
  }

  window.MyWeek = window.MyWeek || {};
  window.MyWeek.initWaitlistForm = initWaitlistForm;

  document.addEventListener('DOMContentLoaded', initWaitlistForm);
})();
