// ♠A
// ♡A
// ♢A
// ♣A

const cards = [
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

const deck = [];

// TASK 1) SHUFFLE DECK
function shuffleDeck() {
  let deck = cards.slice(0);
  // increment up
  for (let i = 0; i < deck.length; i++) {
    // Generate random number to make new position for each card in deck
    let randomNum = Math.floor(Math.random() * deck.length);

    // Swap card positions
    randomPosition = deck[i];
    deck[i] = deck[randomNum];
    deck[randomNum] = randomPosition;
  }
  return deck;
}

// TASK 2) ARRANGE BY SUIT

function arrangeBySuit() {
  let deck = cards.slice(0);
  deck.sort();
  return deck;
}

// TASK 3a) ARRANGE BY ASCENDING VALUE
function ascendingOrder() {
  let deck = cards.slice(0);
  // Empty array for later when I combine all the filtered arrays
  let concArrays = [];
  // Isolate all the different card values and put into new array.
  let ace = deck.filter((card) => card.indexOf("A") != -1);
  let two = deck.filter((card) => card.indexOf("2") != -1);
  let three = deck.filter((card) => card.indexOf("3") != -1);
  let four = deck.filter((card) => card.indexOf("4") != -1);
  let five = deck.filter((card) => card.indexOf("5") != -1);
  let six = deck.filter((card) => card.indexOf("6") != -1);
  let seven = deck.filter((card) => card.indexOf("7") != -1);
  let eight = deck.filter((card) => card.indexOf("8") != -1);
  let nine = deck.filter((card) => card.indexOf("9") != -1);
  let ten = deck.filter((card) => card.indexOf("10") != -1);
  let jack = deck.filter((card) => card.indexOf("J") != -1);
  let queen = deck.filter((card) => card.indexOf("Q") != -1);
  let king = deck.filter((card) => card.indexOf("K") != -1);

  //combine all the separate arrays into one ordered array
  let combinedArray = concArrays.concat(
    ace,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    jack,
    queen,
    king
  );

  // Sorting function for numeric values
  // newArray.sort(function (a, b) {
  //   return a - b;
  // });
  return combinedArray;
}

// TASK 3b) ARRANGE BY DESCENDING VALUE
function descendingOrder() {
  return ascendingOrder(deck).reverse();
}

// TASK 4) DEAL A RANDOM CARD IN STRING FORM
function dealRandomCard() {
  let deck = cards.slice(0);
  let shuffledDeck = shuffleDeck(deck);
  let randomCard = shuffledDeck.shift();
  let printed = printName(randomCard);
  return printed;
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

console.log(`Task 1 - Shuffle Deck: ${shuffleDeck(deck)}`);
console.log(`Task 2 - Arrange Deck By Suit: ${arrangeBySuit(deck)}`);
console.log(`Task 3a - Ascending Order: ${ascendingOrder(deck)}`);
console.log(`Task 3b - Descending Order: ${descendingOrder(deck)}`);
console.log(`Task 4 - Deal a Random Card in a String: ${dealRandomCard(deck)}`);
