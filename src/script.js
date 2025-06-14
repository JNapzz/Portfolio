const projectRow = document.getElementById('project-row');

  const projects = [
    {
      title: "Match-3 RPG Game",
      description: "A browser-based puzzle RPG built with vanilla JavaScript and HTML5 Canvas. Features gem-matching mechanics, turn-based combat, and dynamic scoring.",
      link: "https://jnapzz.github.io/AstralChaser/"
    },
    {
      title: "Interactive Developer Portfolio",
      description: "A responsive, dark-mode-enabled portfolio built with HTML, CSS, and JavaScript. Includes a contact form, downloadable resume, and dynamic projects.",
      link: "https://jnapzz.github.io/Portfolio/"
    }
  ];


document.addEventListener('DOMContentLoaded', () => {
  renderCertifications();
});

  const renderProjects = () => {
    const projectRow = document.getElementById('project-row');
    projectRow.innerHTML = '';
    const isDarkMode = document.body.classList.contains('dark-mode');
    const cardTheme = isDarkMode ? 'bg-dark text-white' : 'bg-white text-black';

   projects.forEach(project => {
  const col = document.createElement('div');
  col.className = 'col-md-6 col-lg-4 mb-4 d-flex align-items-stretch';
  col.innerHTML = `
    <div class="card h-100 shadow-sm ${cardTheme}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>
        <a href="${project.link}" target="_blank" class="mt-auto btn btn-primary">View Project</a>
      </div>
    </div>
  `;
  projectRow.appendChild(col);
});
  };

const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

if (projectRow) {
  renderProjects();
}

if (toggleButton && themeIcon) {
  const applyTheme = (isDark) => {
    document.body.classList.toggle('dark-mode', isDark);
    themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  };

  const savedTheme = localStorage.getItem('darkMode') === 'true';
  applyTheme(savedTheme);

  toggleButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    // Re-render projects only if on home page
    if (document.getElementById('project-row')) {
      renderProjects();
    }
     if (document.getElementById('certifications-list')) {
    renderCertifications();
  }
    themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('darkMode', isDark);
  });
}
const certifications = [
  {
    name: "Google IT Support Professional Certificate",
    icon: "fas fa-certificate text-primary", 
    description: "Credential from Google for foundational IT support skills."
  },
  {
    name: "AWS Certified Cloud Practitioner",
    icon: "fab fa-aws text-warning", 
    description: "Certification demonstrating AWS Cloud fundamentals. (In Progress)"
  },
  {
    name: "SoloLearn Java Course completion",
    icon: "fab fa-solid fa-gear text-danger",
    description: "Completed Java course on SoloLearn, covering core concepts and syntax."
  }
];

const renderCertifications = () => {
  const certList = document.getElementById('certifications-list');
  if (!certList) return;
  certList.innerHTML = '';
  certifications.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'card text-center p-3 h-100 mb-3 bg-white text-black dark-mode-bg-dark dark-mode-text-white';
    card.innerHTML = `
      <i class="${cert.icon} fa-2x mb-2"></i>
      <p class="card-text fw-bold">${cert.name}</p>
      <p class="small">${cert.description}</p>
    `;
    const li = document.createElement('li');
    li.className = 'list-group-item bg-transparent border-0 p-0';
    li.appendChild(card);
    certList.appendChild(li);
  });
};
