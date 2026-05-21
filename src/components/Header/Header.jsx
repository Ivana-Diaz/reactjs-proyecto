import "./Header.css";
import logo from "../../assets/logo.png";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to={"/"} className="link">
        <img src={logo} className="logo"/>
      </Link>
      <Nav />
    </header>
  );
};