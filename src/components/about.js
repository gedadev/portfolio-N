import htmlIcon from '../assets/skills-icons/html-icon.png';
import cssIcon from '../assets/skills-icons/css-icon.png';
import jsIcon from '../assets/skills-icons/javascript-icon.png';
import reactIcon from '../assets/skills-icons/react-icon.png';
import nodeIcon from '../assets/skills-icons/node-icon.png';
import webpackIcon from '../assets/skills-icons/webpack-icon.png';
import jestIcon from '../assets/skills-icons/jest-icon.png';
import gitIcon from '../assets/skills-icons/git-icon.png';
import cliIcon from '../assets/skills-icons/cli-icon.png';

import aboutImg from '../assets/about-image.png';

export default function createAbout() {
  const about = document.createElement('section');
  const descriptionContainer = document.createElement('div');
  const imgContainer = document.createElement('div');
  const title = document.createElement('h2');
  const description = document.createElement('p');
  const skillsTitle = document.createElement('h3');
  const skills = document.createElement('ul');
  const icons = [htmlIcon, cssIcon, jsIcon, reactIcon,
    nodeIcon, webpackIcon, jestIcon, gitIcon, cliIcon];

  about.id = 'About';
  descriptionContainer.className = 'about-container';
  imgContainer.className = 'img-container';
  title.className = 'about-title';
  description.className = 'about-description';
  skillsTitle.className = 'skills-title';
  skills.className = 'skills';

  title.innerText = 'About Me';
  description.innerText = 'Culpa minim ex consectetur laborum velit. Amet ullamco elit dolor anim non officia aliqua laboris. Dolore fugiat mollit labore dolore esse eiusmod qui reprehenderit ullamco eu. Sint consectetur dolor cupidatat laboris exercitation dolor. Fugiat quis id nulla dolor aliquip sint est minim.';
  skillsTitle.innerText = 'Technologies I work with:';

  icons.forEach((icon) => {
    const li = document.createElement('li');
    const iconImg = new Image();
    li.className = 'skill-item';
    iconImg.src = icon;
    li.appendChild(iconImg);
    skills.appendChild(li);
  });

  descriptionContainer.appendChild(title);
  descriptionContainer.appendChild(description);
  descriptionContainer.appendChild(skillsTitle);
  descriptionContainer.appendChild(skills);

  const image = new Image();
  image.src = aboutImg;
  imgContainer.appendChild(image);

  about.appendChild(descriptionContainer);
  about.appendChild(imgContainer);

  return about;
}
