import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import stockData from "../data/mockStocks.json";

const StockDetails = () => {
  const { symbol } = useParams(); // Get the stock symbol from the URL
  const navigate = useNavigate();

  // Find the stock from the mock data
  const stock = stockData.find((s) => s.symbol === symbol.toUpperCase());

  if (!stock) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Stock Not Found 🧐</h2>
        <button onClick={() => navigate("/")} style={backButtonStyle}>
          Go to Dashboard
        </button>
      </div>
    );
  }

  // Define the detailed information for display
  const details = [
    {
      label: "Current Price",
      value: `₹${stock.currentPrice.toFixed(2)}`,
      highlight: true,
    },
    {
      label: "Day High / Day Low",
      value: `₹${stock.dayHigh.toFixed(2)} / ₹${stock.dayLow.toFixed(2)}`,
    },
    {
      label: "52 Week High / Low",
      value: `₹${stock["52WeekHigh"].toFixed(2)} / ₹${stock[
        "52WeekLow"
      ].toFixed(2)}`,
    },
    { label: "Market Cap", value: stock.marketCap },
    { label: "Volume", value: stock.volume },
  ];

  return (
    <div
      className="stock-details-container"
      style={{
        padding: "30px",
        maxWidth: "600px",
        margin: "30px auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ color: "#2c3e50", marginBottom: "10px" }}>
        {stock.companyName}
      </h1>
      <h2
        style={{
          color: "#e74c3c",
          marginTop: "0",
          borderBottom: "2px solid #eee",
          paddingBottom: "15px",
        }}
      >
        **{stock.symbol}** Details
      </h2>

      <div className="details-list">
        {details.map((item) => (
          <div key={item.label} style={detailItemStyle}>
            <span style={detailLabelStyle}>{item.label}:</span>
            <span
              style={{
                ...detailValueStyle,
                fontWeight: item.highlight ? "bold" : "normal",
                color: item.highlight ? "#2980b9" : "#333",
              }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <button onClick={() => navigate("/")} style={backButtonStyle}>
        ← Back to Dashboard
      </button>
    </div>
  );
};

const backButtonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#3498db",
  color: "white",
};

const detailItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 0",
  borderBottom: "1px dotted #ccc",
};

const detailLabelStyle = {
  fontWeight: "600",
  color: "#555",
};

const detailValueStyle = {
  textAlign: "right",
};

export default StockDetails;
