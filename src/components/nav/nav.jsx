import s from './nav.module.css';
import Link from './nav-link/nav-link';

const Nav = () => {

  return (
    <nav className={s.nav}>
      <ul className={s.links__list}>
        <li>
          <Link to={'/random-cat-fact'} children={'Random Cat Fact'} />
        </li>
        <li>
          <Link to={'/example2'} children={'Example2'} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;