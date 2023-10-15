import './styles/style.css';
import './styles/header.css';
import './styles/home.css';
import createNavbar from './components/navbar.js';
import createHome from './components/home.js';

const header = document.querySelector('header');
const main = document.querySelector('main');

header.appendChild(createNavbar());
main.appendChild(createHome());
