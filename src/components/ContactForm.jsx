import { useState } from "react";

const initialValues = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState({ text: "", type: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }

    setSubmitting(true);
    setStatus({ text: "", type: "" });

    // Simulated submission feedback (no actual sending occurs).
    // To enable email sending, integrate a service such as EmailJS,
    // Formspree, or a custom backend endpoint.
    setTimeout(() => {
      setStatus({ text: "Thanks for your message! I'll get back to you soon.", type: "success" });
      setValues(initialValues);
      setSubmitting(false);
    }, 800);
  };

  return (
    <div className="contact-card">
      <form id="contactForm" className="contact-form" noValidate onSubmit={handleSubmit}>
        <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--text-main)" }}>
          Send a Message
        </h3>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="What's your name?"
            required
            value={values.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Where can I reach you?"
            required
            value={values.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            placeholder="What would you like to discuss?"
            rows="4"
            required
            value={values.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn-primary w-100" id="submitBtn" disabled={submitting}>
          <span>{submitting ? "Sending..." : "Send Message"}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>

        <div id="formStatus" className={`form-status${status.type ? ` ${status.type}` : ""}`}>
          {status.text}
        </div>
      </form>
    </div>
  );
}
