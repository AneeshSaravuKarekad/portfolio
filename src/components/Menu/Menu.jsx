import './Menu.scss';

import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Menu = ({ active, setActive }) => {
  const location = useLocation();

  useEffect(() => {
    setActive(false);
  }, [location]);

  return (
    <ul className={`menu ${active ? 'active' : ''}`}>
      <li>
        <Link to="/">
          H<span>ome</span>
        </Link>
      </li>
      <li>
        <Link to="/about">
          A<span>bout</span>
        </Link>
      </li>
      <li>
        <Link to="/projects">
          P<span>rojects</span>
        </Link>
      </li>

      <li>
        <Link to="/contact">
          C<span>ontact</span>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
