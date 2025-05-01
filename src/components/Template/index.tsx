import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import "./Template.css";

const Template = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Template;
