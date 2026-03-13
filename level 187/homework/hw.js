// Container Component არის კომპონენტი, რომელიც მართავს ლოგიკას, state-ს და მონაცემებს.

// Presentational Component არის კომპონენტი, რომელიც მხოლოდ UI-ს აჩვენებს და props-ებს იღებს.

// განსხვავება არი ის, რომ Container მართავს მონაცემებს, Presentational მხოლოდ აჩვენებს მათ.

// დადებითი/უარყოფითი - Container: ძლიერი ლოგიკა, მაგრამ შეიძლება დიდი ზომის გახდეს Presentational: სუფთა და გამოსაყენებადი მაგრამ თვითონ state არ აქვს.

// მაგალითები:

//1

function CounterContainer() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  return <CounterView count={count} onAdd={add} />;
}

function CounterView({ count, onAdd }) {
  return (
    <div>
      <p>{count}</p>
      <button onClick={onAdd}>+1</button>
    </div>
  );
}

//2

function LikeContainer() {
  const [likes, setLikes] = useState(0);

  return <LikeView likes={likes} onLike={() => setLikes(likes + 1)} />;
}

function LikeView({ likes, onLike }) {
  return (
    <div>
      <p>Likes: {likes}</p>
      <button onClick={onLike}>Like</button>
    </div>
  );
}

//3

function UsersContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setUsers(["Gio", "Nika", "Ana"]);
    }, 1000);
  }, []);

  return <UsersView users={users} />;
}

function UsersView({ users }) {
  return (
    <ul>
      {users.map((u, i) => (
        <li key={i}>{u}</li>
      ))}
    </ul>
  );
}

//4

function MessageContainer() {
  const [text, setText] = useState("Hello");

  return <MessageView text={text} change={() => setText("Hi")} />;
}

function MessageView({ text, change }) {
  return (
    <div>
      <p>{text}</p>
      <button onClick={change}>Change</button>
    </div>
  );
}