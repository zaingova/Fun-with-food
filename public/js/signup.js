const signup = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const secondPassword = document
    .querySelector("#password-signup-confirm")
    .value.trim();

  if (name && email && password && (password !== secondPassword)) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("signup failed.Try again");
    }
  }
};
document.querySelector(".signup-form").addEventListener("submit", signup);
