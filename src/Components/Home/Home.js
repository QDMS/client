import React from "react";
import HomeStyle from "./HomeStyle.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';

const Home = ({ theme, changeTheme }) => {
  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <p className="moon-theme-icon">
            <BsFillMoonStarsFill size={40} />
          </p>
        ) : (
          <p className="sun-theme-icon">
            <BsFillSunFill size={40} />
          </p>
        )}
      </div>

      <div className="container home-content">
        <Fade right>
        <h1>At Chucks Junk Removal & More We Do</h1>
        <h3>
          <Typewriter
            options={{
              strings: [
                "Tree Removal",
                "Tree Trimming",
                "Hedge Trimming",
                "Stump Removal",
                "Debris Removal",
                "Junk Removal",
                "Moving",
                "House Clean-Out",
                "Land Clearing",
                "Lawn Service",
                "Curb Side Pick-up",
                "Abandoned Items Removal",
                "Boat Removal",
                "RV Removal",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        </Fade>
        <Fade bottom>
        <div className="button-for-action">
          <Link to="contact">
            <div className="hire-me-button">Hire Me</div>
          </Link>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
