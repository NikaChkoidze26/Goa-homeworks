import React from "react";

export default function Product({ price, inStock }) {
  return (
    <div>
      <h2>პროდუქტის ფასი: {price}₾</h2>
      <p>
        სტატუსი:{" "}
        {inStock ? (
          <span style={{ color: "green" }}>ხელმისაწვდომია</span>
        ) : (
          <span style={{ color: "red" }}>ამოიწურა</span>
        )}
      </p>
    </div>
  );
}
