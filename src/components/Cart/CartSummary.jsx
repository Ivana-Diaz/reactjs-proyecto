import { useCart } from "../../context/CartContext";

export const CartSummary = () => {
  const { getCartTotal, chekout } = useCart();
  const total = getCartTotal();

  return (
    <>
      <p>Total a pagar: ${total}</p>
      <button onClick={chekout}>Finalizar compra</button>
    </>
  );
};