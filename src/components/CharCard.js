import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class CharCard extends Component {
  state = {
    loading: true,
    name: null,
    powerstats: {},
    bio: {},
    aliases: [],
    img: null,
  };

  async componentDidMount() {
    const url = `https://www.superheroapi.com/api.php/3619192178108339/${this.props.charId}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      name: data.name,
      powerstats: data.powerstats,
      bio: data.biography,
      aliases: data.biography.aliases,
      img: data.image.url,
    });
    console.log(data);
  }

  render() {
    return (
      <Card style={{ width: "10rem" }}>
        <Card.Img
          variant="bottom"
          src={this.state.img}
          style={{ maxHeight: "12rem" }}
        />
        <Card.Body className="text-center">
          <Card.Title>{this.state.name}</Card.Title>
          <Button variant="primary" style={{ padding: "4px" }}>
            Check Stats
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
