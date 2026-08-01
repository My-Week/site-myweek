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
      pageDescription: 'MyWeek | Sua Agenda Cultural Inteligente. Descubra e divulgue eventos com demanda mensurável — app para o público e painel para produtores e parceiros.',
      ogDescription: 'Do interesse até o local do evento — com dado e cupom no meio. Descoberta por localização e ativação comercial da cena.',
      hero: {
        eyebrow: 'Descubra onde está acontecendo seu rolê',
        brand: 'My Week',
        title: 'Descubra e divulgue eventos que têm tudo a ver com você.',
        subtitle: 'Conectamos você ao que está acontecendo na cidade de forma simples, inteligente e rápida.',
        ctaPrimary: 'Quero participar do lançamento',
        ctaSecondary: 'Entender como a My Week funciona',
        stackLabel: 'App My Week e painel web do organizador',
        deviceAlt: 'Feed do app My Week com eventos perto de você',
        logoAlt: 'Cupom e logo My Week no app',
        dashAlt: 'Painel comercial do organizador no My Week',
        scrollLabel: 'Rolar para ver mais'
      },
      countdown: {
        eyebrow: 'Sua forma de viver a cultura local está prestes a mudar.',
        days: 'Dias',
        hours: 'Horas',
        minutes: 'Minutos',
        seconds: 'Segundos',
        footer: 'Tecnologia que entende o seu estilo e organiza o seu evento.',
        gridLabel: 'Contagem regressiva para o lançamento do MyWeek'
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
        langLabel: 'Selecionar idioma',
        mainLabel: 'Navegação principal',
        loginAria: 'Acessar login MyWeek'
      },
      b2b: {
        lead: 'Você cria o evento, a gente faz ele ser encontrado pelo público certo.',
        lead2: 'Organizamos a divulgação no app, medimos interesse real e conectamos parceiros locais com cupons — sem substituir a sua bilheteria.',
        block1Title: 'O público certo para o seu evento, sem complicação.',
        block1Text: 'Cadastre seu evento em instantes e deixe o app exibir sua programação para quem está por perto e realmente curte seu estilo.',
        block1Text2: 'Combinamos filtros de interesses e localização para garantir visibilidade qualificada e aumentar o engajamento do seu público em tempo real.',
        block2Title: 'Gestão completa e métricas em tempo real para o seu evento.',
        block2Text: 'Centralize atrações, galeria, lotes e parcerias em uma interface simples e intuitiva.',
        block2Text2: 'Monitore o engajamento do seu público do início ao fim com dados precisos de interesse, tráfego para a bilheteria e conversão de cupons.',
        block3Title: 'Movimente o entorno e agregue mais valor ao seu público.',
        block3Text: 'Crie ofertas no próprio evento ou explore a rede de parceiros da região para atrair e fidelizar clientes.',
        block3Text2: 'Validação instantânea no caixa e controle total com métricas detalhadas de cada cupom utilizado.',
        block4Title: 'Sua operação no comando com um mapa geográfico inteligente.',
        block4Text: 'Veja na hora onde estão todos os seus eventos no painel.',
        block4Text2: 'Utilize filtros poderosos por Estado (UF), cidade e status para ter uma visão clara e organizada da sua presença no mercado.',
        block5Title: 'Gestão orientada a dados para o sucesso do seu evento.',
        block5Text: 'Indicadores de engajamento claros no seu painel para ajustar a divulgação e planejar sua operação do tamanho exato da demanda.',
        screenAlt1: 'Detalhe do evento no painel do organizador',
        screenAlt2: 'Aba de ingressos com lotes e venda externa',
        screenAlt3: 'Catálogo de cupons do organizador',
        screenAlt4: 'Mapa com eventos no painel',
        screenAlt5: 'Painel comercial com funil de engajamento'
      },
      transition: {
        text: 'Da inteligência do produtor para a palma da sua mão.'
      },
      b2c: {
        lead: 'O melhor da cidade, personalizado para você.',
        lead2: 'Escolha localização, período e estilos que você curte. Marque Quero ir, veja lotes, compre na bilheteria, use cupons e abra a rota até o local.'
      },
      features: {
        timingTitle: 'O rolê certo, no momento certo e no lugar certo.',
        timingText: 'Descubra o que está acontecendo ao seu redor filtrando o feed por localização e data. Você no comando da sua agenda.',
        interestsTitle: 'Um feed feito exclusivamente para você.',
        interestsText: 'Esqueça o excesso de informações irrelevantes. Personalize seus interesses e deixe que a inteligência do app selecione apenas os eventos e atrações que combinam com o seu perfil.',
        directionsTitle: 'A rota perfeita para o seu destino, em um toque.',
        directionsText: 'Quando chega o momento de sair, a navegação precisa ser simples.',
        directionsText2: 'Acompanhe a distância exata até o local e toque em Como chegar para abrir no Google Maps ou Waze. Você sai de casa com a rota pronta.',
        ticketsTitle: 'Preços e lotes na mão, compra 100% segura.',
        ticketsText: 'Compare os valores do evento sem precisar trocar de tela. Quando decidir ir, você é redirecionado direto para a plataforma oficial de ingressos para finalizar sua compra.',
        benefitsTitle: 'Descontos reais para você aproveitar mais.',
        benefitsText: 'Garanta cupons exclusivos do próprio evento ou de parceiros ao redor. Você resgata direto pelo app e aproveita o benefício na hora, sem complicação.',
        screenAltTiming: 'Filtros de localização e período no feed',
        screenAltTimingFeed: 'Chips de localização e período no feed',
        screenAltTimingLocation: 'Filtro de localização com GPS e raio',
        screenAltTimingPeriod: 'Filtro de período no feed',
        screenAltInterests: 'Preferências de categorias no perfil',
        screenAltDirections: 'Como chegar ao local do evento no app',
        screenAltDirectionsApp: 'Como chegar ao local do evento no app',
        screenAltDirectionsMaps: 'Rota no Google Maps ou Waze até o local do evento',
        screenAltTickets: 'Tela de ingressos com lotes e preços',
        screenAltBenefits: 'Cupom de benefício no app'
      },
      carousel: {
        prev: 'Anterior',
        next: 'Próximo',
        timingLabel: 'Provas de filtros de localização e período',
        directionsLabel: 'Como chegar no app e rota até o local'
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
        basicFeature3: 'Assistente de rolê (versão inicial)',
        basicCta: 'Começar Agora',
        premiumBadge: 'O mais escolhido',
        premiumTitle: 'Plano Premium',
        premiumPrice: 'R$ 29,90 / mês',
        premiumFeature1: 'Mais filtros (cidade, períodos ampliados)',
        premiumFeature2: 'Assistente de rolê completo',
        premiumFeature3: 'Experiência Premium completa',
        premiumFeature4: 'Cancele quando quiser',
        premiumCta: 'Ser Premium Agora'
      },
      about: {
        title: 'Sua cidade vai muito além do óbvio.',
        intro: 'Menos barulho visual, mais público no seu evento.',
        intro2: 'A divulgação tradicional ficou previsível. O MyWeek é um guia inteligente para destacar quem faz a cultura local acontecer de verdade.',
        intro3: 'Ligamos organizadores, comércios da região e pessoas que curtem experiências reais — com resultados concretos, não só curtida em rede social.',
        differential: 'Muito mais que um calendário: tudo conectado.',
        differential2: 'O MyWeek ajuda você a achar o rolê ideal e ajuda produtores e parceiros locais a atrair público de verdade — com dados claros, não só curtidas.',
        pillar1Title: 'Perto de você',
        pillar1Text: 'O rolê certo na sua região.',
        pillar2Title: 'Interesse de verdade',
        pillar2Text: 'Sabe quem quer ir — não só quem viu.',
        pillar3Title: 'Cena local conectada',
        pillar3Text: 'Produtor, parceiro e público no mesmo ciclo.',
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
        copy: '© 2026 MyWeek — Lançamento em 6 meses',
        credit: 'Desenvolvido por Aeon SoftHouse'
      },
      feedbacksList: [
        { quote: 'Pare de scrollar feed genérico. No MyWeek eu filtro por localização e período — e acho o rolê certo perto de mim em minutos.', author: 'Julia M.', role: 'Usuária do app' },
        { quote: 'Marquei meus interesses uma vez e o feed ficou meu. Jazz, underground, o que eu curto — sem o óbvio da cidade.', author: 'Lucas R.', role: 'Usuário do app' },
        { quote: 'Quero ir + Como chegar no mesmo app. No dia do evento é só abrir a rota e ir. Simples assim.', author: 'Camila T.', role: 'Usuária do app' },
        { quote: 'Vejo lotes e preços no app e compro na bilheteria em um toque. Menos fricção, mais vontade de ir.', author: 'Diego A.', role: 'Usuário do app' },
        { quote: 'Os cupons no local do evento fazem a diferença. Benefício real no rolê — não é só descoberta, é experiência completa.', author: 'Beatriz N.', role: 'Usuária do app' },
        { quote: 'Se você curte cena de verdade, o MyWeek vira o atalho. Menos “o que tem hoje?” e mais “já sei onde estar”.', author: 'Rafael P.', role: 'Usuário do app' }
      ]
    },
    en: {
      pageTitle: 'MyWeek | Your Smart Cultural Agenda',
      pageDescription: 'MyWeek | Your Smart Cultural Agenda. Discover and promote events with measurable demand — an app for the audience and a dashboard for producers and partners.',
      ogDescription: 'From interest to the event place — with data and coupons in between. Location-based discovery and commercial activation of the scene.',
      hero: {
        eyebrow: 'Find where your night out is happening',
        brand: 'My Week',
        title: 'Discover and promote events that are all about you.',
        subtitle: 'We connect you to what’s happening in the city in a simple, smart, and fast way.',
        ctaPrimary: 'Join the launch',
        ctaSecondary: 'Understand how My Week works',
        stackLabel: 'My Week app and organizer web dashboard',
        deviceAlt: 'My Week app feed with events near you',
        logoAlt: 'My Week coupon and logo in the app',
        dashAlt: 'My Week organizer commercial dashboard',
        scrollLabel: 'Scroll to see more'
      },
      countdown: {
        eyebrow: 'Your way of living local culture is about to change.',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
        footer: 'Technology that understands your style and organizes your event.',
        gridLabel: 'Countdown to the MyWeek launch'
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
        langLabel: 'Select language',
        mainLabel: 'Main navigation',
        loginAria: 'Go to MyWeek login'
      },
      b2b: {
        lead: 'You create the event — we help the right audience find it.',
        lead2: 'We organize promotion in the app, measure real interest, and connect local partners with coupons — without replacing your ticketing.',
        block1Title: 'The right audience for your event — without the hassle.',
        block1Text: 'List your event in moments and let the app show your lineup to people nearby who truly match your style.',
        block1Text2: 'We combine interest and location filters to deliver qualified visibility and boost your audience engagement in real time.',
        block2Title: 'Full management and real-time metrics for your event.',
        block2Text: 'Centralize lineup, gallery, ticket batches, and partnerships in a simple, intuitive interface.',
        block2Text2: 'Track your audience engagement end to end with precise data on interest, ticketing traffic, and coupon conversion.',
        block3Title: 'Activate the area around your event and add more value for your audience.',
        block3Text: 'Create offers at the event itself or tap into the local partner network to attract and retain customers.',
        block3Text2: 'Instant validation at the counter and full control with detailed metrics for every redeemed coupon.',
        block4Title: 'Take command of your operation with a smart geographic map.',
        block4Text: 'Instantly see the location of all your events on the dashboard.',
        block4Text2: 'Use powerful filters by state (UF), city, and status for a clear, organized view of your market presence.',
        block5Title: 'Data-driven management for your event’s success.',
        block5Text: 'Clear engagement metrics on your dashboard to tune promotion and plan operations to the exact size of demand.',
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
        lead2: 'Choose location, date range, and styles you love. Tap Going, see ticket batches, buy on the ticketing platform, use coupons, and open the route to the place.'
      },
      features: {
        timingTitle: 'The right night out — at the right time, in the right place.',
        timingText: 'Discover what’s happening around you by filtering the feed by location and date. You’re in control of your agenda.',
        interestsTitle: 'A feed made exclusively for you.',
        interestsText: 'Skip the noise of irrelevant information. Customize your interests and let the app’s intelligence select only the events and attractions that match your profile.',
        directionsTitle: 'The perfect route to your destination — in one tap.',
        directionsText: 'When it’s time to head out, navigation should be simple.',
        directionsText2: 'See the exact distance to the place and tap Get directions to open Google Maps or Waze. You leave home with the route ready.',
        ticketsTitle: 'Prices and batches at hand — a 100% secure purchase.',
        ticketsText: 'Compare event prices without switching screens. When you decide to go, you’re redirected straight to the official ticketing platform to complete your purchase.',
        benefitsTitle: 'Real discounts so you get more out of the night.',
        benefitsText: 'Get exclusive coupons from the event itself or nearby partners. Redeem them directly in the app and enjoy the benefit on the spot — no hassle.',
        screenAltTiming: 'Location and date filters on the feed',
        screenAltTimingFeed: 'Location and period chips on the feed',
        screenAltTimingLocation: 'Location filter with GPS and radius',
        screenAltTimingPeriod: 'Period filter on the feed',
        screenAltInterests: 'Category preferences in the profile',
        screenAltDirections: 'Get directions to the event in the app',
        screenAltDirectionsApp: 'Get directions to the event in the app',
        screenAltDirectionsMaps: 'Google Maps or Waze route to the event place',
        screenAltTickets: 'Tickets screen with batches and prices',
        screenAltBenefits: 'Benefit coupon in the app'
      },
      carousel: {
        prev: 'Previous',
        next: 'Next',
        timingLabel: 'Location and period filter screenshots',
        directionsLabel: 'In-app directions and route to the place'
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
        basicFeature3: 'Night-out assistant (starter version)',
        basicCta: 'Get Started',
        premiumBadge: 'Most popular',
        premiumTitle: 'Premium Plan',
        premiumPrice: 'R$ 29.90 / month',
        premiumFeature1: 'More filters (city, extended date ranges)',
        premiumFeature2: 'Full night-out assistant',
        premiumFeature3: 'Full Premium experience',
        premiumFeature4: 'Cancel anytime',
        premiumCta: 'Go Premium Now'
      },
      about: {
        title: 'Your city goes way beyond the obvious.',
        intro: 'Less visual noise, more people at your event.',
        intro2: 'Traditional promotion got predictable. MyWeek is a smart guide that highlights who truly makes local culture happen.',
        intro3: 'We connect organizers, local businesses, and people who love real experiences — with concrete results, not just social likes.',
        differential: 'More than a calendar: everything connected.',
        differential2: 'MyWeek helps you find the ideal night out and helps producers and local partners attract real audiences — with clear data, not just likes.',
        pillar1Title: 'Near you',
        pillar1Text: 'The right night out in your area.',
        pillar2Title: 'Real interest',
        pillar2Text: 'Know who wants to go — not just who saw it.',
        pillar3Title: 'Connected local scene',
        pillar3Text: 'Producer, partner, and audience in the same cycle.',
        ctaSubtitle: 'Ready to find your next night out or make your event crush it?'
      },
      commercial: {
        title: 'Commercial Interest',
        lead: 'Real intelligence for everyone who makes culture happen.',
        lead2: "Shall we talk? Discover how to measure real interest and activate partners around your event."
      },
      form: {
        companyLabel: 'Company Name',
        emailLabel: 'Email',
        phoneLabel: 'Mobile phone (required for WhatsApp or call)',
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
        copy: '© 2026 MyWeek — Launch in 6 months',
        credit: 'Developed by Aeon SoftHouse'
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

    document.querySelectorAll('[data-i18n-content]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-content');
      var value = getNested(t, key);
      if (value != null) el.setAttribute('content', value);
    });

    var ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', lang === 'en' ? 'en_US' : 'pt_BR');
    }

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
