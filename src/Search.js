import React from "react";

export default function Search({ searchRequest }) {
  const [serch, setSerch] = React.useState(null);

  async function fetchDataJson(url) {
    const res = await fetch(url);
    res
      .json()
      .then((res) => setSerch(res))
      .catch();
  }

  React.useEffect(() => {
    if (searchRequest !== "")
      fetchDataJson(`https://swapi.dev/api/people/?search=${searchRequest}`);
  }, [searchRequest]);

  if (serch === null) {
    return <h2>Loading...</h2>;
  }

  if (serch.count === 0) {
    return <h2>Not found</h2>;
  }

  return (
    <div>
      {serch.results.map((n) => (
        <div key={n.name}>
          <div>Имя: {n.name}</div>
          <div>Пол: {n.gender}</div>
        </div>
      ))}
    </div>
  );
}
