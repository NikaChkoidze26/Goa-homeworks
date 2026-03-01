// useEffect არის React hook,
// რომელიც ასრულებს კოდს კომპონენტის render-ის შემდეგ.
// გამოიყენება გვერდითი მოქმედებებისთვის
// პლიუსები:
// lifecycle კონტროლი
// მარტივი fetch
// აქვს clean up

// მინუსები
// dependency array აბნევს
// შეიძლება infinite loop
// არასწორად გამოყენება → ზედმეტი render

useEffect(() => {
  fetch("")
    .then(r => r.json())
    .then(data => {
      setPosts(data);
      setLoading(false);
    });
}, []);

