import { Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/">
          <div className="header__logo">Browser</div>
        </Link>
        <Link to="/wishlist">Wishlist</Link>
      </nav>
    </header>
  );
}
