import { useCart } from "../../context/CartContext";
import { CartItem } from "./CartItem";

export const CartList = () => {
  const { cart } = useCart();



  return (
    <>
      <div>
        {cart.map(element => <CartItem key={element.id} {...element} />)}
      </div>
    </>
  );
};