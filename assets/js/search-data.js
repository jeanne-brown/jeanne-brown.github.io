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
          description: "Publications in reversed chronological order",
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
          description: "Last updated 10 July 2025. Download PDF for full CV.",
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
        },{id: "nav-beyond-academia",
          title: "Beyond academia",
          description: "From data to downtime",
          section: "Navigation",
          handler: () => {
            window.location.href = "/beyond/";
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
          section: "News",},{id: "news-my-paper-disentangling-acoustic-and-social-biases-in-creaky-voice-perception-the-effects-of-f0-and-face-gender-on-creakiness-ratings-joint-with-meghan-clayards-was-officially-published-in-laboratory-phonology-newspaper",
          title: 'My paper, Disentangling acoustic and social biases in creaky voice perception: The effects...',
          description: "",
          section: "News",},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-perceptual-accessibility-of-laurentian-french-dialect-boundaries",
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
