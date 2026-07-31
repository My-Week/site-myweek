/**
 * MyWeek - Internacionalização (PT/EN): dicionário e setLanguage
 * Copy alinhado a Product/docs/07-landpage-copy.md e 06-claims-vs-realidade.md
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'myweek_lang';
  var DEFAULT_LANG = 'pt';

  var translations = {
    pt: {
      pageTitle: 'MyWeek | Sua Agenda Cultural Inteligente',
      hero: {
        eyebrow: 'descubra onde está sua cena',
        brand: 'MyWeek',
        title: 'A gente te mostra de forma inteligente o que tá rolando.',
        subtitle: 'A forma mais fácil de encontrar e divulgar eventos que você realmente curte.',
        ctaPrimary: 'Quero participar do lançamento',
        ctaSecondary: 'Entender como a MyWeek funciona',
        deviceAlt: 'Feed do app MyWeek com eventos perto de você'
      },
      countdown: {
        eyebrow: 'Sua forma de viver a cultura está prestes a mudar.',
        days: 'Dias',
        hours: 'Horas',
        minutes: 'Minutos',
        seconds: 'Segundos',
        footer: 'Tecnologia que entende o seu estilo e organiza o seu evento.'
      },
      nav: {
        close: 'Fechar menu',
        producers: 'Para Produtores',
        features: 'Funcionalidades',
        app: 'App',
        about: 'Sobre',
        contact: 'Contato',
        login: 'Login',
        open: 'Abrir menu',
        langLabel: 'Selecionar idioma'
      },
      b2b: {
        lead: 'Você cria o evento, a gente faz ele encontrar o público certo.',
        lead2: 'Organizamos a divulgação no app, medimos interesse real e conectamos parceiros locais com cupons — sem substituir a sua bilheteira.',
        block1Title: 'Sua essência, descoberta pelo público certo.',
        block1Text: 'Cadastre o evento uma vez. O app mostra para quem está perto e curte o seu estilo.',
        block2Title: 'Controle do evento ao funil — inclusive ingresso.',
        block2Text: 'Atrações, fotos, lotes, link de bilheteira externa e cupons no mesmo painel.',
        block2Text2: 'Acompanhe interessados, cliques e resgates.',
        block3Title: 'Comércio no entorno do rolê.',
        block3Text: 'Benefícios no local do evento e ofertas de parceiros próximos — validados na hora, com histórico.',
        block4Title: 'Mapa vivo da sua operação.',
        block4Text: 'Veja no dashboard onde seus eventos (e os da plataforma) estão no território — filtro por UF, cidade e status.',
        block5Title: 'Decisões com número, não com feeling.',
        block5Text: 'KPIs de engajamento do app no dashboard — para dimensionar divulgação e operação.',
        screenAlt1: 'Detalhe do evento no painel do organizador',
        screenAlt2: 'Aba de ingressos com lotes e bilheteira externa',
        screenAlt3: 'Catálogo de cupons do organizador',
        screenAlt4: 'Mapa territorial com eventos no dashboard',
        screenAlt5: 'Painel comercial com funil de engajamento'
      },
      transition: {
        text: 'Da inteligência do produtor para a palma da sua mão.'
      },
      b2c: {
        lead: 'O melhor da cidade, personalizado para você.',
        lead2: 'Escolha localização, período e estilos que você curte. Marque Quero ir, veja lotes, compre na bilheteira, use cupons e abra a rota até o local.'
      },
      features: {
        timingTitle: 'Timing e descoberta perto de você',
        timingText: 'Filtre o feed por onde você está e por quando quer sair — o rolê certo no momento certo.',
        interestsTitle: 'Seus interesses, seu feed',
        interestsText: 'Preferências de categorias/gêneros no perfil — a curadoria começa no que você curte.',
        mapTitle: 'Mapa ao vivo da cena',
        mapText: 'No painel, veja eventos no mapa, filtre por estado e cidade e entenda onde a cena está mais forte.',
        venueTitle: 'Do detalhe à porta do evento',
        venueText: 'Veja a distância, toque em Como chegar e abra a rota no Google Maps — útil no dia do rolê.',
        ticketsTitle: 'Ingresso sem ser bilheteira',
        ticketsText: 'Lotes e preços no app; compra na Sympla/Ticketmaker — MyWeek mede o clique.',
        funnelTitle: 'Performance do funil',
        funnelText: 'Interessados, cliques no ingresso, cópias de promo e resgates.',
        benefitsTitle: 'Benefícios no rolê',
        benefitsText: 'Cupons do evento e de parceiros locais, com resgate confirmado.',
        screenAltTiming: 'Filtros de localização e período no feed',
        screenAltTimingFeed: 'Chips de localização e período no feed',
        screenAltTimingLocation: 'Filtro de localização com GPS e raio',
        screenAltTimingPeriod: 'Filtro de período no feed',
        screenAltInterests: 'Preferências de categorias no perfil',
        screenAltMap: 'Mapa territorial no painel',
        screenAltMapOrg: 'Mapa territorial do organizador',
        screenAltMapAdmin: 'Mapa territorial admin — visão nacional',
        screenAltMapAdminCity: 'Mapa territorial admin — densidade na cidade',
        screenAltMapPartner: 'Mapa territorial do parceiro com raio',
        screenAltVenue: 'Como chegar ao local do evento no app',
        screenAltVenueApp: 'Como chegar ao local do evento no app',
        screenAltVenueMaps: 'Rota no Google Maps até o local do evento',
        screenAltTickets: 'Sheet de ingressos com lotes e preços',
        screenAltFunnel: 'Painel comercial com métricas do funil',
        screenAltBenefits: 'Cupom de benefício no app'
      },
      carousel: {
        prev: 'Anterior',
        next: 'Próximo',
        timingLabel: 'Provas de filtros de localização e período',
        mapLabel: 'Mapas territoriais admin, organizador e parceiro',
        venueLabel: 'Como chegar no app e rota até o local'
      },
      download: {
        title: 'Leve o melhor da cidade no seu bolso.',
        desc: 'Descubra o rolê perfeito e fuja do óbvio.',
        appStore: 'App Store',
        googlePlay: 'Google Play',
        comingSoon: 'Em breve'
      },
      pricing: {
        title: 'Planos e Preços',
        basicTitle: 'Plano Basic',
        basicPrice: 'Grátis',
        basicFeature1: 'Feed de eventos, perfil e notificações',
        basicFeature2: 'Descoberta personalizada com limites de filtro',
        basicFeature3: 'Concierge em teaser (conforme entrega)',
        basicCta: 'Começar Agora',
        premiumBadge: 'O mais escolhido',
        premiumTitle: 'Plano Premium',
        premiumPrice: 'R$ 29,90 / mês',
        premiumFeature1: 'Mais filtros (cidade, períodos ampliados)',
        premiumFeature2: 'Concierge ampliado / ilimitado (conforme entrega)',
        premiumFeature3: 'Experiência Premium completa',
        premiumFeature4: 'Cancele quando quiser',
        premiumCta: 'Ser Premium Agora'
      },
      about: {
        title: 'Sua cidade vai muito além do óbvio.',
        manifesto: 'Cansamos da divulgação que só mostra o mesmo de sempre. MyWeek é o guia inteligente para dar visibilidade a movimentos autênticos e conectar produtores, parceiros locais e público — com demanda mensurável, não só like.',
        differential: 'Diferencial: Não somos apenas um calendário. Somos a camada de descoberta e ativação comercial da cena — com app para o público e painel para quem faz o evento acontecer.',
        pillar1Title: 'Curadoria + geo',
        pillar1Text: 'O rolê certo perto de você.',
        pillar2Title: 'Demanda mensurável',
        pillar2Text: 'Interesse e intenção, não só impressão.',
        pillar3Title: 'Ecossistema local',
        pillar3Text: 'Organizer + parceiro + público no mesmo loop.',
        ctaSubtitle: 'Pronto para encontrar seu próximo rolê ou fazer seu evento bombar?'
      },
      commercial: {
        title: 'Interesse Comercial',
        lead: 'Inteligência de verdade para quem faz a cultura acontecer.',
        lead2: 'Vamos conversar? Descubra como medir interesse real e ativar parceiros no entorno do seu evento.'
      },
      form: {
        companyLabel: 'Nome da Empresa',
        emailLabel: 'E-mail',
        phoneLabel: 'Celular (obrigatório para WhatsApp ou ligação)',
        submit: 'Enviar',
        sending: 'Enviando…',
        errorCompany: 'Informe o nome da empresa.',
        errorEmail: 'Informe o e-mail.',
        errorEmailInvalid: 'Informe um e-mail válido (ex.: nome@dominio.com).',
        errorPhone: 'Informe o celular para contato por WhatsApp ou ligação (10 ou 11 dígitos).',
        successTitle: 'Sua marca na vitrine da cena cultural.',
        successText: 'Nossa equipe entrará em contato em até 24 horas.',
        successHighlight: 'Prepare-se para alcançar o público certo, no momento certo.',
        successCta: 'Falar com Especialista agora',
        sendError: 'Não foi possível enviar. Tente novamente ou entre em contato por outro canal.',
        honeypotLabel: 'Não preencha este campo'
      },
      feedbacks: {
        title: 'Quem usa o app já sente a diferença'
      },
      footer: {
        copy: '© 2026 MyWeek — Lançamento em 6 meses'
      },
      feedbacksList: [
        { quote: 'Pare de scrollar feed genérico. No MyWeek eu filtro por localização e período — e acho o rolê certo perto de mim em minutos.', author: 'Julia M.', role: 'Usuária do app' },
        { quote: 'Marquei meus interesses uma vez e o feed ficou meu. Jazz, underground, o que eu curto — sem o óbvio da cidade.', author: 'Lucas R.', role: 'Usuário do app' },
        { quote: 'Quero ir + Como chegar no mesmo app. No dia do evento é só abrir a rota e ir. Simples assim.', author: 'Camila T.', role: 'Usuária do app' },
        { quote: 'Vejo lotes e preços no app e compro na bilheteira em um toque. Menos fricção, mais vontade de ir.', author: 'Diego A.', role: 'Usuário do app' },
        { quote: 'Os cupons no local do evento fazem a diferença. Benefício real no rolê — não é só descoberta, é experiência completa.', author: 'Beatriz N.', role: 'Usuária do app' },
        { quote: 'Se você curte cena de verdade, o MyWeek vira o atalho. Menos “o que tem hoje?” e mais “já sei onde estar”.', author: 'Rafael P.', role: 'Usuário do app' }
      ]
    },
    en: {
      pageTitle: 'MyWeek | Your Smart Cultural Agenda',
      hero: {
        eyebrow: 'find where your scene is',
        brand: 'MyWeek',
        title: "We show you in a smart way what's going on.",
        subtitle: 'The easiest way to find and promote events you actually enjoy.',
        ctaPrimary: 'Join the launch',
        ctaSecondary: 'Understand how MyWeek works',
        deviceAlt: 'MyWeek app feed with events near you'
      },
      countdown: {
        eyebrow: 'Your way of living culture is about to change.',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
        footer: 'Technology that understands your style and organizes your event.'
      },
      nav: {
        close: 'Close menu',
        producers: 'For Producers',
        features: 'Features',
        app: 'App',
        about: 'About',
        contact: 'Contact',
        login: 'Login',
        open: 'Open menu',
        langLabel: 'Select language'
      },
      b2b: {
        lead: 'You create the event, we help it find the right audience.',
        lead2: 'We organize promotion in the app, measure real interest, and connect local partners with coupons — without replacing your ticketing.',
        block1Title: 'Your essence, discovered by the right audience.',
        block1Text: 'List the event once. The app shows it to people nearby who match your style.',
        block2Title: 'From event to funnel — including tickets.',
        block2Text: 'Lineup, photos, batches, external ticketing link, and coupons in one panel.',
        block2Text2: 'Track interested users, clicks, and redemptions.',
        block3Title: 'Commerce around the night out.',
        block3Text: 'Benefits at the event and nearby partner offers — validated on the spot, with history.',
        block4Title: 'A living map of your operation.',
        block4Text: 'See on the dashboard where your events (and the platform’s) sit on the map — filter by state, city, and status.',
        block5Title: 'Decisions with numbers, not gut feel.',
        block5Text: 'App engagement KPIs on the dashboard — to size promotion and operations.',
        screenAlt1: 'Event detail in the organizer panel',
        screenAlt2: 'Tickets tab with batches and external ticketing',
        screenAlt3: 'Organizer coupon catalog',
        screenAlt4: 'Territorial map with events on the dashboard',
        screenAlt5: 'Commercial panel with engagement funnel'
      },
      transition: {
        text: 'From producer intelligence to the palm of your hand.'
      },
      b2c: {
        lead: 'The best of the city, personalized for you.',
        lead2: 'Pick location, date range, and styles you love. Mark Going, see batches, buy on the ticketing site, use coupons, and open the route to the place.'
      },
      features: {
        timingTitle: 'Timing and discovery near you',
        timingText: 'Filter the feed by where you are and when you want to go out — the right night out at the right time.',
        interestsTitle: 'Your interests, your feed',
        interestsText: 'Category/genre preferences in your profile — curation starts with what you like.',
        mapTitle: 'Live map of the scene',
        mapText: 'On the dashboard, see events on the map, filter by state and city, and spot where the scene is strongest.',
        venueTitle: 'From the details to the event door',
        venueText: 'See the distance, tap Get directions, and open the route in Google Maps — useful on the day.',
        ticketsTitle: 'Tickets without being a box office',
        ticketsText: 'Batches and prices in the app; purchase on Sympla/Ticketmaker — MyWeek measures the click.',
        funnelTitle: 'Funnel performance',
        funnelText: 'Interested users, ticket clicks, promo copies, and redemptions.',
        benefitsTitle: 'Benefits on the night out',
        benefitsText: 'Event and local partner coupons, with confirmed redemption.',
        screenAltTiming: 'Location and date filters on the feed',
        screenAltTimingFeed: 'Location and period chips on the feed',
        screenAltTimingLocation: 'Location filter with GPS and radius',
        screenAltTimingPeriod: 'Period filter on the feed',
        screenAltInterests: 'Category preferences in the profile',
        screenAltMap: 'Territorial map on the panel',
        screenAltMapOrg: 'Organizer territorial map',
        screenAltMapAdmin: 'Admin territorial map — national view',
        screenAltMapAdminCity: 'Admin territorial map — city density',
        screenAltMapPartner: 'Partner territorial map with radius',
        screenAltVenue: 'Get directions to the event in the app',
        screenAltVenueApp: 'Get directions to the event in the app',
        screenAltVenueMaps: 'Google Maps route to the event',
        screenAltTickets: 'Tickets sheet with batches and prices',
        screenAltFunnel: 'Commercial panel with funnel metrics',
        screenAltBenefits: 'Benefit coupon in the app'
      },
      carousel: {
        prev: 'Previous',
        next: 'Next',
        timingLabel: 'Location and period filter screenshots',
        mapLabel: 'Admin, organizer, and partner territorial maps',
        venueLabel: 'In-app directions and route to the place'
      },
      download: {
        title: 'Take the best of the city in your pocket.',
        desc: 'Discover the perfect night out and skip the obvious.',
        appStore: 'App Store',
        googlePlay: 'Google Play',
        comingSoon: 'Coming soon'
      },
      pricing: {
        title: 'Plans & Pricing',
        basicTitle: 'Basic Plan',
        basicPrice: 'Free',
        basicFeature1: 'Event feed, profile, and notifications',
        basicFeature2: 'Personalized discovery with filter limits',
        basicFeature3: 'Concierge teaser (as delivered)',
        basicCta: 'Get Started',
        premiumBadge: 'Most popular',
        premiumTitle: 'Premium Plan',
        premiumPrice: 'R$ 29.90 / month',
        premiumFeature1: 'More filters (city, extended date ranges)',
        premiumFeature2: 'Expanded / unlimited Concierge (as delivered)',
        premiumFeature3: 'Full Premium experience',
        premiumFeature4: 'Cancel anytime',
        premiumCta: 'Go Premium Now'
      },
      about: {
        title: 'Your city goes way beyond the obvious.',
        manifesto: 'We got tired of promotion that only shows the same old thing. MyWeek is the smart guide that gives visibility to authentic movements and connects producers, local partners, and audiences — with measurable demand, not just likes.',
        differential: 'What sets us apart: We are not just a calendar. We are the discovery and commercial activation layer for the scene — with an app for the audience and a panel for everyone who makes the event happen.',
        pillar1Title: 'Curation + geo',
        pillar1Text: 'The right night out near you.',
        pillar2Title: 'Measurable demand',
        pillar2Text: 'Interest and intent, not just impressions.',
        pillar3Title: 'Local ecosystem',
        pillar3Text: 'Organizer + partner + audience in the same loop.',
        ctaSubtitle: 'Ready to find your next night out or make your event crush it?'
      },
      commercial: {
        title: 'Business Interest',
        lead: 'Real intelligence for everyone who makes culture happen.',
        lead2: "Let's talk? Discover how to measure real interest and activate partners around your event."
      },
      form: {
        companyLabel: 'Company Name',
        emailLabel: 'Email',
        phoneLabel: 'Phone (required for WhatsApp or call)',
        submit: 'Submit',
        sending: 'Sending…',
        errorCompany: 'Please enter the company name.',
        errorEmail: 'Please enter your email.',
        errorEmailInvalid: 'Please enter a valid email (e.g., name@domain.com).',
        errorPhone: 'Please enter your phone number for WhatsApp or call (10 or 11 digits).',
        successTitle: 'Your brand in the spotlight of the cultural scene.',
        successText: 'Our team will get back to you within 24 hours.',
        successHighlight: 'Get ready to reach the right audience at the right time.',
        successCta: 'Speak with an Expert now',
        sendError: 'Unable to send. Please try again or contact us through another channel.',
        honeypotLabel: 'Do not fill in this field.'
      },
      feedbacks: {
        title: 'App users already feel the difference'
      },
      footer: {
        copy: '© 2026 MyWeek — Launch in 6 months'
      },
      feedbacksList: [
        { quote: 'Stop scrolling generic feeds. On MyWeek I filter by location and date — and find the right night out nearby in minutes.', author: 'Julia M.', role: 'App user' },
        { quote: 'I set my interests once and the feed became mine. Jazz, underground, what I actually like — not the city’s obvious picks.', author: 'Lucas R.', role: 'App user' },
        { quote: 'Going + Get directions in the same app. On event day I just open the route and go. That simple.', author: 'Camila T.', role: 'App user' },
        { quote: 'I see batches and prices in the app and buy on the ticketing site in one tap. Less friction, more reason to go.', author: 'Diego A.', role: 'App user' },
        { quote: 'Coupons at the event make a real difference. A real perk on the night out — not just discovery, the full experience.', author: 'Beatriz N.', role: 'App user' },
        { quote: 'If you care about the real scene, MyWeek becomes the shortcut. Less “what’s on tonight?” and more “I already know where to be”.', author: 'Rafael P.', role: 'App user' }
      ]
    }
  };

  var currentLang = DEFAULT_LANG;

  function getStoredLang() {
    try {
      if (typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)) {
        var stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'pt' || stored === 'en') return stored;
      }
    } catch (e) {}
    return null;
  }

  function get(keyPath) {
    var t = translations[currentLang];
    if (!t) t = translations[DEFAULT_LANG];
    var parts = keyPath.split('.');
    var obj = t;
    for (var i = 0; i < parts.length && obj != null; i++) {
      obj = obj[parts[i]];
    }
    return obj != null ? String(obj) : keyPath;
  }

  function getNested(obj, keyPath) {
    var parts = keyPath.split('.');
    var o = obj;
    for (var i = 0; i < parts.length && o != null; i++) {
      o = o[parts[i]];
    }
    return o;
  }

  function setLanguage(lang) {
    if (lang !== 'pt' && lang !== 'en') lang = DEFAULT_LANG;
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    if (window.MyWeek && window.MyWeek.theme && typeof window.MyWeek.theme.refreshLabels === 'function') {
      window.MyWeek.theme.refreshLabels();
    }

    var t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!key) return;
      var value = getNested(t, key);
      if (value == null) return;
      if (el.getAttribute('data-i18n-html') !== null) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var value = getNested(t, key);
      if (value != null) el.placeholder = value;
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria-label');
      var value = getNested(t, key);
      if (value != null) el.setAttribute('aria-label', value);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      var value = getNested(t, key);
      if (value != null) el.setAttribute('title', value);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      var value = getNested(t, key);
      if (value != null) el.setAttribute('alt', value);
    });

    var submitBtn = document.querySelector('.commercial__submit');
    if (submitBtn && !submitBtn.disabled) {
      submitBtn.textContent = get('form.submit');
    }

    var langSwitcher = document.querySelector('.lang-switcher');
    if (langSwitcher) {
      langSwitcher.setAttribute('aria-label', get('nav.langLabel'));
      langSwitcher.querySelectorAll('[data-lang]').forEach(function (btn) {
        if (btn.getAttribute('data-lang') === lang) {
          btn.classList.add('is-active');
          btn.setAttribute('aria-pressed', 'true');
        } else {
          btn.classList.remove('is-active');
          btn.setAttribute('aria-pressed', 'false');
        }
      });
    }

    document.documentElement.classList.remove('i18n-wait');

    var pageTitle = get('pageTitle');
    if (pageTitle) document.title = pageTitle;

    if (lang === 'en') {
      updatePremiumPriceUsd();
    }

    try {
      var ev = new CustomEvent('languagechange', { detail: { lang: lang } });
      window.dispatchEvent(ev);
    } catch (e) {}
  }

  var PREMIUM_BRL = 29.9;

  function updatePremiumPriceUsd() {
    var el = document.querySelector('[data-i18n="pricing.premiumPrice"]');
    if (!el || currentLang !== 'en') return;
    fetch('https://api.frankfurter.app/latest?from=BRL&to=USD')
      .then(function (res) { return res.json(); })
      .then(function (data) {
        var rate = data.rates && data.rates.USD;
        if (rate != null && typeof rate === 'number') {
          var usd = PREMIUM_BRL * rate;
          el.textContent = '$' + usd.toFixed(2) + ' / month';
        }
      })
      .catch(function () {});
  }

  function getLanguage() {
    return currentLang;
  }

  function getFeedbacks() {
    var t = translations[currentLang];
    if (!t || !t.feedbacksList) t = translations[DEFAULT_LANG];
    return t && t.feedbacksList ? t.feedbacksList : [];
  }

  function initLangSelector() {
    var nav = document.querySelector('.nav');
    if (!nav) return;

    var initial = window.__MYWEEK_LANG;
    if (initial === 'en' || initial === 'pt') {
      currentLang = initial;
      setLanguage(initial);
    } else {
      var stored = getStoredLang();
      if (stored) {
        currentLang = stored;
        setLanguage(stored);
      } else {
        setLanguage(DEFAULT_LANG);
      }
    }

    var wrap = document.createElement('div');
    wrap.className = 'lang-switcher';
    wrap.setAttribute('aria-label', get('nav.langLabel'));

    var ptBtn = document.createElement('button');
    ptBtn.type = 'button';
    ptBtn.className = 'lang-switcher__btn' + (currentLang === 'pt' ? ' is-active' : '');
    ptBtn.setAttribute('data-lang', 'pt');
    ptBtn.setAttribute('aria-label', 'Português');
    ptBtn.setAttribute('aria-pressed', currentLang === 'pt' ? 'true' : 'false');
    ptBtn.innerHTML = '<span class="lang-switcher__flag lang-switcher__flag--br" aria-hidden="true"><img src="assets/images/icons8-brazil-30.png" width="30" height="30" alt="" decoding="async"></span>';

    var enBtn = document.createElement('button');
    enBtn.type = 'button';
    enBtn.className = 'lang-switcher__btn' + (currentLang === 'en' ? ' is-active' : '');
    enBtn.setAttribute('data-lang', 'en');
    enBtn.setAttribute('aria-label', 'English');
    enBtn.setAttribute('aria-pressed', currentLang === 'en' ? 'true' : 'false');
    enBtn.innerHTML = '<span class="lang-switcher__flag lang-switcher__flag--us" aria-hidden="true"><img src="assets/images/icons8-usa-30.png" width="30" height="30" alt="" decoding="async"></span>';

    wrap.appendChild(ptBtn);
    wrap.appendChild(enBtn);

    var loginLink = nav.querySelector('.nav__login');
    if (loginLink && loginLink.parentNode) {
      loginLink.parentNode.insertBefore(wrap, loginLink);
    } else {
      nav.appendChild(wrap);
    }

    wrap.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-lang]');
      if (btn) {
        var lang = btn.getAttribute('data-lang');
        if (lang) setLanguage(lang);
      }
    });
  }

  window.MyWeek = window.MyWeek || {};
  window.MyWeek.i18n = {
    translations: translations,
    setLanguage: setLanguage,
    getLanguage: getLanguage,
    get: get,
    getFeedbacks: getFeedbacks,
    initLangSelector: initLangSelector
  };
})();
