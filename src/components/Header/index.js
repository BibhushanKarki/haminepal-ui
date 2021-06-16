import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { ProjectSectionData } from "../ProjectPageSection/ProjectSectionData";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  // const [width, setWidth] = useState(window.innerWidth);
  
  // useEffect(() => {
  //   function handleResize() {
  //     setWidth(window.innerWidth);
  //   }
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [width]);

  // useEffect(() => {
  //   width < 992 && handleNavCollapse();
  // });

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  // console.log(width); 
  // const [isActive, setActive] = useState("false");
  // const [isIconActive, setIconActive] = useState("false");
  // // const [isDropdownActive, setDropdownActive] = useState("false");
  // const [isSmallDropdownActive, setSmallDropdownActive] = useState("false");
  // const handleToggle = () => {
  //   setActive(!isActive);
  //   setIconActive(!isIconActive);
  // };
  // const handleIconToggle = () => {
  //   setIconActive(!isIconActive);
  //   setActive(!isActive);
  // };
  // // const handleDropdownToggle = () => {
  // //         setDropdownActive(!isDropdownActive);
  // // };
  // const handleSmallDropdownToggle = () => {
  //   setSmallDropdownActive(!isSmallDropdownActive);
  // };

  const getStarted = {
    border: "1px solid #9F1718",
    // borderRadius: "10px",
    backgroundColor: "#9F1718",
    padding: "9px ",
  };

  return (
    <header id="header" className="fixed-top header-scrolled">
      {/* <div className="container d-flex align-items-center justify-content-between">
        
        <Link to="/" className="logo">
          <img src="/assets/img/logo-only.png" alt="" className="img-fluid" />
        </Link>

        <nav
          id="navbar"
          className={isActive ? "navbar" : "navbar navbar-mobile"}
        >
          <ul>
            <li>
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/volunteer-signup">
                Be Volunteer
              </Link>
            </li>
            <li className="dropdown">
              <Link to="/">
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
              <Link to="/">
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
              <Link className="nav-link " to="/transparency">
                Transparency
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/aboutus">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/community">
                Our Community
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/sign-in">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="getstarted" to="/sign-up">
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
      </div> */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid d-flex justify-content-between">
          <Link to="/" className="logo">
            <img src="/assets/img/logo-only.png" alt="" className="img-fluid" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarNavDropdown"
          >
            <ul
              className="navbar-nav w-100 justify-content-end"
              // onClick={handleNavCollapse}
              style={{ display: !isNavCollapsed ? "none" : "flex" }}
            >
              <li className="nav-item" >
                <Link className="nav-link" aria-current="page" to="/" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/volunteer-signup">
                  Be Volunteer
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cause
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/covid">
                      COVID
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/health">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/housing">
                      Housing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/clothing">
                      Clothing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/food">
                      Food
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/education">
                      Education
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Projects
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {ProjectSectionData.map((keyBundle) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/events/${keyBundle.key}`}
                        key={keyBundle.key}
                      >
                        {keyBundle.displayName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Donate
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/donate-covid">
                      COVID
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cause">
                      Cause
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/volunteer">
                      Volunteer
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/donate-administration">
                      Administration
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/transparency">
                  Transparency
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/community">
                  Our Community
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sign-in">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link getStarted"
                  to="/sign-up"
                  style={getStarted}
                >
                  Join Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
