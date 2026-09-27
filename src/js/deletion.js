/**
 * MyWeek - Pedido de exclusão de conta e dados (Netlify Forms: "exclusao-dados")
 * Página pública exigida pela Google Play: funciona sem login e sem o app.
 * ?tipo=dados abre o formulário já em "só alguns dados".
 */
(function () {
  'use strict';

  var FORM_NAME = 'exclusao-dados';
  var SESSION_KEY = 'myweek_deletion_submitted';
  var ALLOWED_TIPO = { conta: true, dados: true };

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

  /* Os textos criados aqui levam data-i18n para o i18n traduzir de novo se o
     idioma mudar (inclusive o que já estava na tela antes do idioma aplicar). */
  function setText(el, key) {
    el.setAttribute('data-i18n', key);
    el.textContent = getI18n(key);
  }

  function removeMessage(formEl) {
    var msg = formEl.querySelector('.form-message');
    if (msg) msg.remove();
  }

  function showError(formEl, key) {
    removeMessage(formEl);
    var div = document.createElement('div');
    div.className = 'form-message form-message--error';
    div.setAttribute('role', 'alert');
    setText(div, key);
    formEl.appendChild(div);
    window.setTimeout(function () {
      if (div.parentNode) div.remove();
    }, 8000);
  }

  function showSuccess(formEl) {
    removeMessage(formEl);
    var div = document.createElement('div');
    div.className = 'form-message form-message--success deletion__success';
    div.setAttribute('role', 'status');

    var title = document.createElement('p');
    title.className = 'deletion__success-title';
    setText(title, 'deletion.successTitle');

    var text = document.createElement('p');
    text.className = 'deletion__success-text';
    setText(text, 'deletion.successText');

    div.appendChild(title);
    div.appendChild(text);
    formEl.appendChild(div);
  }

  function lockForm(formEl) {
    formEl.querySelectorAll('input, select, textarea, button').forEach(function (el) {
      el.disabled = true;
    });
    formEl.classList.add('deletion__form--locked');
  }

  function setSubmitState(btn, loading) {
    if (!btn) return;
    btn.disabled = loading;
    setText(btn, loading ? 'deletion.sending' : 'deletion.submit');
  }

  function getTipoParam() {
    var tipo = '';
    try {
      tipo = (new URLSearchParams(window.location.search).get('tipo') || '').toLowerCase();
    } catch (e) {}
    return ALLOWED_TIPO[tipo] ? tipo : '';
  }

  // "Só alguns dados" precisa dizer quais: o campo vira obrigatório e o
  // rótulo passa a perguntar isso.
  function syncDetailsField(form) {
    var tipo = form.querySelector('[name="tipo"]');
    var details = form.querySelector('[name="detalhes"]');
    var label = details ? form.querySelector('label[for="' + details.id + '"]') : null;
    if (!tipo || !details || !label) return;

    var onlyData = tipo.value === 'dados';
    var key = onlyData ? 'deletion.detailsLabelData' : 'deletion.detailsLabel';
    details.required = onlyData;
    if (label.getAttribute('data-i18n') !== key) setText(label, key);
  }

  function initDeletionForm() {
    var form = document.querySelector('.deletion__form');
    if (!form) return;

    var tipo = form.querySelector('[name="tipo"]');
    var tipoParam = getTipoParam();
    if (tipo && tipoParam) tipo.value = tipoParam;
    syncDetailsField(form);
    if (tipo) {
      tipo.addEventListener('change', function () {
        syncDetailsField(form);
      });
    }

    try {
      if (window.sessionStorage && window.sessionStorage.getItem(SESSION_KEY) === '1') {
        showSuccess(form);
        lockForm(form);
        return;
      }
    } catch (e) {
      // sem sessionStorage: segue o fluxo normal
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var email = form.querySelector('[name="email"]');
      var details = form.querySelector('[name="detalhes"]');
      var submitBtn = form.querySelector('.deletion__submit');
      if (!tipo || !email || !details) return;

      var emailVal = (email.value || '').trim();
      var detailsVal = (details.value || '').trim();

      if (!emailVal) {
        showError(form, 'deletion.errorEmail');
        email.focus();
        return;
      }
      if (!isValidEmailFormat(emailVal)) {
        showError(form, 'deletion.errorEmailInvalid');
        email.focus();
        return;
      }
      if (tipo.value === 'dados' && !detailsVal) {
        showError(form, 'deletion.errorDetails');
        details.focus();
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

      // Netlify Forms recebe o POST na raiz; /excluir-conta é um rewrite.
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
          setSubmitState(submitBtn, false);
          showSuccess(form);
          lockForm(form);
        })
        .catch(function () {
          setSubmitState(submitBtn, false);
          showError(form, 'deletion.sendError');
        });
    });
  }

  window.MyWeek = window.MyWeek || {};
  window.MyWeek.initDeletionForm = initDeletionForm;

  document.addEventListener('DOMContentLoaded', initDeletionForm);
})();
