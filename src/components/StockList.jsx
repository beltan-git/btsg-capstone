import React, { useContext } from 'react';
import { StockContext } from '../context/StockContext';

const StockList = () => {
  const { stocks } = useContext(StockContext);

  return (
    <div className="stockList">
      <h2 style={{ marginBottom: '1rem', color: '#343a40' }}>Stock List</h2>

      {stocks.length === 0 ? (
        <p>No stocks added yet.</p>
      ) : (
        stocks.map((stock) => {
          const totalCost = stock.purchasePrice * stock.quantity;
          const currentValue = stock.currentPrice * stock.quantity;
          const profitLoss = currentValue - totalCost;
          const isProfit = profitLoss >= 0;

          return (
            <div className="stockItem" key={stock.symbol}>
              <h3>Symbol: {stock.symbol}</h3>
              <p>Quantity: {stock.quantity}</p>
              <p>Purchase Price: {stock.purchasePrice.toFixed(2)}</p>
              <p>Current Price: {stock.currentPrice.toFixed(2)}</p>
              <p style={{ color: isProfit ? '#66bb6a' : 'red', fontWeight: 'bold'}}>
                Profit/Loss: {isProfit ? '+' : '-'}{Math.abs(profitLoss).toFixed(2)}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default StockList;