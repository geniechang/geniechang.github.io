import { withRouter } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Header.css";

function Header({ location }) {
  // const dark = location.pathname !== "/projects/incident-tracking-app";
  const dark = false;

  return (
    <Navbar
      sticky="top"
      expand="sm"
      className={dark ? "Header-dark" : "Header-light"}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" className={dark ? "Link-dark" : "Link-light"}>
              Home
            </Nav.Link>
            <Nav.Link href="/#projects">Projects</Nav.Link>
            {/* TODO: add nav for specific projects? */}
            <Nav.Link href="/#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default withRouter(Header);
