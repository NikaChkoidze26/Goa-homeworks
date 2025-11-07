//შემოვიყვანეთ reactის ბიბლიოთეკა
import React from 'react';

//შემოგვაქვს createRootი react-dom/clientდან
import { createRoot } from 'react-dom/client';

//getElementbyIdს მეშვეობით ვეძებთ ელემენტს სახელად app
const container = document.getElementById('app');

//შევმენით rootი რომლითაც დავაკავშირეთ reactი და html
const root = createRoot(container);

//მოვახდინეთ ამ jsxის კოდის რენდერი
root.render(
  <div> 
    <h1>Hello World!</h1> 
    <button>Click Me tu ginda rom bedniereba gewvios</button>
    <p>Zradova brat</p>
  </div>
);
