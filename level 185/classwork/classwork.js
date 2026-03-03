import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("placeholder", {
      signal: controller.signal,
    })
      .then(res => res.json())
      .then(data => setUsers(data));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;