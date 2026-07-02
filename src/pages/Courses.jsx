import useScrollAnimation from '../hooks/useScrollAnimation';
import './Courses.css';

const theoryCourses = [
  { code: 'ML402PCC08', name: 'Algorithms', icon: 'menu_book' },
  { code: 'ML505', name: 'Deep Learning', icon: 'psychology' },
  { code: 'ML303MDM11', name: 'Programming Methodology', icon: 'code' },
  { code: 'CSE2PM09A / AID2PM07A', name: 'Design and Analysis of Algorithm', icon: 'account_tree' },
  { code: 'CSE2PM01A', name: 'Data Structures', icon: 'schema' },
  { code: 'CSE1012', name: 'Problem Solving using Python', icon: 'terminal' },
  { code: 'CET1043B', name: 'Fundamentals of Data Structures', icon: 'data_array' },
  { code: 'CET2001B', name: 'Advanced Data Structures', icon: 'layers' },
  { code: 'CSE1011', name: 'Fundamentals of Computer Science', icon: 'computer' },
  { code: 'CSE2005', name: 'Object Oriented Programming', icon: 'integration_instructions' },
];

const labCourses = [
  { code: 'ML407PCC10', name: 'Algorithms Lab.' },
  { code: 'ML307PCC04', name: 'Programming Methodology Lab.' },
  { code: 'CSE2PR02A', name: 'Data Structures Lab' },
];

export default function Courses() {
  const ref = useScrollAnimation();

  return (
    <main ref={ref} className="courses-page container">
      {/* Header */}
      <header className="courses-header animate-on-scroll">
        <h1 className="text-display-lg-mobile responsive-display">Courses Taught</h1>
        <p className="text-body-lg">
          Welcome to Dr. Nikhil Mhala Course Portal. Access course materials,
          attendance records, and important announcements here. Dedicated to
          advancing education in Computer Science and Engineering.
        </p>
      </header>

      {/* Teaching Philosophy + Student Hours Bento */}
      <section className="philosophy-bento animate-on-scroll">
        <div className="philosophy-grid">
          <div className="philosophy-card">
            <h2 className="text-headline-md">
              <span className="material-symbols-outlined">school</span>
              Teaching Philosophy
            </h2>
            <p className="text-body-md">
              My approach to education centers on practical application and
              foundational understanding. I strive to bridge the gap between
              theoretical computer science and real-world implementation,
              particularly in the fields of Image Processing, Machine Learning,
              and foundational programming.
            </p>
            <p className="text-body-md">
              By integrating current research into the curriculum, I aim to equip
              students with the analytical skills necessary to tackle complex
              computational problems and adapt to rapidly evolving technologies.
            </p>
          </div>

          <div className="student-hours-card">
            <div className="student-hours-content">
              <p className="text-label-caps student-hours-label">Available Slots</p>
              <h3 className="text-headline-md student-hours-title">Student Hours</h3>
              <ul className="student-hours-list text-body-md">
                <li className="student-hours-item">
                  <span className="material-symbols-outlined">schedule</span>
                  <div>
                    <strong>Monday</strong>
                    <span>3:30 PM - 5:00 PM</span>
                  </div>
                </li>
                <li className="student-hours-item">
                  <span className="material-symbols-outlined">schedule</span>
                  <div>
                    <strong>Wed - Fri</strong>
                    <span>3:30 PM - 5:00 PM</span>
                  </div>
                </li>
                <li className="student-hours-item">
                  <span className="material-symbols-outlined">schedule</span>
                  <div>
                    <strong>Saturday</strong>
                    <span>1:30 PM - 3:00 PM</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="student-hours-footer">
              <p className="text-label-md">Email to schedule an appointment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Listings */}
      <section className="courses-listings">
        <div className="courses-listings-header animate-on-scroll">
          <h2 className="text-headline-lg">Academic Courses</h2>
          <span className="text-label-caps">Undergraduate &amp; Graduate</span>
        </div>

        {/* Theory Courses */}
        <div style={{ marginBottom: 64 }}>
          <h3 className="text-headline-md courses-category-title animate-on-scroll">
            Theory Courses
          </h3>
          <div className="theory-courses-grid">
            {theoryCourses.map((course) => (
              <div key={course.code} className="course-card animate-on-scroll">
                <div className="course-card-header">
                  <span className="course-code">{course.code}</span>
                  <span className="material-symbols-outlined">{course.icon}</span>
                </div>
                <h4 className="course-name">{course.name}</h4>
                <span className="material-symbols-outlined arrow">arrow_forward</span>
              </div>
            ))}
          </div>
        </div>

        {/* Labs */}
        <div>
          <h3 className="text-headline-md courses-category-title animate-on-scroll">
            Laboratory Sessions
          </h3>
          <div className="labs-grid">
            {labCourses.map((lab) => (
              <div key={lab.code} className="lab-card animate-on-scroll">
                <div className="lab-card-header">
                  <span className="material-symbols-outlined">science</span>
                  <span>{lab.code}</span>
                </div>
                <h4 className="lab-name">{lab.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
