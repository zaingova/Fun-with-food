const loginFormHandler = async (event) => {
  event.preventDefault();

  // pulls values from HTML elements
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  // if email and password are valid/exist, make fetch request to /api/user/login
  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // send appropriate alert based on status of response
    if (response.ok) {
      alert("Login Successful!");
      document.location.replace("/");
    } else {
      alert("Incorrect email or password");
    }
  }
};

document.querySelector(".login-form").addEventListener("submit", loginFormHandler);