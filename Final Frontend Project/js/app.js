// Main functions
// [x] set up landing page design
// [] set up API results display design
// [] recipe searching API
// [] responsive design
// [] daily/weekly calendar to organize meal plan
// [] search random photos of food item (for inspiration)

// Variables:
const recipeDisplay = document.getElementById("content");
let searchInput = document.getElementById("searchInput");
// const searchQuery = searchInput.value;
const searchButton = document.getElementById("searchButton");
// .addEventListener("click", searchRequest());
const content = document.getElementById("content");

// async function for fetching data from API:
async function searchRequest() {
  let query = searchInput.value;
  let APP_ID = "9716ae0a";
  let API_KEY = "03ee4f1c63bc754c18d193783e331e09";
  let response = await fetch(
    `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${query}`
  );
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
}

function useApiData(data) {
  content.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.hits[0].recipe.label}</h5>
    <p class="card-text">Source: ${data.hits[0].recipe.source}</p>
    <p class="card-text">Health labels: ${data.hits[0].recipe.healthLabels.join(
      ", "
    )}</p>
    <a href="${
      data.hits[0].recipe.url
    }" target="_blank" class="btn btn-primary">View Recipe</a>
  </div>
</div>`;
}
