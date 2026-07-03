import { collection, addDoc, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const productsRef = collection(db, "products");

/*
export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);

    const productsFormat = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });

    return productsFormat;

  } catch (err) {
    console.log("Error al traer los productos: ", err);
    return [];
  };
};
*/

export const getByCategory = async (category) => {
  try {
    let queryRef;

    if (category) {
      queryRef = query(productsRef, where("category", "==", category));
    } else {
      queryRef = productsRef;
    };

    const snapshot = await getDocs(queryRef);
    
    const productsFormat = snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    });

    return productsFormat;

  } catch (err) {
    console.log("Error al filtrar productos: ", err);
    return [];
  };
};

export const getProductById = async (id) => {
  try {
    const productRef = doc(db, "products", id);

    const snapshot = await getDoc(productRef);

    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() };
      return product;
    } else {
      return null;
    };

  } catch (err) {
    console.log("Error al traer producto por ID: ", err);
    return null;
  };
};