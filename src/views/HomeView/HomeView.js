import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/API';
import CardsOfMovies from 'components/CardsOfMovies';
import CardOfMovie from 'components/CardOfMovie';
import Button from 'components/Button';
import s from './HomeView.module.scss';

const HomeView = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  let currentPage = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    fetchTrendingMovies(currentPage).then(({ results }) => setMovies(results));
  }, [currentPage]);

  const changePage = evt => {
    switch (evt.currentTarget.name) {
      case 'increment':
        setSearchParams({ page: currentPage + 1 });
        break;
      case 'decrement':
        setSearchParams({ page: currentPage - 1 || 1 });
        break;

      default:
        break;
    }
  };

  return (
    movies && (
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
    )
  );
};

export default HomeView;
