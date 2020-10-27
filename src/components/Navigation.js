import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link className="text-white" to="/">
            Superhero DOJO
          </Link>
        </Navbar.Brand>
        <Nav.Item>
          <Link to="/characters">Characters</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/battle-room">Battle Room</Link>
        </Nav.Item>
      </Navbar>
    );
  }
}
