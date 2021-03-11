import React from "react";

export default function AllCards() {
  const [charactersData, setCharactersData] = React.useState(null);
  const [query, setQuery] = React.useState("https://swapi.dev/api/people/");

  function getImgCharacterId(url) {
    return (
      "https://starwars-visualguide.com/assets/img/characters/" +
      url.slice(0, -1).slice(28) +
      ".jpg"
    );
  }

  // "homeworld": "http://swapi.dev/api/planets/1/",  "name": "Tatooine",

  async function fetchDataJson(url) {
    console.log(url);
    const res = await fetch(url);
    res
      .json()
      .then((res) => setCharactersData(res))
      .catch();
  }

  function handrerNextCharacters() {
    if (charactersData.next !== null) {
      setQuery(charactersData.next.replace("http://", "https://"));
    }
  }

  function handrerPreviousCharacters() {
    if (charactersData.previous !== null) {
      setQuery(charactersData.previous.replace("http://", "https://"));
    }
  }
  React.useEffect(() => {
    fetchDataJson(query);
    //console.log(charactersData.results);
  }, [query]);

  if (charactersData === null) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <div>
        <input
          type="button"
          value="<<<<<<"
          onClick={handrerPreviousCharacters}
        ></input>
        <input
          type="button"
          value=">>>>>>"
          onClick={handrerNextCharacters}
        ></input>
      </div>
      {charactersData.results.map((n) => (
        <div key={n.name}>
          <div>Имя: {n.name}</div>
          <div>Пол: {n.gender}</div>
          <img
            src={"{getImgCharacterId(n.url)}"}
            alt={getImgCharacterId(n.url)}
            width="95%"
          />
        </div>
      ))}
    </div>
  );
}
