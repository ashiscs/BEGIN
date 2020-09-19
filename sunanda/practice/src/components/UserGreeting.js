import React, { Component } from "react";
export class UserGreeting extends Component {
  constructor() {
    super();
    this.state = {
      islgin: false,
    };
  }
  render() {
    let m;
    if (this.state.islgin) {
      m = "You are logged in";
    } else {
      m = "You are not logged in";
    }
    return <div>{m}</div>;
  }
}
