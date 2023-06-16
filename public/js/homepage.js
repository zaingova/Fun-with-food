const generateFormHandler = async (event) => {
  event.preventDefault();

  const hasNuts = document.querySelector('#contains_nuts').checked;
  const hasMeat = document.querySelector('#contains_meat').checked;
  const hasDairy = document.querySelector('#contains_dairy').checked;
  const hasGluten = document.querySelector('#contains_gluten').checked;
  const hasShellfish = document.querySelector('#contains_shellfish').checked;
  const hasSoy = document.querySelector('#contains_soy').checked;

  const response = await fetch(`/api/dish/data/${hasNuts}/${hasMeat}/${hasDairy}/${hasGluten}/${hasShellfish}/${hasSoy}`, {
    method: "GET",
    // body: JSON.stringify({ hasNuts, hasMeat, hasDairy, hasGluten, hasShellfish, hasSoy }),
    headers: { "Content-Type": "application/json" },
  })

  if (response.ok) {
    console.log('success')
  } else {
    alert("Error!!!");
  }
};

document.querySelector('.generate-btn').addEventListener("submit", generateFormHandler);