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
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Academic instruction and student support",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Last updated 30 June 2025. Download PDF for full CV.",
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
        },{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-i-am-pleased-to-announce-that-i-was-awarded-a-lsa-general-institute-fellowship-and-will-be-attending-the-lsa-summer-institute-july-august-2025",
          title: 'I am pleased to announce that I was awarded a LSA General Institute...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-an-frqsc-fonds-de-recherche-du-québec-société-et-culture-doctoral-grant-for-may-2025-to-september-2027-tada",
          title: 'I was awarded an FRQSC (Fonds de recherche du Québec – Société et...',
          description: "",
          section: "News",},{
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
