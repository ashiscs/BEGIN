import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
    };
  }
  handleusername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  clicker = (event) => {
    alert(`${this.state.username}`);
  };
  render() {
    return (
      <form onSubmit={this.clicker}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleusername}
          ></input>
          <button type="submit">click here</button>
        </div>
      </form>
    );
  }
}

export default Form;
