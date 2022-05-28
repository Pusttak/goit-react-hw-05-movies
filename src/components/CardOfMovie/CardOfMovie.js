import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './CardOfMovie.module.scss';

const CardOfMovie = ({
  id,
  title,
  vote_average,
  poster_path,
  release_date,
}) => {
  const location = useLocation();

  return (
    <div className={s.item}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <div className={s.ratingWrap}>
          <span className={s.rating}>{vote_average}</span>
        </div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNW08SIItZE3jSbsda_zoxn1T3jQpelOe4tQ&usqp=CAU'
          }
          alt={title}
          className={s.poster}
        />
        <div className={s.textWrap}>
          <p className={s.title}>{title}</p>
          <p className={s.date}>({release_date})</p>
        </div>
      </Link>
    </div>
  );
};

export default CardOfMovie;

CardOfMovie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
};
