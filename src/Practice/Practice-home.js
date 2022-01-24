import { useState, useEffect } from "react";
import PracticeMovie from "./Practice-Movie";

function PracticeHome() {
  const [showing, setShow] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    )
      .then((res) => res.json())
      .then((result) => {
        setData(() => result.data.movies);
        setShow((prev) => !prev);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {showing ? (
        <h2>Loading...</h2>
      ) : (
        data.map((el) => (
          <PracticeMovie
            key={el.id}
            id={el.id}
            conerImg={el.medium_cover_image}
            title={el.title}
            summary={el.summary}
            genres={el.genres}
          />
        ))
      )}
    </div>
  );
}

export default PracticeHome;
