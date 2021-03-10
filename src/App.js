import "./styles.css";
import React from "react";
import ContainerCard from "./ContainerCards";
import AllCards from "./AllCards";

export default function App() {
  return (
    <div className="App">
      <AllCards />
    </div>
  );
}

//<ContainerCard />

// https://swapi.dev/api/people/?search=r2

// "https://swapi.dev/api/people/2/"
// https://starwars-visualguide.com/assets/img/characters/2.jpg"
