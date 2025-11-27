import React from "react";

function App() {

    const name = "Nika";
    const lastname = "Tchkoidze";
    const age = 14;
    const city = "Tbilisi";
    const country = "Georgia";

  return (
    <div>
      <h1 class="123">class არის htmlის თეგი</h1>
      <h1 className="321">უნდა გამოვიყენოთ classname რადგან ის არის react-ის შესაფერისი თეგი</h1>
      <p className="class">this is a class</p>

      <br />
      <hr />
      <img src="" alt="" />
      
      <p>{1 + 1}</p>
      <p>{5 * 2}</p>
      <p>{12 + 2}</p>
      <p>{6851 + 12721}</p>
      <p>{2+2}</p>
      
      <p>{name}</p>
      <p>{age}</p>
      <p>{city}</p>
      <p>{lastname}</p>
      <p>{country}</p>
    </div>
  );
}

export default App;
