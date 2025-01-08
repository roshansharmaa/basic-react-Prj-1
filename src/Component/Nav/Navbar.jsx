import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="nav-div">
        <nav className="nav-cont">
          <a href="" className="nav-one">
            <img src={logo} alt="" />
          </a>
          <ul className="nav-two">
            <a href="">
              <li>Fans</li>
            </a>

            <a href="">
              <li>Lights</li>
            </a>

            <a href="">
              <li>Air Cooler</li>
            </a>
            <a href="">
              <li>
                <div className="dropdown">
                  <button className="dropbtn">
                    Dropdown
                    <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
              </li>
            </a>
          </ul>
          <a href="" className="nav-three">
            <button>Logout</button>
          </a>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
