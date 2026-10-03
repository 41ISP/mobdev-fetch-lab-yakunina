import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">

        <Link to="/" className="header__logo">
          <span className="header__logo-mark">OMDb</span>
          <span className="header__logo-sub">кинокаталог</span>
        </Link>

        <nav className="header__nav">

          <NavLink to="/" className={({ isaActive }) => 
          isaActive 
            ? "header__nav-link header__nav-link--active"
            : "header__nav-link"}>
          
          </NavLink>
          
          <Link to="#" className="header__nav-link">
            Избранное
          </Link>

          <Link to="/about" className="header__nav-link">
            О проекте
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
