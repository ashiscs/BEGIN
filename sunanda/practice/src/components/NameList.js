import React from "react";
import { Person } from "./Person";

export function NameList() {
  const names = [
    { id: 1, name: "sunanda", skill: "react" },
    { id: 2, name: "Arpan", skill: "Python" },
    { id: 3, name: "Subhajit", skill: "Ruby" },
  ];
  const plist = names.map((person) => <Person key={person.id} p={person} />);
  return <div>{plist}</div>;
}
