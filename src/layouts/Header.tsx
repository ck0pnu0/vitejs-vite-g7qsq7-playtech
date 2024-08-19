import Logo from './Logo';
import Navbar from './Navbar';

import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <Navbar />
    </div>
  );
}
