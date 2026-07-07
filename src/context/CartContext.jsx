import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }

  return context;
};

export const CartProvider = ({children}) => {
  
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const isInCart = (item) => {
    const inCart = cart.some(element => element.id === item.id);
    return inCart;
  };

  const addItem = (item) => {
    if (isInCart(item)) {
      toast.warning("El producto ya existe en el carrito");
      return;
    }

    setCart([...cart, item]);
    toast.success("Producto agregado al carrito");
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(element => element.id !== id);
    setCart(updatedCart);
    toast.warning("Producto eliminado del carrito");
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.length;
  };

  const getCartTotal = () => {
    return cart.reduce((acc, element) => acc + element.price, 0);
  };

  const checkout = () => {
    toast.success("Su compra ha sido realizada");
    clearCart();
    navigate("/");
  };

  const values = { cart, addItem, removeItem, clearCart, getTotalItems, getCartTotal, checkout };

  return <CartContext.Provider value={values}>
    {children}
  </CartContext.Provider>
};