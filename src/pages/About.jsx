import Carousel from "../components/Carousel.jsx";

// const slides = [
//   { src: "/assets/images/workspace.jpg", alt: "Modern tech office workspace" },
//   { src: "/assets/images/team-collaboration.jpg", alt: "Team collaboration and brainstorming" },
//   { src: "/assets/images/tech-conference.jpg", alt: "Tech conference and professional development" },
// ];

const experience = [
  {year: "MAR 2026 - MAY 2026", title: "Software Developer Intern",place: "Infologia Technologies "},
  { year: "2023 - 2025", title: "Master's in Computer Science", place: "Bharathidasan University" },
  { year: "2020 - 2023", title: "Bachelor's in Computer Science", place: "Bharathidasan University" },
];

export default function About() {
  return (
    <main className="page-main">
      <div className="page-container">
        <h1 className="page-title">About Me.</h1>

        <div className="about-grid">
          <div className="about-image-col">
            <div className="image-stack">
              <img src="/assets/images/profile.png" alt="Prabha" className="stack-img main-img" loading="lazy" />
            </div>
          </div>

          <div className="about-text-col">
            <h2 className="section-heading">My Journey</h2>
            <p className="section-text">
              I got into web development by building projects, breaking things, and figuring out how to fix them.
              During my academic projects and internship, I started working with the MERN stack and really enjoyed
              building full-stack applications. I like writing clean code, solving bugs, and learning by actually
              working on things. I'm also always curious about new tools and technologies, so I usually end up
              trying something new whenever I get the chance.
            </p>
            <p className="section-text">
              Outside of work, I enjoy
              hiking, photography, and contributing to open-source projects on GitHub.
            </p>

            <h2 className="section-heading mt-2">Experience &amp; Education</h2>
            <p className="section-text">
              I hold a Master's in Science (Computer Science) from Bharathidasan University (2025)
               with a concentration in Software Engineering. My academic and professional
              background spans frontend development, backend development, UX research, API design, and agile
              project management. I also hold the Software Developer Intern certification.
            </p>

            {/* <Carousel slides={slides} /> */}

            <div className="experience-list">
              {experience.map((item) => (
                <div className="exp-item" key={item.title}>
                  <span className="exp-year">{item.year}</span>
                  <div className="exp-details">
                    <h3>{item.title}</h3>
                    <p>{item.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
