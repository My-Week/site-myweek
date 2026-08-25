/**
 * MyWeek - Internacionalização (PT/EN): dicionário e setLanguage
 * Copy simples: agenda da cidade, comércio do lado, bilheteria deles.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'myweek_lang';
  var DEFAULT_LANG = 'pt';

  var translations = {
    pt: {
      pageTitle: 'MyWeek | O rada cultural da sua cidade',
      pageDescription: 'MyWeek mostra o que está acontecendo na sua cidade. Evento pequeno aparece. Comércio do lado ganha cupom. Show grande aponta para a bilheteria deles.',
      ogDescription: 'O ponto de encontro entre o evento e a cidade. Não somos uma tiqueteira, nem apenas um catálogo de descontos.',
      hero: {
        eyebrow: '',
        brand: 'MyWeek',
        title: 'O app que conecta a cidade',
        subtitle: 'Não somos apenas intermediários de vendas, nem apenas um catálogo de cupons. No nosso app, o público descobre o que fazer e os eventos da cidade giram: o evento pequeno aparece, o comércio vizinho lucra com quem passa, e o show grande ganha tráfego direto para o site oficial. Nós somos o radar cultural da sua cidade.',
        ctaPrimary: 'Cadastrar minha cidade',
        ctaSecondary: 'Ver para quem é',
        stackLabel: 'App My Week e painel web do organizador',
        deviceAlt: 'Feed do app My Week com eventos perto de você',
        logoAlt: 'Cupom e logo My Week no app',
        dashAlt: 'Painel comercial do organizador no My Week',
        scrollLabel: 'Rolar para ver mais'
      },
      countdown: {
        eyebrow: 'Lançamento previsto',
        headline: 'Início de fevereiro de 2027',
        days: 'Dias',
        hours: 'Horas',
        minutes: 'Minutos',
        seconds: 'Segundos',
        gridLabel: 'Contagem para o lançamento do MyWeek',
        footer: 'Estimativa. Cadastre sua cidade para entrar no começo.',
        cta: 'Cadastrar minha cidade',
        ended: 'O MyWeek já está no ar. Comece agora!'
      },
      nav: {
        close: 'Fechar menu',
        businesses: 'Para negócios',
        producers: 'Para negócios',
        features: 'App',
        app: 'App',
        pricing: 'Planos',
        about: 'Sobre',
        contact: 'Contato',
        login: 'Login',
        open: 'Abrir menu',
        langLabel: 'Selecionar idioma',
        mainLabel: 'Navegação principal',
        loginAria: 'Acessar login MyWeek'
      },
      channels: {
        title: 'Para quem é o MyWeek?',
        lead: 'Nós somos a vitrine, não a bilheteria. Conectamos o que está rolando hoje com quem já está na cidade, entregando a solução certa para cada parceiro:',
        pitch: '',
        organizerEyebrow: 'Organizador',
        organizerTitle: 'Feito para o seu evento',
        organizerText: 'A gente sabe que quem produz formatos menores só quer uma coisa: ser encontrado pelo público certo.',
        organizerText2: 'Com o MyWeek, o seu show ou bar ao vivo entra direto na tela de quem quer sair hoje. Nós não nos metemos na sua operação: você pode cobrar na porta, fazer evento gratuito ou usar o link da sua própria venda. O nosso trabalho é levar o público até você.',
        organizerCta: 'Ver o painel',
        partnerEyebrow: 'Parceiro',
        partnerTitle: 'Movimente o seu negócio',
        partnerText: 'Sabe aquela multidão que vai ao show na sua rua? Eles podem terminar a noite consumindo com você.',
        partnerText2: 'Com o MyWeek, você cria cupons de desconto exclusivos para quem está indo aos eventos próximos. Nós conectamos a fome, a sede ou a necessidade (como um estacionamento) de quem está na rua com o seu negócio.',
        partnerCta: 'Ver os cupons',
        platformEyebrow: 'Bilheteria',
        platformTitle: 'Amplie o alcance do seu evento',
        platformText: 'Para shows e grandes produções, o MyWeek atua como o principal canal de descoberta da cidade.',
        platformText2: 'Nós não competimos com a sua tiqueteira. Nosso trabalho é colocar o seu espetáculo na frente do público certo e garantir um redirecionamento rápido e seguro para o seu site oficial. Você ganha visibilidade máxima na cidade sem alterar em nada a sua operação de vendas.',
        platformCta: 'Conversar sobre o começo'
      },
      b2b: {
        title: 'O controle da sua noite volta para você.',
        lead: 'No nosso modelo, você paga pela visibilidade no app, não pelo seu sucesso. Nós cobramos para o evento aparecer, mas quem chega na porta é seu.',
        lead2: 'Entregamos um painel completo para você cadastrar a noite, gerar seus próprios cupons e acessar as métricas de quem se interessou. E o ingresso? Continua seu. Seja entrada física, lista VIP grátis ou o link que você colar. Nós trazemos o público, você dita as regras.',
        block1Title: 'Fure a bolha: Alcance quem ainda não te conhece.',
        block1Text: 'Seu evento direto na tela de quem busca o que fazer hoje.',
        block1Text2: 'Match Perfeito: Cadastre a noite no painel e o app mostra sua festa para quem está perto e curte o seu estilo.',
        block1Text3: 'Além do WhatsApp: O seu grupo fala com os clientes antigos. Nós colocamos o seu samba, a sua sexta e o seu bairro na frente de clientes novos.',
        block2Title: 'O Painel da sua festa — sem assumir a bilheteria.',
        block2Text: 'Monte a página do evento, cole o seu link e acompanhe os números reais da sua noite.',
        block2Text2: 'Do seu jeito: Suba fotos, atrações e defina o formato (link de vendas, grátis ou entrada na porta).',
        block2Text3: 'Métricas claras: Acompanhe o número de interessados e de cupons gerados.',
        block2Text4: 'Transparência total: Jogamos limpo, nós mostramos o clique e o tráfego que enviamos para você; a conversão e a venda final acontecem na sua plataforma.',
        block3Title: 'Promoções sem complicação na porta ou no balcão.',
        block3Text: 'Atraia clientes com cupons fáceis de usar e gerenciar. Sem QR Code, sem fila travada.',
        block3Text2: 'Criação no Painel: Você define o desconto e a validade.',
        block3Text3: 'Resgate Simples: O cliente copia o código gerado no app.',
        block3Text4: 'Validação Rápida: O seu caixa confirma o código no nosso painel.',
        block3Text5: 'Dados Transparentes: Saiba quantos copiaram e quantos compraram. A ferramenta é nossa, o investimento no desconto é seu.',
        block4Title: 'O seu território em um único mapa.',
        block4Text: 'Veja exatamente onde as suas produções estão acontecendo no painel.',
        block4Text2: 'Visão Global: A localização exata de todas as suas publicações ativas.',
        block4Text3: 'Filtros Inteligentes: Busque rapidamente por estado, cidade ou status do evento.',
        block4Text4: 'Foco Total: Apenas os seus eventos na tela. Os cupons do comércio ficam em outra área para não poluir a sua visão.',
        block5Title: 'Do interesse até o caixa.',
        block5Text: 'Quatro números no painel. Clicar em Comprar não é venda — o ingresso continua no site deles, ou na porta.',
        funnelLabel: 'Passos: interessados, clique em Comprar, código copiado, resgate no caixa',
        funnel1: 'Interessados',
        funnel2: 'Clique em Comprar',
        funnel3: 'Código copiado',
        funnel4: 'Resgate no caixa',
        block6Title: 'Crie a divulgação perfeita com a ajuda do app.',
        block6Text: 'Dados reais e Inteligência Artificial trabalhando para a sua noite.',
        insight1: 'Sinais da Cidade: O painel indica o melhor dia, horário e época do mês para o seu evento.',
        insight2: 'Clima da Noite: Ajuste o tom da festa com base no que o público da região está buscando.',
        insight3: 'Copiloto de Texto: A IA integrada cria ou revisa a sua divulgação para garantir o impacto certo.',
        insight4: 'Controle Total: O sistema sugere e orienta, mas quem aprova e aperta o botão de publicar é você.',
        screenAlt1: 'Detalhe do evento no painel do organizador',
        screenAlt2: 'Aba de ingressos com lotes e venda externa',
        screenAlt3: 'Catálogo de cupons do organizador',
        screenAlt4: 'Mapa com eventos no painel',
        screenAlt5: 'Painel comercial com interesse, clique, código e resgate no caixa'
      },
      partner: {
        title: 'Mais clientes no balcão. Zero dor de cabeça.',
        lead: 'Traga o público da festa ao lado direto para o seu estabelecimento.',
        benefit1: 'Visibilidade Direcionada: Você paga para o cupom aparecer para quem está perto e no clima certo para consumir.',
        benefit2: 'Venda Real: O clique é no app, mas o resgate e o dinheiro entram no seu caixa.',
        benefit3: 'Validação Simples: O cliente mostra o código, sua equipe valida em segundos.',
        benefit4: 'Foco no seu Negócio: Sem montar palco e sem cadastrar evento. Você foca na sua loja, nós focamos em levar o público.',
        blockTitle: 'Seu comércio no show do lado.',
        blockText: 'Mais clientes no seu balcão com cupons inteligentes e sem burocracia.',
        blockText2: 'Conexão Inteligente: O cupom aparece para o público do evento vizinho, filtrado por proximidade e pela "vibe" da noite.',
        blockText3: 'Validação Descomplicada: O cliente copia o código no app e o seu caixa confirma no painel. Sem leitor de QR Code para não travar a fila.',
        blockText4: 'Regras Claras: A promoção é por sua conta e o dinheiro fica todo com você. Nós garantimos o tráfego de pessoas, mas o MyWeek não faz reservas e não garante mesa.',
        verticalsTitle: 'O que entra no app',
        verticalsLead: 'A gente junta quem está perto do evento com o tipo de comércio que combina com a noite.',
        v1: 'Restaurante',
        v2: 'Bar',
        v3: 'Beleza',
        v4: 'Moda',
        v5: 'Transporte',
        v6: 'Hospedagem',
        v7: 'Estacionamento',
        v8: 'Bem-estar',
        cta: 'Pedir proposta da cidade',
        screenAlt: 'Mapa do parceiro com cobertura e eventos próximos'
      },
      canal3: {
        eyebrow: 'O Começo: Risco zero para a sua bilheteria.',
        title: 'Os eventos da cidade ganham destaque no nosso app. A conversão continua, exclusivamente, no site de vocês.',
        text: 'A nossa proposta é começar com um piloto em apenas uma cidade. Os eventos entram no app e nós enviamos o tráfego, entregando relatórios transparentes de cliques. Se houver movimento e resultado real, nós avançamos. Discussões sobre porcentagem por venda ou comissão ficam para um segundo momento.',
        note: 'Jogamos limpo: sabemos que clicar não é ter comprado. E acima de tudo, respeitamos o seu negócio: não colocamos a sua marca no nosso app sem alinhamento prévio. O cadastro e a integração são feitos a quatro mãos, nunca de forma unilateral.',
        cta: 'Conversar sobre o começo'
      },
      transition: {
        text: 'Do painel de quem faz o evento para o celular de quem vai sair.'
      },
      b2c: {
        lead: 'Monte a semana do seu jeito.',
        lead2: 'Escolha lugar, data e estilos. Marque Quero ir, veja se é porta, grátis ou o link da bilheteria, copie o cupom e abra a rota.'
      },
      features: {
        timingTitle: 'O rolê certo, no dia certo e no lugar certo.',
        timingText: 'Veja o que está acontecendo perto de você. Filtre por lugar e data. Você no comando da sua agenda.',
        interestsTitle: 'Um feed feito para o seu gosto.',
        interestsText: 'Menos barulho, mais o que combina com você. Marque seus estilos e o app mostra só o que faz sentido.',
        directionsTitle: 'A rota até o local, em um toque.',
        directionsText: 'Na hora de sair, tem que ser simples.',
        directionsText2: 'Veja a distância e toque em Como chegar para abrir no Google Maps ou no Waze. Você sai de casa com a rota pronta.',
        ticketsTitle: 'Ingressos e Entradas',
        ticketsText: 'O MyWeek conecta você aos melhores eventos, mas não vende ingressos.',
        ticketsText2: 'Entrada clara: Avisamos se o evento é gratuito, pago na porta ou antecipado.',
        ticketsText3: 'Link Oficial: O botão "Comprar" abre o site da bilheteria oficial do evento.',
        ticketsText4: 'Atenção: Apenas clicar não reserva o seu ingresso. Finalize a compra no site para garantir o seu lugar.',
        benefitsTitle: 'Como usar seus cupons',
        benefitsText: 'Seja um desconto do próprio evento ou do comércio vizinho, usar é muito fácil:',
        benefitsText2: 'Copie o código: Pegue o código direto no app.',
        benefitsText3: 'Apresente no caixa: Na hora de pagar, informe o código ao atendente.',
        benefitsText4: 'Pronto: Não tem QR Code para escanear e você não precisa apertar nenhum botão de "resgatar" no celular. O próprio caixa valida no sistema e o desconto entra na sua conta, na hora.',
        conciergeTitle: 'Pede o rolê do jeito que você fala.',
        conciergeText: 'Fim de semana, a dois, perto, com desconto — o Concierge monta a lista do que está rolando na cidade. No Basic são 3 conversas; no Premium, ilimitado.',
        conciergeChipsLabel: 'Exemplos de pedido ao Concierge',
        conciergeChip1: 'Fim de semana',
        conciergeChip2: 'A dois',
        conciergeChip3: 'Perto',
        conciergeChip4: 'Com desconto',
        screenAltTiming: 'Filtros de lugar e data no feed',
        screenAltTimingFeed: 'Filtros de lugar e data no feed',
        screenAltTimingLocation: 'Filtro de lugar com GPS e distância',
        screenAltTimingPeriod: 'Filtro de data no feed',
        screenAltInterests: 'Preferências de categorias no perfil',
        screenAltDirections: 'Como chegar ao local do evento no app',
        screenAltDirectionsApp: 'Como chegar ao local do evento no app',
        screenAltDirectionsMaps: 'Rota no Google Maps ou Waze até o local do evento',
        screenAltTickets: 'Tela de ingressos e entradas no app',
        screenAltBenefits: 'Cupom de desconto no app'
      },
      carousel: {
        prev: 'Anterior',
        next: 'Próximo',
        timingLabel: 'Telas de filtro por lugar e data',
        directionsLabel: 'Como chegar no app e rota até o local'
      },
      download: {
        title: 'Leve a agenda da cidade no bolso.',
        desc: 'Descubra o rolê e fuja do óbvio.',
        appStore: 'App Store',
        googlePlay: 'Google Play',
        comingSoon: 'Em breve'
      },
      pricing: {
        title: 'Planos e Preços',
        basicTitle: 'Plano Basic',
        basicPrice: 'Grátis',
        basicFeature1: 'Feed de eventos, perfil e notificações',
        basicFeature2: '3 conversas no Concierge',
        basicFeature3: 'Localização por GPS',
        basicFeature4: 'Período de 15 dias',
        basicCta: 'Começar Agora',
        premiumTitle: 'Plano Premium',
        premiumPrice: 'R$ 29,90 / mês',
        premiumFeature1: 'Concierge ilimitado',
        premiumFeature2: 'Filtro por cidade',
        premiumFeature3: '30 dias e datas',
        premiumFeature4: 'Clima do rolê',
        premiumFeature5: 'Visualize quem vai no evento',
        premiumCta: 'Ser Premium Agora',
        b2bEyebrow: 'Para Negócios: Como cobramos',
        b2bTitle: 'Visibilidade inteligente, sem morder o seu ingresso.',
        b2bText: 'A nossa regra de ouro é clara: zero porcentagem sobre a sua bilheteria. Nós não vendemos ingressos no MyWeek. Você investe exclusivamente para destacar o seu evento ou o seu comércio para o público certo. Como entendemos que cada mercado é único, não trabalhamos com preços engessados no site; a proposta é sempre desenhada para a realidade da sua cidade.',
        b2bChoose: 'Escolha o formato que faz sentido para a sua operação:',
        b2bMonthly: 'Plano Mensal',
        b2bMonthlyDesc: 'Assinatura ideal para comércios locais ou casas noturnas com agenda frequente.',
        b2bPerEvent: 'Por Evento',
        b2bPerEventDesc: 'Pagamento pontual e focado para destacar uma produção específica.',
        b2bProposal: 'Proposta da Cidade',
        b2bProposalDesc: 'Para grandes bilheterias e expansão, começamos com um piloto local e construímos o modelo de negócios lado a lado com você.',
        b2bCta: 'Pedir proposta da cidade'
      },
      about: {
        title: 'O ponto de encontro entre o evento e a cidade.',
        intro: 'Esqueça as plataformas de ingresso tradicionais. Não somos uma tiqueteira, nem apenas um catálogo de descontos.',
        intro2: 'O MyWeek fica exatamente no meio: nós mostramos o que está acontecendo e conectamos o público ao comércio da rua. O evento pequeno usa a plataforma para ser visto. O comércio vizinho ganha movimento real com cupons. E o show grande? O público descobre no app e é direcionado para comprar na bilheteria oficial deles.',
        intro3: 'Nós montamos a agenda de quem vive a noite. Quem faz o evento e quem atende o público ganha o movimento — e nós fazemos a cidade girar sem nunca virar o caixa da sua entrada.',
        differential: 'A cidade inteira na mesma tela.',
        differential2: 'O rolê e o comércio vizinho conectados de forma inteligente.',
        diff1Label: 'A Descoberta:',
        diff1Text: 'Ache o evento e o desconto do entorno no mesmo lugar.',
        diff2Label: 'O Redirecionamento:',
        diff2Text: 'Para grandes shows, a gente aponta direto para a bilheteria oficial deles.',
        diff3Label: 'A Independência:',
        diff3Text: 'Sem intermediários. O controle e o lucro da porta continuam de quem produz a festa.',
        pillar1Title: 'Perto de você',
        pillar1Text: 'O rolê certo na sua região.',
        pillar2Title: 'Agenda do seu jeito',
        pillar2Text: 'Você escolhe estilo, dia e lugar.',
        pillar3Title: 'Todo mundo no seu papel',
        pillar3Text: 'Quem faz, quem vende do lado e quem sai.',
        ctaSubtitle: 'Pronto para achar o próximo rolê ou colocar seu evento na frente de quem está na cidade?'
      },
      commercial: {
        title: 'Fale com a gente',
        lead: 'Peça a proposta da sua cidade.',
        lead2: 'Diga se você faz o evento, tem um comércio perto ou é a bilheteria. A gente volta com o modelo — mensal ou por evento.'
      },
      form: {
        canalLabel: 'O que você faz',
        canalOrganizer: 'Organizador — evento',
        canalPartner: 'Parceiro — comércio perto',
        canalBoth: 'Os dois',
        canalPlatform: 'Bilheteria',
        cityLabel: 'Cidade',
        companyLabel: 'Nome da Empresa',
        emailLabel: 'E-mail',
        phoneLabel: 'Celular (obrigatório para WhatsApp ou ligação)',
        messageLabel: 'Mensagem (opcional)',
        submit: 'Enviar',
        sending: 'Enviando…',
        errorCanal: 'Selecione o que você faz (organizador, comércio perto, os dois ou bilheteria).',
        errorCity: 'Informe a cidade.',
        errorCompany: 'Informe o nome da empresa.',
        errorEmail: 'Informe o e-mail.',
        errorEmailInvalid: 'Informe um e-mail válido (ex.: nome@dominio.com).',
        errorPhone: 'Informe o celular para contato por WhatsApp ou ligação (10 ou 11 dígitos).',
        successTitle: 'Recebemos. Vamos falar da sua cidade.',
        successText: 'Nossa equipe entra em contato em até 24 horas.',
        successHighlight: 'Prepare-se para aparecer na frente de quem já está saindo.',
        successCta: 'Falar agora no WhatsApp',
        sendError: 'Não foi possível enviar. Tente novamente ou fale com a gente por outro caminho.',
        honeypotLabel: 'Não preencha este campo'
      },
      feedbacks: {
        title: 'O que a MyWeek entrega'
      },
      footer: {
        copy: '© 2026 MyWeek',
        credit: 'Desenvolvido por Aeon SoftHouse'
      },
      feedbacksList: [
        { quote: 'Filtro por lugar e data e acho a noite certa perto de mim — sem ficar rolando feed genérico.', author: 'Público no app', role: 'Cenário' },
        { quote: 'Marquei os estilos uma vez e o feed ficou do meu gosto. Sem o óbvio da cidade.', author: 'Público no app', role: 'Cenário' },
        { quote: 'Quero ir + Como chegar no mesmo app. No dia do evento é abrir a rota e ir.', author: 'Público no app', role: 'Cenário' },
        { quote: 'Vejo porta, grátis ou o link da bilheteria. Comprar abre o site deles — a MyWeek não é o caixa.', author: 'Público no app', role: 'Cenário' },
        { quote: 'Pedi fim de semana a dois, perto, com desconto. O Concierge montou a noite — sem eu ficar rolando o feed.', author: 'Público no app', role: 'Cenário' },
        { quote: 'No painel: quem se interessou, quem clicou em Comprar, quem copiou o código e quem passou no caixa. Clicar não é ter vendido.', author: 'Organizador', role: 'Cenário' },
        { quote: 'O cupom aparece para quem está no show do lado. A pessoa copia o código no app; o caixa confirma no painel.', author: 'Comércio perto', role: 'Cenário' }
      ]
    },
    en: {
      pageTitle: 'MyWeek | Your city’s cultural radar',
      pageDescription: 'MyWeek shows what’s happening in your city. Small events get seen. Shops next door get a coupon. Big shows point to their ticketing.',
      ogDescription: 'The meeting point between the event and the city. We’re not a ticket seller, nor just a discount catalog.',
      hero: {
        eyebrow: '',
        brand: 'MyWeek',
        title: 'The app that connects the city',
        subtitle: 'We’re not just a sales middleman, and we’re not just a coupon catalog. In our app, people find what to do and the city’s events start moving: the small event gets seen, the neighboring shop profits from people passing by, and the big show gets traffic straight to the official site. We’re your city’s cultural radar.',
        ctaPrimary: 'Register my city',
        ctaSecondary: 'See who it’s for',
        stackLabel: 'My Week app and organizer web dashboard',
        deviceAlt: 'My Week app feed with events near you',
        logoAlt: 'My Week coupon and logo in the app',
        dashAlt: 'My Week organizer commercial dashboard',
        scrollLabel: 'Scroll to see more'
      },
      countdown: {
        eyebrow: 'Planned launch',
        headline: 'Early February 2027',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
        gridLabel: 'Countdown to the MyWeek launch',
        footer: 'An estimate. Register your city to be in from the start.',
        cta: 'Register my city',
        ended: 'MyWeek is live. Get started!'
      },
      nav: {
        close: 'Close menu',
        businesses: 'For business',
        producers: 'For business',
        features: 'App',
        app: 'App',
        pricing: 'Plans',
        about: 'About',
        contact: 'Contact',
        login: 'Login',
        open: 'Open menu',
        langLabel: 'Select language',
        mainLabel: 'Main navigation',
        loginAria: 'Go to MyWeek login'
      },
      channels: {
        title: 'Who is MyWeek for?',
        lead: 'We’re the showcase, not the box office. We connect what’s on today with people already in the city, and we bring the right setup for each partner:',
        pitch: '',
        organizerEyebrow: 'Organizer',
        organizerTitle: 'Made for your event',
        organizerText: 'We know anyone producing smaller formats wants one thing: to be found by the right crowd.',
        organizerText2: 'With MyWeek, your show or live bar night lands on the screen of people who want to go out today. We stay out of your operation: charge at the door, go free, or use your own sales link. Our job is to bring people to you.',
        organizerCta: 'See the dashboard',
        partnerEyebrow: 'Partner',
        partnerTitle: 'Move your business',
        partnerText: 'You know that crowd going to the show on your street? They can end the night spending with you.',
        partnerText2: 'With MyWeek, you create exclusive discount coupons for people heading to nearby events. We connect the hunger, thirst, or need (like parking) of people already out with your business.',
        partnerCta: 'See the coupons',
        platformEyebrow: 'Ticketing',
        platformTitle: 'Amplify your event’s reach',
        platformText: 'For shows and large productions, MyWeek is the city’s main discovery channel.',
        platformText2: 'We don’t compete with your ticketing. Our job is to put your show in front of the right audience and send them quickly and safely to your official site. You get maximum visibility in the city without changing your sales operation at all.',
        platformCta: 'Talk about getting started'
      },
      b2b: {
        title: 'Control of your night comes back to you.',
        lead: 'In our model, you pay for visibility in the app, not for your success. We charge for the event to show up, but whoever arrives at the door is yours.',
        lead2: 'We give you a full dashboard to list the night, create your own coupons, and see metrics on who was interested. And the ticket? It stays yours. Physical entry, a free VIP list, or the link you paste. We bring the crowd, you set the rules.',
        block1Title: 'Burst the bubble: Reach people who don’t know you yet.',
        block1Text: 'Your event on the screen of people looking for what to do today.',
        block1Text2: 'Perfect match: List the night on the dashboard and the app shows your party to people nearby who like your style.',
        block1Text3: 'Beyond WhatsApp: Your group talks to old customers. We put your samba, your Friday, and your neighborhood in front of new ones.',
        block2Title: 'The dashboard of your party — without taking over ticketing.',
        block2Text: 'Build the event page, paste your link, and follow the real numbers of your night.',
        block2Text2: 'Your way: Upload photos, lineup, and set the format (sales link, free, or door).',
        block2Text3: 'Clear metrics: Track how many people were interested and how many coupons were created.',
        block2Text4: 'Full transparency: We play it straight. We show the clicks and traffic we send you; conversion and the final sale happen on your platform.',
        block3Title: 'Promotions without hassle at the door or the counter.',
        block3Text: 'Attract customers with coupons that are easy to use and manage. No QR Code, no stuck queue.',
        block3Text2: 'Create on the Dashboard: You set the discount and the validity.',
        block3Text3: 'Simple redemption: The customer copies the generated code in the app.',
        block3Text4: 'Fast validation: Your cashier confirms the code on our panel.',
        block3Text5: 'Transparent data: Know how many copied and how many bought. The tool is ours; the discount investment is yours.',
        block4Title: 'Your territory on a single map.',
        block4Text: 'See exactly where your productions are happening on the dashboard.',
        block4Text2: 'Global View: The exact location of all your active publications.',
        block4Text3: 'Smart Filters: Quickly search by state, city, or event status.',
        block4Text4: 'Total Focus: Only your events on screen. Shop coupons stay in another area so they don’t clutter your view.',
        block5Title: 'From interest to the counter.',
        block5Text: 'Four numbers on the dashboard. A Buy click is not a sale — the ticket stays on their site, or at the door.',
        funnelLabel: 'Steps: interested, Buy click, code copied, redeemed at the counter',
        funnel1: 'Interested',
        funnel2: 'Buy click',
        funnel3: 'Code copied',
        funnel4: 'Redeemed at the counter',
        block6Title: 'Create the perfect promo with help from the app.',
        block6Text: 'Real data and Artificial Intelligence working for your night.',
        insight1: 'City Signals: The dashboard shows the best day, time, and period of the month for your event.',
        insight2: 'Night Vibe: Tune the feel of the party based on what the local audience is looking for.',
        insight3: 'Copy Copilot: Built-in AI creates or revises your promo to hit the right impact.',
        insight4: 'Full Control: The system suggests and guides, but you approve and hit publish.',
        screenAlt1: 'Event detail in the organizer panel',
        screenAlt2: 'Tickets tab with batches and external ticketing',
        screenAlt3: 'Organizer coupon catalog',
        screenAlt4: 'Map with events on the dashboard',
        screenAlt5: 'Commercial panel with interest, click, code, and redemption at the counter'
      },
      partner: {
        title: 'More customers at the counter. Zero hassle.',
        lead: 'Bring the crowd from the party next door straight to your business.',
        benefit1: 'Targeted Visibility: You pay for the coupon to show up for people nearby and in the right mood to spend.',
        benefit2: 'Real Sales: The tap is in the app, but the redemption and the money land at your counter.',
        benefit3: 'Simple Validation: The customer shows the code, your team validates it in seconds.',
        benefit4: 'Focus on Your Business: No stage to build and no events to list. You focus on your shop, we focus on bringing the crowd.',
        blockTitle: 'Your business at the show next door.',
        blockText: 'More customers at your counter with smart coupons and no red tape.',
        blockText2: 'Smart Connection: The coupon shows up for the neighboring event’s crowd, filtered by proximity and the night’s vibe.',
        blockText3: 'Hassle-free Validation: The customer copies the code in the app and your counter confirms it on the panel. No QR reader, so the line doesn’t stall.',
        blockText4: 'Clear Rules: The promo is on you and the money stays yours. We bring the foot traffic, but MyWeek doesn’t take reservations or guarantee a table.',
        verticalsTitle: 'What goes in the app',
        verticalsLead: 'We match people near the event with the kind of business that fits the night.',
        v1: 'Restaurant',
        v2: 'Bar',
        v3: 'Beauty',
        v4: 'Fashion',
        v5: 'Transport',
        v6: 'Hospitality',
        v7: 'Parking',
        v8: 'Wellness',
        cta: 'Ask for a city proposal',
        screenAlt: 'Partner map with coverage and nearby events'
      },
      canal3: {
        eyebrow: 'Getting started',
        title: 'The city’s events in the app. The purchase stays on your site.',
        text: 'We start in one city: events go into the app; you get click reports; we keep going if there’s traffic. A cut on sales comes later.',
        note: 'A click is not a purchase. We don’t put your brand in the app without an agreement. Listing is done together, not on your own.',
        cta: 'Talk about getting started'
      },
      transition: {
        text: 'From the event maker’s dashboard to the phone of someone heading out.'
      },
      b2c: {
        lead: 'Plan your week your way.',
        lead2: 'Pick place, date, and styles. Tap Going, see if it’s door, free, or the ticketing link, copy the coupon, and open the route.'
      },
      features: {
        timingTitle: 'The right night out — on the right day, in the right place.',
        timingText: 'See what’s happening near you. Filter by place and date. You’re in control of your agenda.',
        interestsTitle: 'A feed made for your taste.',
        interestsText: 'Less noise, more of what fits you. Mark your styles and the app shows only what makes sense.',
        directionsTitle: 'The route to the place — in one tap.',
        directionsText: 'When it’s time to head out, it has to be simple.',
        directionsText2: 'See the distance and tap Get directions to open Google Maps or Waze. You leave home with the route ready.',
        ticketsTitle: 'Tickets and entry',
        ticketsText: 'MyWeek connects you to the best events, but doesn’t sell tickets.',
        ticketsText2: 'Clear entry: We tell you if the event is free, pay-at-the-door, or advance purchase.',
        ticketsText3: 'Official link: The “Buy” button opens the event’s official ticketing site.',
        ticketsText4: 'Note: A click alone doesn’t reserve your ticket. Complete the purchase on the site to secure your spot.',
        benefitsTitle: 'How to use your coupons',
        benefitsText: 'Whether it’s a discount from the event itself or a nearby shop, using it is easy:',
        benefitsText2: 'Copy the code: Grab the code right in the app.',
        benefitsText3: 'Show it at the counter: When you pay, tell the attendant the code.',
        benefitsText4: 'That’s it: No QR Code to scan and no “redeem” button on your phone. The counter validates it in the system and the discount applies to your bill right away.',
        conciergeTitle: 'Ask for the night out the way you talk.',
        conciergeText: 'Weekend, for two, nearby, with a discount — Concierge builds a list of what’s on in the city. Basic gets 3 conversations; Premium is unlimited.',
        conciergeChipsLabel: 'Sample Concierge requests',
        conciergeChip1: 'Weekend',
        conciergeChip2: 'For two',
        conciergeChip3: 'Nearby',
        conciergeChip4: 'With a discount',
        screenAltTiming: 'Place and date filters on the feed',
        screenAltTimingFeed: 'Place and date filters on the feed',
        screenAltTimingLocation: 'Place filter with GPS and distance',
        screenAltTimingPeriod: 'Date filter on the feed',
        screenAltInterests: 'Category preferences in the profile',
        screenAltDirections: 'Get directions to the event in the app',
        screenAltDirectionsApp: 'Get directions to the event in the app',
        screenAltDirectionsMaps: 'Google Maps or Waze route to the event place',
        screenAltTickets: 'Tickets and entry screen in the app',
        screenAltBenefits: 'Discount coupon in the app'
      },
      carousel: {
        prev: 'Previous',
        next: 'Next',
        timingLabel: 'Place and date filter screens',
        directionsLabel: 'In-app directions and route to the place'
      },
      download: {
        title: 'Take the city agenda in your pocket.',
        desc: 'Find the night out and skip the obvious.',
        appStore: 'App Store',
        googlePlay: 'Google Play',
        comingSoon: 'Coming soon'
      },
      pricing: {
        title: 'Plans & Pricing',
        basicTitle: 'Basic Plan',
        basicPrice: 'Free',
        basicFeature1: 'Event feed, profile, and notifications',
        basicFeature2: '3 Concierge conversations',
        basicFeature3: 'GPS location',
        basicFeature4: '15-day date range',
        basicCta: 'Get Started',
        premiumTitle: 'Premium Plan',
        premiumPrice: 'R$ 29.90 / month',
        premiumFeature1: 'Unlimited Concierge',
        premiumFeature2: 'Filter by city',
        premiumFeature3: '30 days and dates',
        premiumFeature4: 'Night-out weather',
        premiumFeature5: 'See who’s going to the event',
        premiumCta: 'Go Premium Now',
        b2bEyebrow: 'For Business: How we charge',
        b2bTitle: 'Smart visibility, without biting into your ticket sales.',
        b2bText: 'Our golden rule is clear: zero percentage on your box office. We don’t sell tickets on MyWeek. You invest only to highlight your event or business to the right audience. Because every market is unique, we don’t lock prices on the site; the proposal is always shaped around your city’s reality.',
        b2bChoose: 'Choose the format that fits your operation:',
        b2bMonthly: 'Monthly Plan',
        b2bMonthlyDesc: 'Ideal subscription for local businesses or venues with a frequent calendar.',
        b2bPerEvent: 'Per Event',
        b2bPerEventDesc: 'One-off, focused payment to spotlight a specific production.',
        b2bProposal: 'City Proposal',
        b2bProposalDesc: 'For large ticketing and expansion, we start with a local pilot and build the business model side by side with you.',
        b2bCta: 'Ask for a city proposal'
      },
      about: {
        title: 'The meeting point between the event and the city.',
        intro: 'Forget traditional ticketing platforms. We’re not a ticket seller, nor just a discount catalog.',
        intro2: 'MyWeek sits right in the middle: we show what’s happening and connect the audience to the street around it. Small events use the platform to get seen. Nearby shops get real traffic with coupons. And the big show? People discover it in the app and are sent to buy on their official ticketing.',
        intro3: 'We build the agenda for people who live the night. Event makers and those who serve the crowd get the traffic — and we keep the city moving without ever becoming the cash register at your door.',
        differential: 'The whole city on one screen.',
        differential2: 'The night out and nearby shops, connected intelligently.',
        diff1Label: 'Discovery:',
        diff1Text: 'Find the event and the nearby discount in the same place.',
        diff2Label: 'Redirect:',
        diff2Text: 'For big shows, we point straight to their official ticketing.',
        diff3Label: 'Independence:',
        diff3Text: 'No middlemen. Control and door profits stay with whoever produces the party.',
        pillar1Title: 'Near you',
        pillar1Text: 'The right night out in your area.',
        pillar2Title: 'Your kind of agenda',
        pillar2Text: 'You pick style, day, and place.',
        pillar3Title: 'Everyone in their role',
        pillar3Text: 'Who throws it, who sells next door, and who goes out.',
        ctaSubtitle: 'Ready to find the next night out or put your event in front of people already in the city?'
      },
      commercial: {
        title: 'Talk to us',
        lead: 'Ask for a proposal for your city.',
        lead2: 'Tell us if you throw the event, have a shop nearby, or are the box office. We’ll come back with the model — monthly or per event.'
      },
      form: {
        canalLabel: 'What you do',
        canalOrganizer: 'Organizer — event',
        canalPartner: 'Partner — shop nearby',
        canalBoth: 'Both',
        canalPlatform: 'Ticketing',
        cityLabel: 'City',
        companyLabel: 'Company Name',
        emailLabel: 'Email',
        phoneLabel: 'Mobile phone (required for WhatsApp or call)',
        messageLabel: 'Message (optional)',
        submit: 'Submit',
        sending: 'Sending…',
        errorCanal: 'Select what you do (organizer, shop nearby, both, or ticketing).',
        errorCity: 'Please enter your city.',
        errorCompany: 'Please enter the company name.',
        errorEmail: 'Please enter your email.',
        errorEmailInvalid: 'Please enter a valid email (e.g., name@domain.com).',
        errorPhone: 'Please enter your phone number for WhatsApp or call (10 or 11 digits).',
        successTitle: 'Got it. We’ll talk about your city.',
        successText: 'Our team will get back to you within 24 hours.',
        successHighlight: 'Get ready to show up in front of people already heading out.',
        successCta: 'Chat on WhatsApp now',
        sendError: 'Unable to send. Please try again or reach us another way.',
        honeypotLabel: 'Do not fill in this field.'
      },
      feedbacks: {
        title: 'What MyWeek delivers'
      },
      footer: {
        copy: '© 2026 MyWeek',
        credit: 'Developed by Aeon SoftHouse'
      },
      feedbacksList: [
        { quote: 'Filter by place and date and find the right night nearby — without scrolling a generic feed.', author: 'App audience', role: 'Scenario' },
        { quote: 'I marked my styles once and the feed matched my taste. Not the city’s obvious picks.', author: 'App audience', role: 'Scenario' },
        { quote: 'Going + Get directions in the same app. On event day, open the route and go.', author: 'App audience', role: 'Scenario' },
        { quote: 'See door, free, or the ticketing link. Buy opens their site — MyWeek is not the checkout.', author: 'App audience', role: 'Scenario' },
        { quote: 'I asked for a weekend for two, nearby, with a discount. Concierge built the night — no scrolling the feed.', author: 'App audience', role: 'Scenario' },
        { quote: 'On the dashboard: who was interested, who tapped Buy, who copied the code, and who cleared the counter. A click is not a sale.', author: 'Organizer', role: 'Scenario' },
        { quote: 'The coupon shows up for people at the show next door. They copy the code in the app; the counter confirms it on the panel.', author: 'Shop nearby', role: 'Scenario' }
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
