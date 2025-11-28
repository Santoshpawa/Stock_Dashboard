import React from "react";
import { useNavigate } from "react-router-dom";

const StockTable = ({ stocks }) => {
  const navigate = useNavigate();

  const handleStockClick = (symbol) => {
    // Navigate to the details page for the clicked stock
    navigate(`/stock/${symbol}`);
  };

  return (
    <div className="stock-table-container">
      <table
        className="stock-table"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr style={{ background: "#f4f4f4" }}>
            <th style={tableHeaderStyle}>Company Name</th>
            <th style={tableHeaderStyle}>Symbol</th>
            <th style={tableHeaderStyle}>Current Price</th>
            <th style={tableHeaderStyle}>Change (%)</th>
            <th style={tableHeaderStyle}>Volume</th>
          </tr>
        </thead>
        <tbody>
          {stocks.length > 0 ? (
            stocks.map((stock) => (
              <tr
                key={stock.symbol}
                onClick={() => handleStockClick(stock.symbol)}
                style={{ cursor: "pointer", borderBottom: "1px solid #eee" }}
                className="stock-row"
              >
                <td style={tableCellStyle}>{stock.companyName}</td>
                <td style={tableCellStyle}>**{stock.symbol}**</td>
                <td style={tableCellStyle}>₹{stock.currentPrice.toFixed(2)}</td>
                <td
                  style={{
                    ...tableCellStyle,
                    color: stock.percentageChange >= 0 ? "green" : "red",
                  }}
                >
                  {stock.percentageChange.toFixed(2)}%
                </td>
                <td style={tableCellStyle}>{stock.volume}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                No stocks match your search.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  padding: "12px 15px",
  textAlign: "left",
  borderBottom: "2px solid #ddd",
};
const tableCellStyle = { padding: "10px 15px" };

export default StockTable;
