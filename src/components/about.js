import techIcons from '../utils/importedTechIcons.js';
import aboutImg from '../assets/about-image.png';

export default class About {
  static createAboutSection() {
    const about = document.createElement('section');
    const imgContainer = document.createElement('div');

    about.id = 'about';
    imgContainer.className = 'img-container';

    const image = new Image();
    image.src = aboutImg;
    imgContainer.appendChild(image);

    about.appendChild(About.createDescription());
    about.appendChild(imgContainer);

    return about;
  }

  static createDescription() {
    const descriptionContainer = document.createElement('div');
    const title = document.createElement('h2');
    const description = document.createElement('p');
    const skillsTitle = document.createElement('h3');
    const skills = document.createElement('ul');
    const icons = techIcons;

    descriptionContainer.className = 'about-container';
    title.className = 'about-title';
    description.className = 'about-description';
    skillsTitle.className = 'skills-title';
    skills.className = 'skills';

    title.innerText = 'About Me';
    description.innerText = 'As a software engineer I find web development as an excellent field where I can apply my skills in designing, developing and all related to building software. I am motivated for a life long learning philosophy, making me enjoy the process of creating things for the web.';
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

    return descriptionContainer;
  }
}
