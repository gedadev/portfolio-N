import projects from '../utils/projectsDetails.js';

export default class Projects {
  static createProjectsSection() {
    const projectsSection = document.createElement('section');
    const sectionTitle = document.createElement('h2');
    const githubButton = document.createElement('button');
    const githubLink = document.createElement('a');

    projectsSection.id = 'projects';
    sectionTitle.className = 'project-section-title';
    sectionTitle.innerText = 'My recent projects';
    githubButton.className = 'button github-btn';
    githubButton.innerHTML = 'More on my github profile <i class="fa-brands fa-github"></i>';
    githubLink.href = 'https://github.com/gedadev';
    githubLink.appendChild(githubButton);
    githubLink.target = '_blank';

    projectsSection.appendChild(sectionTitle);
    projectsSection.appendChild(Projects.createProjectCards());
    projectsSection.appendChild(githubLink);

    return projectsSection;
  }

  static createProjectCards() {
    const projectsContainer = document.createElement('div');

    projectsContainer.className = 'projects-container';

    Object.values(projects).forEach((project) => {
      const projectCard = document.createElement('div');
      const projectInfoContainer = document.createElement('div');
      const projectPreviewContainer = document.createElement('div');
      const repoBtn = document.createElement('button');
      const urlBtn = document.createElement('button');
      const preview = new Image();
      const projectDetails = {
        title: document.createElement('h3'),
        technologies: document.createElement('p'),
        description: document.createElement('p'),
        repo: document.createElement('a'),
        url: document.createElement('a'),
      };

      projectCard.className = 'project-card';
      projectInfoContainer.className = 'info-container';
      projectDetails.title.className = 'project-title';
      projectDetails.technologies.className = 'technologies';
      projectDetails.description.className = 'project-description';
      repoBtn.className = 'project-repo';
      urlBtn.className = 'project-url';
      projectPreviewContainer.className = 'project-preview';

      projectDetails.title.innerText = project.title;
      projectDetails.technologies.innerText = `Technologies: ${project.technologies}`;
      projectDetails.description.innerText = project.description;
      projectDetails.repo.href = project.repo;
      projectDetails.repo.target = '_blank';
      repoBtn.innerHTML = 'Code <i class="fa-brands fa-github"></i>';
      projectDetails.repo.appendChild(repoBtn);
      projectDetails.url.href = project.url;
      projectDetails.url.target = '_blank';
      urlBtn.innerHTML = 'Website <i class="fa-solid fa-up-right-from-square"></i>';
      projectDetails.url.appendChild(urlBtn);

      Object.values(projectDetails).forEach((element) => {
        projectInfoContainer.appendChild(element);
      });

      preview.src = project.preview;
      projectPreviewContainer.appendChild(preview);

      projectCard.appendChild(projectInfoContainer);
      projectCard.appendChild(projectPreviewContainer);
      projectsContainer.appendChild(projectCard);
    });

    return projectsContainer;
  }
}
