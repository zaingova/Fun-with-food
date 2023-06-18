// array that stores all possible icons to be displayed on the homepage
const iconArray = new Array("/assets/yeast.png", "/assets/straight.png", "/assets/straight (2).png", "/assets/knead.png", "/assets/dough-cutter.png");

// uses local storage to set the current image index, or set it to 0 if the current index doesn't exist
let currentImageIndex = parseInt(localStorage.getItem('currentImageIndex')) || 0;

// function for generating a new dish
const generateFormHandler = async (event) => {
  event.preventDefault();

  // pulls values (true/false) from the checkboxes on the homepage
  const hasNuts = document.querySelector('#contains_nuts').checked;
  const hasMeat = document.querySelector('#contains_meat').checked;
  const hasDairy = document.querySelector('#contains_dairy').checked;
  const hasGluten = document.querySelector('#contains_gluten').checked;
  const hasShellfish = document.querySelector('#contains_shellfish').checked;
  const hasSoy = document.querySelector('#contains_soy').checked;

  // uses a query string to redirect to /data/{checkbox information}
  document.location.replace(`/data?hasNuts=${hasNuts}&hasMeat=${hasMeat}&hasDairy=${hasDairy}&hasGluten=${hasGluten}&hasShellfish=${hasShellfish}&hasSoy=${hasSoy}`);
};

// function for selecting which icon to display
const choosePic = async () => {
  // sets the src of the img element in the HTML view to the current index of the images array
  document.querySelector(".icon").src = iconArray[currentImageIndex];

  // if current image index is greater than or equal to the length of the array, set it to 0
  if (currentImageIndex >= (iconArray.length - 1)) {
    currentImageIndex = 0;
  } else {
    // otherwise, increment by 1
    currentImageIndex++;
  }

  // store the newly incremented index to local storage
  localStorage.setItem('currentImageIndex', currentImageIndex);
}

// fuction for saving dishes to the database
const saveDishHandler = async (event) => {
  event.preventDefault();

  const divData = document.querySelector('#dish-data');
  const dishData = divData.getAttribute('data-name');

  // if there is dish data, make a fetch request to /api/userdish
  if (dishData) {
    const response = await fetch(`/api/userdish`, {
      method: 'POST',
      body: JSON.stringify({ dishData }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // send an appropriate alert based on the response
    if (response.ok) {
      alert("Dish added!");
      document.location.replace('/');
    } else {
      alert("Cannot add duplicate dishes...");
      document.location.replace('/');
    }
  }
}

// runs choosePic function by default on window load
window.onload = choosePic;

// adds generate and save functions to event listeners on the appropriate forms
document.querySelector('.generate-btn').addEventListener("submit", generateFormHandler);
document.querySelector('.save-btn').addEventListener("submit", saveDishHandler);