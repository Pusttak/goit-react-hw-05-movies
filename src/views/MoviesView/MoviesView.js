import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/API';
import CardsOfMovies from 'components/CardsOfMovies';
import CardOfMovie from 'components/CardOfMovie';
import Button from 'components/Button';
import s from './MoviesView.module.scss';

const MoviesView = () => {
  const [movies, setMovies] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  let page = new URLSearchParams(location.search).get('page') || 1;

  useEffect(() => {
    if (query) {
      fetchMoviesByQuery(query, page).then(({ results }) => setMovies(results));
    }
  }, [query, page]);

  const handlerSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    if (form.search.value) {
      navigate({
        search: `query=${form.search.value}`,
      });
      form.reset();
    }
  };

  const changePage = evt => {
    switch (evt.currentTarget.name) {
      case 'increment':
        navigate({ search: `query=${query}&page=${Number(page) + 1}` });
        break;
      case 'decrement':
        navigate({ search: `query=${query}&page=${Number(page) - 1 || 1}` });
        break;

      default:
        break;
    }
  };

  return (
    <>
      <form className={s.form} onSubmit={handlerSubmit}>
        <input
          className={s.input}
          name="search"
          type="text"
          autoComplete="off"
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
      {movies && (
        <>
          <div className={s.wrapButton}>
            <Button name="decrement" onClick={changePage}>
              Previous Page
            </Button>
            <Button name="increment" onClick={changePage}>
              Next Page
            </Button>
          </div>
          <CardsOfMovies>
            {movies.map(
              ({ id, title, vote_average, poster_path, release_date }) => (
                <li key={id}>
                  <CardOfMovie
                    id={id}
                    title={title}
                    vote_average={vote_average}
                    poster_path={poster_path}
                    release_date={release_date}
                  />
                </li>
              )
            )}
          </CardsOfMovies>
        </>
      )}
    </>
  );
};

export default MoviesView;
