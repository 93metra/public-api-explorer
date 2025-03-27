import s from './app-header.module.css';
import Nav from '../nav/nav';

const AppHeader = () => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>Public API Explorer</h1>
      <Nav />
    </header>
  );
};

export default AppHeader;