import React, { Component } from "react";
import "./App.css";
import Msg from "./components/Msg";
import Counter from "./components/counter";
import { FClick } from "./components/FClick";
import Clicker from "./components/CClick";
import { EventBind } from "./components/EventBind";
import { ParentComponent } from "./components/ParentComponent";
import { UserGreeting } from "./components/UserGreeting";
import { NameList } from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import "./appStyles.css";
import Styles from "./appStyles.module.css";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        {/* <h1 className="error">Error</h1>
        <h1 className={Styles.success}>Success</h1>
        <Stylesheet />
        <NameList />
        <UserGreeting />
        <ParentComponent />
        <EventBind />
        <FClick />
        <Clicker />
        <Counter />
        <Msg />
        <Greet />
        <Welcome />
        <Helo name="sunanda">
          <p>you are so good buddy!</p>
          <button>Click here</button>
        </Helo> */}
      </div>
    );
  }
}

export default App;
