import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // persist cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // add item using item.name as unique key
  const addToCart = (item) => {
  setCart((prev) => {
    const existing = prev.find((i) => i.name === item.name);

    if (existing) {
      return prev.map((i) =>
        i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
      );
    }

    return [
      ...prev,
      {
        name: item.name,
        price: Number(item.price) || 0, // ⭐ FIX HERE
        image: item.image,
        quantity: 1
      }
    ];
  });
};


  // increase
  const increment = (name) => {
    setCart((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // decrease
  const decrement = (name) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increment,
        decrement,
        clearCart,
        cartCount,
        totalAmount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
