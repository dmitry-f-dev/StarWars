import react from "react";

export default function Card(props) {
  return (
    <div
      style={{
        witdth: "20%",
        border: "1px solid #ccc",
        float: "left"
      }}
    >
      <div>Имя: {props.name}</div>
      <div>Пол: {props.gender}</div>
      <div>Id: {props.characterId}</div>
      <img
        src={
          "https://starwars-visualguide.com/assets/img/characters/" +
          props.characterId +
          ".jpg"
        }
        alt="Image.jpg"
        width="200"
      />
    </div>
  );
}
