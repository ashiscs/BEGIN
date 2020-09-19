import React from "react";
const helo = (m) => {
  return (
    <div>
      <h2>
        Hyy, i am {m.name} and {m.children}
      </h2>
      {m.children}
    </div>
  );
};
export default helo;
