import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Contact.css';

export default function Contact() {
  const ref = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', purpose: '', message: '' });
  };

  return (
    <main ref={ref} className="contact-page container">
      {/* Header */}
      <section className="contact-header animate-on-scroll">
        <h1 className="text-display-lg-mobile responsive-display">Let's Connect</h1>
        <p className="text-body-lg">
          Whether you're a student looking to discuss coursework, or a researcher
          interested in collaboration, I'm always open to meaningful conversations.
        </p>
      </section>

      {/* Bento Grid */}
      <div className="contact-bento">
        {/* Contact Details Card */}
        <div className="contact-details-card animate-on-scroll">
          <div className="decorative-blur"></div>
          <div>
            <h2 className="text-headline-md">Contact Details</h2>
            <div className="contact-info-list">
              <div className="contact-info-item animate-on-scroll">
                <span className="material-symbols-outlined">mail</span>
                <div>
                  <p className="text-label-caps contact-info-label">Email</p>
                  <p className="text-body-md contact-info-value">
                    <a href="mailto:ncmhala@prpotepatilengg.ac.in">
                      ncmhala@prpotepatilengg.ac.in
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-info-item animate-on-scroll delay-100">
                <span className="material-symbols-outlined">location_on</span>
                <div>
                  <p className="text-label-caps contact-info-label">Office Location</p>
                  <p className="text-body-md contact-info-value">
                    Cabin No 2, Alumni Association Office (Ground floor),
                    <br />
                    Building No 1, P. R. Pote Patil College of Engineering &amp;
                    Management, Amravati
                  </p>
                </div>
              </div>

              <div className="contact-info-item animate-on-scroll delay-200">
                <span className="material-symbols-outlined">schedule</span>
                <div>
                  <p className="text-label-caps contact-info-label">General Working Hours</p>
                  <p className="text-body-md contact-info-value">
                    10:30am - 5:30pm [Mon-Fri]
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-details-footer">
            <p className="text-label-md">
              <span className="material-symbols-outlined">info</span>
              Please allow 24-48 hours for email responses.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="contact-right">
          {/* Student Slots */}
          <div className="contact-slots-card animate-on-scroll delay-100">
            <h3 className="text-headline-md">
              <span className="material-symbols-outlined">groups</span>
              Available Slots for Students
            </h3>
            <p className="text-body-md contact-slots-description">
              Please email to schedule an appointment during these dedicated
              student hours.
            </p>
            <ul className="slots-list">
              <li className="slot-item animate-on-scroll delay-100">
                <span className="text-label-md slot-day">Monday</span>
                <span className="text-body-md slot-time">3:30 PM - 5:00 PM</span>
              </li>
              <li className="slot-item animate-on-scroll delay-200">
                <span className="text-label-md slot-day">Wed - Fri</span>
                <span className="text-body-md slot-time">3:30 PM - 5:00 PM</span>
              </li>
              <li className="slot-item animate-on-scroll delay-300">
                <span className="text-label-md slot-day">Saturday</span>
                <span className="text-body-md slot-time">1:30 PM - 3:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Appointment Form */}
          <div className="contact-form-card animate-on-scroll delay-200">
            <h3 className="text-headline-md">Request an Appointment</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="purpose">Purpose of Meeting</label>
                <select
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select a topic...</option>
                  <option value="student">Student Inquiry / Coursework</option>
                  <option value="research">Research Collaboration</option>
                  <option value="other">Other Business</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message / Preferred Time</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Briefly describe what you'd like to discuss..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn">
                <span>Send Request</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>

              {submitted && (
                <div className="form-success text-label-md">
                  <span className="material-symbols-outlined">check_circle</span>
                  Your request has been sent successfully. We'll get back to you soon!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
