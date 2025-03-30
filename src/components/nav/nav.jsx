import s from './nav.module.css';
import Link from './nav-link/nav-link';

const Nav = () => {

  return (
    <nav className={s.nav}>
      <ul className={s.links__list}>
        <li>
          <Link to={'/age-from-name'} children={'Age From Name'} />
        </li>
        <li>
          <Link to={'/example2'} children={'Example2'} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;