import { useState } from "react";
import { HiSparkles } from "react-icons/hi2";
import { FiSend, FiMessageCircle } from "react-icons/fi";

export default function ContactCards() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your submit logic / API call here
  };

  return (
    <div className="contact-cards">
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
        {/* 2-Column Grid for Email & Subject */}
        <div className="form-row">
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
        </div>

        {/* Full-Width Textarea */}
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

        {/* Form Footer (Text Left, Button Right) */}
        <div className="form-footer">
          <span className="response-time">I typically respond within 24 hours</span>
          <button type="submit" className="send-btn">
            Send Message <FiSend />
          </button>
        </div>
      </form>

      {/* Bottom Divider & Copyright */}
      <hr className="divider" />
      <p className="footer-copyright">
        © 2026 Afiaa. Digital Ecosystem & Portfolio
      </p>

      {/* Floating Chat Icon */}
      <div className="chat-widget">
        <FiMessageCircle />
        <span className="online-dot"></span>
      </div>
    </div>
  );
}