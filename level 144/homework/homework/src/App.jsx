import React from "react";
import "./App.css";
import myImage from "./assets/image.jpg"; 

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <img src={myImage} alt="Example" width="300" />
    </div>
  );
}

export default App;
