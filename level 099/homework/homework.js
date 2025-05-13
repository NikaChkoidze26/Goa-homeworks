// 1
let pElement = document.createElement("p");

pElement.textContent = "This is a paragraph.";

document.body.appendChild(pElement);

// 2
let h2Element = document.createElement("h2");

h2Element.textContent = "Subheading";

document.body.appendChild(h2Element);

h2Element.textContent = "Updated Subheading";

// 3
let divElement = document.createElement("div");

divElement.textContent = "This is a div.";

document.body.appendChild(divElement);

document.body.removeChild(divElement);

// 4
let ulElement = document.createElement("ul");

let li1 = document.createElement("li");
li1.textContent = "Item 1";

let li2 = document.createElement("li");
li2.textContent = "Item 2";

let li3 = document.createElement("li");
li3.textContent = "Item 3";

ulElement.appendChild(li1);

ulElement.appendChild(li2);

ulElement.appendChild(li3);

document.body.appendChild(ulElement);

console.log("First child of <ul>: ", ulElement.firstChild);

console.log("Last child of <ul>: ", ulElement.lastChild);

// 5
let h3Element = document.createElement("h3");

h3Element.textContent = "Inserted Heading";

document.body.insertBefore(h3Element, document.body.firstChild);

// 6
let spanElement = document.createElement("span");

spanElement.textContent = "This is a span.";

let containerDiv = document.getElementById("container");

containerDiv.appendChild(spanElement);


console.log("Parent of <span>: ", spanElement.parentElement);
