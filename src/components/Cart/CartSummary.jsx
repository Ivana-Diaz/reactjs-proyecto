import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
  const { getCartTotal, checkout } = useCart();
  const total = getCartTotal();

  return (
    <div className="resumen">
      <p>Total a pagar:</p>
      <p className="precio-total">${total}</p>
      <button className="boton-finalizar" onClick={checkout}>Finalizar compra</button>
    </div>
  );
};