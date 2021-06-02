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
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <Link className="nav-link scrollto" href="#services">
                Services
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto " href="#work">
                Our Work
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/volunteer-signup">
                Be Volunteer
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
                  <Link to="#">Covid</Link>
                </li>
                <li>
                  <Link to="#">Cause</Link>
                </li>
                <li>
                  <Link to="#">Volunteer</Link>
                </li>
                <li>
                  <Link to="#">Administration</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="nav-link scrollto" href="#contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="getstarted" to="/sigup">
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
