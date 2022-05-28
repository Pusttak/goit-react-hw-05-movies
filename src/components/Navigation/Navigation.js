import { NavLink } from 'react-router-dom';
import { MdLocalMovies } from 'react-icons/md';
import { IoHome } from 'react-icons/io5';
import s from './Navigation.module.scss';

const Navigation = () => (
  <ul className={s.navigation}>
    <li className={s.listItem}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${s.activeLink}` : `${s.link}`
        }
      >
        <IoHome size="20px" className={s.icon} />
        <span className={s.text}>Home</span>
      </NavLink>
    </li>

    <li className={s.listItem}>
      <NavLink
        to="/movies/"
        className={({ isActive }) =>
          isActive ? `${s.activeLink}` : `${s.link}`
        }
      >
        <MdLocalMovies size="20px" className={s.icon} />
        <span className={s.text}>Movies</span>
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
