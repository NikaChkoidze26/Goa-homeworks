import React from "react";

export default function Card({ children }) {
  return (
    <div
      style={{
        border: "2px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "300px",
        backgroundColor: "#fafafa",
      }}
    >
      {children}
    </div>
  );
}
