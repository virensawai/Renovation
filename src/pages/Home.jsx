import { useState, useMemo } from 'react';
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

const journals = [
  {
    year: '2018',
    title: 'Randomised visual secret sharing scheme for grey‐scale and colour images',
    authors: 'Mhala, N. C., Jamal, R., & Pais, A. R.',
    venue: 'IET Image Processing, 12(3), 422-431.',
    tags: ['Visual Cryptography'],
  },
  {
    year: '2021',
    title: 'A secure visual secret sharing (VSS) scheme with CNN-based image enhancement for underwater images',
    authors: 'Mhala, N. C., & Pais, A. R.',
    venue: 'The Visual Computer, 37(8), 2097-2111.',
    tags: ['CNN', 'Image Enhancement'],
  },
  {
    year: '2019',
    title: 'Contrast enhancement of progressive visual secret sharing (pvss) scheme for gray-scale and color images using super-resolution',
    authors: 'Mhala, N. C., & Pais, A. R.',
    venue: 'Signal Processing, 162, 253-267.',
    tags: ['Super-resolution'],
  },
  {
    year: '2023',
    title: 'Star Galaxy Classification Using Machine Learning Algorithms and Deep Learning',
    authors: 'Savyanavar, A. S., Mhala, N., & Sutar, S. H.',
    venue: 'International Journal on Information Technologies & Security, 15(2).',
    tags: ['Machine Learning', 'Deep Learning'],
  },
  {
    year: '2021',
    title: 'A novel fingerprint template protection and fingerprint authentication scheme using visual secret sharing and super-resolution',
    authors: 'Muhammed, A., Mhala, N. C., & Pais, A. R.',
    venue: 'Multimedia Tools and Applications, 80(7), 10255-10284.',
    tags: ['Biometrics', 'Security'],
  },
  {
    year: '2021',
    title: 'Verifiable XOR-based visual secret sharing scheme for hyperspectral images',
    authors: 'Srujana, O. S., Mhala, N. C., & Pais, A. R.',
    venue: 'Journal of Applied Remote Sensing, 15(1), 016510-016510.',
    tags: ['Hyperspectral', 'VSS'],
  },
  {
    year: '2022',
    title: 'GPGPU-based randomized visual secret sharing (GRVSS) for grayscale and colour images',
    authors: 'Holla, R., Mhala, N. C., & Pais, A. R.',
    venue: 'International Journal of Computers and Applications, 44(6), 552-560.',
    tags: ['GPU Computing'],
  },
  {
    year: '2024',
    title: 'Phishing Webpage Detection using Feature Selection Methods',
    authors: 'Savyanavar, A. S., Sankpal, P., & Mhala, N. C.',
    venue: 'Journal of Electrical Systems, 20(5s), 447-452.',
    tags: ['Cybersecurity'],
  },
];

const conferences = [
  {
    date: 'January 2019',
    title: 'An improved and secure visual secret sharing (VSS) scheme for medical images',
    authors: 'Mhala, N. C., & Pais, A. R.',
    venue: 'In 2019 11th International Conference on Communication Systems & Networks (COMSNETS) (pp. 823-828). IEEE.',
  },
  {
    date: 'October 2016',
    title: 'Improved approach towards classification of histopathology images using bag-of-features',
    authors: 'Mhala, N. C., & Bhandari, S. H.',
    venue: 'In 2016 international conference on signal and information processing (IConSIP) (pp. 1-5). IEEE.',
  },
  {
    date: 'February 2020',
    title: 'Secure transmission of hyperspectral images',
    authors: 'Srujana, O. S., Mhala, N. C., & Pais, A. R.',
    venue: 'In 2020 Third ISEA Conference on Security and Privacy (ISEA-ISAP) (pp. 94-99). IEEE.',
  },
  {
    date: 'January 2024',
    title: 'Classification of Star and Galaxy Objects Utilizing Machine Learning Techniques and Deep Neural Networks',
    authors: 'Gaikwad, H., Mhala, N., Umare, A., Milmile, A., & Lanjewar, A.',
    venue: 'In International Conference on Advances in Distributed Computing and Machine Learning (pp. 13-23). Springer Nature Singapore.',
  },
  {
    date: 'March 2024',
    title: 'An Automated System for Waste Segregation Using Deep Learning Algorithms',
    authors: 'Nair, R. R., Prabhu, P., Panchal, C., Sarnot, L., Bhingarkar, S., Savyanavar, A., ... & Mhala, N.',
    venue: 'In 2024 3rd International Conference for Innovation in Technology (INOCON) (pp. 1-6). IEEE.',
  },
];

export default function Home() {
  const ref = useScrollAnimation();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJournals = useMemo(() => {
    if (!searchQuery.trim()) return journals;
    const q = searchQuery.toLowerCase();
    return journals.filter(
      (j) =>
        j.title.toLowerCase().includes(q) ||
        j.year.includes(q) ||
        j.tags.some((t) => t.toLowerCase().includes(q)) ||
        j.authors.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredConferences = useMemo(() => {
    if (!searchQuery.trim()) return conferences;
    const q = searchQuery.toLowerCase();
    return conferences.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.date.toLowerCase().includes(q) ||
        c.authors.toLowerCase().includes(q)
    );
  }, [searchQuery]);

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
              <a href="#research" className="btn-secondary">
                View Publications
              </a>
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

      {/* ============ Research Section ============ */}
      <section className="research-section container" id="research">
        <div className="research-header animate-on-scroll">
          <div>
            <h2 className="text-headline-lg section-title">Research Publications</h2>
            <div className="section-divider" style={{ marginBottom: 24 }}></div>
            <p className="text-body-lg description">
              A collection of peer-reviewed journal articles and conference
              proceedings focusing on Visual Cryptography, Image Processing, and
              Machine Learning applications.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="research-search animate-on-scroll" style={{ marginBottom: 48 }}>
          <span className="material-symbols-outlined">search</span>
          <input
            type="text"
            placeholder="Search publications by title, year, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Journals */}
        {filteredJournals.length > 0 && (
          <section className="journals-section">
            <h2 className="text-headline-lg research-section-title animate-on-scroll">
              Journals
              <span className="line"></span>
            </h2>
            <div className="journals-grid">
              {filteredJournals.map((journal, idx) => (
                <article key={idx} className="journal-card animate-on-scroll">
                  <div>
                    <div className="journal-card-header">
                      <span className="journal-year">{journal.year}</span>
                      <span className="material-symbols-outlined">article</span>
                    </div>
                    <h3>{journal.title}</h3>
                    <p className="text-body-md authors">
                      {journal.authors}
                      <br />
                      <em>{journal.venue}</em>
                    </p>
                  </div>
                  <div className="journal-tags">
                    {journal.tags.map((tag) => (
                      <span key={tag} className="journal-tag">{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Conferences */}
        {filteredConferences.length > 0 && (
          <section className="conferences-section">
            <h2 className="text-headline-lg research-section-title animate-on-scroll">
              Conferences
              <span className="line"></span>
            </h2>
            <div className="conferences-timeline">
              {filteredConferences.map((conf, idx) => (
                <div key={idx} className="conference-item animate-on-scroll">
                  <div className="conference-dot"></div>
                  <div className="text-label-caps conference-date">{conf.date}</div>
                  <h3>{conf.title}</h3>
                  <p className="text-body-md authors">
                    {conf.authors}
                    <br />
                    <em>{conf.venue}</em>
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* No Results */}
        {filteredJournals.length === 0 && filteredConferences.length === 0 && (
          <div className="no-results">
            <span className="material-symbols-outlined">search_off</span>
            <p className="text-body-lg">No publications found matching "{searchQuery}"</p>
          </div>
        )}
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
