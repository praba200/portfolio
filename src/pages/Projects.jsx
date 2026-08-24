const projects = [
  {
    title: "Liver Patient Analysis",
    image: "/assets/images/liver-analysis.webp",
    desc: "It uses machine learning to analyze liver patient data and predict the likelihood of liver disease. By examining clinical and demographic features, the model identifies patterns associated with liver disorders and supports early detection and informed medical decision-making.",
    tags: ["Python", "ML","Jupyter","flask"],
    link: "https://github.com/praba200/liver-patient-analysis-ml.git",
  },
  {
    title: "Task Management App",
    image: "/assets/images/project-task-app.jpg",
    desc: "Designed and built a cross-platform task management app with real-time sync, drag-and-drop Kanban boards, and team collaboration features using React Native and Firebase.",
    tags: ["React Native", "Firebase"],
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    image: "/assets/images/project-dashboard.jpg",
    desc: "Built an interactive data analytics dashboard for a SaaS product, featuring live charts, filterable KPI cards, and CSV export — reducing manual reporting time by 60%.",
    tags: ["Data Viz", "Node.js"],
    link: "#",
  },
];

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  );
}

export default function Projects() {
  return (
    <main className="page-main">
      <div className="page-container">
        <h1 className="page-title">Selected Works.</h1>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} className="project-img" loading="lazy" />
                <div className="project-overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                    <ArrowIcon />
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
