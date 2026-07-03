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

  if (loading) return <p>Cargando...</p>;

  return (
    <section>
      <h1>Algunos de nuestros productos</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta enim fuga temporibus ducimus 
        explicabo laboriosam unde vitae quasi nam dolore voluptates ab nesciunt, 
        alias eaque iste assumenda repellendus nihil deleniti aspernatur labore? 
        Minus illo similique voluptatem provident labore nulla aperiam?
      </p>
      <ItemList products={products} />
    </section>
  );
};
