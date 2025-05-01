import { NavLink } from "react-router-dom";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import profImage from "../../assets/prof.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Resume
        </NavLink>
      </div>
      <div className="navbar-logo">
        <NavLink to="/">
          <div className="logo">
            <img src={profImage} alt="Castle Ford" />
          </div>
        </NavLink>
      </div>
      <div className="navbar-socials">
        <a href="https://github.com/cstlford" target="_blank">
          <img src={github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/castleford/" target="_blank">
          <img src={linkedin} alt="" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
