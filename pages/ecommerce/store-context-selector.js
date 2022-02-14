import { useState, useCallback } from "react";
import { createContext, useContextSelector } from "use-context-selector";

const useStore = () => {
  const [user, setUser] = useState("");
  const [cartCount, setCartCount] = useState(0);

  return {
    user,
    cartCount,
    login: useCallback(() => setUser("Jack"), []),
    logout: useCallback(() => setUser(""), []),
    addToCart: useCallback(() => setCartCount((v) => v + 1), []),
  };
};

const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => (
  <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
);

export const useLogin = () => useContextSelector(StoreContext, (s) => s.login);
export const useLogout = () =>
  useContextSelector(StoreContext, (s) => s.logout);
export const useAddToCart = () =>
  useContextSelector(StoreContext, (s) => s.addToCart);
export const useUser = () => useContextSelector(StoreContext, (s) => s.user);
export const useCartCount = () =>
  useContextSelector(StoreContext, (s) => s.cartCount);
