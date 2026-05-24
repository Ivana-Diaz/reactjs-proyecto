import "./Cart.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";

export const CartView = () => {
  const { cart } = useCart();

  return (
    <section className="seccion-carrito">
      <h1>Tu carrito de compras</h1>

      {cart.length ? (
        <div className="contenedor-carrito">
          {<CartList />}
          {<CartSummary />}
        </div>
      ) : (
        <>
          <p className="carrito-vacio">El carrito está vacío.</p>
          <Link to={"/"} className="link-volver">
            Volver
          </Link>
        </>
      )}

    </section>
  );
};