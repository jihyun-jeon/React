import styles from "../Movie/App.module.css";
import { Link } from "react-router-dom";

function PracticeMovie({ id, conerImg, title, summary, genres }) {
  return (
    <div>
      <img src={conerImg} alt={title} />
      <h2 className={styles.title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary.length > 230 ? `${summary.slice(0, 230)}...` : summary}</p>
      <ul>
        {genres.map((gr) => (
          <li key={gr}>{gr}</li>
        ))}
      </ul>
    </div>
  );
}

export default PracticeMovie;
