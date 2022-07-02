import "./Header.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="center site-header">
      <Link to="/">
        <h3>space learn</h3>
      </Link>
    </header>
  );
}

export default Header;
