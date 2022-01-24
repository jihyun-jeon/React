/*
link - 브라우저의 새로고침 없이도, 유저를 다른 페이지로 이동시켜주는 컴포넌트, a태그와 비슷
*/
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({ id, coverImage, title, summary, genres }) {
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

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
