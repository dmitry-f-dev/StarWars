import React from "react";

export default function Card(props) {
  const [characterData, setCharacterData] = React.useState(null);

  const srcImg =
    "https://starwars-visualguide.com/assets/img/characters/" +
    props.characterId +
    ".jpg";

  async function fetchDataJson(url) {
    const res = await fetch(url);
    res
      .json()
      .then((res) => setCharacterData(res))
      .catch();
  }

  React.useEffect(() => {
    fetchDataJson("https://swapi.dev/api/people/" + props.characterId + "/");
  }, []);

  if (characterData === null) {
    return <h2>Loading...</h2>;
  }

  return (
    <div
      style={{
        width: "14%",
        border: "1px solid #ccc",
        float: "left",
        padding: "3px",
        margin: "3px"
      }}
    >
      <div>Имя: {characterData.name}</div>
      <div>Пол: {characterData.gender}</div>
      <div>Id: {props.characterId}</div>
      <div>Планета: {props.characterId}</div>
      <img src={srcImg} alt="Image.jpg" width="95%" />
    </div>
  );
}
