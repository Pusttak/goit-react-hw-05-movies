import s from './CardsOfMovies.module.scss';

const CardsOfMovies = ({ children }) => <ul className={s.list}>{children}</ul>;

export default CardsOfMovies;
