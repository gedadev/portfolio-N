export default function createHome() {
  const home = document.createElement('section');
  home.id = 'Home';

  const presentation = ['Hi, there. I\'m', 'Gedaias', 'Frontend web developer'];
  const container = document.createElement('div');
  container.className = 'presentation-container';
  presentation.forEach((element) => {
    const p = document.createElement('p');
    p.innerText = element;
    p.className = 'presentation';
    container.appendChild(p);
  });

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

  home.appendChild(container);
  home.appendChild(callToAction);
  return home;
}
