import "./Nav.css";
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
          <Link to={"/carrito"} className="link">
            Carrito{totalItems > 0 && <span className="incart">{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
