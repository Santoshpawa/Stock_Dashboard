import React from "react";

const StockDetailModal = ({ stock, onClose }) => {
  if (!stock) return null;

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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <h1
          style={{ color: "#1e3a8a", fontSize: "1.8em", borderBottom: "none" }}
        >
          {stock.companyName}
        </h1>
        <h2
          style={{
            color: "#ef4444",
            marginTop: "0",
            paddingBottom: "10px",
            borderBottom: "1px solid #d1d5db",
          }}
        >
          **{stock.symbol}** Details
        </h2>

        <div className="details-list">
          {details.map((item) => (
            <div key={item.label} className="detail-item">
              <span className="detail-label">{item.label}:</span>
              <span
                className="detail-value"
                style={{
                  fontWeight: item.highlight ? "bold" : "normal",
                  color: item.highlight ? "#2563eb" : "#1f2937",
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockDetailModal;
