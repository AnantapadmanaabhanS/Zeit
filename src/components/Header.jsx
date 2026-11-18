
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header"> 

    <Link to="/" className="logo">
      <h2>Zeit</h2>
    </Link>

    <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart 🛒</Link>
        <Link to="/profile">My Account</Link>
    </nav>

    </header>
  );
}

export default Header;