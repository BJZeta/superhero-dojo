import React, { Component } from "react";

///////DATA is FINALLY passing thru, now see if you can update fighters array w/o overwriting original data inside

export default class BattleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fighters: [],
    };
  }

  componentDidMount() {
    localStorage.setItem(
      this.props.location.state.name,
      JSON.stringify(this.props.location.state.fighter)
    );

    this.updateFighters();
  }

  updateFighters() {
    for (let i = 0; i < localStorage.length; i++) {
      const newFighter = JSON.parse(localStorage.getItem(localStorage.key(i)));

      this.setState((state) => {
        const fighters = state.fighters.concat(newFighter);

        return {
          fighters,
        };
      });
    }
  }

  render() {
    return <div></div>;
  }
}
