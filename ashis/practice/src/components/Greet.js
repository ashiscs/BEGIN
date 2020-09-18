import React from "react";

//function Greet() {
//    return <h1>Hello Ashis!</h1>
//}

const Greet = (props) => {
  const { name, hero } = props;
  return (
    <div>
      <h1>
        Hello {name} Paaji! a.k.a {hero}
      </h1>
    </div>
  );
};

export default Greet;
