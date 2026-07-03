import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Courses.css';

const theoryResources = [
  {
    name: 'Algorithms Syllabus (Theory)',
    accessLabel: 'View Syllabus',
    url: '#',
    isExternal: false,
    icon: 'description',
    actionIcon: 'visibility',
  },
  {
    name: 'Module 1 (PPT)',
    accessLabel: 'Module 1 (PPT)',
    url: '#',
    isExternal: false,
    icon: 'slideshow',
    actionIcon: 'download',
  },
  {
    name: 'Module 1 (Notes)',
    accessLabel: 'External Link',
    url: 'https://drive.google.com/file/d/1b5cZUqMHCp_bn6KFMg8fpFJYijeUEykj/view',
    isExternal: true,
    icon: 'notes',
    actionIcon: 'link',
  },
  {
    name: 'Module 1 (Revision)',
    accessLabel: 'Module 1 (MCQ)',
    url: '#',
    isExternal: false,
    icon: 'quiz',
    actionIcon: 'task',
  },
  {
    name: 'Module 2 (PPT)',
    accessLabel: 'Module 2 (PPT)',
    url: '#',
    isExternal: false,
    icon: 'slideshow',
    actionIcon: 'download',
  },
  {
    name: 'Module 2 (Notes)',
    accessLabel: 'External Link',
    url: 'https://drive.google.com/file/d/1I4Sz1UUXBrf54Gd_3x3NGPKqPxQERNPd/view',
    isExternal: true,
    icon: 'notes',
    actionIcon: 'link',
  },
  {
    name: 'Masters Th.',
    accessLabel: 'External Link',
    url: 'https://drive.google.com/file/d/123-3-QYlH1cxPs1PQBcibAJHEqR5X_HI/preview',
    isExternal: true,
    icon: 'menu_book',
    actionIcon: 'link',
  },
  {
    name: 'UNIT 3 (Notes)',
    accessLabel: 'External Link',
    url: 'https://drive.google.com/file/d/1HoxE3Utn87i_cpE9IZL_bT0gQmrYIh6S/view?usp=sharing',
    isExternal: true,
    icon: 'notes',
    actionIcon: 'link',
  },
  {
    name: 'UNIT 3 (graphics Algorithm PPT)',
    accessLabel: 'UNIT 3 (graphics Algorithm PPT)',
    url: '#',
    isExternal: false,
    icon: 'slideshow',
    actionIcon: 'download',
  },
  {
    name: 'UNIT 3 (PPT)',
    accessLabel: 'UNIT 3 ( PPT)',
    url: '#',
    isExternal: false,
    icon: 'slideshow',
    actionIcon: 'download',
  },
  {
    name: 'MSE 1 Model Answers',
    accessLabel: 'MSE 1 Model Answers',
    url: '#',
    isExternal: false,
    icon: 'assignment_turned_in',
    actionIcon: 'task',
  },
  {
    name: 'Module 4 (PPT PART 1)',
    accessLabel: 'Module 4 (PART 1)',
    url: '#',
    isExternal: false,
    icon: 'slideshow',
    actionIcon: 'download',
  },
  {
    name: 'UNIT 4 (Notes)',
    accessLabel: 'External Link',
    url: 'https://drive.google.com/file/d/1m2GfkF1m4kcTBhmibl7ZVXI_ppuinQ0j/view?usp=sharing',
    isExternal: true,
    icon: 'notes',
    actionIcon: 'link',
  },
  {
    name: 'UNIT 5 PPT',
    accessLabel: 'Module 5 PPT',
    url: '#',
    isExternal: false,
    icon: 'slideshow',
    actionIcon: 'download',
  },
  {
    name: 'UNIT 6 PPT',
    accessLabel: 'Module 6 PPT',
    url: '#',
    isExternal: false,
    icon: 'slideshow',
    actionIcon: 'download',
  },
  {
    name: 'Module 5 (Notes)',
    accessLabel: 'External Link',
    url: 'https://drive.google.com/file/d/11wwjT_weh1r4quqmHxALPdrLndTBTA1_/preview',
    isExternal: true,
    icon: 'notes',
    actionIcon: 'link',
  },
  {
    name: 'Module 6 (Notes)',
    accessLabel: 'External Link',
    url: 'https://drive.google.com/file/d/1p82OHMyhN-RetxE0wP_iwPS72zGcwFjZ/preview',
    isExternal: true,
    icon: 'notes',
    actionIcon: 'link',
  },
  {
    name: 'MSE 2 Model Answers',
    accessLabel: 'MSE 2 Model Answers',
    url: '#',
    isExternal: false,
    icon: 'assignment_turned_in',
    actionIcon: 'task',
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
                  <span className="subject-code">[ML402PCC08]</span>
                  <h3 className="subject-name">Algorithms (Theory)</h3>
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
            <div className="subject-card-body">
              <div className="subject-card-header">
                <div className="subject-icon-wrapper">
                  <span className="material-symbols-outlined icon-fill">terminal</span>
                </div>
                <div className="subject-code-name">
                  <span className="subject-code">[ML407PCC10]</span>
                  <h3 className="subject-name">Algorithms LAB.</h3>
                </div>
              </div>
              <div className="subject-card-footer">
                <span className="resource-pill">
                  <span className="material-symbols-outlined">folder_open</span>
                  {labResources.length} Resources
                </span>
                <span className="material-symbols-outlined arrow-icon">arrow_forward</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Algorithms Theory Materials Section */}
      <section id="algo-theory" className="materials-section scroll-mt-32 animate-on-scroll">
        <div className="section-header">
          <div className="section-header-title">
            <span className="material-symbols-outlined section-icon icon-fill">psychology</span>
            <h2 className="text-headline-lg">Algorithms (Theory)</h2>
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
                    <td className="material-name-cell">
                      <span className="material-symbols-outlined file-icon">
                        {resource.icon}
                      </span>
                      {resource.name}
                    </td>
                    <td>
                      {resource.isExternal ? (
                        <a
                          className="action-link link-external"
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="material-symbols-outlined text-sm">link</span>
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
      <section id="algo-lab" className="materials-section scroll-mt-32 animate-on-scroll">
        <div className="section-header">
          <div className="section-header-title">
            <span className="material-symbols-outlined section-icon icon-fill">terminal</span>
            <h2 className="text-headline-lg">Algorithms LAB.</h2>
          </div>
          <span className="badge-pill hide-mobile">
            {labResources.length} Available Resources
          </span>
        </div>

        <div className="labs-resource-grid">
          {labResources.map((lab, index) => (
            <div key={index} className="lab-resource-card hover-lift">
              <div className="lab-card-top text-primary">
                <span className="material-symbols-outlined icon-fill">
                  {lab.icon === 'link' ? 'link' : lab.icon}
                </span>
                <h4 className="lab-resource-title">{lab.name}</h4>
              </div>
              <div className="lab-card-action">
                {lab.isExternal ? (
                  <a
                    className="lab-btn-primary"
                    href={lab.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                    {lab.accessLabel}
                  </a>
                ) : (
                  <a className="lab-btn-outline" href={lab.url}>
                    <span className="material-symbols-outlined text-sm mr-1">
                      {lab.actionIcon}
                    </span>
                    {lab.accessLabel}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
