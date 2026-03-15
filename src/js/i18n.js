/**
 * MyWeek - Internacionalização (PT/EN): dicionário e setLanguage
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'myweek_lang';
  var DEFAULT_LANG = 'pt';

  var translations = {
    pt: {
      hero: {
        title: 'A gente te mostra de forma inteligente o que tá rolando.',
        subtitle: 'A forma mais fácil de encontrar e divulgar eventos que você realmente curte.',
        ctaPrimary: 'Quero participar do lançamento',
        ctaSecondary: 'Entender como a MyWeek funciona',
        visualProducerTag: 'Produtor',
        visualProducerLabel: 'Dashboard MyWeek',
        visualUserTag: 'Usuário',
        visualUserLabel: 'Feed & mapa em tempo real',
        visualEvent1Title: 'Jazz Night — Hoje · 21h',
        visualEvent1Meta: 'Pinheiros · 7 min',
        visualEvent2Title: 'Techno no D-Edge · 23h'
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
        lead2: 'Usamos tecnologia inteligente para organizar informações e prever tendências, garantindo que o que você produz seja descoberto pela galera que combina com seu estilo.',
        block1Title: 'Sua essência, traduzida por dados.',
        block1Text: 'Esqueça a dor de cabeça com algoritmos.',
        block1Text2: 'Nossa tecnologia entende tudo sobre o seu evento e faz o trabalho pesado por você. Garantimos que sua produção chegue direto em quem realmente curte o seu estilo, aumentando seu público de forma natural e sem esforço.',
        block2Title: 'Controle total, do primeiro lote ao último clique.',
        block2Text: 'Tudo o que você precisa para o seu evento, em um só lugar.',
        block2Text2: 'Organize atrações, mude o preço dos ingressos e atualize fotos na hora, tudo de um jeito simples. Com o MyWeek, a organização deixa de ser uma preocupação e você ganha tempo para focar no que realmente importa: o sucesso do seu movimento.',
        block3Title: 'Otimização que evita o silêncio.',
        block3Text: 'Acerte na agenda sem precisar de sorte.',
        block3Text2: 'A gente te ajuda a encontrar a brecha perfeita na programação da cidade. Saiba quais dias e horários funcionam melhor para o seu estilo de público, evitando bater de frente com outros eventos e garantindo casa cheia.',
        block4Title: 'Previsão real para decisões seguras.',
        block4Text: 'Previsões reais para o seu evento bombar. Chega de adivinhar: saiba o tamanho do seu público antes mesmo de abrir as portas. Use nossa inteligência para gastar apenas o necessário com estoque e equipe, garantindo um evento organizado e muito mais lucrativo.',
        miniDashboardTitle: 'Status de Lotes',
        lot1Label: 'Lote 1',
        lot2Label: 'Lote 2',
        lot3Label: 'Lote 3',
        lot4Label: 'Lote 4',
        lot1Pct: '80% vendido',
        lot2Pct: '45% vendido',
        lot3Pct: '90% vendido',
        lot4Pct: '60% vendido',
        heatmapY: 'Horário',
        heatmapX: 'Dia',
        heatmapCaption: 'Qui · Sex · Sáb · Dom',
        lineChartTitle: 'Interesse Estimado',
        sem1: 'Sem 1',
        sem2: 'Sem 2',
        sem3: 'Sem 3',
        sem4: 'Sem 4'
      },
      transition: {
        text: 'Da inteligência do produtor para a palma da sua mão.'
      },
      b2c: {
        lead: 'O melhor da cidade, personalizado para você.',
        lead2: 'Tudo o que rola de bom chega direto no seu feed. Se estiver na dúvida, é só perguntar para o nosso assistente e descobrir o rolê perfeito para agora.',
        chatUser: 'O que tem de bom hoje à noite perto de mim?',
        chatIALabel: 'Concierge IA',
        chatIAText: '3 eventos no seu nicho: Jazz no Blue Note 21h, Techno no D-Edge 23h e um open mic no Bar do Zé. Quer roteiro com tempo de deslocamento?'
      },
      features: {
        timingTitle: 'Timing inteligente de agenda',
        timingText: 'Nossa IA aprende os horários em que a sua cena realmente acontece e projeta picos de interesse ao longo da semana.',
        audienceTitle: 'Mapa vivo de público',
        audienceText: 'Entenda onde o movimento que você gosta pulsa mais forte. Escolha o melhor horário e o bairro ideal para aproveitar o que a cidade tem de melhor, do seu jeito.',
        audienceItem1: 'Crescimento em noites de quinta',
        audienceItem2: 'Preferem venues até 30 min de casa',
        audienceItem3: 'cenas de nicho em alta na sua cidade',
        performanceTitle: 'Performance em tempo real',
        performanceText: 'Acompanhe quais eventos, dias e formatos entregam mais resultado para a sua cena.',
        performanceMetric1Label: 'Conversão média',
        performanceMetric2Label: 'Check-ins confirmados',
        conciergeTitle: 'Seu guia particular para o rolê perfeito.',
        conciergeText: 'O MyWeek aprende com o movimento da cidade para te mostrar apenas o que interessa. É a combinação ideal entre o horário certo e o que a galera está curtindo no momento.'
      },
      download: {
        title: 'Leve o melhor da cidade no seu bolso.',
        desc: 'Descubra o rolê perfeito e fuja do óbvio em tempo real.',
        appStore: 'App Store',
        googlePlay: 'Google Play',
        comingSoon: 'Em breve'
      },
      pricing: {
        title: 'Planos e Preços',
        basicTitle: 'Plano Basic',
        basicPrice: 'Grátis para sempre',
        basicFeature1: 'Dicas do Assistente: Até 5 perguntas por dia para te ajudar a encontrar o rolê.',
        basicFeature2: 'Descoberta: Veja os 3 eventos mais bombados da cidade agora.',
        basicFeature3: 'Tudo o que você precisa: Feed de eventos, perfil personalizado e notificações de interesse.',
        basicCta: 'Começar Agora',
        premiumBadge: 'O mais escolhido',
        premiumTitle: 'Plano Premium',
        premiumPrice: 'R$ 29,90 / mês',
        premiumFeature1: 'Assistente Ilimitado: Pergunte o que fazer quantas vezes quiser, sem limites.',
        premiumFeature2: 'Descoberta VIP: Lista exclusiva baseada exatamente no que você gosta (afinidade real).',
        premiumFeature3: 'Experiência Completa: Todos os recursos do Basic, com prioridade e inteligência refinada.',
        premiumFeature4: 'Liberdade: Mude de plano ou cancele quando quiser, sem burocracia.',
        premiumCta: 'Ser Premium Agora'
      },
      about: {
        title: 'Sua cidade vai muito além do óbvio.',
        manifesto: 'Cansamos da divulgação que só mostra o mesmo de sempre. O MyWeek é o guia inteligente feito para dar visibilidade a movimentos autênticos e garantir que você encontre a sua galera e os eventos que realmente combinam com o seu jeito de ser.',
        differential: 'Diferencial: Não somos apenas um calendário. Somos uma plataforma que utiliza Agentes de IA para transformar eventos em dados estratégicos para produtores e curadoria personalizada para usuários.',
        pillar1Title: 'Curadoria Humana, IA Inteligente',
        pillar1Text: 'Algoritmos que respeitam o gosto do usuário.',
        pillar2Title: 'Ecossistema Sustentável',
        pillar2Text: 'Conexão direta entre produtores, parceiros locais e público.',
        pillar3Title: 'Dados que Geram Valor',
        pillar3Text: 'Transformação de métricas em decisões para o mercado cultural.',
        ctaSubtitle: 'Pronto para encontrar seu próximo rolê ou fazer seu evento bombar?'
      },
      commercial: {
        title: 'Interesse Comercial',
        lead: 'Inteligência de verdade para quem faz a cultura acontecer.',
        lead2: 'Vamos conversar? Descubra como usar informações reais sobre o seu público e o movimento da cidade para transformar seu evento em um sucesso garantido.'
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
        title: 'Comentários'
      },
      footer: {
        copy: '© 2026 MyWeek — Lançamento em 6 meses'
      },
      feedbacksList: [
        { quote: 'O MyWeek mudou a forma como divulgamos nossos eventos. Público mais qualificado e menos trabalho manual.', author: 'Maria S.', role: 'Produtora' },
        { quote: 'A previsão de público nos ajuda a dimensionar estrutura e equipe. Precisão que não tínhamos antes.', author: 'Ricardo L.', role: 'Organizador' },
        { quote: 'Dashboard claro e métricas em tempo real. Finalmente conseguimos tomar decisões baseadas em dados.', author: 'Ana C.', role: 'Gestora de Eventos' },
        { quote: 'Integração simples com nossas redes. Em poucos cliques divulgamos e acompanhamos o engajamento.', author: 'Pedro M.', role: 'Social Media' },
        { quote: 'A ferramenta de confirmação reduz no-show e nos dá uma base confiável para planejar o próximo evento.', author: 'Carla F.', role: 'Coordenadora' },
        { quote: 'Relatórios prontos e visualização por período. Economizamos horas que antes gastávamos em planilhas.', author: 'Bruno T.', role: 'Analista' }
      ]
    },
    en: {
      hero: {
        title: "We show you in a smart way what's going on.",
        subtitle: "The easiest way to find and promote events you actually enjoy.",
        ctaPrimary: 'Join the launch',
        ctaSecondary: 'Understand how MyWeek works',
        visualProducerTag: 'Producer',
        visualProducerLabel: 'MyWeek dashboard',
        visualUserTag: 'User',
        visualUserLabel: 'Feed & live map',
        visualEvent1Title: 'Jazz Night — Today · 9pm',
        visualEvent1Meta: 'Pinheiros · 7 min away',
        visualEvent2Title: 'Techno at D-Edge · 11pm'
      },
      countdown: {
        eyebrow: "Your way of living culture is about to change.",
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
        footer: "Technology that understands your style and organizes your event."
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
        lead: "You create the event, we help it find the right audience.",
        lead2: "We use smart technology to organize information and predict trends, making sure what you create gets discovered by people who match your style.",
        block1Title: 'Your essence, translated into data.',
        block1Text: "Forget the headache with algorithms.",
        block1Text2: "Our technology understands everything about your event and does the heavy lifting for you. We make sure your production reaches people who really enjoy your style, growing your audience naturally and effortlessly.",
        block2Title: 'Full control, from first batch to last click.',
        block2Text: "Everything you need for your event, in one place.",
        block2Text2: "Organize lineups, change ticket prices, and update photos on the spot — all in a simple way. With MyWeek, organization stops being a worry and you get time to focus on what really matters: the success of your movement.",
        block3Title: 'Optimization that avoids empty venues.',
        block3Text: "Get the schedule right without relying on luck.",
        block3Text2: "We help you find the perfect slot in the city's programming. Learn which days and times work best for your audience, avoid clashing with other events, and aim for a full house.",
        block4Title: 'Real forecasts for confident decisions.',
        block4Text: "Real forecasts so your event can crush it. Stop guessing: know your audience size before you even open the doors. Use our intelligence to spend only what you need on inventory and staff, for an organized and much more profitable event.",
        miniDashboardTitle: 'Batch Status',
        lot1Label: 'Batch 1',
        lot2Label: 'Batch 2',
        lot3Label: 'Batch 3',
        lot4Label: 'Batch 4',
        lot1Pct: '80% sold',
        lot2Pct: '45% sold',
        lot3Pct: '90% sold',
        lot4Pct: '60% sold',
        heatmapY: 'Time',
        heatmapX: 'Day',
        heatmapCaption: 'Thu · Fri · Sat · Sun',
        lineChartTitle: 'Estimated Interest',
        sem1: 'Week 1',
        sem2: 'Week 2',
        sem3: 'Week 3',
        sem4: 'Week 4'
      },
      transition: {
        text: 'From producer intelligence to the palm of your hand.'
      },
      b2c: {
        lead: "The best of the city, personalized for you.",
        lead2: "Everything good going on comes straight to your feed. If you're not sure what to do, just ask our assistant and find the perfect plan for right now.",
        chatUser: "What's good tonight near me?",
        chatIALabel: 'AI Concierge',
        chatIAText: '3 events in your niche: Jazz at Blue Note 9pm, Techno at D-Edge 11pm, and an open mic at Bar do Zé. Want an itinerary with travel time?'
      },
      features: {
        timingTitle: 'Intelligent timing for your agenda',
        timingText: 'Our AI learns when your scene truly happens and projects interest peaks throughout the week.',
        audienceTitle: 'Live audience map',
        audienceText: "Understand where the scene you like pulses strongest. Pick the best time and the right neighborhood to enjoy the best the city has to offer, your way.",
        audienceItem1: 'Growth on Thursday nights',
        audienceItem2: 'Prefer venues within 30 minutes from home',
        audienceItem3: 'niche scenes trending in your city',
        performanceTitle: 'Real-time performance',
        performanceText: 'Track which events, days, and formats deliver the best results for your scene.',
        performanceMetric1Label: 'Average conversion',
        performanceMetric2Label: 'Confirmed check-ins',
        conciergeTitle: "Your personal guide to the perfect night out.",
        conciergeText: "MyWeek learns from the city's pulse to show you only what matters. It's the ideal mix of the right time and what people are into right now."
      },
      download: {
        title: "Take the best of the city in your pocket.",
        desc: "Discover the perfect plan and skip the obvious in real time.",
        appStore: 'App Store',
        googlePlay: 'Google Play',
        comingSoon: 'Coming soon'
      },
      pricing: {
        title: 'Plans & Pricing',
        basicTitle: 'Basic Plan',
        basicPrice: 'Free forever',
        basicFeature1: 'Assistant tips: Up to 5 questions per day to help you find the perfect plan.',
        basicFeature2: 'Discovery: See the top 3 events happening in the city right now.',
        basicFeature3: 'Everything you need: Event feed, personalized profile, and interest notifications.',
        basicCta: 'Get Started',
        premiumBadge: 'Most popular',
        premiumTitle: 'Premium Plan',
        premiumPrice: 'R$ 29.90 / month',
        premiumFeature1: 'Unlimited Assistant: Ask what to do as many times as you want, no limits.',
        premiumFeature2: 'VIP Discovery: Exclusive list based on what you actually like (real affinity).',
        premiumFeature3: 'Full Experience: All Basic features, with priority and refined intelligence.',
        premiumFeature4: 'Freedom: Change plan or cancel whenever you want, no hassle.',
        premiumCta: 'Go Premium Now'
      },
      about: {
        title: "Your city goes way beyond the obvious.",
        manifesto: "We got tired of promotion that only shows the same old thing. MyWeek is the smart guide built to give visibility to authentic movements and make sure you find your people and the events that really match who you are.",
        differential: 'What sets us apart: We are not just a calendar. We are a platform that uses AI Agents to turn events into strategic data for producers and personalized curation for users.',
        pillar1Title: 'Human Curation, Smart AI',
        pillar1Text: 'Algorithms that respect user taste.',
        pillar2Title: 'Sustainable Ecosystem',
        pillar2Text: 'Direct connection between producers, local partners, and audience.',
        pillar3Title: 'Data That Generates Value',
        pillar3Text: 'Transforming metrics into decisions for the cultural market.',
        ctaSubtitle: "Ready to find your next night out or make your event crush it?"
      },
      commercial: {
        title: 'Business Interest',
        lead: "Real intelligence for everyone who makes culture happen.",
        lead2: "Let's talk? Discover how to use real insights about your audience and the city's pulse to turn your event into a guaranteed success."
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
        title: 'Feedbacks'
      },
      footer: {
        copy: '© 2026 MyWeek — Launch in 6 months'
      },
      feedbacksList: [
        { quote: 'MyWeek changed how we promote our events. A more qualified audience and less manual work.', author: 'Maria S.', role: 'Producer' },
        { quote: 'The audience forecast helps us scale structure and team. Accuracy we didn\'t have before.', author: 'Ricardo L.', role: 'Organizer' },
        { quote: 'Clear dashboard and real-time metrics. We can finally make data-driven decisions.', author: 'Ana C.', role: 'Event Manager' },
        { quote: 'Simple integration with our channels. In a few clicks we promote and track engagement.', author: 'Pedro M.', role: 'Social Media' },
        { quote: 'The confirmation tool reduces no-show and gives us a reliable base to plan the next event.', author: 'Carla F.', role: 'Coordinator' },
        { quote: 'Ready-to-use reports and views by period. We save hours we used to spend on spreadsheets.', author: 'Bruno T.', role: 'Analyst' }
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
