import React, { Component } from "react";

export default class BattleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fighters: [{}],
    };
  }

  componentDidMount() {
    this.setState({
      fighters: this.props.location.state,
    });
  }

  render() {
    return <div></div>;
  }
}
