// Main functions checklist:
// [x] set up landing page design
// [x] set up API results display design
// [x] recipe searching API
// [x] responsive design
// [] make title bold font weight
// [] add remove from favorites button
// [] add item already added to favorites
// [] make favorites tab
// [] toggle list view
// [] add search in navbar
// [] add button to bring to top
// [] organize results in bootstrap grid
// [] daily/weekly calendar to organize meal plan
// [] save favorites in local storage

// Variables:
let recipeDisplay = document.getElementById("recipeDisplay");
let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");
let cardBody = document.getElementById("card-body");
let main = document.getElementById("main");
let noResult = document.getElementById("noResults");
let addToFave = document.getElementById("addToFave");
let resultHeader = document.getElementById("resultHeader");
let favoritesDisplay = document.getElementById("favoritesDisplay");
let hasSearchDupe = false;
let hasFaveDupe = false;
let searchHistory = [];
let favoritesArray = [];

// Object constructor
class SearchObject {
  constructor(data) {
    this.data = data;
  }
}

function addToFavorites(clickedId) {
  let id = clickedId;
  let index = parseInt(id.replace(/\D/g, ""));
  favoritesArray.push(searchHistory[searchHistory.length - 1].data.hits[index]);

  faveDupe();
  if (hasFaveDupe) {
    favoritesArray.pop();
  }
  hasFaveDupe = false;

  console.log(favoritesArray);

  let items = document.createElement("div");
  for (let faves of favoritesArray) {
    items.innerHTML = `<div class="card bg-light" style="width: 18rem;">
    <img src="${faves.recipe.image}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${faves.recipe.label}</h5>
      <p class="card-text">Source: ${faves.recipe.source}</p>
      <p class="card-text">Health Labels: ${faves.recipe.healthLabels.join(
        ", "
      )}</p>
      
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
      <label class="btn btn-sm btn-success active" onClick="window.open('${
        faves.recipe.url
      }', '_blank')">
      <input type="radio" name="options" autocomplete="off" checked> View Recipe
    </label>`;
    favoritesDisplay.appendChild(items);
  }
}

// Async function for fetching data from API:
async function searchRequest() {
  let query = searchInput.value.trim();
  let APP_ID = "9716ae0a";
  let API_KEY = "03ee4f1c63bc754c18d193783e331e09";
  let response = await fetch(
    `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${query}&to=20`
  );
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
  let currentSearch = new SearchObject(data);
  searchHistory.push(currentSearch);
  searchDupe();
  if (hasSearchDupe) {
    searchHistory.pop();
  }
  hasSearchDupe = false;
  console.log(searchHistory);
}

// find duplicates in searchHistory array
function searchDupe() {
  searchHistory
    .map((v) => v.data.q)
    .sort()
    .sort((a, b) => {
      if (a === b) hasSearchDupe = true;
    });
  // console.log(`Is there a duplicate? ${hasSearchDupe}`);
  return hasSearchDupe;
}

// find duplicates in favoritesArray
function faveDupe() {
  favoritesArray
    .map((v) => v.recipe.label)
    .sort()
    .sort((a, b) => {
      if (a === b) hasFaveDupe = true;
    });
  console.log(`Is there a duplicate? ${hasFaveDupe}`);
  return hasFaveDupe;
}

function useApiData(data) {
  recipeDisplay.innerHTML = "";
  resultHeader.classList.remove("inactive");
  if (data.count > 0) {
    for (let i = 0; i < 20; i++) {
      let content = document.createElement("div");
      content.className = "results";
      content.id = `${data.q}-${i}`;
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
          <label class="btn btn-sm btn-success active" onClick="window.open('${
            data.hits[i].recipe.url
          }', '_blank')">
          <input type="radio" name="options" autocomplete="off" checked> View Recipe
        </label>

        <label class="btn btn-sm btn-warning active" id="${
          data.q
        }-${i}-btn" onClick="addToFavorites(this.id)">
          <input type="radio" name="options" autocomplete="off" checked> Add to Favorites
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
