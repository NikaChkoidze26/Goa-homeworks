

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>

      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}