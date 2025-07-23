function getDefaultName() {
    return "Guest";
  }
  
  function greet(name = getDefaultName()) {
    return "Hello, " + name + "!";
  }
  