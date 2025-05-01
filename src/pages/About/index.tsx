import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-heading">About Me</h2>
        <p className="about-paragraph">
          I'm a fullstack developer with a Computer Science degree and a passion
          for building things that solve real problems. My work blends solid
          engineering foundations with product thinking — shaped by a background
          in entrepreneurship and an obsession with good UX.
        </p>
        <p className="about-paragraph">
          I enjoy learning new technologies, exploring what's possible with AI,
          and coming up with product ideas that are both useful and technically
          fun to build. Whether it's experimenting with serverless workflows,
          designing quiz engines with generative AI, or architecting data-driven
          visualizations, I focus on creating things that actually work — and
          scale.
        </p>
        <p className="about-paragraph">
          I'm currently based in Austin, looking to join a team that values
          autonomy, creativity, and product momentum — especially early-stage or
          fast-moving environments. Outside of dev work, I'm into long-form
          podcasts, reading about the founding fathers (Benjamin Franklin
          especially), and generally chasing systems of improvement.
        </p>
      </div>
      <div className="contact-content">
        <h2 className="about-heading">Contact</h2>
        <p className="about-paragraph">
          Feel free to reach out — I'm always open to chatting about
          opportunities, ideas, or collaborations.
        </p>
        <ul className="contact-list">
          <li className="contact-item">
            <span className="contact-label">Email:</span>{" "}
            <a href="mailto:cstlford@gmail.com" className="contact-link">
              cstlford@gmail.com
            </a>
          </li>
          <li className="contact-item">
            <span className="contact-label">GitHub:</span>{" "}
            <a
              href="https://github.com/cstlford"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              github.com/cstlford
            </a>
          </li>
          <li className="contact-item">
            <span className="contact-label">Location:</span>{" "}
            <span style={{ color: "var(--color-teal-light)" }}>
              Austin, TX 78723
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
