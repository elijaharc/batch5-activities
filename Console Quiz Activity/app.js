// on load
alert("Enter startQuiz(); on the console to begin!");
console.log("Enter startQuiz(); to begin the quiz!");

let questions = [
  "1) What does HTML stand for?",
  "2) How many tags are in a regular element?",
  "3) What is the difference between an opening tag and a closing tag?",
  "4) What type of tag is '<br/>'?",
  "5) <body> Is this an opening tag or a closing tag?",
  "6) </body> Is this an opening tag or a closing tag?",
  "7) Where is the meta tag only found?",
  "8) Which is the correct way to tag an image?",
  "9) What is an element that does not have a closing tag called?",
  "10) Which of the following is an example of an empty element?",
  "11) What should values always be enclosed in?",
  "12) Where do all items for the same web site need to be saved?",
  "13) What does <a href='http://www.google.com' title = 'Link to Google' target = '_blank'>Google</a> do?",
  "14) What is always a welcome page, and explains the purpose or topic of the site?",
  "15) What does 'View Source' do?",
];

let answerChoices = [
  ["1. Hyper Text Markup Language", "2. Hot Mail", "3. How to Make Lumpia"],
  ["1. Two", "2. One", "3. Three"],
  [
    "1. Opening tag has a / in front",
    "2. Closing tag has a / in front",
    "3. There is no difference",
  ],
  ["1. Break tag", "2. A broken one", "3. An opening tag"],
  ["1. Opening", "2. Closing"],
  ["1. Opening", "2. Closing"],
  ["1. The last page", "2. The home page", "3. The second page"],
  [
    `1. src=”image.jpg/gif” alt=”type some text”`,
    `2. Src=”image.jpg/gif” alt=”type some text”`,
  ],
  ["1. Tag", "2. Empty element", "3. Closed element"],
  ["1. <img/>", "2. <img> </img>", "3. </img>"],
  ["1. Quotation marks", "2. Commas", "3. Parenthesis"],
  ["1. In the same folder", "2. Where ever is fine", "3. In different folders"],
  [
    "1. Adds a link to google on the page",
    "2. Adds a search engine to the page",
    "3. Nothing",
  ],
  ["1. Page 4", "2. Homepage", "3. Table of contents"],
  [
    "1. Nothing",
    "2. Brings up a note pad with the HTML code already used for the site.",
    "3. Opens a new website.",
  ],
];

let currentScore = 0;
let correctAnswer = false;

function startQuiz() {
  // generate random number to select random array
  let randomNum = Math.floor(Math.random() * questions.length);
  console.log(`Here is your question!`);
  console.log(questions[randomNum]);
  console.log(`Please select your answer:`);
  // loop to show the items in array
  for (let choice of answerChoices[randomNum]) {
    console.log(choice);
  }
  let userAnswer = prompt(
    "Please enter the number of your answer here! To exit game, type 'exit'."
  );
  if (userAnswer === "exit") {
    console.log("Thank you!");
    return endGame();
  }
  // parseInt the index value then subtract 1 so that it will match the index.
  // checkAnswer returns 2 values: (question number) & (user's inputted answer number), these 2 values are used to check if the answe is correct
  checkAnswer(parseInt(questions[randomNum]) - 1, parseInt(userAnswer));
  if (correctAnswer) {
    currentScore += 1;
    console.log(`Your current score is: ${currentScore}`);
  } else {
    currentScore = 0;
    console.log(`Uh oh! Your current score is: ${currentScore}`);
  }
  return nextQuestion();
}

function nextQuestion() {
  let randomNum = Math.floor(Math.random() * questions.length);
  console.log(`Here is your next question!`);
  console.log(questions[randomNum]);
  console.log(`Please select your answer:`);
  // loop to show the items in array
  for (let choice of answerChoices[randomNum]) {
    console.log(choice);
  }
  let userAnswer = prompt(
    "Please enter the number of your answer here! To exit game, type 'exit'."
  );
  if (userAnswer === "exit") {
    console.log("Thank you!");
    return endGame();
  }
  // parseInt the index value then subtract 1 so that it will match the index.
  // checkAnswer returns 2 values: (question number) & (user's inputted answer number), these 2 values are used to check if the answe is correct
  checkAnswer(parseInt(questions[randomNum]) - 1, parseInt(userAnswer));
  if (correctAnswer) {
    currentScore += 1;
    console.log(`Your current score is: ${currentScore}`);
  } else {
    currentScore = 0;
    console.log(`Uh oh! Your current score is: ${currentScore}`);
  }
  if (userAnswer === "exit") {
    console.log("Thank you!");
    return endGame();
  }
  return nextQuestion();
}

function endGame() {
  alert("Thank you for playing! You may now close the browser.");
  return "Enter startQuiz(); on the console to begin!";
}

function checkAnswer(question, answer) {
  if (question === 0 && answer === 1) {
    correctAnswer = true;
    console.log("That's correct!");
  } else if (question === 1 && answer === 1) {
    correctAnswer = true;
    console.log("That's correct!");
  } else if (question === 2 && answer === 2) {
    correctAnswer = true;
    console.log("That's correct!");
  } else if (question === 3 && answer === 1) {
    correctAnswer = true;
    console.log("That's correct!");
  } else if (question === 4 && answer === 1) {
    correctAnswer = true;
    console.log("That's correct!");
  } else if (question === 5 && answer === 2) {
    correctAnswer = true;
    console.log("That's correct!");
  } else if (question === 6 && answer === 2) {
    correctAnswer = true;
    console.log("That's correct!");
  } else if (question === 7 && answer === 1) {
    correctAnswer = true;
    console.log("That's correct!");
  } else if (question === 8 && answer === 2) {
    correctAnswer = true;
    console.log("That's correct!");
  } else if (question === 9 && answer === 1) {
    correctAnswer = true;
    console.log("That's correct!");
  } else if (question === 10 && answer === 1) {
    correctAnswer = true;
    console.log("That's correct!");
  } else if (question === 11 && answer === 1) {
    correctAnswer = true;
    console.log("That's correct!");
  } else if (question === 12 && answer === 1) {
    correctAnswer = true;
    console.log("That's correct!");
  } else if (question === 13 && answer === 2) {
    correctAnswer = true;
    console.log("That's correct!");
  } else if (question === 14 && answer === 2) {
    correctAnswer = true;
    console.log("That's correct!");
  } else {
    correctAnswer = false;
    console.log("Wrong!");
  }
}

// freelance.com;
// fiverr.com;
// upwork.com;
