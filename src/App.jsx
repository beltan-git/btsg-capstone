import React from 'react';

import './StockDashboard.module.css';

import { StockProvider } from './context/StockContext';
import StockForm from './components/StockForm';
import StockList from './components/StockList';

function App() {
  return (
    <StockProvider>
      <div className="container">
        <h1>Finance Dashboard</h1>
        <StockForm />
        <StockList />
      </div>
    </StockProvider>
  );
}

export default App;