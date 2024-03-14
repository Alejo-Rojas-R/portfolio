import game from '/public/matching-game.webp';
import shopV3 from '/public/shop-v3.webp';
import evaluationProfiling from '/public/evaluation-and-profiling.webp';

export const projects = [
  {
    title: 'Matching Game',
    link: 'https://alejo-rojas-r.github.io/react-frogs-game/',
    thumbnail: game,
    description: 'Small minigame where the goal is to match the items by pressing and dragging the mouse over those that match.',
    badges: ['React.js'],
    github: 'https://github.com/Alejo-Rojas-R/react-frogs-game',
  },
  {
    title: 'E-commerce site',
    link: 'https://e-shop-arojas.netlify.app/',
    thumbnail: shopV3,
    description: 'This is a single-page application developed to serve as the front end of an online grocery store. This app is connected to a backend that I developed using Spring MVC. Users are able to use multiple actions such as authentication, search by keyword, review items, etc.',
    badges: ['React.js', 'Bootstrap', 'Spring Framework', 'MySQL'],
    github: 'https://github.com/Alejo-Rojas-R/shop-v3-fe',
  },
  {
    title: 'Bootcamp Candidates Managment',
    link: '',
    thumbnail: evaluationProfiling,
    description: 'This application was developed to systematize the process of how the HR managers categorize the candidates that enroll in Betek\'s academic courses.',
    badges: ['React.js', 'Tailwind CSS', 'Spring Framework', 'MySQL'],
    github: 'https://github.com/Alejo-Rojas-R/evaluation_and_profiling',
  },
  {
    title: '',
    link: '',
    thumbnail: '',
    description: '',
    badges: [],
    github: '',
  }
]
