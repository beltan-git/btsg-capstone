import React, { createContext, useState } from 'react';

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stocks, setStocks] = useState([]);

  const addStock = (newStock) => {
    setStocks((prev) => [...prev, newStock]);
  };

  return (
    <StockContext.Provider value={{ stocks, addStock }}>
      {children}
    </StockContext.Provider>
  );
};