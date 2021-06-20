import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProjectSectionData } from "../ProjectPageSection/ProjectSectionData";

const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const getStarted = {
        border: "1px solid #9F1718",
        backgroundColor: "#9F1718",
        padding: "9px ",
    };

    return (
        <header id="header" className="fixed-top header-scrolled">
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
                        onClick={handleNavCollapse}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
                        id="navbarNavDropdown"
                    >
                        <ul
                            className="navbar-nav w-100 justify-content-end"
                            style={{ display: "flex" }}
                        >
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    to="/"
                                    onClick={handleNavCollapse}
                                >
                                    Home
                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/volunteer-signup"
                                    onClick={handleNavCollapse}
                                >
                                    Be a Volunteer
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
                                        <Link onClick={handleNavCollapse} className="dropdown-item" to="/covid">
                                            COVID
                    </Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleNavCollapse} className="dropdown-item" to="/health">
                                            Health
                    </Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleNavCollapse} className="dropdown-item" to="/housing">
                                            Housing
                    </Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleNavCollapse} className="dropdown-item" to="/clothing">
                                            Clothing
                    </Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleNavCollapse} className="dropdown-item" to="/food">
                                            Food
                    </Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleNavCollapse} className="dropdown-item" to="/education">
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
                                            <Link onClick={handleNavCollapse}
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
                                        <Link onClick={handleNavCollapse} className="dropdown-item" to="/donate-covid">
                                            COVID
                    </Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleNavCollapse} className="dropdown-item" to="/cause">
                                            Cause
                    </Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleNavCollapse} className="dropdown-item" to="/volunteer">
                                            Volunteer
                    </Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleNavCollapse} className="dropdown-item" to="/donate-administration">
                                            Administration
                    </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link onClick={handleNavCollapse} className="nav-link" to="/transparency">
                                    Transparency
                </Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={handleNavCollapse} className="nav-link" to="/aboutus">
                                    About Us
                </Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={handleNavCollapse} className="nav-link" to="/community">
                                    Our Community
                </Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={handleNavCollapse} className="nav-link" to="/contact">
                                    Contact
                </Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={handleNavCollapse} className="nav-link" to="/sign-in">
                                    Sign In
                </Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={handleNavCollapse}
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
