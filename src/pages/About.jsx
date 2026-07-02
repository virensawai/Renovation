import useScrollAnimation from '../hooks/useScrollAnimation';
import './About.css';

const expertise = [
  'Image Processing',
  'Visual Cryptography',
  'Machine Learning',
  'Information Security',
  'Python',
  'Deep Learning',
];

export default function About() {
  const ref = useScrollAnimation();

  return (
    <main ref={ref} className="about-page">
      {/* Hero Section */}
      <section className="about-hero container">
        <div className="about-hero-grid">
          <div className="about-hero-text">
            <span className="text-label-caps about-hero-label animate-on-scroll">
              About Me
            </span>
            <h1 className="text-display-lg-mobile about-hero-title animate-on-scroll delay-100 responsive-display">
              Advancing Research in<br className="hide-mobile" />
              Visual Cryptography.
            </h1>
            <div className="text-body-lg about-hero-bio animate-on-scroll delay-200">
              <p>
                Welcome to my personal website. I am Dr. Nikhil Mhala, an
                Assistant Professor in the Computer Science and Engineering
                (AIML) department at P. R. Pote Patil College of Engineering
                &amp; Management, Amravati.
              </p>
              <p>
                With a strong passion for Image Processing, Machine Learning,
                Python, and C, I have dedicated my career to advancing research
                and education in these fields. I am constantly exploring new
                ideas and collaborating with fellow researchers to push the
                boundaries of knowledge in Information Security and Deep
                Learning.
              </p>
            </div>

            <div className="animate-on-scroll delay-300">
              <h3 className="text-label-caps about-expertise-label">
                Areas of Expertise
              </h3>
              <div className="about-chips">
                {expertise.map((tag) => (
                  <span key={tag} className="about-chip">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-photo-wrapper animate-on-scroll">
            <div className="about-photo-container">
              <img
                src="/profile-photo.png"
                alt="Dr. Nikhil Mhala Profile Picture"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic & Professional Journey */}
      <section className="journey-section container">
        <h2 className="text-headline-lg journey-title animate-on-scroll">
          Academic &amp; Professional Journey
        </h2>

        <div className="journey-grid">
          {/* Academic Background */}
          <div className="journey-card animate-on-scroll">
            <div>
              <span className="material-symbols-outlined icon">school</span>
              <h3 className="text-headline-md">Academic Background</h3>
              <p className="text-body-lg description">
                Doctor of Philosophy (Ph.D.) focused on Visual Cryptography and
                Image Processing.
              </p>
            </div>
            <div className="journey-card-footer">
              <p className="institution">
                National Institute of Technology Karnataka
              </p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="journey-card animate-on-scroll delay-100">
            <div>
              <span className="material-symbols-outlined icon">work</span>
              <h3 className="text-headline-md">Professional Experience</h3>
              <p className="text-body-lg description">
                Assistant Professor in Computer Science and Engineering (AIML)
                department, dedicating career to advancing research and
                education.
              </p>
            </div>
            <div className="journey-card-footer">
              <p className="institution">
                P. R. Pote Patil College of Engineering &amp; Management
              </p>
              <p className="location">Amravati</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
