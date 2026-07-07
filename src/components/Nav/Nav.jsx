import "./Nav.css";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export const Nav = () => {

  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to={"/"} className="link">Home</Link>
        </li>
        <li>
          <Link to={"/category/anillos"} className="link">Anillos</Link>
        </li>
        <li>
          <Link to={"/category/aros"} className="link">Aros</Link>
        </li>
        <li>
          <Link to={"/category/collares"} className="link">Collares</Link>
        </li>
        <li>
          <Link to={"/category/pulseras"} className="link">Pulseras</Link>
        </li>
        <li>
          <Link to={"/carrito"} className="link">
            <img src={cart} className="cart"/> {totalItems > 0 && <span className="incart">{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
