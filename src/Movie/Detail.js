import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // <Route>에 매치된 params에 접근하기 위해 사용한다.
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  // 질문2 어떻게 App랑 Movie파일에 있는 변수 갖고오게 되는지? <- useParams: 1)path의 "url에서 쓴 변수만" 가져올 수 있음. 2):id가 연결된 파일인 Detail에서만 변수를 가져올 수 있음.
  //비구조화 할당으로 id 변수에 useParams의 객체를 할당함.
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((res) => res.json())
      .then((result) => {
        setData((cur) => (cur = result.data.movie));
      });
  }, []);
  console.log(data);

  return (
    <div className={styles.detail}>
      <div>{<img src={data.medium_cover_image} alt={data.id} />} </div>

      <div>
        <div>
          <h3>{data.title_long}</h3>
        </div>
        <div>Rating:{data.rating}</div>
        <div>Runtime:{data.runtime}</div>
        {/* <ul>
          {data.genres.map((gr) => (
            <li>{gr}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default Detail;
