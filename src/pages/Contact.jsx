import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <main className="page-main contact-page">
      <div className="page-container">
        <h1 className="page-title">Let's Talk.</h1>

        <p className="section-text">
          Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="section-heading">Get in Touch</h2>
            <p className="section-text" style={{ marginBottom: "2.5rem", maxWidth: "90%" }}>
              Whether you're looking for a developer, have a project in mind, or just want to connect, feel free to
              reach out. I'm always open to discussing new opportunities.
            </p>

            <div className="info-items">
              <a href="mailto:prabha.dev@outlook.com" className="info-item text-link-card">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="info-details">
                  <h3>Email</h3>
                  <p>prabha.dev@outlook.com</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/prabhakaran-m-0206a1360/" target="_blank" rel="noopener noreferrer" className="info-item text-link-card">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div className="info-details">
                  <h3>LinkedIn</h3>
                  <p>Connect with me</p>
                </div>
              </a>
              <div className="info-item text-link-card" style={{ cursor: "default" }}>
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="info-details">
                  <h3>Location</h3>
                  <p>Chennai, TamilNadu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
