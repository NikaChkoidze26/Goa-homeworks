Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
    fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
  ])
  .then(([users, posts]) => {
    users.forEach(user => {
      const firstPost = posts.find(post => post.userId === user.id);
      console.log(`user: ${user.name}`);
      if (firstPost) {
        console.log(`post: ${firstPost.title}`);
      }
      
    });
  })
  .catch(err => console.error(err));
  