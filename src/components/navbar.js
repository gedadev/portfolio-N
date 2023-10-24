/* eslint-disable no-param-reassign */
export default class Navbar {
  static navbar;

  static branding;

  static navLinks = [];

  constructor(sections) {
    this.sections = sections;
  }

  createScrollspy() {
    window.addEventListener('scroll', () => {
      let currentSection = '';
      this.sections.forEach((section) => {
        if (window.scrollY > (section.offsetTop * 0.9)
          && window.scrollY < (section.offsetTop * 1.8)) {
          currentSection = section.id;
        }
        if (window.scrollY < (this.sections[0].scrollHeight * 0.9)) {
          currentSection = this.sections[0].id;
        }
      });
      Navbar.navLinks.forEach((link) => {
        if (link.getAttribute('href').slice(1) === currentSection) {
          link.classList.add('active');
        }
        if (link.getAttribute('href').slice(1) !== currentSection) {
          link.classList.remove('active');
        }
      });
    });
  }

  static shrinkNavbar() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > (document.documentElement.clientHeight * 0.6)) {
        Navbar.navbar.style.minHeight = '6vh';
        Navbar.branding.style.fontSize = '2rem';
        Navbar.navLinks.forEach((link) => {
          link.style.fontSize = '0.8rem';
        });
      } else {
        Navbar.navbar.style.minHeight = '8vh';
        Navbar.branding.style.fontSize = '2.5rem';
        Navbar.navLinks.forEach((link) => {
          link.style.fontSize = '1rem';
        });
      }
    });
  }

  static createNavbar() {
    const navbar = document.createElement('nav');
    const branding = document.createElement('h1');
    const menu = document.createElement('ul');
    const navItems = ['Home', 'About', 'Projects', 'Contact'];

    navbar.className = 'navbar';
    branding.className = 'branding';
    branding.innerText = 'Geda';
    menu.className = 'nav-menu';

    navItems.forEach((item) => {
      const navItem = document.createElement('li');
      const navLink = document.createElement('a');
      navItem.className = 'nav-item';
      navLink.className = 'nav-link';
      navLink.href = `#${item.toLowerCase()}`;
      navLink.innerText = item;
      navItem.appendChild(navLink);
      menu.appendChild(navItem);
      Navbar.navLinks.push(navLink);
    });

    navbar.appendChild(branding);
    navbar.appendChild(menu);
    navbar.appendChild(Navbar.createHamburgerMenu(menu, Navbar.navLinks));

    Navbar.navbar = navbar;
    Navbar.branding = branding;
    Navbar.shrinkNavbar();

    return navbar;
  }

  static createHamburgerMenu(navMenu, navLinks) {
    const hamburgerMenu = document.createElement('div');
    hamburgerMenu.className = 'ham-menu';

    for (let index = 0; index < 3; index += 1) {
      const bar = document.createElement('span');
      bar.className = 'bar';
      hamburgerMenu.appendChild(bar);
    }

    hamburgerMenu.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    navLinks.forEach((item) => {
      item.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    return hamburgerMenu;
  }
}
