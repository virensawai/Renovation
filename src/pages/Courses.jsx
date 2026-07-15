import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Courses.css';

const theoryResources = [
  {
    name: 'Module 1 (PPT)',
    accessLabel: 'View PPT',
    url: '#',
    isExternal: false,
    icon: 'slideshow',
    actionIcon: 'visibility',
  },
  {
    name: 'Module 1 (Notes)',
    accessLabel: 'Download Notes',
    url: 'https://drive.google.com/file/d/1qlbNeNDqvXFLsDpGorxPRiwMNfy6Eqf9/view',
    isExternal: true,
    icon: 'notes',
    actionIcon: 'download',
  },
];

const labResources = [
  {
    name: 'Student Lab Manual',
    accessLabel: 'View Manual',
    url: '#',
    isExternal: false,
    icon: 'menu_book',
    actionIcon: 'menu_book',
  },
  {
    name: 'Merge Sort',
    accessLabel: 'Access Code',
    url: '#',
    isExternal: false,
    icon: 'code',
    actionIcon: 'description',
  },
  {
    name: 'Quick Sort',
    accessLabel: 'Access Code',
    url: '#',
    isExternal: false,
    icon: 'code',
    actionIcon: 'description',
  },
  {
    name: 'Additional Code & Output Page',
    accessLabel: 'External Drive',
    url: 'https://docs.google.com/document/d/1eDjoqFrTS0Qhf1Dn7Gs1kfaVFhwZJMYI/edit?usp=drive_link&ouid=109860618860071666089&rtpof=true&sd=true',
    isExternal: true,
    icon: 'link',
    actionIcon: 'open_in_new',
  },
  {
    name: 'Prims Algo',
    accessLabel: 'Access Code',
    url: '#',
    isExternal: false,
    icon: 'code',
    actionIcon: 'description',
  },
  {
    name: 'Chain Matrix Multiplication',
    accessLabel: 'Access Code',
    url: '#',
    isExternal: false,
    icon: 'code',
    actionIcon: 'description',
  },
  {
    name: 'N- Queen Problem',
    accessLabel: 'Access Code',
    url: '#',
    isExternal: false,
    icon: 'code',
    actionIcon: 'description',
  },
];

export default function Courses() {
  const ref = useScrollAnimation();
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const displayedTheoryResources = isExpanded
    ? theoryResources
    : theoryResources.slice(0, 4);

  return (
    <main ref={ref} className="courses-page container">
      {/* Hero Header */}
      <header className="courses-header animate-on-scroll">
        <h1 className="text-display-lg-mobile responsive-display">Course Materials</h1>
        <p className="text-body-lg">
          Access curated learning resources, syllabi, lecture notes, and lab manuals for all current courses.
          Select a subject below to begin exploring the materials.
        </p>
      </header>

      {/* Course Subjects Grid */}
      <section className="subjects-overview animate-on-scroll">
        <h2 className="text-headline-md section-title-border">Course Subjects</h2>
        <div className="subjects-grid">
          {/* Subject Card: Algorithms Theory */}
          <a
            href="#algo-theory"
            className="subject-card-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('algo-theory');
            }}
          >
            <div className="subject-card-body">
              <div className="subject-card-header">
                <div className="subject-icon-wrapper">
                  <span className="material-symbols-outlined icon-fill">psychology</span>
                </div>
                <div className="subject-code-name">
                  <span className="subject-code">[ML501PCC12]</span>
                  <h3 className="subject-name">DBMS (Theory)</h3>
                </div>
              </div>
              <div className="subject-card-footer">
                <span className="resource-pill">
                  <span className="material-symbols-outlined">description</span>
                  {theoryResources.length} Resources
                </span>
                <span className="material-symbols-outlined arrow-icon">arrow_forward</span>
              </div>
            </div>
          </a>

          {/* Subject Card: Algorithms Lab */}
          <a
            href="#algo-lab"
            className="subject-card-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('algo-lab');
            }}
          >
          </a>
        </div>
      </section>

      {/* Algorithms Theory Materials Section */}
      <section id="algo-theory" className="materials-section scroll-mt-32 animate-on-scroll">
        <div className="section-header">
          <div className="section-header-title">
            <span className="material-symbols-outlined section-icon icon-fill">psychology</span>
            <h2 className="text-headline-lg">DBMS (Theory)</h2>
          </div>
          <span className="badge-pill hide-mobile">
            {theoryResources.length} Available Resources
          </span>
        </div>

        <div className="table-card border border-surface-variant">
          <div className="table-wrapper">
            <table className="materials-table">
              <thead>
                <tr>
                  <th className="col-type">Material Type</th>
                  <th className="col-access">Access</th>
                </tr>
              </thead>
              <tbody>
                {displayedTheoryResources.map((resource, index) => (
                  <tr key={index}>
                    <td>
                      <div className="material-name-cell">
                        <span className="material-symbols-outlined file-icon">
                          {resource.icon}
                        </span>
                        {resource.name}
                      </div>
                    </td>
                    <td>
                      {resource.isExternal ? (
                        <a
                          className="action-link link-external"
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="material-symbols-outlined text-sm">
                            {resource.actionIcon}
                          </span>
                          {resource.accessLabel}
                        </a>
                      ) : (
                        <a className="action-link link-placeholder" href={resource.url}>
                          <span className="material-symbols-outlined text-sm">
                            {resource.actionIcon}
                          </span>
                          {resource.accessLabel}
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-footer">
            <button
              className="toggle-expand-btn"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              {isExpanded ? 'Show Less' : `View All ${theoryResources.length} Resources`}
              <span className="material-symbols-outlined">
                {isExpanded ? 'expand_less' : 'expand_more'}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Algorithms Lab Materials Section */}
      
    </main>
  );
}
