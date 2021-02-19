// Main functions checklist:
// [x] set up landing page design
// [x] set up API results display design
// [x] recipe searching API
// [x] responsive design
// [x] make title bold font weight
// [x] add remove from favorites button
// [x] add item already added to favorites
// [x] create array of random cooking quotes to display in the results tab
// [x] add search in navbar
// [x] make favorites tab
// [x] add loading gif modal
// [x] about us page
// [x] make scrolling navbar
// [x] add carousel view
// [x] save favorites in local storage
// [x] clean up code

// Variables:
const recipeDisplay = document.getElementById("recipeDisplay");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const cardBody = document.getElementById("card-body");
const main = document.getElementById("main");
const noResult = document.getElementById("noResultsModal");
const addToFave = document.getElementById("addToFave");
const resultHeader = document.getElementById("resultHeader");
const favoritesHeader = document.getElementById("favoritesHeader");
const favoritesDisplay = document.getElementById("favoritesDisplay");
const aboutUs = document.getElementById("aboutUs");
const noItems = document.getElementById("noItems");
const favesCount = document.getElementById("favesCount");
const resultCount = document.getElementById("resultCount");
const quoteMain = document.getElementById("quoteMain");
const quoteCite = document.getElementById("quoteCite");
const loadingGif = document.getElementById("loadingGif");
const carouselDisplay = document.getElementById("carouselDisplay");
const putCarouselChildHere = document.getElementById("putCarouselChildHere");
const faveBtn = document
  .getElementById("faveBtn")
  .addEventListener("click", function () {
    noFave();
  });
let searchHistory = [];
let hasSearchDupe = false; // checks if duplicate in search history
let hasFaveDupe = false; // checks if duplicate exists in favorites
let carouselOn = false;
let thumbnailOn = true;
let objIndex = 0; // count of card position in faves array

// Quotes Arrays
const quotesArray = [
  `"A recipe has no soul. You as the cook must bring soul to the recipe."`,
  `"Cooking is at once child’s play and adult joy. And cooking done with care is an act of love."`,
  `"Until I discovered cooking, I was never really interested in anything."`,
  `"Cooking is like love. It should be entered into with abandon or not at all."`,
  `"Cooking and shopping for food brings rhythm and meaning to our lives."`,
  `"People want honest, flavourful food, not some show-off meal that takes days to prepare."`,
  `"For me, cooking is an expression of the land where you are and the culture of that place."`,
  `"I cook with wine; sometimes I even add it to the food."`,
];

// Quotes footer
const quotesCite = [
  "Thomas Keller",
  "Craig Claiborne",
  "Julia Child",
  "Harriet Van Horne",
  "Alice Waters",
  "Ted Allen",
  "Wolfgang Puck",
  "W.C. Fields",
];

onLoad();

function onLoad() {
  // LOCAL STORAGE:
  if (localStorage.getItem("favesInnerHTML") === null) {
    favesInnerHTML = "";
  } else {
    favesInnerHTML = JSON.parse(localStorage.getItem("favesInnerHTML"));
  }
  if (localStorage.getItem("favoritesArray") === null) {
    favoritesArray = [];
  } else {
    favoritesArray = JSON.parse(localStorage.getItem("favoritesArray"));
  }
  objIndex = favoritesArray.length;
  if (favesInnerHTML.length >= 1) {
    showFavorites();
  } else {
    console.log("no faves yet");
  }
}

// Object constructor
class SearchObject {
  constructor(data) {
    this.data = data;
  }
}

// Generate random quote
function getRandomQuote() {
  quoteCite.classList.remove("inactive");
  let randomNum = Math.floor(Math.random() * 8);
  quoteMain.innerText = quotesArray[randomNum];
  quoteCite.innerText = quotesCite[randomNum];
}

// For setting card ID for pushing to array
function updateDivId() {
  for (let i = 0; i < favoritesDisplay.childNodes.length; i++) {
    let childNode = favoritesDisplay.childNodes[i];
    childNode.id = `favoriteRecipe-${i}`;
  }
}

// For getting ID of button in selected card
function updateBtnId() {
  for (let i = 0; i < favoritesDisplay.childNodes.length; i++) {
    let btnId =
      favoritesDisplay.childNodes[i].childNodes[0].childNodes[3].childNodes[7]
        .childNodes[3];
    btnId.id = `updated-${i}`;
  }
}

// Remove recipe from favorites
function removeFavorite(clickedId) {
  // LOCAL STORAGE:
  if (localStorage.getItem("favoritesArray") === null) {
    favoritesArray = [];
  } else {
    favoritesArray = JSON.parse(localStorage.getItem("favoritesArray"));
  }
  favesInnerHTML = JSON.parse(localStorage.getItem("favesInnerHTML"));

  let id = clickedId;
  let index = parseInt(id.replace(/\D/g, "")); // to get just the number from the ID
  favoritesArray.splice(index, 1); // removes the selected object from array using the index
  console.log(index);
  document.querySelector(`#favoriteRecipe-${index}`).remove(); // removes selected from DOM
  objIndex--;
  console.log(`objIndex: ${objIndex}`);
  console.log(`splice index: ${index}`);
  if (favoritesArray.length === 0) {
    noItems.classList.remove("inactive");
    favesCount.classList.add("inactive");
    objIndex = 0;
  }
  if (favoritesArray.length === 1) {
    favesCount.innerText = `Displaying: 1 recipe`;
  } else {
    favesCount.innerText = `Displaying: ${objIndex} recipes`;
  }
  console.log(favoritesArray);
  console.log(`index is: ${index}`);
  updateDivId();
  updateBtnId();

  favesInnerHTML = favoritesDisplay.innerHTML;
  showFavorites();

  localStorage.setItem("favesInnerHTML", JSON.stringify(favesInnerHTML));
  localStorage.setItem("favoritesArray", JSON.stringify(favoritesArray));
}

// Add recipe to favorites
function addToFavorites(clickedId) {
  showFavorites();
  if (localStorage.getItem("favoritesArray") === null) {
    favoritesArray = [];
  } else {
    favoritesArray = JSON.parse(localStorage.getItem("favoritesArray"));
  }
  favesInnerHTML = JSON.parse(localStorage.getItem("favesInnerHTML"));

  favoritesHeader.classList.remove("inactive");
  favesCount.classList.remove("inactive");
  let id = clickedId;
  let index = parseInt(id.replace(/\D/g, ""));

  for (let i = 0; i < searchHistory.length; i++) {
    if (searchInput.value.trim() === searchHistory[i].data.q) {
      favoritesArray.push(searchHistory[i].data.hits[index]);
      favoritesArray[objIndex].theIndex = objIndex;
    }
  }

  faveDupe();
  if (!hasFaveDupe) {
    let items = document.createElement("div");
    for (let faves of favoritesArray) {
      items.innerHTML = `<div class="card bg-light" style="width: 18rem;">
    <img src="${faves.recipe.image}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title font-weight-bold">${faves.recipe.label}</h5>
      <p class="card-text">Source: ${faves.recipe.source}</p>
      <p class="card-text">Health Labels: ${faves.recipe.healthLabels.join(
        ", "
      )}</p>
      
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
      <label class="btn btn-sm active viewRecipe" onClick="window.open('${
        faves.recipe.url
      }', '_blank')">
      <input type="radio" name="options" autocomplete="off" checked> View Recipe
    </label>
    <label class="btn btn-sm active addTo" onClick="removeFavorite(this.id)" id="id-${
      favoritesArray[objIndex].theIndex
    }">
      <input type="radio" name="options" autocomplete="off" checked> Remove Recipe
    </label>`;
      favoritesDisplay.appendChild(items);
      successAdded();
    }
  } else {
    favoritesArray.pop();
    hasBeenAdded();
    objIndex -= 1;
  }

  objIndex++;
  if (favoritesArray.length > 0) {
    noItems.classList.add("inactive");
  }
  if (favoritesArray.length === 1) {
    favesCount.innerText = `Displaying: 1 recipe`;
  } else {
    favesCount.innerText = `Displaying: ${objIndex} recipes`;
  }
  console.log(favoritesArray);
  console.log(`objIndex: ${objIndex}`);
  updateDivId();
  hasFaveDupe = false;
  favesInnerHTML = favoritesDisplay.innerHTML;
  localStorage.setItem("favesInnerHTML", JSON.stringify(favesInnerHTML));
  localStorage.setItem("favoritesArray", JSON.stringify(favoritesArray));
  showFavorites();
}

// Async function for fetching data from API:
async function searchRequest() {
  loadingGif.classList.remove("inactive");
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
  if (data.hits.length === 0) {
    noResultsFound();
    if (searchHistory.length === 0) {
      resultHeader.classList.add("inactive");
      quoteCite.classList.add("inactive");
    }
  } else {
    searchHistory.push(currentSearch);
    getRandomQuote();
  }
  searchDupe();
  if (hasSearchDupe) {
    searchHistory.pop();
  }
  if (carouselOn) {
    carouselViewOn();
  }
  hasSearchDupe = false;
  console.log(searchHistory);
}

// Create cards in DOM
function useApiData(data) {
  resultHeader.classList.remove("inactive");
  if (data.count >= 1) {
    recipeDisplay.innerHTML = "";
    noResult.classList.add("inactive");
    for (let i = 0; i < data.hits.length; i++) {
      let content = document.createElement("div");
      content.className = "results";
      content.id = `${data.q}-${i}`;
      content.innerHTML = `<div class="card bg-light" style="width: 18rem;">
        <img src="${
          data.hits[i].recipe.image
        }" class="card-img-top" alt="Image of ${data.q}">
        <div class="card-body">
          <h5 class="card-title font-weight-bold">${
            data.hits[i].recipe.label
          }</h5>
          <p class="card-text">Source: ${data.hits[i].recipe.source}</p>
          <p class="card-text">Health Labels: ${data.hits[
            i
          ].recipe.healthLabels.join(", ")}</p>
          
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label class="btn btn-sm active viewRecipe" onClick="window.open('${
            data.hits[i].recipe.url
          }', '_blank')">
          <input type="radio" name="options" autocomplete="off" checked> View Recipe
        </label>

        <label class="btn btn-sm active addTo" id="${
          data.q
        }-${i}-btn" onClick="addToFavorites(this.id)">
          <input type="radio" name="options" autocomplete="off" checked> Add to Favorites
        </label>
        </div>
        </div>
      </div>`;
      recipeDisplay.appendChild(content);
      resultHeader.scrollIntoView();
      if (data.count === 1) {
        resultCount.innerText = `Displaying: 1 recipe`;
      } else {
        resultCount.innerText = `Displaying: ${i + 1} recipes`;
      }
    }
  }
  loadingGif.classList.add("inactive");
}

// Find duplicates in searchHistory array
function searchDupe() {
  searchHistory
    .map((v) => v.data.q)
    .sort()
    .sort((a, b) => {
      if (a === b) hasSearchDupe = true;
    });
  return hasSearchDupe;
}

// Find duplicates in favoritesArray
function faveDupe() {
  favoritesArray
    .map((v) => v.recipe.uri)
    .sort()
    .sort((a, b) => {
      if (a === b) hasFaveDupe = true;
    });
  console.log(`Is there a duplicate? ${hasFaveDupe}`);
  return hasFaveDupe;
}

// Modal functions

function hasBeenAdded() {
  $("#existingModal").modal(focus);
  setTimeout(function () {
    $("#existingModal").modal("hide");
  }, 2500);
}

function successAdded() {
  $("#successModal").modal(focus);
  setTimeout(function () {
    $("#successModal").modal("hide");
  }, 2500);
}

function noFave() {
  if (localStorage.getItem("favoritesArray") === null) {
    favoritesArray = [];
  } else {
    favoritesArray = JSON.parse(localStorage.getItem("favoritesArray"));
  }
  if (favoritesArray.length === 0) {
    $("#noFaveModal").modal(focus);
    setTimeout(function () {
      $("#noFaveModal").modal("hide");
    }, 10000);
  } else {
    favoritesHeader.scrollIntoView();
  }
}

function noResultsFound() {
  $("#noResultsModal").modal(focus);
  setTimeout(function () {
    $("#noResultsModal").modal("hide");
  }, 3000);
}

// To close burger menu when clicking a link inside
$(".navbar-collapse a").click(function () {
  $(".navbar-collapse").collapse("hide");
});

function thumbnailViewOn() {
  console.log("thumbnail btn clicked");
  thumbnailOn = true;
  carouselOn = false;
  carouselDisplay.classList.add("d-none");
  recipeDisplay.classList.remove("d-none");
}

function carouselViewOn() {
  carouselOn = true;
  putCarouselChildHere.innerHTML = "";
  carouselDisplay.classList.remove("d-none");
  resultHeader.classList.remove("inactive");
  recipeDisplay.classList.add("d-none");

  for (let j = 0; j < searchHistory.length; j++) {
    if (searchInput.value.trim() === searchHistory[j].data.q) {
      for (let i = 0; i < searchHistory[j].data.hits.length; i++) {
        let carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        carouselItem.innerHTML = `
        <img
          class="d-block w-50 mx-auto"
          src="${searchHistory[j].data.hits[i].recipe.image}"
          alt="Slide ${i}"
        />
        
        <div class="carousel-caption d-block w-45 mx-auto">
          <h1 class="display-4 font-weight-bold w-25 mx-auto">${searchHistory[j].data.hits[i].recipe.label}</h1>
          <p>Source: ${searchHistory[j].data.hits[i].recipe.source}</p>
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label class="btn btn-sm active viewRecipe" onClick="window.open('${searchHistory[j].data.hits[i].recipe.url}', '_blank')">
          <input type="radio" name="options" autocomplete="off" checked> View Recipe
        </label>
      
        <label class="btn btn-sm active addTo" id="${searchHistory[j].data.q}-${i}-btn" onClick="addToFavorites(this.id)">
          <input type="radio" name="options" autocomplete="off" checked> Add to Favorites
        </label>
          </div>
        </div>
      </div>`;
        putCarouselChildHere.appendChild(carouselItem);
        putCarouselChildHere.firstChild.classList.add("active");
      }
    }
  }
}

function showFavorites() {
  favoritesHeader.classList.remove("inactive");
  favoritesDisplay.innerHTML = favesInnerHTML;
}

// when pressing enter key it will search
searchInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("searchButton").click();
  }
});
