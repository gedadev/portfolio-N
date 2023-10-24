/* eslint-disable no-param-reassign */
export default class Home {
  static callToAction;

  static createHomeSection() {
    const home = document.createElement('section');

    home.id = 'home';
    home.appendChild(Home.createPresentation());
    home.appendChild(Home.createCTA());

    return home;
  }

  static createPresentation() {
    const container = document.createElement('div');
    const presentation = ['Hi, there. I\'m', 'Gedaias Jair', 'Frontend web developer'];

    container.className = 'presentation-container';
    presentation.forEach((element) => {
      const p = document.createElement('p');
      p.innerText = element;
      p.className = 'presentation';
      container.appendChild(p);
    });

    return container;
  }

  static createCTA() {
    const callToAction = document.createElement('div');
    const knowMe = document.createElement('p');
    const arrowContainer = document.createElement('div');

    callToAction.className = 'cta';
    knowMe.className = 'know-me';
    arrowContainer.className = 'arrow-container';
    knowMe.innerText = 'Know Me';

    callToAction.appendChild(knowMe);
    callToAction.appendChild(arrowContainer);

    for (let index = 0; index < 3; index += 1) {
      const arrow = document.createElement('span');
      arrow.className = 'arrow';
      arrowContainer.appendChild(arrow);
    }

    callToAction.addEventListener('click', () => {
      window.scrollTo(0, 0);
    });

    Home.callToAction = callToAction;
    Home.convertCTA();

    return callToAction;
  }

  static convertCTA() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > (document.documentElement.clientHeight * 0.08)) {
        Home.callToAction.children[0].innerText = 'Go to Top';
        Home.callToAction.children[0].style.color = 'var(--main-color-dark)';
        Home.callToAction.children[1].children[0].style.transform = 'translateX(2px) translateY(-10px) rotateZ(-45deg)';
        Home.callToAction.children[1].children[2].style.transform = 'translateX(9px) translateY(-10px) rotateZ(45deg)';
        Home.callToAction.children[1].childNodes.forEach((arrow) => {
          arrow.style.backgroundColor = 'var(--main-color-dark)';
        });
        Home.callToAction.style.right = '5vw';
      } else {
        Home.callToAction.children[0].innerText = 'Know Me';
        Home.callToAction.children[0].style.color = 'var(--highlight-color)';
        Home.callToAction.children[1].children[0].style.transform = 'translateX(2px) translateY(10px) rotateZ(45deg)';
        Home.callToAction.children[1].children[2].style.transform = 'translateX(9px) translateY(10px) rotateZ(-45deg)';
        Home.callToAction.children[1].childNodes.forEach((arrow) => {
          arrow.style.backgroundColor = 'var(--highlight-color)';
        });
        Home.callToAction.style.right = null;
      }
    });
  }
}
