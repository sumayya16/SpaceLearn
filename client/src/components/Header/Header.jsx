import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </header>
  );
}

export default Header;