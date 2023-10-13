import './styles/style.css';
import './styles/header.css';
import createNavbar from './components/navbar.js';

const header = document.querySelector('header');

header.appendChild(createNavbar());
