import { useState, useMemo } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Research.css';

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

export default function Research() {
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
    <main ref={ref} className="research-page container">
      {/* Header */}
      <section className="research-page-header animate-on-scroll">
        <h1 className="text-display-lg-mobile responsive-display">Research Publications</h1>
        <p className="text-body-lg">
          A collection of peer-reviewed journal articles and conference
          proceedings focusing on Visual Cryptography, Image Processing, and
          Machine Learning applications.
        </p>
      </section>

      {/* Search */}
      <div className="research-search animate-on-scroll">
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
    </main>
  );
}
