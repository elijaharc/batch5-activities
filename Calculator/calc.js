// Give each button a letiable

// Number buttons
let oneBtn = document.getElementById("calc-one");
let twoBtn = document.getElementById("calc-two");
let threeBtn = document.getElementById("calc-three");
let fourBtn = document.getElementById("calc-four");
let fiveBtn = document.getElementById("calc-five");
let sixBtn = document.getElementById("calc-six");
let sevenBtn = document.getElementById("calc-seven");
let eightBtn = document.getElementById("calc-eight");
let nineBtn = document.getElementById("calc-nine");
let zeroBtn = document.getElementById("calc-zero");

// Other elements
let decimalBtn = document.getElementById("calc-decimal");
let clearBtn = document.getElementById("calc-clear");
let backspaceBtn = document.getElementById("calc-backspace");
let displayValElement = document.getElementById("calc-display-val");

let displayVal = "0";
let pendingVal;
let evalStringArray = [];

// All the number buttons
let calcNumBtns = document.getElementsByClassName("calc-btn-num");

// All the operator buttons
let calcOperatorBtns = document.getElementsByClassName("calc-btn-operator");

// Show value on screen
let updateDisplayVal = function (clickObj) {
  let btnText = clickObj.target.innerText;

  if (displayVal === "0") displayVal = "";

  displayVal += btnText;
  displayValElement.innerText = displayVal;
};

// Give each number button event listener and then show it on display screen
for (let i = 0; i < calcNumBtns.length; i++) {
  calcNumBtns[i].addEventListener("click", updateDisplayVal, false);
}

// Give each operation button event listener then do operation
// for (let i = 0; i < calcOperatorBtns.length; i++) {
//   calcOperatorBtns[i].addEventListener("click", performOperation, false);
// }

// To make the AC button work
clearBtn.onclick = function () {
  displayVal = "0";
  pendingVal = undefined;
  evalStringArray = [];
  displayValElement.innerHTML = displayVal;
};

// To make the DEL button work
backspaceBtn.onclick = function () {
  let lengthOfDisplayVal = displayVal.length;
  displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);

  if (displayVal === "") displayVal = "0";
  displayValElement.innerText = displayVal;
};

// For decimal functionality
decimalBtn.onclick = function () {
  if (!displayVal.includes(".")) displayVal += ".";
  displayValElement.innerText = displayVal;
};

// how to make operation work
