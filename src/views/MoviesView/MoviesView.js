import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/API';
import CardsOfMovies from 'components/CardsOfMovies';
import CardOfMovie from 'components/CardOfMovie';
import Button from 'components/Button';
import s from './MoviesView.module.scss';

const MoviesView = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  let page = Number(searchParams.get('page')) || 1;
  const params = { query, page };

  useEffect(() => {
    if (query) {
      fetchMoviesByQuery(query, page).then(({ results }) => setMovies(results));
    }
  }, [query, page]);

  const handlerSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    if (form.search.value) {
      setSearchParams({ ...params, query: form.search.value });
      form.reset();
    }
  };

  const changePage = evt => {
    switch (evt.target.name) {
      case 'increment':
        setSearchParams({ ...params, page: page + 1 });
        break;
      case 'decrement':
        setSearchParams({ ...params, page: page - 1 || 1 });
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
