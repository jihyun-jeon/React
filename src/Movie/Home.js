import { useState, useEffect } from "react";
import Movie from "./Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    )
      .then((res) => res.json())
      .then((result) => {
        setMovies(result.data.movies);
        setLoading(false);
      });
  }, []);

  // console.log(movies);
  //   console.log(movies.map((el) => <div key={el.id}>{el.title}</div>));

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        /* 질문1)map의 반환값은 배열인에 어떻게 자동으로 텍스트가 렌더되는지? 
         : 배열이 바로 html로 출력되는게 아니라 jsx파일이기 때문에 jsx파일에 배열이 들어간 후, jsx를 바벨로 트랜스파일러를 통해 출력되게 됨. */
        movies.map((el) => (
          <Movie
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

export default Home;
