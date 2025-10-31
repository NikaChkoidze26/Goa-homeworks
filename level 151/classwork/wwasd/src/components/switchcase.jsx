import React from "react";
import Contacts from "./pages/Contacts";
import About from "./pages/About";

function App() {
  console.log("Current path:", path);

  switch (path) {
    case "/contacts":
      return <Contacts />;

    case "/about":
      return <About />;
  }
}

export default App;
