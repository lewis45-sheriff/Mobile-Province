// import React, { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   // cart state
//   const [cart, setCart] = useState([]);
//   // item amount state
//   const [itemAmount, setItemAmount] = useState(0);
//   // total price state
//   const [total, setTotal] = useState(0);
//   const apiUrl = "http://127.0.0.1:8000/api/order/"; // Replace with your API endpoint

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         setCart(data);
//       } catch (error) {
//         console.error("Error fetching cart items:", error);
//       }
//     };

//     fetchCartItems();
//   }, [apiUrl]);

//   useEffect(() => {
//     const total = cart.reduce((accumulator, currentItem) => {
//       return accumulator + currentItem.price * currentItem.amount;
//     }, 0);
//     setTotal(total);
//   }, [cart]);

//   // update item amount
//   useEffect(() => {
//     if (cart) {
//       const amount = cart.reduce((accumulator, currentItem) => {
//         return accumulator + currentItem.amount;
//       }, 0);
//       setItemAmount(amount);
//     }
//   }, [cart]);

//   // add to cart
//   const addToCart = async (product, id) => {
//     const newItem = { ...product, amount: 1 };
//     try {
//       const response = await fetch(`${apiUrl}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newItem),
//       });
//       if (response.ok) {
//         const updatedCart = await response.json();
//         setCart(updatedCart);
//       }
//     } catch (error) {
//       console.error("Error adding item to cart:", error);
//     }
//   };

//   // remove from cart
//   const removeFromCart = async (id) => {
//     try {
//       const response = await fetch(`${apiUrl}remove/${id}`, {
//         method: "DELETE",
//       });
//       if (response.ok) {
//         const updatedCart = await response.json();
//         setCart(updatedCart);
//       }
//     } catch (error) {
//       console.error("Error removing item from cart:", error);
//     }
//   };

//   // clear cart
//   const clearCart = async () => {
//     try {
//       const response = await fetch(`${apiUrl}clear`, {
//         method: "DELETE",
//       });
//       if (response.ok) {
//         setCart([]);
//       }
//     } catch (error) {
//       console.error("Error clearing cart:", error);
//     }
//   };

//   // increase amount
//   const increaseAmount = async (id) => {
//     const cartItem = cart.find((item) => item.id === id);
//     if (cartItem) {
//       await addToCart(cartItem, id);
//     }
//   };

//   // decrease amount
//   const decreaseAmount = async (id) => {
//     const cartItem = cart.find((item) => item.id === id);
//     if (cartItem) {
//       if (cartItem.amount > 1) {
//         const updatedCart = cart.map((item) => {
//           if (item.id === id) {
//             return { ...item, amount: item.amount - 1 };
//           }
//           return item;
//         });
//         setCart(updatedCart);
//       } else {
//         await removeFromCart(id);
//       }
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         clearCart,
//         increaseAmount,
//         decreaseAmount,
//         itemAmount,
//         total,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;
import React, { createContext, useState, useEffect } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update total price
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.amount, 0);
    setTotal(totalPrice);

    // Update item amount
    const totalItems = cart.reduce((acc, item) => acc + item.amount, 0);
    setItemAmount(totalItems);
  }, [cart]);

  // Add to cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };

  // Remove from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Increase amount
  const increaseAmount = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    );
    setCart(updatedCart);
  };

  // Decrease amount
  const decreaseAmount = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, amount: item.amount - 1 } : item
    ).filter((item) => item.amount > 0); // Remove item if amount reaches 0
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

