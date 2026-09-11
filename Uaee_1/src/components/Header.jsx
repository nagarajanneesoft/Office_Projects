import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Image,
  Modal,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import logo from "../assets/logo.png";
import user from "../../src/assets/profile.svg";
function Header() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary bg-header border-bottom"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="./">
          <div className="">
            <img src={logo} alt="logo" className="site_logo img-fluid" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* <Nav.Link href="./login">Login</Nav.Link>
            <Nav.Link href="./dashboard">Dashboard</Nav.Link>
            <Nav.Link href="./payment">Payment</Nav.Link>
            <Nav.Link href="./success">Success</Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Select
              aria-label="Default select example"
              className="form-control"
            >
              <option value="1">English</option>
              <option value="2">Arabic</option>
            </Form.Select>
          </Form>
          {/* Right side nav */}
          <Nav className="align-items-center text-center">
            <Nav.Item className="ms-2 me-2">
              <span className="user_profile_name">Welcome</span>
            </Nav.Item>

            <NavDropdown
              align="end"
              id="profile-dropdown"
              title={
                <Image
                  src={user}
                  alt="profile"
                  width="32"
                  height="32"
                  roundedCircle
                  className="user_profile_icon"
                />
              }
            >
              <NavDropdown.Item className="profile-dropdown-menu" href="">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item
                className="profile-dropdown-menu"
                href="./login"
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
