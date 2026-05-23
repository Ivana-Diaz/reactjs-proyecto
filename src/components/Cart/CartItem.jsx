import { useCart } from "../../context/CartContext";

export const CartItem = ({ id, name, price, image }) => {
  const { removeItem } = useCart();

  return (
    <article className="tarjeta-carrito">
      <img src={image} alt={`foto de ${name}`} className="imagen-carrito"/>
      <h2 className="nombre-carrito">{name}</h2>
      <p className="precio-carrito">${price}</p>
      <button onClick={() => removeItem(id)}>Eliminar</button>
    </article>
  )
};