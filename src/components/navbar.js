export default function createNavbar() {
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
    navLink.href = `#${item}`;
    navLink.innerText = item;
    navItem.appendChild(navLink);
    menu.appendChild(navItem);
  });

  navbar.appendChild(branding);
  navbar.appendChild(menu);

  return navbar;
}
