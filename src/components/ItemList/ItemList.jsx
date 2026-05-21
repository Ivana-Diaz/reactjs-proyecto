import "./ItemList.css";
import { Item } from "../Item/Item";
import { Link } from "react-router-dom";

export const ItemList = ({ products }) => {

  if (!products.length) {
    return <p className="mensaje">No hay productos</p>;
  }

  return (
    <div className="container-tarjetas">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="tarjeta-link">
          <Item {...product} />
        </Link>
      ))}
    </div>
  );
};