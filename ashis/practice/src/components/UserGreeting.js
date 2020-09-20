import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome Ashis!</div>;

    /*return(
        this.state.isLoggedIn ?
        <div>Welcome Ashis!</div> :
        <div>Welcome Guest</div>
    )*/
    /*let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome Ashis!</div>;
    } else {
      message = <div>Welcoem Guest!</div>;
    }
    return <div>{message}</div>;*/

    /*if (this.state.isLoggedIn) {
        return <div>Welcome Ashis !!</div>;
        } else {
        return <div>Welcome Guest !!</div>;
        }*/

    //return (
    //  <div>
    //  <div>Welcome Ashis!</div>
    //<div>Welcome guest</div>
    //</div>
    //)
  }
}

export default UserGreeting;
