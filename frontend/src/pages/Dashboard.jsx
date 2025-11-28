import React, { useState, useMemo } from "react";
import stockData from "../data/mockStocks.json";
import SearchBar from "../components/SearchBar";
import StockTable from "../components/StockTable";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering logic using useMemo for performance
  const filteredStocks = useMemo(() => {
    const lowerCaseSearch = searchTerm.toLowerCase();

    return stockData.filter(
      (stock) =>
        stock.companyName.toLowerCase().includes(lowerCaseSearch) ||
        stock.symbol.toLowerCase().includes(lowerCaseSearch)
    );
  }, [searchTerm]);

  return (
    <div
      className="dashboard-container"
      style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}
    >
      <h1
        style={{
          color: "#2c3e50",
          borderBottom: "2px solid #e74c3c",
          paddingBottom: "10px",
        }}
      >
        📈 Stock Market Dashboard
      </h1>

      <SearchBar setSearchTerm={setSearchTerm} />

      <h2 style={{ marginTop: "30px", color: "#34495e" }}>NIFTY 50 Stocks</h2>
      <StockTable stocks={filteredStocks} />
    </div>
  );
};

export default Dashboard;
