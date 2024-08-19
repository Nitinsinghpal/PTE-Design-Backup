import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import "./TopNav.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import profile from '../../Images/user.jpg'
function TopNav() {
  const { toggleNavbar, isOpen } = useOutletContext();

  console.log(isOpen);
  return (
    <div className="topNav-Main">
      <div className="topNav-Content">
        <div className="topNav-Top">
          {/* <button onClick={toggleNavbar}>Toggle Navbar</button> */}
          <div className="topNav-Top-Left">
            {/* <div className="topNav-Top-Menu-Btn" onClick={toggleNavbar}> */}
            <div className={`topNav-Top-Menu-Btn ${
                    isOpen ? "" : "toggleSideNav"
                  }`} onClick={toggleNavbar}>
              <RxHamburgerMenu />
            </div>
            <div className={`topNav-Top-SearchBar ${
                    isOpen ? "" : "addMargin"
                  }`}>
              <input
                className="topNav-Top-SearchBar-Input"
                type="text"
                placeholder="search"
              />
              <div className="topNav-Top-SearchBar-Icon">
                <CiSearch />
              </div>
            </div>
          </div>
          <div className="topNav-Top-Right">
            <div className="topNav-Top-UserProfile">
              <div className="topNav-Top-UserProfile-Image">
                <img src={profile}/>
              </div>
              <div className="topNav-Top-UserProfile-Name">Nitin Singh</div>
            </div>
          </div>
        </div>
        <div className="topNav-Bottom">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
