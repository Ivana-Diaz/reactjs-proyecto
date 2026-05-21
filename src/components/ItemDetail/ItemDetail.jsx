import { useCart } from "../../context/CartContext";
import "./ItemDetail.css";

export const ItemDetail = ({ id, name, category, description, price, image }) => {

  const { addItem } = useCart();

  return (
    <article className="tarjeta-detail">
      <img src={image} alt={`foto de ${name}`} className="imagen-detail"/>
      <div className="info-detail">
        <p className="categoria-detail">{category}</p>
        <h2 className="nombre-detail">{name}</h2>
        <p className="descripcion-detail">{description}</p>
        <p className="precio-detail">${price}</p>
        <button className="boton-agregar" onClick={() => addItem({ id, name, price, image })}>Agregar al carrito</button>
      </div>
    </article>
  );
};