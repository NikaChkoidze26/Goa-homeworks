fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(todos => {
    todos.filter(todo => todo.completed)
         .forEach(todo => console.log(todo));
  })
  .catch(err => console.error(err));
