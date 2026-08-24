import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-subtitle">Development | Design | Strategy</span>
          <h1 className="hero-title">Hi, I'm Prabhakaran.</h1>
          <p className="hero-desc">
            "I'm a MERN stack developer who enjoys building things from wiring up a database to making the UI
            actually feel good to use. Still learning something new every week, and honestly that's my favorite
            part of the job."
          </p>

          <div className="hero-actions">
            <Link to="/resume" className="btn-primary">
              View Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link to="/contact" className="btn-secondary">
              Let's Talk
            </Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src="/assets/images/profile.png" alt="prabha Profile" className="hero-image" />
        </div>
      </section>
    </main>
  );
}
