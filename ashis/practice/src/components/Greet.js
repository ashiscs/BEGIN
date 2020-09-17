import React from "react";

//function Greet() {
//    return <h1>Hello Ashis!</h1>
//}

const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} Paaji! a.k.a {props.hero}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
