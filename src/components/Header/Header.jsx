import './Header.scss';

const Header = ({ active, setActive }) => {
  return (
    <header className="header">
      <div className="header__content">
        {/* Logo Section */}
        <div className="header__content-logo">
          A<span>neesh</span> S<span>aravu</span> K<span>arekad</span>
        </div>

        {/* Hamburger Section */}
        <div
          className={`header__content-hamburger ${active ? 'active' : ''}`}
          onClick={() => setActive(!active)}
        >
          <i className="bx bx-menu"></i>
          <i className="bx bx-x"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
