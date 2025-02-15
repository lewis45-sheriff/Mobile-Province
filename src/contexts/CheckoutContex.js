import React, { createContext, useState } from 'react';

export const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [order, setOrder] = useState(null);

  const placeOrder = async (orderData) => {
    try {
      const response = await fetch('http://localhost:8000/api/orders/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to place order');
      }

      const result = await response.json();
      setOrder(result);
      return result;
    } catch (error) {
      console.error('Error placing order:', error);
      throw error;
    }
  };

  return (
    <CheckoutContext.Provider value={{ order, placeOrder }}>
      {children}
    </CheckoutContext.Provider>
  );
};
