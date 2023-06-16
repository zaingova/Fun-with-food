const signupFormHandler = async (event) => {

  event.preventDefault();



  const name = document.getElementById("name-signup").value.trim();
  const email = document.getElementById("email-signup").value.trim();
  const password = document.getElementById("password-signup").value.trim();
  const secondPassword = document
    .getElementById("password-signup-confirm")
    .value.trim();

  if (name && email && password && password === secondPassword) {
    const response = await fetch("/api/user/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

  const email = document.querySelector('#email-signup').value.trim();

  const password = document.querySelector('#password-signup').value.trim();

  const validpassword = document.querySelector('#password-verify').value.trim();

  if (username && email && password && validpassword && password === validpassword) {

    const response = await fetch('/api/users', {

      method: 'POST',

      body: JSON.stringify({ username, email, password }),

      headers: { 'Content-Type': 'application/json' },

    });
    if (response.ok) {
      
      document.location.replace('/');
      
    } else {
      alert('Failed to sign up.');
    }
  }
};

document.querySelector(".signup-form").addEventListener("click", signup);
