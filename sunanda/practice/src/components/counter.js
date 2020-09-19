import React, { Component } from "react";

class counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.incriment = this.incriment.bind(this);
  }
  incriment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>count{this.state.count}</h1>
        <button onClick={this.incriment}>increment</button>
      </div>
    );
  }
}
export default counter;
