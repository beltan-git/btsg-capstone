import React, { useState, useContext } from 'react';
import { StockContext } from '../context/StockContext';
import useFetchStock from '../hooks/useFetchStock';

import styles from '../StockDashboard.module.css';

const StockForm = () => {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const { addStock } = useContext(StockContext);
  const { fetchPrice } = useFetchStock();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const upperSymbol = symbol.toUpperCase();

    try {
      const currentPrice = await fetchPrice(upperSymbol);
      const newStock = {
        symbol: upperSymbol,
        quantity: Number(quantity),
        purchasePrice: Number(purchasePrice),
        currentPrice,
      };
      addStock(newStock);
      setSymbol('');
      setQuantity('');
      setPurchasePrice('');
    } catch (err) {
      alert('Failed to fetch price. Check symbol or try again later.');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
    <input
        className={styles.input} // Use the styles from the CSS module
        type="text"
        placeholder="Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        required
    />
      <input
    className={styles.input} // Use the styles from the CSS module
    type="text"
    placeholder="Quantity"
    value={quantity}
    onChange={(e) => setQuantity(e.target.value)}
    required
  />
      <input
        className="styles.input"
        type="text"
        placeholder="Purchase Price"
        value={purchasePrice}
        onChange={(e) => setPurchasePrice(e.target.value)}
        required
      />
      <button
        style={{
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 16px',
        borderRadius: '8px',
        cursor: 'pointer',
        }}
      >
     Add Stock
     </button>
    </form>
  );
};

export default StockForm;