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
    return <img src={this.state.img} alt={this.state.name} />;
  }
  /////set up what's left for the state, and decide what the card will have
}
