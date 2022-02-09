import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import PracticeMovie from "./Practice-Movie";

function PracticeHome() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    )
      .then((res) => res.json())
      .then((result) => {
        setData(() => result.data.movies);
        setLoading((cur) => !cur);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((el) => (
          <PracticeMovie
            key={el.id}
            id={el.id}
            coverImage={el.medium_cover_image}
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
