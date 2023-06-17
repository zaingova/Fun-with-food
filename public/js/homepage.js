const generateFormHandler = async (event) => {
  event.preventDefault();

  const hasNuts = document.querySelector('#contains_nuts').checked;
  const hasMeat = document.querySelector('#contains_meat').checked;
  const hasDairy = document.querySelector('#contains_dairy').checked;
  const hasGluten = document.querySelector('#contains_gluten').checked;
  const hasShellfish = document.querySelector('#contains_shellfish').checked;
  const hasSoy = document.querySelector('#contains_soy').checked;

  document.location.replace(`/data?hasNuts=${hasNuts}&hasMeat=${hasMeat}&hasDairy=${hasDairy}&hasGluten=${hasGluten}&hasShellfish=${hasShellfish}&hasSoy=${hasSoy}`);
};

const saveDishHandler = async (event) => {
  event.preventDefault();

  const dishData = document.querySelector('#dish-data');

  console.log(dishData);

  if (dishData) {
    const response = await fetch(`/api/userdish`, {
      method: 'POST',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

document.querySelector('.generate-btn').addEventListener("submit", generateFormHandler);
document.querySelector('.save-btn').addEventListener("submit", saveDishHandler);