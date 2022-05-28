import PropTypes from 'prop-types';
import s from './Button.module.scss';

const Button = ({ name, onClick, children }) => (
  <button className={s.button} type="button" name={name} onClick={onClick}>
    {children}
  </button>
);

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
