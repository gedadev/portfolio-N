import './styles/style.css';
import './styles/header.css';
import './styles/home.css';
import './styles/about.css';
import './styles/projects.css';
import './styles/contact.css';
import './styles/footer.css';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import About from './components/about.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';

const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

header.appendChild(Navbar.createNavbar());
main.appendChild(Home.createHomeSection());
main.appendChild(About.createAboutSection());
main.appendChild(Projects.createProjectsSection());
main.appendChild(Contact.createContactSection());
footer.appendChild(Footer.createFooter());

const navbar = new Navbar(main.childNodes);
navbar.createScrollspy();
