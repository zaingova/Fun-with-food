const name = document.getElementById("#name-signup").value.trim();
const email = document.getElementById("#email-signup").value.trim();
const password = document.getElementById("#password-signup").value.trim();
const secondPassword = document.getElementById("secondPassword").value.trim();

const signup = async (event) => {
  event.preventDefault();

  // inputs entry error function
  // inputs entry correct function
  // validate my inputs
  const valideInput = () => {
    const nameValue = name.trim();
    const emailValue = email.trim();
    const passwordValue = password.value.trim();
    const secondPasswordValue = secondPassword.value.trim();
  };
  if (name && email && password) {
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