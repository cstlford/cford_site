import "./Resume.css";

const ResumeComponent: React.FC = () => {
  return (
    <div className="resume-container">
      <section className="resume-section">
        <h2>EDUCATION</h2>
        <h4>University of Tennessee at Chattanooga</h4>
        <p className="resume-italic">
          B.S. Computer Science: Software Systems, Minor: Entrepreneurship (Dec
          2024)
        </p>
        <ul className="resume-list">
          <li>
            <span className="resume-span">Honors:</span> Summa Cum Laude
          </li>
          <li>
            <span className="resume-span">Relevant Coursework:</span> Software
            Engineering, Database Systems, Advanced Data Analytics, Information
            Security
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>TECHNICAL SKILLS</h2>
        <ul className="resume-list">
          <li>
            <span className="resume-span">Languages:</span> JavaScript
            (TypeScript), Python, SQL, HTML, CSS
          </li>
          <li>
            <span className="resume-span">Tools/Frameworks:</span> React, Redux,
            Express, Django, Git, Figma
          </li>
          <li>
            <span className="resume-span">Concepts:</span> Full-Stack
            Development, RESTful APIs, Generative AI, Authentication
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>RELEVANT EXPERIENCE</h2>
        <div className="resume-experience">
          <h3>University of Tennessee at Chattanooga</h3>
          <h3>Undergraduate Research Assistant – Sep 2023 to Jan 2025</h3>
          <p className="resume-italic">Eco-Driving for Traffic Simulation</p>
          <ul className="resume-list">
            <li>
              Collaborated with a PhD researcher to implement their eco-driving
              algorithm in Python, integrating it with PTV Vissim’s API to
              reduce intersection congestion by up to 45% through dynamic speed
              and acceleration optimization. Generative AI Learning Web App
            </li>
          </ul>
          <p className="resume-italic">Generative AI Learning Web App</p>
          <ul className="resume-list">
            <li>
              Co-developed a React/Flask web app leveraging generative AI to
              deliver personalized quizzes.
            </li>
          </ul>
        </div>
        <div className="resume-experience">
          <h3>The Cheesecake Factory</h3>
          <h3>Kitchen Support Manager – Jun 2022 to Sep 2024</h3>
          <ul className="resume-list">
            <li>
              Led kitchen operations, trained 10+ staff, and streamlined
              workflows, sharpening leadership and problem-solving skills under
              pressure.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ResumeComponent;
