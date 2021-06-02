import React from "react";
import { Link } from "react-router-dom";
import { EventSectionData } from "../EventPageSection/EventSectionData";

const Header = () => {
  return (
    <header id="header" className="fixed-top header-scrolled">
      <div className="container d-flex align-items-center justify-content-between">
        {/* <h1 className="logo"><Link to="/">Hami Nepal</Link></h1> */}
        <Link to="/" className="logo">
          <img src="/assets/img/logo-only.png" alt="" className="img-fluid" />
        </Link>

        <nav id="navbar" className="navbar">
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
                <span>Cause</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <li>
                  <Link to="#">Covid</Link>
                </li>
                <li>
                  <Link to="#">Health</Link>
                </li>
                <li>
                  <Link to="#">Housing</Link>
                </li>
                <li>
                  <Link to="#">Clothing</Link>
                </li>
                <li>
                  <Link to="#">Food</Link>
                </li>
                <li>
                  <Link to="#">Education</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="nav-link scrollto " to="/transparency">
                Transparency
              </Link>
            </li>

            <li className="dropdown">
              <Link href="#">
                <span>Events</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                {EventSectionData.map((keyBundle) => (
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
                <span>Donate</span> <i className="bi bi-chevron-down"></i>
              </Link>
              <ul>
                <li>
                  <Link to="/covid">Covid</Link>
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
              <Link className="nav-link scrollto" href="#contact">
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
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
