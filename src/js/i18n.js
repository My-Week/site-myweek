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
        title: 'Sua Curadoria Inteligente, descubra onde está sua cena',
        subtitle: 'O hub definitivo de divulgação e descoberta da cena cultural de nicho com IA',
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
        eyebrow: 'O futuro da cena cultural está chegando',
        days: 'Dias',
        hours: 'Horas',
        minutes: 'Minutos',
        seconds: 'Segundos',
        footer: 'Prepare-se para a revolução na gestão de eventos e descoberta de nichos.'
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
        lead: 'O produtor é quem alimenta o ecossistema com eventos de nicho. Nossa IA transforma cada evento em dados valiosos — tags, previsões e curadoria — que beneficiam toda a rede.',
        block1Title: 'Sua essência, traduzida por dados.',
        block1Text: 'Não perca tempo decifrando algoritmos. Nossa IA processa o conteúdo do seu evento para identificar e aplicar as tags de nicho mais precisas. Garantimos que sua produção chegue exatamente aos olhos da tribo que a valoriza, maximizando o alcance orgânico dentro da nossa rede de curadoria.',
        block2Title: 'Controle total, do primeiro lote ao último clique.',
        block2Text: 'Uma central de comando intuitiva para o seu evento. Gerencie atrações, controle a virada de lotes de ingressos e atualize sua galeria em tempo real. Com o MyWeek, a gestão operacional deixa de ser um gargalo e passa a ser sua maior vantagem competitiva.',
        block3Title: 'Otimização que evita o silêncio.',
        block3Text: 'O sucesso de um evento começa na agenda. Nosso Otimizador de Timing analisa o cenário cultural da cidade para sugerir os melhores dias e horários. Evite conflitos com outros grandes eventos de nicho e garanta que o fluxo de público esteja focado apenas na sua atração.',
        block4Title: 'Previsão real para decisões seguras.',
        block4Text: 'Chega de trabalhar no escuro. Utilizamos Machine Learning para estimar seu público provável com alta taxa de confiança. Dimensione sua equipe, estoque e orçamento com base em dados concretos de interesse regional, transformando incerteza em lucro.',
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
        lead: 'Toda a inteligência gerada pelos produtores chega até você de forma personalizada. Pergunte ao nosso Concierge o que fazer agora — ou descubra no seu feed.',
        chatUser: 'O que tem de bom hoje à noite perto de mim?',
        chatIALabel: 'Concierge IA',
        chatIAText: '3 eventos no seu nicho: Jazz no Blue Note 21h, Techno no D-Edge 23h e um open mic no Bar do Zé. Quer roteiro com tempo de deslocamento?'
      },
      features: {
        timingTitle: 'Timing inteligente de agenda',
        timingText: 'Nossa IA aprende os horários em que a sua cena realmente acontece e projeta picos de interesse ao longo da semana.',
        audienceTitle: 'Mapa vivo de público',
        audienceText: 'Visualize o interesse por nicho, cidade e horário para entender onde sua cena pulsa mais forte.',
        audienceItem1: 'Crescimento em noites de quinta',
        audienceItem2: 'Preferem venues até 30 min de casa',
        audienceItem3: 'cenas de nicho em alta na sua cidade',
        performanceTitle: 'Performance em tempo real',
        performanceText: 'Acompanhe quais eventos, dias e formatos entregam mais resultado para a sua cena.',
        performanceMetric1Label: 'Conversão média',
        performanceMetric2Label: 'Check-ins confirmados',
        conciergeTitle: 'Concierge IA alimentado por dados',
        conciergeText: 'O que o usuário vê no app é o reflexo direto de timing, público e performance que a plataforma aprende todos os dias.'
      },
      download: {
        title: 'Leve a cena no seu bolso',
        desc: 'Descubra eventos underground e de nicho em tempo real. Curadoria inteligente no seu celular.',
        appStore: 'App Store',
        googlePlay: 'Google Play',
        comingSoon: 'Em breve'
      },
      about: {
        title: 'A Inteligência por trás da Cena.',
        manifesto: 'O MyWeek nasceu para preencher o vazio deixado pelos canais de divulgação em massa. Somos um Hub de Inteligência Cultural projetado para dar voz a eventos de nicho — do Jazz Experimental ao Post-Punk — e conectar tribos a experiências autênticas que o mainstream ignora.',
        differential: 'Diferencial: Não somos apenas um calendário. Somos uma plataforma que utiliza Agentes de IA para transformar eventos em dados estratégicos para produtores e curadoria personalizada para usuários.',
        pillar1Title: 'Curadoria Humana, IA Inteligente',
        pillar1Text: 'Algoritmos que respeitam o gosto do usuário.',
        pillar2Title: 'Ecossistema Sustentável',
        pillar2Text: 'Conexão direta entre produtores, parceiros locais e público.',
        pillar3Title: 'Dados que Geram Valor',
        pillar3Text: 'Transformação de métricas em decisões para o mercado cultural.',
        ctaSubtitle: 'Pronto para descobrir sua próxima cena ou escalar seu evento?'
      },
      commercial: {
        title: 'Interesse Comercial',
        lead: 'Somos um Hub de Inteligência Cultural. Ao entrar em contato, você dá o primeiro passo para acessar dados estratégicos sobre público, timing e performance dos seus eventos de nicho.'
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
        title: 'Your Smart Curation — discover where your scene is',
        subtitle: 'The definitive hub for promoting and discovering the niche cultural scene with AI',
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
        eyebrow: 'The future of the cultural scene is coming',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
        footer: 'Get ready for the revolution in event management and niche discovery.'
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
        lead: 'Producers fuel the ecosystem with niche events. Our AI turns every event into valuable data — tags, predictions, and curation — that benefits the entire network.',
        block1Title: 'Your essence, translated into data.',
        block1Text: "Don't waste time deciphering algorithms. Our AI processes your event content to identify and apply the most accurate niche tags. We ensure your production reaches the right tribe, maximizing organic reach within our curation network.",
        block2Title: 'Full control, from first batch to last click.',
        block2Text: 'An intuitive command center for your event. Manage lineups, control ticket batch rollovers, and update your gallery in real time. With MyWeek, operational management is no longer a bottleneck — it becomes your greatest competitive advantage.',
        block3Title: 'Optimization that avoids empty venues.',
        block3Text: "Event success starts with scheduling. Our Timing Optimizer analyzes the city's cultural landscape to suggest the best days and times. Avoid conflicts with other major niche events and keep the audience focused on your attraction.",
        block4Title: 'Real forecasts for confident decisions.',
        block4Text: "No more working in the dark. We use Machine Learning to estimate your likely audience with high confidence. Scale your team, inventory, and budget based on concrete regional interest data, turning uncertainty into profit.",
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
        lead: 'All the intelligence generated by producers reaches you in a personalized way. Ask our Concierge what to do now — or discover it in your feed.',
        chatUser: "What's good tonight near me?",
        chatIALabel: 'AI Concierge',
        chatIAText: '3 events in your niche: Jazz at Blue Note 9pm, Techno at D-Edge 11pm, and an open mic at Bar do Zé. Want an itinerary with travel time?'
      },
      features: {
        timingTitle: 'Intelligent timing for your agenda',
        timingText: 'Our AI learns when your scene truly happens and projects interest peaks throughout the week.',
        audienceTitle: 'Live audience map',
        audienceText: 'See interest by niche, city, and time of day to understand where your scene is strongest.',
        audienceItem1: 'Growth on Thursday nights',
        audienceItem2: 'Prefer venues within 30 minutes from home',
        audienceItem3: 'niche scenes trending in your city',
        performanceTitle: 'Real-time performance',
        performanceText: 'Track which events, days, and formats deliver the best results for your scene.',
        performanceMetric1Label: 'Average conversion',
        performanceMetric2Label: 'Confirmed check-ins',
        conciergeTitle: 'Data-powered AI Concierge',
        conciergeText: 'What users see in the app directly reflects the timing, audience, and performance the platform learns every day.'
      },
      download: {
        title: 'Take the scene in your pocket',
        desc: 'Discover underground and niche events in real time. Smart curation on your phone.',
        appStore: 'App Store',
        googlePlay: 'Google Play',
        comingSoon: 'Coming soon'
      },
      about: {
        title: 'The Intelligence Behind the Scene.',
        manifesto: 'MyWeek was born to fill the void left by mass promotion channels. We are a Cultural Intelligence Hub designed to give voice to niche events — from Experimental Jazz to Post-Punk — and connect tribes to authentic experiences that the mainstream ignores.',
        differential: 'What sets us apart: We are not just a calendar. We are a platform that uses AI Agents to turn events into strategic data for producers and personalized curation for users.',
        pillar1Title: 'Human Curation, Smart AI',
        pillar1Text: 'Algorithms that respect user taste.',
        pillar2Title: 'Sustainable Ecosystem',
        pillar2Text: 'Direct connection between producers, local partners, and audience.',
        pillar3Title: 'Data That Generates Value',
        pillar3Text: 'Transforming metrics into decisions for the cultural market.',
        ctaSubtitle: 'Ready to discover your next scene or scale your event?'
      },
      commercial: {
        title: 'Business Interest',
        lead: 'We are a Cultural Intelligence Hub. By getting in touch, you take the first step to access strategic data on audience, timing, and performance of your niche events.'
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

    try {
      var ev = new CustomEvent('languagechange', { detail: { lang: lang } });
      window.dispatchEvent(ev);
    } catch (e) {}
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
