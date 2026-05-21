import "./Item.css";

export const Item = ({ name, price, image, children }) => {
  return (
    <article className="tarjeta">
      <img src={image} alt={`foto de ${name}`} className="imagen"/>
      <h2 className="nombre">{name}</h2>
      <p className="precio">${price}</p>
      {children}
    </article>
  );
};
