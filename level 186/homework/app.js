function LikeContainer() {
  const [likes, setLikes] = useState(0);

  function addLike() {
    setLikes(likes + 1);
  }

  return <LikeView likes={likes} onLike={addLike} />;
}

export default LikeContainer;