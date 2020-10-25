import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Superhero DOJO</Navbar.Brand>
      </Navbar>
    );
  }
}
