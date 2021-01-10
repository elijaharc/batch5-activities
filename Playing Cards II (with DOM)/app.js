// ♠A
// ♡A
// ♢A
// ♣A

/* Using code from the previous Playing Cards activity:
1. Implement a "Deal Card" button where it pops a card from the deck and shows its name and symbol. This button must disable according to the cards left in the deck.
2. Implement a "Remaining Cards" view where it should see the number of remaining cards in the deck
3. Implement a "Draw History" function where you can see the history of the cards dealt
4. Implement "Previous" and "Next" buttons. That will show the past cards dealt. These buttons must enabled according to the draw history's length
5. Implement a "Reshuffle Deck" button that would reshuffle the deck and reset the history.
The design and representation and responsiveness of the cards in the DOM is up to your creativity and imagination. 
You may use array built-in methods. */

const deck = [
  "♠A",
  "♠2",
  "♠3",
  "♠4",
  "♠5",
  "♠6",
  "♠7",
  "♠8",
  "♠9",
  "♠10",
  "♠J",
  "♠Q",
  "♠K",
  "♡A",
  "♡2",
  "♡3",
  "♡4",
  "♡5",
  "♡6",
  "♡7",
  "♡8",
  "♡9",
  "♡10",
  "♡J",
  "♡Q",
  "♡K",
  "♢A",
  "♢2",
  "♢3",
  "♢4",
  "♢5",
  "♢6",
  "♢7",
  "♢8",
  "♢9",
  "♢10",
  "♢J",
  "♢Q",
  "♢K",
  "♣A",
  "♣2",
  "♣3",
  "♣4",
  "♣5",
  "♣6",
  "♣7",
  "♣8",
  "♣9",
  "♣10",
  "♣J",
  "♣Q",
  "♣K",
];

// CONSTANTS:
const dealtCard = document.getElementById("screen");
const remainingCards = document.getElementById("remainingCards");
const history = document.getElementById("drawHistory");
const prevBtn = (document.getElementById("previous").disabled = true);
const nextBtn = (document.getElementById("next").disabled = true);
const dealBtn = document
  .getElementById("dealCard")
  .addEventListener("click", function () {
    dealRandomCard();
  });
const shuffleBtn = document
  .getElementById("shuffle")
  .addEventListener("click", function () {
    reshuffle();
  });
let randomCard;
let past = [];
let copy = past.slice(0);

// FUNCTIONS:
function shuffleDeck() {
  // increment up
  for (let i = 0; i < deck.length; i++) {
    // Generate random number to make new position for each card in deck
    let randomNum = Math.floor(Math.random() * deck.length);

    // Swap card positions
    randomPosition = deck[i];
    deck[i] = deck[randomNum];
    deck[randomNum] = randomPosition;
  }
}

function reshuffle() {
  location.reload();
  // shuffleDeck(deck);
  // remainingCards.innerHTML = `Remaining Cards: ${deck}`;
  // dealtCard.innerHTML = "Card Dealt: Press the 'Deal card' button";
  // history.innerHTML = "Draw History:";
  // document.getElementById("previous").disabled = true;
  // document.getElementById("next").disabled = true;
  // document.getElementById("dealCard").disabled = false;
  console.log("copy:", copy);
  console.log("past", past);
  console.log("deck:", deck);
}

function dealRandomCard() {
  shuffleDeck(deck);
  let randomCard = deck.shift();
  let printed = printName(randomCard) + ` ${randomCard}`;
  dealtCard.innerHTML = `Card Dealt: ${printed}`;
  remainingCards.innerHTML = `Remaining Cards: ${deck}`;
  if (deck.length === 0) {
    remainingCards.innerHTML = "No more cards!";
    dealtCard.innerHTML = "Card Dealt:";
    history.innerHTML += `${randomCard}`;
  }
  past.push(randomCard);
  copy.push(randomCard);
  if (copy.length != past.length) {
    copy = past.slice(0);
  }
  history.innerHTML = `Draw History: ${past}`;
  if (past.length >= 2) {
    document.getElementById("previous").disabled = false;
    document.getElementById("next").disabled = true;
  }
  if (past.length === 52 || copy.length === 52) {
    document.getElementById("dealCard").disabled = true;
  }
  console.log("past:", past);
  console.log("copy:", copy);
}

function previous() {
  let i = copy.length--;
  document.getElementById("next").disabled = false;
  dealtCard.innerHTML = `Card Dealt: ${printName(copy[i - 2])} ${copy[i - 2]}`;
  if (copy.length === 1) {
    document.getElementById("previous").disabled = true;
    dealtCard.innerHTML = `Card Dealt: ${printName(copy[0])} ${copy}`;
  }
  if (past.length >= 52 || copy.length >= 52 || randomCard === undefined) {
    document.getElementById("dealCard").disabled = false;
  }
  console.log(i);
  console.log("copy:", copy);
  console.log("past:", past);
}

function next() {
  let i = copy.length++;
  copy.pop();
  copy.push(past[i]);
  dealtCard.innerHTML = `Card Dealt: ${printName(past[i])} ${past[i]}`;
  if (copy.length === past.length) {
    document.getElementById("next").disabled = true;
    document.getElementById("previous").disabled = false;
    document.getElementById("dealCard").disabled = false;
  }
  if (past.length >= 52 || copy.length >= 52) {
    document.getElementById("dealCard").disabled = true;
  }
  console.log("index is:", i);
  console.log("past + 1:", past[i]);
  console.log("copy:", copy);
  console.log("past:", past);
}

function printName(randomCard) {
  switch (randomCard) {
    case "♡A":
      return "Ace of Hearts";
    case "♡2":
      return "Two of Hearts";
    case "♡3":
      return "Three of Hearts";
    case "♡4":
      return "Four of Hearts";
    case "♡5":
      return "Five of Hearts";
    case "♡6":
      return "Six of Hearts";
    case "♡7":
      return "Seven of Hearts";
    case "♡8":
      return "Eight of Hearts";
    case "♡9":
      return "Nine of Hearts";
    case "♡10":
      return "Ten of Hearts";
    case "♡J":
      return "Jack of Hearts";
    case "♡Q":
      return "Queen of Hearts";
    case "♡K":
      return "King of Hearts";
    case "♢A":
      return "Ace of Diamonds";
    case "♢2":
      return "Two of Diamonds";
    case "♢3":
      return "Three of Diamonds";
    case "♢4":
      return "Four of Diamonds";
    case "♢5":
      return "Five of Diamonds";
    case "♢6":
      return "Six of Diamonds";
    case "♢7":
      return "Seven of Diamonds";
    case "♢8":
      return "Eight of Diamonds";
    case "♢9":
      return "Nine of Diamonds";
    case "♢10":
      return "Ten of Diamonds";
    case "♢J":
      return "Jack of Diamonds";
    case "♢Q":
      return "Queen of Diamonds";
    case "♢K":
      return "King of Diamonds";
    case "♠A":
      return "Ace of Spades";
    case "♠2":
      return "Two of Spades";
    case "♠3":
      return "Three of Spades";
    case "♠4":
      return "Four of Spades";
    case "♠5":
      return "Five of Spades";
    case "♠6":
      return "Six of Spades";
    case "♠7":
      return "Seven of Spades";
    case "♠8":
      return "Eight of Spades";
    case "♠9":
      return "Nine of Spades";
    case "♠10":
      return "Ten of Spades";
    case "♠J":
      return "Jack of Spades";
    case "♠Q":
      return "Queen of Spades";
    case "♠K":
      return "King of Spades";
    case "♣A":
      return "Ace of Clubs";
    case "♣2":
      return "Two of Clubs";
    case "♣3":
      return "Three of Clubs";
    case "♣4":
      return "Four of Clubs";
    case "♣5":
      return "Five of Clubs";
    case "♣6":
      return "Six of Clubs";
    case "♣7":
      return "Seven of Clubs";
    case "♣8":
      return "Eight of Clubs";
    case "♣9":
      return "Nine of Clubs";
    case "♣10":
      return "Ten of Clubs";
    case "♣J":
      return "Jack of Clubs";
    case "♣Q":
      return "Queen of Clubs";
    case "♣K":
      return "King of Clubs";
    default:
      return randomCard;
  }
}
