export default function Resume() {
  return (
    <main className="page-main">
      <div className="page-container" style={{ maxWidth: 800, textAlign: "center" }}>
        <h1 className="page-title" style={{ marginBottom: "1.5rem" }}>
          My Resume.
        </h1>

        <p className="section-text" style={{ maxWidth: 600, margin: "0 auto 2.5rem" }}>
          Take a look at my qualifications and experience. You can also download a copy for your records.
        </p>

        <div className="resume-actions" style={{ marginBottom: "3rem" }}>
          <a href="/assets/documents/Prabhakaran_Resume.pdf" className="btn-primary" download>
            Download PDF
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>

        <div className="resume-container">
          <iframe src="/assets/documents/Prabhakaran_Resume.pdf" className="resume-frame" title="prabhakaran Resume" allowFullScreen></iframe>
        </div>

        <p className="updated-note">Last updated: August 2026</p>
      </div>
    </main>
  );
}
