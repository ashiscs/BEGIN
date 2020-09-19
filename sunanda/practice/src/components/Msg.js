import React, { Component } from "react";

class Msg extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hyy visitors ",
    };
    this.changemsg = this.changemsg.bind(this);
  }
  changemsg() {
    this.setState({
      message: "ok, are you stocking me, but its good",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changemsg}>Incriment</button>
      </div>
    );
  }
}
export default Msg;
