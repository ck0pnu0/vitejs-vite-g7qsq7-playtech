import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul className="navigation">
        <li>
          {/* <a href="/software">software</a> */}
          <Link to="/software">software</Link>
        </li>
        <li>
          {/* <a href="/mobile-devices">mobile devices</a> */}
          <Link to="/mobile-devices">mobile devices</Link>
        </li>
        <li>
          {/* <a href="/fashion">fashion</a> */}
          <Link to="/fashion">fashion</Link>
        </li>
      </ul>
    </nav>
  );
}
