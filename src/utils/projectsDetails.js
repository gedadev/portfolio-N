import battleshipImg from '../assets/projects/battleship.png';
import weatherImg from '../assets/projects/weather.png';
import cartImg from '../assets/projects/shopping-cart.png';

const projects = {
  onlineStore: {
    title: 'Online Store',
    technologies: 'html, css, react',
    description: 'An online store with a shopping cart created with react and the fakeStore API. This is the final project of the react course of The Odin Project, in which I applied several key concepts I learned in the course.',
    repo: 'https://github.com/gedadev/shopping-cart',
    url: 'https://shopping-cart-9kh.pages.dev',
    preview: cartImg,
  },
  battleship: {
    title: 'Battleship',
    technologies: 'html, css, javascript, webpack',
    description: 'The classic game Battleship, each player takes 5 ships placed randomly in the board and takes turns to perform a hit in the opponent’s board. The game finish when a player runs out of ships.',
    repo: 'https://github.com/gedadev/battleship/',
    url: 'https://gedadev.github.io/battleship/',
    preview: battleshipImg,
  },
  weatherReport: {
    title: 'Weather Report',
    technologies: 'html, css, javascript, webpack',
    description: 'This app allows you to search a city an get the details of the current weather conditions with the OpenWeather API data. If you allow the site to know your location, you can see the weather conditions in your city. It also shows the weather of the next days and the data can be displayed in metric or imperial units',
    repo: 'https://github.com/gedadev/weatherReport',
    url: 'https://gedadev.github.io/weatherReport/',
    preview: weatherImg,
  },
};

export default projects;
