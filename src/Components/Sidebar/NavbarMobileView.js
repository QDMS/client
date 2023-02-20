import React, { useState } from "react";
import "./NavbarMobileViewStyle.css";
import { FcMenu } from "react-icons/fc";
import {
  FcHome,
  FcAbout,
  FcRating,
  FcTodoList,
  FcContacts,
  FcFeedback,
} from "react-icons/fc";
import { Link } from "react-scroll";
import Switch from "react-switch";

const NavbarMobileView = ({theme, changeTheme}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="mobile-view-navbar">
      <div className="navbar-header">
        <p>
          <FcMenu size={25} onClick={handleClick} />
        </p>
      </div>

      {open ? (
        <div className="mobile-nav">
          <ul>
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
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
            <li className="nav-item-mobileview">
            <Switch onChange={changeTheme} checked={theme === 'light'} />
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobileView;
