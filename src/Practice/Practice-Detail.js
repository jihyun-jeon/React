import { useParams } from "react-router-dom"; // <Route>에 매치된 params에 접근하기 위해 사용한다.
import { useEffect, useState } from "react";
import styles from "./Practice-Detail.module.css";

function PracticeDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [showing, setShowing] = useState(true);

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((res) => res.json())
      .then((result) => {
        setData((cur) => (cur = result.data.movie));
        setShowing((cur) => !cur);
      });
  }, []);
  console.log(data.genres);

  return (
    <div>
      {showing ? (
        <h1>Loding detail...</h1>
      ) : (
        <div className={styles.detail}>
          <div>{<img src={data.medium_cover_image} alt={data.id} />} </div>

          <div>
            <div>
              <h3>{data.title_long}</h3>
            </div>
            <div>Rating:{data.rating}</div>
            <div>Runtime:{data.runtime}</div>
            <ul>
              {data.genres.map((gr) => (
                <li key={gr}>{gr}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default PracticeDetail;
