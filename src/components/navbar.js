function createHamburgerMenu(navMenu, navLinks) {
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

function createNavbar() {
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
  navbar.appendChild(createHamburgerMenu(menu, navLinks));

  return navbar;
}

export default createNavbar;
