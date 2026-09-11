import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";

import logo from "../assets/logo.png";
import user from "../../src/assets/profile.svg";

function Header() {
  const [language, setLanguage] = useState("en");

  return (
    <Navbar className="bg-body-tertiary bg-header border-bottom" fixed="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="./" className="p-0">
          <Image src={logo} alt="VFS Global" className="site_logo" />
        </Navbar.Brand>

        {/* Right Side */}
        <Nav className="header-right align-items-center">
          {/* Language */}
          <div className="language-switcher">
            <button
              type="button"
              className={`language-flag ${language === "en" ? "active" : ""}`}
              onClick={() => setLanguage("en")}
            >
              GB
            </button>

            <button
              type="button"
              className={`language-flag ${language === "ar" ? "active" : ""}`}
              onClick={() => setLanguage("ar")}
            >
              AE
            </button>
          </div>

          {/* Welcome */}
          <span className="user_profile_name">Welcome</span>

          {/* Profile Dropdown */}
          <NavDropdown
            align="end"
            id="profile-dropdown"
            className="profile-dropdown"
            title={
              <Image
                src={user}
                alt="Profile"
                width="32"
                height="32"
                roundedCircle
                className="user_profile_icon"
              />
            }
          >
            <NavDropdown.Item href="#">Profile</NavDropdown.Item>

            <NavDropdown.Item href="#">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
