document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const messageDiv = document.getElementById('message');

    if (password !== confirmPassword) {
      document.body.style.backgroundColor = 'red';
      messageDiv.style.color = 'white';
      alert("paroli ar emtxveva")
      return;
    }

    document.body.style.backgroundColor = 'lightgreen';
    messageDiv.style.color = 'black';
    messageDiv.textContent = 'successfullylogin';
  });