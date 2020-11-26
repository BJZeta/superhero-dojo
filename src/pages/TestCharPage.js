import React, { Component } from "react";
import { Image, Container, Row, Col, Button } from "react-bootstrap";

export default class TestCharPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      character: {},
    };
  }

  componentDidMount() {
    const { key } = this.props.match.params;

    fetch(`https://www.superheroapi.com/api.php/3619192178108339/${key}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            character: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return <div>Update this page to be the new Character page</div>;
  }
}
