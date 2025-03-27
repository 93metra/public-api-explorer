import { Link, useLocation } from 'react-router-dom';
import s from './nav-link.module.css';

const NavLink = ({ to, children }) => {
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={isActive ? `${s.link} ${s.active}` : s.link}
    >
      {children}
    </Link>
  );
};

export default NavLink;