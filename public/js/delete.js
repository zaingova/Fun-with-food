const deleteFormHandler = async (event) => {
  event.preventDefault();

  const id = document.querySelector('.id-val').value;

  console.log(id);

  const response = await fetch(`/api/userdish/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    alert("Dish successfully deleted!");
  } else {
    console.log("Error deleting dish!");
  }
}

document.querySelector('.delete-btn').addEventListener('submit', deleteFormHandler);