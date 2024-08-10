import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import "./TopNav.css";
import { RxHamburgerMenu } from "react-icons/rx";
function TopNav() {
  const {toggleNavbar,isOpen} = useOutletContext();

  console.log(isOpen)
  return (
    <div className="topNav-Main">
      <div className="topNav-Content">
        <div className="topNav-Top">
        {/* <button onClick={toggleNavbar}>Toggle Navbar</button> */}
        <div class="topNav-Top-Menu-Btn" onClick={toggleNavbar}>
        <RxHamburgerMenu />
        </div>
        TopNav
        </div>
        <div className="topNav-Bottom">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
