// Main functions
// [x] set up landing page design
// [] set up API results display design
// [] recipe searching API
// [] responsive design
// [] daily/weekly calendar to organize meal plan
// [] search random photos of food item (for inspiration)

// Variables:
const display = document.getElementById("content");
const inputValue = document.getElementById("searchItem");
const content = document.getElementById("content");
const searchButton = document
  .getElementById("search")
  .addEventListener("click", searchRequest());

// async function searchRequest() {
//   let APP_ID = "9716ae0a";
//   let API_KEY = "03ee4f1c63bc754c18d193783e331e09";
//   let response = await fetch(
//     `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=burger`
//   );
//   console.log(response);
//   let data = await response.json();
//   console.log(data);
// }
