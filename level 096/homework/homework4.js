function updateGreeting() {
    const now = new Date();             
    const hour = now.getHours();       
    let greeting = "";

    if (hour < 12) {
      greeting = "Good Morning 🌞";
    } else if (hour >= 12 && hour < 18) {
      greeting = "Good Afternoon ☀️";
    } else {
      greeting = "Good Evening 🌙";
    }

    document.getElementById("greeting").textContent = greeting;
  }

  updateGreeting();

  setInterval(updateGreeting, 1000);