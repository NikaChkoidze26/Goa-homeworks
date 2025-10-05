import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>ცხოველებზე პატარა საიტი</h1>
      <h2>ვეფხვები</h2>
      <p>ვეფხვი მაგარია</p>

      <h2>ლომები</h2>
      <p>ლომი მაგარია</p>

      <h2>წიწილა</h2>
      <p>წიწილა მაგარია</p>

      <h2>Hey Hey</h2>
      <p>იდკ</p>

      <h2>ზღვის ლომებზე</h2>
      <p>ზღვის ლომი მაგარია</p>

      <h2>6იხვნისკარტებზე</h2>
      <p>იხვნისკარტა მაგარია</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
