import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { fetchCredits } from 'services/API';
import s from './Cast.module.scss';

const Cast = () => {
  const [actors, setActors] = useState(null);
  const movieId = useOutletContext();

  useEffect(() => {
    fetchCredits(movieId).then(({ cast }) => setActors(cast));
  }, [movieId]);

  return (
    actors && (
      <div className={s.wrapList}>
        <ul className={s.list}>
          {actors.map(({ cast_id, character, name, profile_path }) => {
            return (
              profile_path && (
                <li key={cast_id} className={s.listItem}>
                  <img
                    className={s.img}
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={name}
                  />
                  <span className={s.name}>{name} - </span>
                  <span className={s.character}>({character})</span>
                </li>
              )
            );
          })}
        </ul>
      </div>
    )
  );
};

export default Cast;
