import React from "react";
import AboutStyle from "./AboutStyle.css";
import logo from "../../Image/logo.png";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </Fade>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <Flip left>
              <div className="about-title">
                <h1>About Us</h1>
                <span className="line"></span>
              </div>
            </Flip>
            <Fade right>
              <p>
                Hi there! We are Chucks Junk Removal & More, a Junk Removal
                service based in Lee County Fl. We have a passion for removing
                your junk or unwanted items. We have been working in Junk
                Removal for over 10 years. We am highly motivated and always
                strive to make our customers happy. We have awesome equipment
                very reliable service.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
