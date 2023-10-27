import battleshipImg from '../assets/projects/battleship.png';
import weatherImg from '../assets/projects/weather.png';
import libraryImg from '../assets/projects/library.png';

const projects = {
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
  library: {
    title: 'Library',
    technologies: 'html, css, javascript',
    description: 'With this app you can keep track of your reading list, with an indicator that shows if the book is already read. You can save basic information of the book like title, author and number of pages.',
    repo: 'https://github.com/gedadev/libraryApp',
    url: 'https://gedadev.github.io/libraryApp/',
    preview: libraryImg,
  },
};

export default projects;
