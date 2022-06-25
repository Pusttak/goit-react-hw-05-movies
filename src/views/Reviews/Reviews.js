import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { fetchReviews } from 'services/API';
import s from './Reviews.module.scss';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const movieId = useOutletContext();

  useEffect(() => {
    fetchReviews(movieId).then(reviews => setReviews(reviews.results));
  }, [movieId]);

  return reviews.length > 0 ? (
    <ul className={s.list}>
      {reviews.map(
        ({ id, content, created_at, author_details: { username, rating } }) => {
          return (
            <li className={s.itemList} key={id}>
              <div className={s.date}>{created_at.slice(0, 10)}</div>
              <div className={s.wrapRating}>
                <div className={s.name}>{username}</div>
                {rating && (
                  <div className={s.rating}>
                    {rating}/10
                    <FaStar className={s.icon} />
                  </div>
                )}
              </div>
              <div className={s.content}>{content}</div>
            </li>
          );
        }
      )}
    </ul>
  ) : (
    <>
      <div className={s.text}>There are yet no reviews for this movie.</div>
    </>
  );
};

export default Reviews;
