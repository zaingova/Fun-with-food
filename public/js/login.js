const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("login script");
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success");
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

console.log("login script");
document.querySelector(".login-form").addEventListener("submit", loginFormHandler);
