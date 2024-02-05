import techIcons from '../utils/importedTechIcons.js';
import aboutImg from '../assets/about-image.png';

export default class About {
  static createAboutSection() {
    const about = document.createElement('section');
    const container = document.createElement('div');
    const imgContainer = document.createElement('div');

    about.id = 'about';
    container.className = 'about-container';
    imgContainer.className = 'img-container';

    const image = new Image();
    image.src = aboutImg;
    imgContainer.appendChild(image);

    container.appendChild(About.createDescription());
    container.appendChild(imgContainer);
    container.appendChild(About.createSkills());

    about.appendChild(container);

    return about;
  }

  static createDescription() {
    const descriptionContainer = document.createElement('div');
    const title = document.createElement('h2');
    const description = document.createElement('p');

    descriptionContainer.className = 'description-container';
    title.className = 'about-title';
    description.className = 'about-description';

    title.innerText = 'About Me';
    description.innerText = 'As a software engineer I find in web development an excellent field where I can apply my skills building software, motivated by a life long learning philosophy. I enjoy transforming ideas into code. ';

    descriptionContainer.appendChild(title);
    descriptionContainer.appendChild(description);

    return descriptionContainer;
  }

  static createSkills() {
    const skillsContainer = document.createElement('div');
    const skillsTitle = document.createElement('h3');
    const skills = document.createElement('ul');

    skillsContainer.className = 'skills-container';
    skillsTitle.innerText = 'Technologies I work with:';

    techIcons.forEach((icon) => {
      const li = document.createElement('li');
      const iconImg = new Image();
      li.className = 'skill-item';
      iconImg.src = icon;
      li.appendChild(iconImg);
      skills.appendChild(li);
    });

    skillsContainer.appendChild(skillsTitle);
    skillsContainer.appendChild(skills);

    return skillsContainer;
  }
}
