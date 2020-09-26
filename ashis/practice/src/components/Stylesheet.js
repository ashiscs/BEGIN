import React from "react";
import "./myStyles.css";

function Stylesheet(props) {
  let cl = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${cl} font-xl`}>Stylesheets</h1>
    </div>
  );
}

export default Stylesheet;
