import React from "react";
export function FClick() {
  function clicker() {
    console.log("You clickeed");
  }
  return (
    <div>
      <h1>herh</h1>
      <button onClick={clicker}>Click</button>
    </div>
  );
}
