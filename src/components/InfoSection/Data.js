export const infodata = [
  {
    id: "about",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: "About Me",
    headline: "Full Stack Developer with 3+ years of experience",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    buttonLabel: "See My Work",
    primary: true,
    darkText: false,
    marquee: true,
    dark: false,
    redirect: 'portfolio',
    image: require('../../images/aboutme.svg')
  },
  {
    id: "portfolio",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: "Portfolio",
    headline: "My Projects",
    description: "",
    buttonLabel: "Get in touch",
    primary: true,
    darkText: true,
    marquee: false,
    dark: true,
    redirect: '/contactus'
  }
];