import { Link } from "react-router-dom";

function PracticeMovie({ id, coverImage, title, summary, genres }) {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary.length > 230 ? `${summary.slice(0, 231)}...` : summary}</p>
      <ul>
        {genres.map((gr) => (
          <li key={gr}>{gr}</li>
        ))}
      </ul>
    </div>
  );
}

export default PracticeMovie;
