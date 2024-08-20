import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function burgerHandle() {
    setIsBurgerOpen(!isBurgerOpen);
  }

  return (
    <nav>
      <div className={isBurgerOpen ? 'burger-btn open' : 'burger-btn'} onClick={burgerHandle}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={isBurgerOpen ? 'navigation open' : 'navigation'}>
        <li>
          <NavLink to="/software" className={({ isActive }) => (isActive ? 'active' : '')} onClick={burgerHandle}>software</NavLink>
        </li>
        <li>
          <NavLink to="/mobile-devices" className={({ isActive }) => (isActive ? 'active' : '')} onClick={burgerHandle}>mobile devices</NavLink>
        </li>
        <li>
          <NavLink to="/fashion" className={({ isActive }) => (isActive ? 'active' : '')} onClick={burgerHandle}>fashion</NavLink>
        </li>
      </ul>
    </nav>
  );
}
