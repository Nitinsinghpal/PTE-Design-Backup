import React, { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import "./SideNavBar.css";
import profile1 from "../../Images/user.jpg";
export const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const openSubMenu = () => {
    setIsVisible((prev) => !prev);
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const subMenuStyle = {
    display: isVisible ? 'absolute':'none',
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
          <div className="SideNavBar-Left-Content">
            <div class="SideNavBar-Left-Head">
              <div class="SideNavBar-Left-User-Img">
                <img src={profile1} alt="" />
              </div>
              <div class="SideNavBar-Left-User-Details">
                <span class="SideNavBar-Left-User-Title">web developer</span>
                <span class="SideNavBar-Left-User-Name">John Doe</span>
              </div>
            </div>
            <div className="SideNavBar-Left-Nav">
              <div className="SideNavBar-Left-Menu">
                <p className="SideNavBar-Left-Title">Main</p>
                <ul>
                  <li className="SideNavBar-Left-Nav-Li">
                    <a href="#">
                      <i class="icon ph-bold ph-house-simple"></i>
                      <span class="text">Dashboard</span>
                    </a>
                  </li>
                  <li className="SideNavBar-Left-Nav-Li" onClick={openSubMenu}>
                    <a href="#">
                      <i class="icon ph-bold ph-user"></i>
                      <span class="text">Audience</span>
                      <i class="arrow ph-bold ph-caret-down"></i>
                    </a>
                    <ul className={`SideNavBar-Left-Nav-Li-Sub-Menu ${isVisible ? 'show-SubMenu' : ''}`}>
                      {console.log(isVisible)}
                      <li className="SideNavBar-Left-Nav-Li-Sub-Menu-Li">
                        <a href="#">
                          <span class="SideNavBar-Left-Nav-Li-Sub-Menu-Text">
                            Users
                          </span>
                        </a>
                      </li>
                      <li className="SideNavBar-Left-Nav-Li-Sub-Menu-Li">
                        <a href="#">
                          <span class="SideNavBar-Left-Nav-Li-Sub-Menu-Text">
                            Subscribers
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>{" "}
                  <li className="SideNavBar-Left-Nav-Li">
                    <a href="#">
                      <i class="icon ph-bold ph-file-text"></i>
                      <span class="text">Posts</span>
                    </a>
                  </li>{" "}
                  <li className="SideNavBar-Left-Nav-Li">
                    <a href="#">
                      <i class="icon ph-bold ph-calendar-blank"></i>
                      <span class="text">Schedule</span>
                    </a>
                  </li>
                  <li className="SideNavBar-Left-Nav-Li">
                    <a href="#">
                      <i class="icon ph-bold ph-chart-bar"></i>
                      <span class="text">Income</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="SideNavBar-Left-Menu">
                <p className="SideNavBar-Left-Title">Settings</p>
                <ul>
                  <li className="SideNavBar-Left-Nav-Li">
                    <a href="#">
                      <i class="icon ph-bold ph-gear"></i>
                      <span class="text">Settings</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="SideNavBar-Left-Menu">
                <p className="SideNavBar-Left-Title">Account</p>
                <ul>
                  <li className="SideNavBar-Left-Nav-Li">
                    <a href="#">
                      <i class="icon ph-bold ph-house-simple"></i>
                      <span class="text">LogOut</span>
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
