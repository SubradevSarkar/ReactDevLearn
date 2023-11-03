/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import productData from "../data/productData";
export const router = {
  Home: "home",
  Cart: "cart",
};

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [section, setSection] = useState(router.Home);

  const addToCart = (product) => {
    setCart((prev) => {
      const aa = prev.find((item) => item.id === product.id);

      if (cart.length === 0 || !aa) {
        return [...prev, product];
      } else {
        return [...prev];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const redirectRoute = (currentSection) => {
    setSection(currentSection);
  };

  useEffect(() => {
    setProducts(productData);
  }, []);
  return (
    <StoreContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        section,
        redirectRoute,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useStore() {
  return useContext(StoreContext);
}
