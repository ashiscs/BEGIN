import React, { Component } from "react";
import { ChildComponent } from "./ChildComponent";

export class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      parentName: "Debashis samanta",
    };
    this.greetp = this.greetp.bind(this);
  }
  greetp() {
    alert(`Hello ${this.state.parentName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent />
        <button onClick={this.greetp}> greet</button>
      </div>
    );
  }
}
