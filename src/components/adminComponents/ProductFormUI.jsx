import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  const { logout } = useAuth();

  return (
    <div className="form-container">
      
      <div className="botones-acciones">
        <Link className="boton-volver" to="/">
          Volver a la tienda
        </Link>
        <button className="boton-logout" onClick={logout}>
          Cerrar sesión
        </button>
      </div>

      <form className="form-producto" onSubmit={onSubmit}>
        <h2>Agregar nuevo producto</h2>

        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={onChange}
          />
        </div>
        {errors.name && <p className="error">{errors.name}</p>}

        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={onChange}
            min="0"
          />
        </div>
        {errors.price && <p className="error">{errors.price}</p>}

        <div>
          <label>Categoría:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={onChange}
          />
        </div>
        {errors.category && <p className="error">{errors.category}</p>}

        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={onChange}
          />
        </div>
        {errors.description && <p className="error">{errors.description}</p>}

        <div>
          <label>Imagen:</label>
          <input type="file" accept="image/*" onChange={onFileChange} />
        </div>
        {errors.file && <p className="error">{errors.file}</p>}

        <button className="boton-agregar" type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar"}
        </button>

        {errors.general && <p className="error">{errors.general}</p>}
      </form>
    </div>
  );
};