import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getByCategory } from "../../services/productsService";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getByCategory(category)
      .then((data) => setProducts(data))
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) return <p className="cargando">Cargando...</p>;

  return (
    <section className="seccion-productos">
      <h1>Algunos de nuestros productos</h1>
      <ItemList products={products} />
    </section>
  );
};
