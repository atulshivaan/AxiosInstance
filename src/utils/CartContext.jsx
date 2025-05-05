import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(item => item.id === product.id);
      if (existingProduct) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to decrease the quantity of a product in the cart by 1
  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === productId) {
          // If quantity is greater than 1, decrease it by 1
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            // If quantity is 1, remove the item from the cart
            return null;
          }
        }
        return item;
      }).filter(Boolean); // Filter out any null items
    });
  };

  // Function to increase quantity of the product
  const increaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Get total price of items in the cart
  const getTotalPrice = () => {
    return cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  // Clear the cart (for after payment)
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, decreaseQuantity, increaseQuantity, getTotalPrice, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
