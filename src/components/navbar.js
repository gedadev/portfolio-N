export default class Navbar {
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

  static createNavbar() {
    const navbar = document.createElement('nav');
    const branding = document.createElement('h1');
    const menu = document.createElement('ul');
    const navItems = ['Home', 'About', 'Projects', 'Contact'];
    const navLinks = [];

    navbar.className = 'navbar';
    branding.className = 'branding';
    branding.innerText = 'Geda';
    menu.className = 'nav-menu';

    navItems.forEach((item) => {
      const navItem = document.createElement('li');
      const navLink = document.createElement('a');
      navItem.className = 'nav-item';
      navLink.className = 'nav-link';
      navLink.href = `#${item}`;
      navLink.innerText = item;
      navItem.appendChild(navLink);
      menu.appendChild(navItem);
      navLinks.push(navLink);
    });

    navbar.appendChild(branding);
    navbar.appendChild(menu);
    navbar.appendChild(Navbar.createHamburgerMenu(menu, navLinks));
    Navbar.navLinks = navLinks;

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
