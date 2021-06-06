import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProjectSectionData } from "../ProjectPageSection/ProjectSectionData";

const Header = () => {
  const [isActive, setActive] = useState("false");
  const [isIconActive, setIconActive] = useState("false");
  // const [isDropdownActive, setDropdownActive] = useState("false");
  const [isSmallDropdownActive, setSmallDropdownActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
    setIconActive(!isIconActive);
  };
  const handleIconToggle = () => {
    setIconActive(!isIconActive);
    setActive(!isActive);
  };
  // const handleDropdownToggle = () => {
  //         setDropdownActive(!isDropdownActive);
  // };
  const handleSmallDropdownToggle = () => {
    setSmallDropdownActive(!isSmallDropdownActive);
  };
  return (
    <header id="header" className="fixed-top header-scrolled">
      <div className="container d-flex align-items-center justify-content-between">
        {/* <h1 className="logo"><Link to="/">Hami Nepal</Link></h1> */}
        <Link to="/" className="logo">
          <img src="/assets/img/logo-only.png" alt="" className="img-fluid" />
        </Link>

        <nav
          id="navbar"
          className={isActive ? "navbar" : "navbar navbar-mobile"}
        >
          <ul>
            <li>
              <Link className="nav-link scrollto active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/aboutus">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/volunteer-signup">
                Be Volunteer
              </Link>
            </li>
            <li className="dropdown">
              <Link href="#">
                <span>Cause</span>{" "}
                <i
                  className="bi bi-chevron-down"
                  onClick={handleSmallDropdownToggle}
                ></i>
              </Link>
              <ul
                className={isSmallDropdownActive ? "dropdown-active" : ""}
                style={{ display: isSmallDropdownActive ? "none" : "block" }}
              >
                <li>
                  <Link to="/covid">Covid</Link>
                </li>
                <li>
                  <Link to="/health">Health</Link>
                </li>
                <li>
                  <Link to="/housing">Housing</Link>
                </li>
                <li>
                  <Link to="/clothing">Clothing</Link>
                </li>
                <li>
                  <Link to="/food">Food</Link>
                </li>
                <li>
                  <Link to="/education">Education</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="nav-link scrollto " to="/transparency">
                Transparency
              </Link>
            </li>

            <li className="dropdown">
              <Link to="#">
                <span>Projects</span>{" "}
                <i
                  className="bi bi-chevron-down"
                  onClick={handleSmallDropdownToggle}
                ></i>
              </Link>
              <ul
                className={isSmallDropdownActive ? "dropdown-active" : ""}
                style={{ display: isSmallDropdownActive ? "none" : "block" }}
              >
                {ProjectSectionData.map((keyBundle) => (
                  <li>
                    <Link to={`/events/${keyBundle.key}`} key={keyBundle.key}>
                      {keyBundle.displayName}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="dropdown">
              <Link href="#">
                <span>Donate</span>{" "}
                <i
                  className="bi bi-chevron-down"
                  onClick={handleSmallDropdownToggle}
                ></i>
              </Link>
              <ul
                className={isSmallDropdownActive ? "dropdown-active" : ""}
                style={{ display: isSmallDropdownActive ? "none" : "block" }}
              >
                <li>
                  <Link to="/donate-covid">Covid</Link>
                </li>
                <li>
                  <Link to="/cause">Cause</Link>
                </li>
                <li>
                  <Link to="/volunteer">Volunteer</Link>
                </li>
                <li>
                  <Link to="/donate-administration">Administration</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/signin">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="getstarted" to="/signup">
                Join Now
              </Link>
            </li>
          </ul>
          <i
            className={
              isIconActive
                ? "bi mobile-nav-toggle bi-list"
                : "bi mobile-nav-toggle bi-x"
            }
            onClick={(handleToggle, handleIconToggle)}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
