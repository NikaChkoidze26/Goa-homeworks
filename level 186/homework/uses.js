function UsersContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setUsers(["Nika", "Gio", "Ana"]);
    }, 2000);
  }, []);

  return <UsersView users={users} />;
}

export default UsersContainer;