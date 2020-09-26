import React from "react";
import Person from "./components/Person";

function NameList() {
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
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));

  return <div>{personList}</div>;
}

export default NameList;
