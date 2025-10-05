fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "1st post",
      body: "post text",
      userId: 1
    })
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
  