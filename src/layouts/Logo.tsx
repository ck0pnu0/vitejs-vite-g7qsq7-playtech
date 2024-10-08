import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';

export default function Logo() {
  return (
    <Link to="/">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </Link>
  );
}
