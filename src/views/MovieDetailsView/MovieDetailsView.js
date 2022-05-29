import { useState, useEffect, Suspense, lazy } from 'react';
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
  useNavigate,
} from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { IoCaretBackOutline } from 'react-icons/io5';
import { fetchMoviesByID } from 'services/API';
import s from './MovieDetailsView.module.scss';
const Reviews = lazy(() =>
  import('views/Reviews' /* webpackChunkName: "Reviews" */)
);
const Cast = lazy(() => import('views/Cast' /* webpackChunkName: "Cast" */));

const MovieDetailsView = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMoviesByID(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    navigate(location?.state?.from || '/');
  };

  return (
    movie && (
      <>
        <button type="button" onClick={onGoBack} className={s.button}>
          <IoCaretBackOutline className={s.icon} />
          Back
        </button>
        <div className={s.wrapItem}>
          <img
            className={s.image}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNW08SIItZE3jSbsda_zoxn1T3jQpelOe4tQ&usqp=CAU'
            }
            alt={movie.title}
          />
          <div className={s.wrapText}>
            <span className={s.title}>{movie.title}</span>
            <div className={s.wrapRating}>
              <span className={s.genre}>
                {movie.genres.map(({ name }) => name).join(', ')}
              </span>
              <span className={s.rating}>
                <FaStar className={s.icon} />
                {movie.vote_average}
              </span>
            </div>
            <p className={s.description}>{movie.overview}</p>
          </div>
        </div>
        <div>
          <div className={s.subtitle}>Additional information</div>
          <ul className={s.wrapInformation}>
            <li>
              <NavLink
                to="cast"
                state={{ from: location?.state?.from }}
                className={({ isActive }) =>
                  isActive ? `${s.activeLink}` : `${s.link}`
                }
              >
                <span>Cast</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="reviews"
                state={{ from: location?.state?.from }}
                className={({ isActive }) =>
                  isActive ? `${s.activeLink}` : `${s.link}`
                }
              >
                <span>Reviews</span>
              </NavLink>
            </li>
          </ul>

          {
            <Suspense
              fallback={
                <p
                  style={{
                    textAlign: 'center',
                    marginTop: '25px',
                    fontWeight: '700',
                  }}
                >
                  Loading...
                </p>
              }
            >
              <Routes>
                <Route path="cast" element={<Cast movieId={movieId} />} />
                <Route path="reviews" element={<Reviews movieId={movieId} />} />
              </Routes>
            </Suspense>
          }
        </div>
      </>
    )
  );
};

export default MovieDetailsView;
