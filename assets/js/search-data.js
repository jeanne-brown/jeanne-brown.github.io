// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications in reverse chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Research projects &amp; ongoing work",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Academic instruction and student support",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Last updated 29 October 2026. Click PDF for full CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-press",
          title: "Press",
          description: "Media coverage of my research",
          section: "Navigation",
          handler: () => {
            window.location.href = "/press/";
          },
        },{id: "nav-beyond-academia",
          title: "Beyond academia",
          description: "From data to downtime",
          section: "Navigation",
          handler: () => {
            window.location.href = "/beyond/";
          },
        },{id: "post-labphon-20-in-montreal",
        
          title: "LabPhon 20 in Montreal",
        
        description: "LabPhon20 --  a recap of organizing a milestone conference in Montreal, complete with snack tables, a poster, and a well-earned rest after",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/LabPhon20/";
          
        },
      },{id: "post-asa-in-philly",
        
          title: "ASA in Philly",
        
        description: "Invited talk at ASA 190 in Philadelphia, with media coverage and tourist things",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/ASA2026/";
          
        },
      },{id: "post-asa-asj-in-honolulu",
        
          title: "ASA/ASJ in Honolulu",
        
        description: "Attending ASA/ASJ 2025 to present my work and enjoying Honolulu",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ASA2025/";
          
        },
      },{id: "post-lsa-summer-institute-2025",
        
          title: "LSA Summer Institute 2025",
        
        description: "5 weeks of linguistics summer school in Eugene, Oregon",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/LSAsummer2025/";
          
        },
      },{id: "post-moth2025-in-toronto-and-cla-in-montreal",
        
          title: "moth2025 in Toronto and CLA in Montreal!",
        
        description: "Attending moth2025 and CLA2025 to present my creak mediation work and a bit of sight-seeing in Toronto",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/mothCLA2025/";
          
        },
      },{id: "post-labphon19-in-seoul",
        
          title: "LabPhon19 in Seoul!",
        
        description: "Attending LabPhon19 to present my work and doing tourist things in Seoul",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/LabPhon19/";
          
        },
      },{id: "post-lfdi2024-in-shippagan",
        
          title: "LFDI2024 in Shippagan!",
        
        description: "Roadtrip to Shipaggan for the 9th edition of Les francais d&#39;ici (2024)",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/LFDI2024/";
          
        },
      },{id: "post-asa2024-spring-in-ottawa",
        
          title: "ASA2024 Spring in Ottawa!",
        
        description: "Presenting at ASA2024 Spring in my hometown",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/ASA2024/";
          
        },
      },{id: "news-i-am-pleased-to-announce-that-i-was-awarded-a-lsa-general-institute-fellowship-and-will-be-attending-the-lsa-summer-institute-july-august-2025-in-eugene-oregon-mountain-bicyclist",
          title: 'I am pleased to announce that I was awarded a LSA General Institute...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-an-frqsc-fonds-de-recherche-du-québec-société-et-culture-doctoral-grant-for-may-2025-to-september-2027-tada",
          title: 'I was awarded an FRQSC (Fonds de recherche du Québec – Société et...',
          description: "",
          section: "News",},{id: "news-i-successfully-completed-my-2nd-comprehensive-evaluation-paper-and-am-officially-abd-i-have-submitted-my-manuscript-disentangling-acoustic-and-social-biases-in-creaky-voice-perception-the-effects-of-f0-and-face-gender-on-creakiness-ratings-joint-with-meghan-clayards-for-publication-and-the-preprint-is-now-available",
          title: 'I successfully completed my 2nd comprehensive evaluation paper and am officially ABD! I...',
          description: "",
          section: "News",},{id: "news-my-paper-a-sociophonetic-study-of-creaky-voice-across-language-gender-and-age-in-canadian-english-french-bilinguals-joint-with-morgan-sonderegger-was-officially-published-in-journal-of-phonetics-newspaper",
          title: 'My paper, A sociophonetic study of creaky voice across language, gender and age...',
          description: "",
          section: "News",},{id: "news-my-paper-disentangling-acoustic-and-social-biases-in-creaky-voice-perception-the-effects-of-f0-and-face-gender-on-creakiness-ratings-joint-with-meghan-clayards-is-now-out-in-laboratory-phonology-newspaper",
          title: 'My paper, Disentangling acoustic and social biases in creaky voice perception: The effects...',
          description: "",
          section: "News",},{id: "news-i-gave-my-first-invited-talk-at-the-190th-meeting-of-the-acoustical-society-of-america-in-philadelphia-presenting-my-work-on-creaky-voice-to-date-the-talk-was-covered-in-asa-s-190th-press-release-new-scientist-and-ars-technica-see-the-post-here",
          title: 'I gave my first invited talk at the 190th Meeting of the Acoustical...',
          description: "",
          section: "News",},{id: "news-i-co-organized-labphon-20-in-montreal-marking-the-conference-s-40th-anniversary-i-also-presented-a-poster-modelling-the-acoustic-structure-of-creaky-voice-mediation-and-factor-analysis",
          title: 'I co-organized LabPhon 20 in Montreal, marking the conference’s 40th anniversary! I also...',
          description: "",
          section: "News",},{id: "news-i-joint-with-morgan-sonderegger-have-submitted-a-new-paper-using-causal-mediation-analysis-to-investigate-the-role-of-f0-in-gender-variation-in-creaky-voice-acoustics-a-preprint-is-available-on-ssrn-here-https-dx-doi-org-10-2139-ssrn-7333498",
          title: 'I (joint with Morgan Sonderegger) have submitted a new paper using causal mediation...',
          description: "",
          section: "News",},{id: "news_fr-j-ai-le-plaisir-d-annoncer-que-j-ai-obtenu-un-lsa-general-institute-fellowship-et-que-je-participerai-à-l-institut-d-été-de-la-lsa-en-juillet-et-août-2025-à-eugene-en-oregon-mountain-bicyclist",
          title: 'J’ai le plaisir d’annoncer que j’ai obtenu un LSA General Institute Fellowship et...',
          description: "",
          section: "News_fr",},{id: "news_fr-j-ai-obtenu-une-bourse-de-doctorat-du-frqsc-fonds-de-recherche-du-québec-société-et-culture-pour-la-période-de-mai-2025-à-septembre-2027-tada",
          title: 'J’ai obtenu une bourse de doctorat du FRQSC (Fonds de recherche du Québec...',
          description: "",
          section: "News_fr",},{id: "news_fr-j-ai-réussi-mon-deuxième-travail-d-évaluation-globale-et-je-suis-officiellement-candidate-au-doctorat-abd-j-ai-soumis-mon-manuscrit-disentangling-acoustic-and-social-biases-in-creaky-voice-perception-the-effects-of-f0-and-face-gender-on-creakiness-ratings-en-collaboration-avec-meghan-clayards-pour-publication-et-la-prépublication-est-maintenant-disponible",
          title: 'J’ai réussi mon deuxième travail d’évaluation globale et je suis officiellement candidate au...',
          description: "",
          section: "News_fr",},{id: "news_fr-mon-article-a-sociophonetic-study-of-creaky-voice-across-language-gender-and-age-in-canadian-english-french-bilinguals-en-collaboration-avec-morgan-sonderegger-a-été-officiellement-publié-dans-le-journal-of-phonetics-newspaper",
          title: 'Mon article, A sociophonetic study of creaky voice across language, gender and age...',
          description: "",
          section: "News_fr",},{id: "news_fr-mon-article-disentangling-acoustic-and-social-biases-in-creaky-voice-perception-the-effects-of-f0-and-face-gender-on-creakiness-ratings-en-collaboration-avec-meghan-clayards-vient-de-paraître-dans-laboratory-phonology-newspaper",
          title: 'Mon article, Disentangling acoustic and social biases in creaky voice perception: The effects...',
          description: "",
          section: "News_fr",},{id: "news_fr-j-ai-donné-ma-première-conférence-invitée-à-la-190th-meeting-of-the-acoustical-society-of-america-à-philadelphie-où-j-ai-présenté-mes-travaux-sur-la-voix-craquée-à-jour-la-conférence-a-été-couverte-dans-le-communiqué-de-presse-de-l-asa-par-new-scientist-et-par-ars-technica-voir-l-article-de-blogue-ici",
          title: 'J’ai donné ma première conférence invitée à la 190th Meeting of the Acoustical...',
          description: "",
          section: "News_fr",},{id: "news_fr-j-ai-co-organisé-labphon-20-à-montréal-qui-marquait-le-40e-anniversaire-de-la-conférence-j-y-ai-aussi-présenté-une-affiche-modelling-the-acoustic-structure-of-creaky-voice-mediation-and-factor-analysis",
          title: 'J’ai co-organisé LabPhon 20 à Montréal, qui marquait le 40e anniversaire de la...',
          description: "",
          section: "News_fr",},{id: "news_fr-morgan-sonderegger-et-moi-avons-soumis-un-nouvel-article-qui-utilise-l-analyse-de-médiation-causale-pour-examiner-le-rôle-de-f0-dans-les-différences-de-genre-au-niveau-des-propriétés-acoustiques-de-la-voix-craquée-une-prépublication-est-disponible-sur-ssrn-ici",
          title: 'Morgan Sonderegger et moi avons soumis un nouvel article qui utilise l’analyse de...',
          description: "",
          section: "News_fr",},{id: "projects-perceptual-accessibility-of-laurentian-french-dialect-boundaries",
          title: 'Perceptual accessibility of Laurentian French dialect boundaries',
          description: "A perceptual dialectology study testing whether regional distinctions between Ontario and Quebec French varieties are perceptually grounded, with an exploratory acoustic analysis of the features informing listener judgements.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/FRdialect_perception/";
            },},{id: "projects-causal-structure-in-creaky-voice-acoustics-evidence-for-f0-mediation",
          title: 'Causal structure in creaky voice acoustics: Evidence for f0 mediation',
          description: "A causal mediation analysis testing whether f0 mediates relationships between social factors and creaky voice acoustics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/creak_mediation/";
            },},{id: "projects-disentangling-acoustic-and-social-biases-in-creaky-voice-perception-the-effects-of-f0-and-face-gender-on-creakiness-ratings",
          title: 'Disentangling acoustic and social biases in creaky voice perception: The effects of f0...',
          description: "A study of how creaky voice perception is shaped by speaker f0 and perceived speaker gender.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/creak_perception/";
            },},{id: "projects-a-sociophonetic-study-of-creaky-voice-across-language-gender-and-age-in-canadian-english-french-bilinguals",
          title: 'A sociophonetic study of creaky voice across language, gender and age in Canadian...',
          description: "A study of creaky voice acoustic correlates across language, gender and age.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/creak_production/";
            },},{id: "projects_fr-accessibilité-perceptuelle-des-frontières-dialectales-du-français-laurentien",
          title: 'Accessibilité perceptuelle des frontières dialectales du français laurentien',
          description: "Une étude de dialectologie perceptuelle visant à tester si les distinctions régionales entre les variétés de français ontarien et québécois sont perceptuellement fondées, avec une analyse acoustique exploratoire des traits informant les jugements des auditeurs.",
          section: "Projects_fr",handler: () => {
              window.location.href = "/fr/projects/FRdialect_perception/";
            },},{id: "projects_fr-structure-causale-dans-l-39-acoustique-de-la-voix-craquée-données-en-faveur-d-39-une-médiation-par-f0",
          title: 'Structure causale dans l&amp;#39;acoustique de la voix craquée : données en faveur d&amp;#39;une...',
          description: "Une analyse de médiation causale testant si f0 médie les relations entre les facteurs sociaux et les propriétés acoustiques de la voix craquée.",
          section: "Projects_fr",handler: () => {
              window.location.href = "/fr/projects/creak_mediation/";
            },},{id: "projects_fr-démêler-les-biais-acoustiques-et-sociaux-dans-la-perception-de-la-voix-craquée-les-effets-de-f0-et-du-genre-perçu-du-visage-sur-les-évaluations-de-voix-crquée",
          title: 'Démêler les biais acoustiques et sociaux dans la perception de la voix craquée...',
          description: "Une étude de la façon dont la perception de la voix craquée est modelé par le f0 du locuteur et le genre perçu du locuteur.",
          section: "Projects_fr",handler: () => {
              window.location.href = "/fr/projects/creak_perception/";
            },},{id: "projects_fr-une-étude-sociophonétique-de-la-voix-craquée-selon-la-langue-le-genre-et-l-39-âge-chez-les-bilingues-anglais-français-canadiens",
          title: 'Une étude sociophonétique de la voix craquée selon la langue, le genre et...',
          description: "Une étude des corrélats acoustiques de la voix craquée selon la langue, le genre et l&#39;âge.",
          section: "Projects_fr",handler: () => {
              window.location.href = "/fr/projects/creak_production/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%65%61%6E%6E%65.%62%72%6F%77%6E@%6D%61%69%6C.%6D%63%67%69%6C%6C.%63%61", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jeanne-brown", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jeanne-brown-", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0007-8280-780X", "_blank");
        },
      },{
        id: 'social-osf',
        title: 'Open Science Framework',
        section: 'Socials',
        handler: () => {
          window.open("https://osf.io/pkuzb/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
