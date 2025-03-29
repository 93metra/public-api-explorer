import s from './app-header.module.css';
import Nav from '../nav/nav';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className={s.header}>
      <Link to={'/'} className={s.title__link}>
      <h1 className={s.title}>Public API Explorer</h1>
      </Link>
      <Nav />
    </header>
  );
};

export default AppHeader;