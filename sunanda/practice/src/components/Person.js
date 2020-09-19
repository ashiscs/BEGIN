import React from "react";

export function Person({ p }) {
  return (
    <div>
      <h2>
        Hyy, i am {p.name} and i know {p.skill}
      </h2>
    </div>
  );
}
