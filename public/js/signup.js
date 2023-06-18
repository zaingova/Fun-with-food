const signup = async (event) => {
  event.preventDefault();

  // Gets the inputted name sign up value
  const name = document.getElementById("name-signup").value.trim();
  // Gets the inputted email sign up value
  const email = document.getElementById("email-signup").value.trim();
  // Gets the inputted password sign up value
  const password = document.getElementById("password-signup").value.trim();
  // Gets the inputted password confirm sign up value
  const secondPassword = document
    .getElementById("password-signup-confirm")
    .value.trim();
  // If name, email, password, and password is equal to the password confirm 
  if (name && email && password && password === secondPassword) {
    // Create a new user
    const response = await fetch("/api/user/signup", {
      // Using Post set new user name, email, and password 
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    // If user created
    if (response.ok) {
      alert(`Signup success! Logged in automatically as ${(name.toUpperCase())}`)
      // Brings to home page
      document.location.replace("/");
    } else {
      alert("Signup failed!");
    }
  }
};
// Sign up form eventlistener
document.querySelector(".signup-form").addEventListener("click", signup);