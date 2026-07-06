import "./ProductSuccess.css";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const ProductSuccess = () => {
  const { id } = useParams();

  return (
    <section className="success-page">
      <h2>Producto cargado con éxito.</h2>
      <p>ID de producto: {id}</p>
      <Link className="link-otro" to="/admin" replace>
        Agregar otro producto
      </Link>
    </section>
  );
};