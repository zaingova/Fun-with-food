// function to logout
const logout = async () => {
  // fetch request to /api/user/logout
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  // if response ok, redirect to /login
  if (response.ok) {
    document.location.replace("/login");
  } else {
    //alert(response.statusText);
  }
};

// adds function as event listener to the form with an id of 'logout'
document.querySelector("#logout").addEventListener("click", logout);
