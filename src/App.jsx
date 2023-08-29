import React from 'react'
import { createRoot } from 'react-dom'

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  //components will always be capitalized
  return React.createElement(
    "div", //what type of element we put in here, it could be, for example, a "p"
    {}, //you can also put null instead of empty object
    [
      React.createElement("h1", {}, "Adopt Me!"), //this is the children of the previous div
      React.createElement(Pet, {
        animal: "Dog",
        name: "Fosca",
        breed: "Dalmatian-Labrator",
      }),
      React.createElement(Pet, {
        animal: "Cat",
        name: "Cocó",
        breed: "Mixed",
      }),
      React.createElement(Pet, {
        animal: "Rabbit",
        name: "Bob Marley",
        breed: "Mixed",
      }),
    ]
  );
}; // with this we have created a stamp but we have not used it. We have actually created a class but haven't created an instance yet

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
