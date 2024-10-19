// filepath: data/siteMetadata.js
// date: October 18, 2024
// description: Site metadata configuration for the blog.

const siteMetadata = {
  title: 'Integration Professionals Blog',
  author: 'Stephen Wise',
  headerTitle: 'Integration Professionals Blog',
  description:
    'Get expert insights on project management, AI, and business strategy. Learn how to streamline processes, drive growth, and embrace new technology trends.',
  language: 'en-us',
  theme: 'system', // system, dark, or light
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'info@inprof.com',
  github: 'https://github.com/wordopera',
  x: 'https://x.com/inprof',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  locale: 'en-US',
  stickyNav: false, // set to true if you want a navbar fixed to the top
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus', // Set the provider to the literal "giscus"
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
  twitter: 'https://twitter.com/inprof',
  instagram: 'https://instagram.com/inprof',
  threads: 'https://threads.net/inprof',
  medium: 'https://medium.com/inprof',
  siteRepo: 'https://github.com/inprof/repo',
};

export default siteMetadata;
