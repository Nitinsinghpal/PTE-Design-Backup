import React, { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import "./SideNavBar.css";
import profile1 from "../../Images/user.jpg";
export const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  // const [isActive, setIsActive] = useState(false);

  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item);
  };
  const openSubMenu = (item, childArr) => {

    // if (child !=="haveChild") {
    setIsVisible((prev) => !prev);

    // }
    handleClick(item);
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sideNavBar-Main">
      <div className="sideNavBar-Content">
        {/* <div className='SideNavBar-Left'>SideNavBar</div> */}
        <div
          className={`SideNavBar-Left ${
            isOpen ? "sidebarOpen" : "sidebarClosed"
          }`}
        >
          <div className={`SideNavBar-Left-Content ${isOpen ? "" : "sidebarMinimiseAlign"}`}>
          {/* <div className="SideNavBar-Left-Content"> */}
          
            <div class="SideNavBar-Left-Head">
              <div class="SideNavBar-Left-User-Img">
                <img src={profile1} alt="" />
              </div>
              <div className={`SideNavBar-Left-User-Details ${isOpen ? "" : "sidebarMinimise"}`}>
                <span class="SideNavBar-Left-User-Title">web developer</span>
                <span class="SideNavBar-Left-User-Name">John Doe</span>
              </div>
            </div>
            <div className="SideNavBar-Left-Nav">
              <div className="SideNavBar-Left-Menu">
                {/* <p className="SideNavBar-Left-Title">Main</p> */}
                <p className={`SideNavBar-Left-Title ${isOpen ? "" : "sidebarMinimiseAlign"}`}>Main</p>

                <ul>
                  {/* <li className="SideNavBar-Left-Nav-Li"> */}
                  <li 
                    className={`SideNavBar-Left-Nav-Li ${
                      activeItem === "dashboard" ? "active" : ""
                    }`}
                    onClick={() => handleClick("dashboard")}
                  >
                    <a href="#" className={`${isOpen ? "" : "sidebarMinimise"}`} data-toolTip="DashBoard">
                      <i class="icon ph-bold ph-house-simple"></i>
                      <span className={`text ${isOpen ? "" : "sidebarMinimise"}`}>Dashboard</span>
                    </a>
                  </li>
                  {/* <li className="SideNavBar-Left-Nav-Li" onClick={openSubMenu}> */}
                  <li
                    className={`SideNavBar-Left-Nav-Li ${
                      activeItem === "audience" ? "active" : ""
                    }`}
                    // onClick={() => openSubMenu("audience",["users","subscribers"])}
                  >
                    <a href="#" data-toolTip="Audience" className={`${isOpen ? "" : "sidebarMinimise"}`} onClick={() => openSubMenu("audience")}>
                      <i class="icon ph-bold ph-user"></i>
                      <span className={`text ${isOpen ? "" : "sidebarMinimise"}`}>Audience</span>
                      <i className={`arrow ph-bold ph-caret-down ${isOpen ? "" : "sidebarMinimise"}`}></i>
                      
                    </a>
                    <ul
                      className={`SideNavBar-Left-Nav-Li-Sub-Menu ${
                        isVisible ? "show-SubMenu" : ""
                      } ${isOpen ? "" : "show-Minimise-Submenu"}`}
                    >
                      {console.log(isVisible)}
                      {/* <li className="SideNavBar-Left-Nav-Li-Sub-Menu-Li"> */}
                      <li
                        className={`SideNavBar-Left-Nav-Li-Sub-Menu-Li ${
                          activeItem === "users" ? "active" : ""
                        }`}
                        onClick={() => handleClick("users")}
                      >
                        {/* <a href="#" className={`SideNavBar-Left-Nav-Li-Sub-Menu-Li-a ${isOpen ? "" : "sidebarMinimise"}`}> */}
                        <a href="#" className="SideNavBar-Left-Nav-Li-Sub-Menu-Li-a">
                        
                          <span class="SideNavBar-Left-Nav-Li-Sub-Menu-Text">
                            Users
                          </span>
                        </a>
                      </li>
                      {/* <li className="SideNavBar-Left-Nav-Li-Sub-Menu-Li"> */}

                      <li
                        className={`SideNavBar-Left-Nav-Li-Sub-Menu-Li ${
                          activeItem === "subscribers" ? "active" : ""
                        }`}
                        onClick={() => handleClick("subscribers")}
                      >
                        {/* <a href="#" className={`SideNavBar-Left-Nav-Li-Sub-Menu-Li-a ${isOpen ? "" : "sidebarMinimise"}`}> */}
                        <a href="#" className="SideNavBar-Left-Nav-Li-Sub-Menu-Li-a">
                          <span class="SideNavBar-Left-Nav-Li-Sub-Menu-Text">
                            Subscribers
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>{" "}
                  <li
                    className={`SideNavBar-Left-Nav-Li ${
                      activeItem === "posts" ? "active" : ""
                    }`}
                    onClick={() => handleClick("posts")}
                  >
                    <a href="#" className={`${isOpen ? "" : "sidebarMinimise"}`} data-toolTip="Posts">
                      <i class="icon ph-bold ph-file-text"></i>
                      <span className={`text ${isOpen ? "" : "sidebarMinimise"}`}>Posts</span>
                    </a>
                  </li>{" "}
                  <li
                    className={`SideNavBar-Left-Nav-Li ${
                      activeItem === "schedule" ? "active" : ""
                    }`}
                    onClick={() => handleClick("schedule")}
                  >
                    <a href="#" className={`${isOpen ? "" : "sidebarMinimise"}`} data-toolTip="Schedule">
                      <i class="icon ph-bold ph-calendar-blank"></i>
                      <span className={`text ${isOpen ? "" : "sidebarMinimise"}`}>Schedule</span>
                    </a>
                  </li>
                  <li
                    className={`SideNavBar-Left-Nav-Li ${
                      activeItem === "income" ? "active" : ""
                    }`}
                    onClick={() => handleClick("income")}
                  >
                    <a href="#" className={`${isOpen ? "" : "sidebarMinimise"}`} data-toolTip="Income">
                      <i class="icon ph-bold ph-chart-bar"></i>
                      <span className={`text ${isOpen ? "" : "sidebarMinimise"}`}>Income</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="SideNavBar-Left-Menu">
                <p className="SideNavBar-Left-Title">Settings</p>
                <ul>
                  <li
                    className={`SideNavBar-Left-Nav-Li ${
                      activeItem === "settings" ? "active" : ""
                    }`}
                    onClick={() => handleClick("settings")}
                  >
                    <a href="#" className={`${isOpen ? "" : "sidebarMinimise"}`} data-toolTip="Settings">
                      <i class="icon ph-bold ph-gear"></i>
                      <span className={`text ${isOpen ? "" : "sidebarMinimise"}`}>Settings</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="SideNavBar-Left-Menu">
                <p className="SideNavBar-Left-Title">Account</p>
                <ul>
                  <li
                    className={`SideNavBar-Left-Nav-Li ${
                      activeItem === "logOut" ? "active" : ""
                    }`}
                    onClick={() => handleClick("logOut")}
                  >
                    <a href="#" className={`${isOpen ? "" : "sidebarMinimise"}`} data-toolTip="Logout">
                      <i class="icon ph-bold ph-house-simple"></i>
                      <span className={`text ${isOpen ? "" : "sidebarMinimise"}`}>LogOut</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`SideNavBar-Right ${isOpen ? "" : "increaseWidthRight"}`}
        >
          <Outlet context={{ toggleNavbar, isOpen }} />
        </div>
      </div>
    </div>
  );
};
