import React, { Component } from "react";

class CClick extends Component {
  clicker() {
    console.log("You clicked me, buddy");
  }
  render() {
    return (
      <div>
        <button onClick={this.clicker}>Click</button>
      </div>
    );
  }
}
export default CClick;
