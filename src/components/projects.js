import battleshipImg from '../assets/projects/battleship.png';
import weatherImg from '../assets/projects/weather.png';
import libraryImg from '../assets/projects/library.png';

export default function createProjects() {
  const projectsSection = document.createElement('section');
  const sectionTitle = document.createElement('h2');
  const projectsContainer = document.createElement('div');
  const projects = {
    battleship: {
      title: 'Battleship',
      technologies: 'html, css, javascript, webpack',
      description: 'Enim excepteur id dolor eiusmod dolore ea pariatur ipsum duis incididunt qui.',
      repo: 'https://github.com/gedadev/battleship/',
      url: 'https://gedadev.github.io/battleship/',
      preview: battleshipImg,
    },
    weatherReport: {
      title: 'Weather Report',
      technologies: 'html, css, javascript, webpack',
      description: 'Amet excepteur eu enim consectetur excepteur tempor pariatur esse mollit laborum laborum ut sunt excepteur.',
      repo: 'https://github.com/gedadev/weatherReport',
      url: 'https://gedadev.github.io/weatherReport/',
      preview: weatherImg,
    },
    library: {
      title: 'Library',
      technologies: 'html, css, javascript',
      description: 'Laboris sunt qui deserunt quis Lorem excepteur aute nisi laborum nisi sit et deserunt.',
      repo: 'https://github.com/gedadev/libraryApp',
      url: 'https://gedadev.github.io/libraryApp/',
      preview: libraryImg,
    },
  };

  projectsSection.id = 'Projects';
  sectionTitle.className = 'project-section-title';
  projectsContainer.className = 'projects-container';

  sectionTitle.innerText = 'My recent work';

  Object.values(projects).forEach((project) => {
    const projectCard = document.createElement('div');
    const infoContainer = document.createElement('div');
    const title = document.createElement('h3');
    const technologies = document.createElement('p');
    const description = document.createElement('p');
    const repo = document.createElement('a');
    const repoBtn = document.createElement('button');
    const url = document.createElement('a');
    const urlBtn = document.createElement('button');
    const previewContainer = document.createElement('div');
    const preview = new Image();
    const infoItems = [title, technologies, description, repo, url];

    projectCard.className = 'project-card';
    infoContainer.className = 'info-container';
    title.className = 'project-title';
    technologies.className = 'technologies';
    description.className = 'project-description';
    repoBtn.className = 'project-repo';
    urlBtn.className = 'project-url';
    previewContainer.className = 'project-preview';

    title.innerText = project.title;
    technologies.innerText = project.technologies;
    description.innerText = project.description;
    repo.href = project.repo;
    repoBtn.innerHTML = 'Code <i class="fa-brands fa-github"></i>';
    repo.appendChild(repoBtn);
    url.href = project.url;
    urlBtn.innerHTML = 'Website <i class="fa-solid fa-up-right-from-square"></i>';
    url.appendChild(urlBtn);

    infoItems.forEach((item) => {
      infoContainer.appendChild(item);
    });

    preview.src = project.preview;
    previewContainer.appendChild(preview);

    projectCard.appendChild(infoContainer);
    projectCard.appendChild(previewContainer);
    projectsContainer.appendChild(projectCard);
  });

  projectsSection.appendChild(sectionTitle);
  projectsSection.appendChild(projectsContainer);
  return projectsSection;
}
