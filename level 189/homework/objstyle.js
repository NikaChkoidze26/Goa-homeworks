// 1
const style = { color: "green" };

function Example1() {
  return <h1 style={style}>Hello World</h1>;
}

// 2
const box = {
  backgroundColor: "yellow",
  padding: "10px"
};

function Example2() {
  return <div style={box}>Hello World</div>;
}

// 3
const text = {
  fontSize: "18px",
  color: "purple"
};

function Example3() {
  return <p style={text}>Hello World</p>;
}