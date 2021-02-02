import React from 'react'
import {
  Nav,
  Navbar,
  Container,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Superhero DOJO</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/search">
                  <Nav.Link>
                      <i className="fas fa-search"/> Search Hero
                  </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/dojo">
                  <Nav.Link>
                      <i className="fas fa-fist-raised"/> Enter DOJO
                  </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
