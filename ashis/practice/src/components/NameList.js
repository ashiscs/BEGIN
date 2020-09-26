import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["msd", "dsm", "smd"];
  const persons = [
    {
      id: 1,
      name: "msd",
      age: 39,
      skill: "finisher",
    },
    {
      id: 2,
      name: "chiku",
      age: 31,
      skill: "batsman",
    },
    {
      id: 3,
      name: "bumrah",
      age: 28,
      skill: "bowler",
    },
  ];
  const nameList = names.map((name, index) => <h2 key={index}>{index} : {name}</h2>);

  return <div>{nameList}</div>;
}

export default NameList;
