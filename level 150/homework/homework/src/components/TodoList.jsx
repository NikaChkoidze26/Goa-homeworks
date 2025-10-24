import React from "react";

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
