import Container from 'components/Container';
import Navigation from 'components/Navigation';
import s from './AppBar.module.scss';

const AppBar = () => (
  <header className={s.header}>
    <Container>
      <Navigation />
    </Container>
  </header>
);

export default AppBar;
