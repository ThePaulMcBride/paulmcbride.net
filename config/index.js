module.exports = {
  title: 'Paul McBride | Mentor, Developer and Tech Enthusiast',
  tagline: 'Mentor, Developer and Tech Enthusiast',
  siteUrl: 'https://paulmcbride.net',
  description:
    'I am Paul McBride. I help other people learn to code and I build things for the web. I currently live in Belfast, Northern Ireland.',
  url: process.env.GATSBY_SITE_UR,
  logo: `${process.env.GATSBY_SITE_URL}/logo.png`,
  image: `${process.env.GATSBY_SITE_URL}/background.jpg`,
  twitter: '@ThePaulMcBride',
  fbAppID: '128561761086914',

  tags: {
    code: {
      title: 'Code',
      description:
        'The building material of the 21st century. All articles with this tag are about code or contain code snippets.'
    },
    devops: {
      title: 'DevOps',
      description:
        'DevOps is all about getting your code up and running in production. Learn about the tools of the trade and stay up to date with industry developments.'
    },
    javascript: {
      title: 'JavaScript',
      description:
        'You can use it client side or server side, just make sure you use it. JavaScript is a modern, multiparadigm language that you need to know!'
    },
    php: {
      title: 'PHP',
      description:
        'PHP powers well over half of all websites on the internet. It also powers WordPress, one of the worlds most popular content management systems.'
    },
    screencast: {
      title: 'Screencast',
      description:
        'Screencasts are one of the best ways to learn a new skill. Check out the posts in this section for my most recent video tutorials.'
    },
    tools: {
      title: 'Tools',
      description:
        'A poor workman blames his tool. A terrible workman doesn’t use any tools. Learn about how to make your life easier when you’re writing code.'
    }
  }
};
