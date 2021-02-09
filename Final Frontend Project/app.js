// Main functions
// [x] set up landing page design
// [x] set up API results display design
// [x] recipe searching API
// [x] responsive design
// [] make favorites tab
// [] toggle list view
// [] daily/weekly calendar to organize meal plan
// [] search random photos of food item (for inspiration)

// Variables:
let recipeDisplay = document.getElementById("contentArea");
let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");
let cardBody = document.getElementById("card-body");
let main = document.getElementById("main");
let noResult = document.getElementById("noResults");
let addToFave = document.getElementById("addToFave");
let favorites = [];

// Async function for fetching data from API:
async function searchRequest() {
  let query = searchInput.value.trim();
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
  let resultText = document.createElement("div");
  resultText.classList.add("container");
  resultText.innerHTML = `<h1 class="m-4 text-center" id="resultHeader">Here are the recipes we found for you!</h1>`;
  recipeDisplay.appendChild(resultText);

  if (data.count > 0) {
    for (let i = 0; i < 9; i++) {
      let content = document.createElement("div");
      content.className = "results";
      content.innerHTML = `<div class="card bg-light" style="width: 18rem;">
        <img src="${
          data.hits[i].recipe.image
        }" class="card-img-top" alt="Image of ${data.q}">
        <div class="card-body">
          <h5 class="card-title">${data.hits[i].recipe.label}</h5>
          <p class="card-text">Source: ${data.hits[i].recipe.source}</p>
          <p class="card-text">Health Labels: ${data.hits[
            i
          ].recipe.healthLabels.join(", ")}</p>
          
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label class="btn btn-sm btn-info active" onClick="window.open('${
            data.hits[i].recipe.url
          }', '_blank')">
          <input type="radio" name="options" id="addToFave" autocomplete="off" checked> View Recipe
        </label>

        <label class="btn btn-sm btn-secondary active">
          <input type="radio" name="options" id="addToFave" autocomplete="off" checked> Add to Favorites
        </label>
        </div>
        </div>
      </div>`;
      recipeDisplay.appendChild(content);
    }
  } else {
    noResult.classList.remove("inactive");
  }
}
