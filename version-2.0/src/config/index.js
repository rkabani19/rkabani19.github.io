module.exports = {
  siteTitle: 'Rohail Kabani | Software Engineer',
  siteDescription:
    'TBD',
  siteKeywords:
    'TBD',
  siteUrl: 'https://rohailkabani.com',
  siteLanguage: 'en_US',

  googleVerification: 'TBD',

  name: 'Rohail Kabani',
  location: 'TBD',
  email: 'rohail.kabani@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/rkabani19/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/rohailk/',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/rohail.kabani/',
    },
    {
      name: 'Email',
      url: 'mailto:rohail.kabani@gmail.com',
    },
  ],
  
  googleAnalyticsID: 'TBD',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
