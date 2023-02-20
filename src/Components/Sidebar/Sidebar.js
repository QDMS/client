import React, { useState } from "react";
import SidebarStyle from "./SidebarStyle.css";
import Home from "./../Home/Home";

import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import SidebarList from './SidebarList';

const Sidebar = ({theme, changeTheme}) => {
  const [expandSidebar, setExpandSidebar] = useState(true);

  const handleClick = () => {
    setExpandSidebar(!expandSidebar);
  };

  return (
    <div className="container-fluid sidebar-section">
      <div className={expandSidebar ? "sidebar-expand sidebar" : "sidebar"}>
        <div className="icon-for-sidebar-expand-and-collapse">
          <p onClick={handleClick}>

            {expandSidebar ? (
              <TiChevronLeft size={30} />
            ) : (
              <TiChevronRight size={30} />
            )
          }

          </p>
        </div>
        <SidebarList expandSidebar={expandSidebar} />
      </div>

      <div className="container">
        <Home changeTheme={changeTheme} theme={theme}/>
      </div>
    </div>
  );
};

export default Sidebar;
