import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { fetchReviews } from 'services/API';
import s from './Reviews.module.scss';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchReviews(movieId).then(reviews => setReviews(reviews.results));
  }, [movieId]);

  return reviews?.length ? (
    <ul className={s.list}>
      {reviews?.map(
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
    <div style={{ fontSize: '18px', textAlign: 'center' }}>
      There are yet no reviews for this movie.
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
