import React from "react";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Product price={49.99} inStock={true} />
      <Product price={25.0} inStock={false} />
    </div>
  );
}

export default App;
