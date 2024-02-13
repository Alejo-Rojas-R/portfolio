import game from '/public/matching-game.webp';
import shopV1 from '/public/e-shop.webp';
import shopV3 from '/public/shop-v3.webp';
import shopV3api from '/public/shop-v3-api.webp';
import portfolio from '/public/portfolio.webp';

export const projects = [
  {
    title: 'Matching Game',
    link: 'https://alejo-rojas-r.github.io/react-frogs-game/',
    thumbnail: game,
    description: 'Small minigame where the goal is to match the items by pressing and dragging the mouse over those that match.',
    badges: ['React'],
    github: 'https://github.com/Alejo-Rojas-R/react-frogs-game',
  },
  {
    title: 'Portfolio',
    link: 'https://alejo-rojas-r.github.io/portfolio/',
    thumbnail: portfolio,
    description: 'Portfolio website where I showcase some of my personal projects. Developed with React and Tailwind CSS',
    badges: ['React', 'Tailwind CSS'],
    github: 'https://github.com/Alejo-Rojas-R/portfolio',
  },
  {
    title: 'E-commerce V1',
    link: 'https://e-shop-arojas.netlify.app/',
    thumbnail: shopV1,
    description: 'This website serves as an online shop that allows users to browse through multiple categories and search products by keyword. The data is being fetched from third party API.',
    badges: ['React', 'Bootstrap', 'API'],
    github: 'https://github.com/Alejo-Rojas-R/shop-v1-fe',
  },
  {
    title: 'E-commerce V2',
    link: '',
    thumbnail: shopV3,
    description: 'This is a single-page application developed to serve as the front end of an online grocery store. This app is connected to a backend that I developed using Spring MVC. Users are able to use multiple actions such as authentication, search by keyword, review items, etc.',
    badges: ['React', 'Bootstrap', 'API', 'Redux Toolkit'],
    github: 'https://github.com/Alejo-Rojas-R/shop-v3-fe',
  },
  {
    title: 'E-commerce V2 API',
    link: '',
    thumbnail: shopV3api,
    description: 'This RESTful API is developed to serve as the backend of an online shop. Developed with Spring Framework and features JWT authentication.',
    badges: ['Java', 'Spring Boot', 'Spring Security', 'API', 'MySQL', 'Postman'],
    github: 'https://github.com/Alejo-Rojas-R/shop-v3-api',
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
