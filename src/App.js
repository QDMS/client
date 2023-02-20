import React, {useState, createContext} from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import NavbarMobileView from "./Components/Sidebar/NavbarMobileView";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import Feedback from './Components/Feedback/Feedback';



export const ThemeContext = createContext(null);

const App = () => {

  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      <div id={theme}>
      <NavbarMobileView changeTheme={changeTheme} theme={theme}/>
      <Sidebar changeTheme={changeTheme} theme={theme}/>
      <About />
      <Projects />
      <Testimonial />
      <Contact />
      <Feedback />
      </div>
     
      
      <ScrollToTop
        smooth={true}
        top="20"
        color="black"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#81C76F" }}
      />
    </ThemeContext.Provider>
  );
};

export default App;
