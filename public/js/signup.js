const signup = async (event) => {
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
    if (response.ok) {
      alert(`Signup success! Logged in automatically as ${(name.toUpperCase())}`)
      document.location.replace("/");
    } else {
      alert("Signup failed!");
    }
  }
};
document.querySelector(".signup-form").addEventListener("click", signup);