import { useState } from "react";
import { HiSparkles } from "react-icons/hi2";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export default function ContactCards() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ loading: false, success: null, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    // Replace these placeholders with your actual EmailJS credentials
    const SERVICE_ID = "service_gmq6837";
    const TEMPLATE_ID = "template_k4r4ev7";
    const PUBLIC_KEY = "rtnymE2Kd6ISWZxGX";

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setStatus({ loading: false, success: true, message: "Message sent successfully!" });
          setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus({
            loading: false,
            success: false,
            message: "Failed to send message. Please try again later.",
          });
        }
      );
  };

  return (
    <div className="contact-cards">
      <div className="Card-container">
        {/* Header Section */}
        <div className="card-header">
          <h2>
            <HiSparkles className="sparkle-icon" /> Let's Work Together
          </h2>
          <p className="status-badge">Available for Freelance Work</p>
          <p className="description">
            Whether you need web administration expertise, technical consulting, or leadership training, I'm here to help bring your vision to life.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Project inquiry, collaboration..."
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Feedback Status Alert */}
          {status.message && (
            <p className={`status-feedback ${status.success ? "success" : "error"}`}>
              {status.message}
            </p>
          )}

          {/* Form Footer */}
          <div className="form-footer">
            <span className="response-time">I typically respond within 24 hours</span>
            <button type="submit" className="send-btn" disabled={status.loading}>
              {status.loading ? "Sending..." : "Send Message"} <FiSend />
            </button>
          </div>
        </form>

        <hr className="divider" />
        <p className="footer-copyright">© 2026 Afiaa. Digital Ecosystem & Portfolio</p>
      </div>
    </div>
  );
}