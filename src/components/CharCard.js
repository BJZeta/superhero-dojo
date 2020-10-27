import React, { Component } from "react";

export default class CharCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      card: [],
    };
  }

  componentDidMount() {
    fetch(`https://superheroapi.com/api/${process.env.API_TOKEN}/character-id`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            card: result,
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
    return <div></div>;
  }
}
