console.log('script loaded');

const generateFormHandler = async (event) => {
  event.preventDefault();

  const hasNuts = document.querySelector('#contains_nuts').checked;
  const hasMeat = document.querySelector('#contains_meat').checked;
  const hasDairy = document.querySelector('#contains_dairy').checked;
  const hasGluten = document.querySelector('#contains_gluten').checked;
  const hasShellfish = document.querySelector('#contains_shellfish').checked;
  const hasSoy = document.querySelector('#contains_soy').checked;

  document.location.replace(`/data?hasNuts=${hasNuts}&hasMeat=${hasMeat}&hasDairy=${hasDairy}&hasGluten=${hasGluten}&hasShellfish=${hasShellfish}&hasSoy=${hasSoy}`);
  //document.location.replace(`/`);
  // const response = await fetch(`/api/dish/data/${hasNuts}/${hasMeat}/${hasDairy}/${hasGluten}/${hasShellfish}/${hasSoy}`, {
  //   method: "GET",
  //   headers: { "Content-Type": "application/json" },
  // })

  // if (response.ok) {
  //   console.log(response);
  // } else {
  //   alert("Error!!!");
  // }
};

document.querySelector('.generate-btn').addEventListener("submit", generateFormHandler);