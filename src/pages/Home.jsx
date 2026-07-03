import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Home.css';

const announcements = [
  "Research paper published in 'The Visual Computer' journal.",
  "Upcoming Guest Lecture on Deep Learning - March 15th.",
  "Student registration for CSE (AIML) courses is now open."
];

const expertiseTags = [
  'Image Processing',
  'Visual Cryptography',
  'Machine Learning',
  'Information Security',
  'Python',
  'Deep Learning'
];

export default function Home() {
  const ref = useScrollAnimation();

  return (
    <main ref={ref} className="home-page" style={{ paddingTop: 80, paddingBottom: 128 }}>
      {/* ============ Announcement Bar ============ */}
      <div className="announcement-bar">
        <div className="announcement-container">
          <div className="announcement-label">
            <span className="material-symbols-outlined announcement-icon">campaign</span>
            <span className="announcement-text-tag">ANNOUNCEMENT:</span>
          </div>
          <div className="announcement-marquee">
            <div className="marquee-content">
              {[...announcements, ...announcements].map((announcement, index) => (
                <span key={index} className="marquee-item">
                  {announcement}
                  <span className="marquee-separator"> • </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============ Hero Section ============ */}
      <section className="hero container" id="home">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="text-label-caps hero-label animate-on-scroll">
              Assistant Professor &amp; Researcher
            </span>
            <h1 className="text-display-lg-mobile hero-title animate-on-scroll delay-100 responsive-display">
              Advancing Visual Cryptography &amp; Machine Learning.
            </h1>
            <p className="text-body-lg hero-description animate-on-scroll delay-200">
              Dedicated to research and education in Image Processing, Machine
              Learning, and Information Security at P. R. Pote Patil College of
              Engineering &amp; Management.
            </p>
            <div className="hero-cta-group animate-on-scroll delay-300">
              <Link to="/contact" className="btn-primary shimmer-btn">
                Schedule Appointment
              </Link>
              <Link to="/research" className="btn-secondary">
                View Publications
              </Link>
            </div>
          </div>

          <div className="hero-image-wrapper animate-on-scroll">
            <div className="hero-image-container ambient-shadow">
              <img
                className="hero-image"
                src="/profile-photo.png"
                alt="Dr. Nikhil Mhala — Assistant Professor in Computer Science"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ About Bento Section ============ */}
      <section className="about-section container" id="about">
        <div className="section-header animate-on-scroll">
          <h2 className="text-headline-lg section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-bento">
          {/* Academic Journey Card */}
          <div className="bento-journey animate-on-scroll ambient-shadow">
            <span className="material-symbols-outlined icon" style={{ fontVariationSettings: "'FILL' 1" }}>
              school
            </span>
            <h3 className="text-headline-md">Academic Journey</h3>
            <p className="text-body-lg bio-lg">
              I am Dr. Nikhil Mhala, an Assistant Professor in Computer Science
              and Engineering (AIML) department at P. R. Pote Patil College of
              Engineering &amp; Management, Amravati.
            </p>
            <p className="text-body-md bio-md">
              With a strong passion for Image Processing, Machine Learning,
              Matlab, Python, and C, I have dedicated my career to advancing
              research and education in these fields. I hold a Doctor of
              Philosophy (Ph.D.) focused on Visual Cryptography and Image
              Processing from the National Institute of Technology Karnataka.
            </p>
          </div>

          {/* Position & Education Card */}
          <div className="bento-position animate-on-scroll delay-100">
            <div>
              <p className="text-label-caps bento-section-label">Current Position</p>
              <p className="bento-section-title">Assistant Professor, CSE (AIML)</p>
              <p className="bento-section-subtitle">
                P. R. Pote Patil College of Engineering &amp; Management
              </p>
            </div>
            <hr />
            <div>
              <p className="text-label-caps bento-section-label">Education</p>
              <p className="bento-section-title">Ph.D. in Computer Science</p>
              <p className="bento-section-subtitle">
                National Institute of Technology Karnataka
              </p>
              <p className="bento-section-detail">
                Focus: Visual Cryptography &amp; Image Processing
              </p>
            </div>
          </div>

          {/* Expertise Tags */}
          <div className="bento-expertise animate-on-scroll delay-200">
            <span className="text-label-caps label">Core Expertise:</span>
            <div className="expertise-marquee">
              <div className="expertise-marquee-content">
                {[...expertiseTags, ...expertiseTags].map((tag, idx) => (
                  <span key={idx} className="expertise-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Research Highlights ============ */}
      <section className="research-section container" id="research">
        <div className="research-header animate-on-scroll">
          <div>
            <h2 className="text-headline-lg section-title">Latest Research</h2>
            <div className="section-divider" style={{ marginBottom: 24 }}></div>
            <p className="text-body-lg description">
              Exploring new ideas and pushing the boundaries of knowledge in
              image processing and machine learning.
            </p>
          </div>
          <Link to="/research" className="view-all-link">
            View Full Publication List
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        <div className="pub-grid">
          {/* Publication 1 */}
          <div className="pub-card animate-on-scroll">
            <div className="pub-card-header">
              <span className="pub-badge journal">Journal</span>
              <span className="pub-year">2021</span>
            </div>
            <h3 className="pub-card-title">
              A secure visual secret sharing (VSS) scheme with CNN-based image
              enhancement for underwater images
            </h3>
            <p className="text-body-md pub-card-authors">
              Mhala, N. C., &amp; Pais, A. R. — Published in The Visual
              Computer, 37(8), 2097-2111.
            </p>
            <div className="pub-card-footer">
              Read Abstract
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>
            </div>
          </div>

          {/* Publication 2 */}
          <div className="pub-card animate-on-scroll delay-100">
            <div className="pub-card-header">
              <span className="pub-badge journal">Journal</span>
              <span className="pub-year">2023</span>
            </div>
            <h3 className="pub-card-title">
              Star Galaxy Classification Using Machine Learning Algorithms and
              Deep Learning
            </h3>
            <p className="text-body-md pub-card-authors">
              Savyanavar, A. S., Mhala, N., &amp; Sutar, S. H. — Published in
              International Journal on Information Technologies &amp; Security,
              15(2).
            </p>
            <div className="pub-card-footer">
              Read Abstract
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>
            </div>
          </div>

          {/* Publication 3 */}
          <div className="pub-card animate-on-scroll">
            <div className="pub-card-header">
              <span className="pub-badge conference">Conference</span>
              <span className="pub-year">2024</span>
            </div>
            <h3 className="pub-card-title">
              An Automated System for Waste Segregation Using Deep Learning
              Algorithms
            </h3>
            <p className="text-body-md pub-card-authors">
              Nair, R. R. et al., &amp; Mhala, N. — 3rd International
              Conference for Innovation in Technology (INOCON).
            </p>
            <div className="pub-card-footer">
              Read Abstract
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>
            </div>
          </div>

          {/* Publication 4 */}
          <div className="pub-card animate-on-scroll delay-100">
            <div className="pub-card-header">
              <span className="pub-badge journal">Journal</span>
              <span className="pub-year">2019</span>
            </div>
            <h3 className="pub-card-title">
              Contrast enhancement of progressive visual secret sharing scheme
              using super-resolution
            </h3>
            <p className="text-body-md pub-card-authors">
              Mhala, N. C., &amp; Pais, A. R. — Published in Signal Processing,
              162, 253-267.
            </p>
            <div className="pub-card-footer">
              Read Abstract
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA / Schedule Section ============ */}
      <section className="cta-section container animate-on-scroll" id="contact">
        <div className="cta-container">
          <div className="cta-blob-1"></div>
          <div className="cta-blob-2"></div>

          <div className="cta-grid">
            <div>
              <h2 className="text-headline-lg cta-title">Let's Collaborate.</h2>
              <p className="text-body-lg cta-description">
                Whether you're a student looking to discuss coursework, or a
                researcher interested in collaboration, I'm available to connect.
              </p>

              <div className="cta-info-item">
                <span className="material-symbols-outlined">mail</span>
                <div>
                  <p className="text-label-caps cta-info-label">Email</p>
                  <p className="text-body-md cta-info-value">
                    <a href="mailto:ncmhala@prpotepatilengg.ac.in">
                      ncmhala@prpotepatilengg.ac.in
                    </a>
                  </p>
                </div>
              </div>

              <div className="cta-info-item">
                <span className="material-symbols-outlined">location_on</span>
                <div>
                  <p className="text-label-caps cta-info-label">Office</p>
                  <p className="text-body-md cta-info-value">
                    Cabin No 2, Alumni Association Office (Ground floor),
                    <br />
                    Building No 1, P. R. Pote Patil College
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-availability">
              <h3 className="text-headline-md">Student Availability</h3>
              <ul>
                <li>
                  <span className="text-body-md day">Monday</span>
                  <span className="text-label-md time">3:30 PM - 5:00 PM</span>
                </li>
                <li>
                  <span className="text-body-md day">Wed - Fri</span>
                  <span className="text-label-md time">3:30 PM - 5:00 PM</span>
                </li>
                <li>
                  <span className="text-body-md day">Saturday</span>
                  <span className="text-label-md time">1:30 PM - 3:00 PM</span>
                </li>
              </ul>
              <a
                href="mailto:ncmhala@prpotepatilengg.ac.in"
                className="cta-email-btn shimmer-btn"
              >
                Email to Schedule
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
