import React from "react";
import "./SidebarListStyle.css";
import logo from "../../Image/logo.png";

import {
  FcHome,
  FcAbout,
  FcRating,
  FcTodoList,
  FcContacts,
  FcFeedback,
} from "react-icons/fc";
import { Link } from "react-scroll";

const SidebarList = ({ expandSidebar }) => {
  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-logo">
            <img src={logo} alt="logo" />
          </div>

          <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={25} />
                Home
              </Link>
            </li>
            <li className="nav-item">
            <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
              <FcAbout size={25} />
              About
              </Link>
            </li>
            <li className="nav-item">
            <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
              <FcTodoList size={25} />
              Services
              </Link>
            </li>
            <li className="nav-item">
            <Link
                to="testimonial"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
              <FcRating size={25} />
              Testimonial
              </Link>
            </li>
            <li className="nav-item">
            <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
              <FcContacts size={25} />
              Contact
              </Link>
            </li>
            <li className="nav-item">
            <Link
                to="feedback"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
              <FcFeedback size={25} />
              Feedback
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-items-only-icons">
         <ul>
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={25} />
              </Link>
            </li>
            <li className="nav-item">
            <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
              <FcAbout size={25} />
              </Link>
            </li>
            <li className="nav-item">
            <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
              <FcTodoList size={25} />
              </Link>
            </li>
            <li className="nav-item">
            <Link
                to="testimonial"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
              <FcRating size={25} />
              </Link>
            </li>
            <li className="nav-item">
            <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
              <FcContacts size={25} />
              </Link>
            </li>
            <li className="nav-item">
            <Link
                to="feedback"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
              <FcFeedback size={25} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
