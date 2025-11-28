import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StockDetails from "./pages/StockDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the main dashboard */}
          <Route path="/" element={<Dashboard />} />

          {/* Dynamic route for stock details, where :symbol is the stock ticker */}
          <Route path="/stock/:symbol" element={<StockDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
