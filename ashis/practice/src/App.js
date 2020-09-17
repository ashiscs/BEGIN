import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Greet name="Dhoni" hero="Best Finisher">
        <p>This is children props</p>
      </Greet>
      <Greet name="Raina" hero="Best middle-order guy">
        <button>Action</button>
      </Greet>
      <Greet name="Bravo" hero="Best allrounder" />
      <Welcome name="Dhoni" hero="Best Finisher"/>
      <Welcome name="Raina" hero="Best Finisher"/>
      <Welcome name="Bravo" hero="Best Finisher"/>
    </div>
  );
}

export default App;
