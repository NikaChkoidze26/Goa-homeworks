//fetch 

fetch("placeholder")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("Error:", error);
  });

fetch("placeholder", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Hello",
    body: "My first post",
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));




//Hook არის React-ის ფუნქცია,
//რომელიც ფუნქციურ კომპონენტს აძლევს state-ს და სხვა შესაძლებლობებს.


//1
//Hook უნდა გამოიძახო მხოლოდ ზედა დონეზე
//არ შეიძლება if-ში, loop-ში, ან nested ფუნქციაში

//არასწორია
if (true) {
  useState(0);
}

//სწორია
const [count, setCount] = useState(0);



//2:
//Hook მუშაობს მხოლოდ:
//ფუნქციურ კომპონენტში
//custom hook-ში

//არასწორია
function normalFunction() {
  useState(0);
}

//სწორია
function Counter() {
  const [count, setCount] = useState(0);
}
