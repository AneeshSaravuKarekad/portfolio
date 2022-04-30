import './Layout.scss';

import { Outlet } from 'react-router-dom';

import { Header, Menu } from '../components';
import { useState } from 'react';

const Layout = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={`container ${active ? 'active' : ''}`}>
      <Header active={active} setActive={setActive} />

      <div className="container__main">
        <main className="main">
          <div className="content">
            <div className="overlay">
              <Outlet />
            </div>
          </div>
        </main>
      </div>

      <Menu />
    </div>
  );
};

export default Layout;
