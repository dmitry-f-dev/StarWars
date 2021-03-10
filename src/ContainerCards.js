import React from "react";
import Card from "./Card";

export default function ContainerCards() {
  const [characterId, setCharacterId] = React.useState([1, 2, 3]);
  return (
    <div>
      <input type="button" value="<<<<"></input>
      <input type="button" value=">>>>"></input>
      <input type="serch"></input>
      <input type="button" value="Serch"></input>

      {characterId.map((n) => (
        <div key={n}>
          <Card characterId={n} />
        </div>
      ))}
    </div>
  );
}
