import s from './nav.module.css';
import NavButton from '../UI/button/nav-button/nav-button';

const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.links__list}>
        <li>
          <NavButton rout={'/age-from-name'} children={'age-from-name'}/>
        </li>
        <li>
          <NavButton rout={'/random-dog-image'} children={'random-dog-image'}/>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;