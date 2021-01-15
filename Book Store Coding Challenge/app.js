let store = {
  storeName: "Elijah's Book Store",
  inventoryList: [],
  earnings: 0,
};

// let book = function (title, quantity, value) {
//   this.title = title;
//   this.quantity = quantity;
//   this.value = value;
// };

class Book {
  constructor(title, quantity, value) {
    this.title = title;
    this.quantity = quantity;
    this.value = value;
  }
}

function addBook(title, quantity, value) {
  // Object.create(book);
  // Book.title = title;
  // Book.quantity = quantity;
  // Book.value = value;

  let contains =
    store.inventoryList.filter(function (obj) {
      return obj.title === title;
    }).length >= 1;

  if (contains) {
    console.log("Book Already Exists!");
  } else {
    store.inventoryList.push(new Book(title, quantity, value));
    console.log(`You have added ${title} to the inventory list`);
  }
  console.log(store.inventoryList);
  // creates book object (with the title, quantity, value) and add it to an array of book objects in the store inventory
}

function restockBook(title, quantity) {
  // if (store.inventoryList.indexOf(title) !== -1) {
  //   console.log("Book can be restocked");
  // } else {
  //   console.log(
  //
  //   );
  // }
  // console.log(title);
  let contains =
    store.inventoryList.filter((object) => {
      return object.title === title;
    }).length > 0;

  let checkTitle = store.inventoryList.filter((book) => book.title === title);

  if (contains) {
    for (let i = 0; i < checkTitle.length; i++) {
      checkTitle[i].quantity += quantity;
      console.log(
        `Successfully restocked ${quantity} pieces of the book "${checkTitle[i].title}"`
      );
    }
  } else {
    console.log(
      `Sorry, could not restock book. Book does not exist in inventory list`
    );
  }
}
// adds the corresponding book to the inventory
// the book should already be in the inventory, if not, this should not work

function sellBook(title, quantity) {
  for (let i = 0; i < store.inventoryList.length; i++) {
    if (store.inventoryList[i].title === title) {
      if (store.inventoryList[i].quantity === 0) {
        console.log(
          `Sorry, ${store.inventoryList[i].title} is currently out of stock!`
        );
      } else if (store.inventoryList[i].quantity < quantity) {
        console.log(
          `Oh no! It looks like there's only ${store.inventoryList[i].quantity} stocks left.`
        );
      } else if (quantity === 1) {
        store.inventoryList[i].quantity -= quantity;
        store.earnings += store.inventoryList[i].value * quantity;
        console.log(
          `You have succesfully purchased a copy of ${store.inventoryList[i].title}.`
        );
      } else {
        store.inventoryList[i].quantity -= quantity;
        store.earnings += store.inventoryList[i].value * quantity;
        console.log(
          `You have succesfully purchased ${quantity} copies of ${store.inventoryList[i].title}.`
        );
      }
      // console.log(store.inventoryList, store.earnings);
    }
  }
  // searches for the book with the title then deducts the quantity and adds the earnings accordingly
  // if it doesn't exist, console.log(${book-title} out of stock)
  // if quantity is less than what is in inventory, transaction will fail and console.log(`Only ${number} stocks left`)
  // if sell is successful, console.log("Successful transaction")
}

function totalEarnings() {
  console.log(`Store name: ${store.storeName}`);
  console.log(`Total earnings: $${store.earnings}`);
  // this will display total earnings of store, print store name and earnings
}

function listInventory() {
  // this will display all of the books in the inventory, print book title and value

  for (let i = 0; i < store.inventoryList.length; i++) {
    console.log(`Title: ${store.inventoryList[i].title}`);
    console.log(`Quantity: ${store.inventoryList[i].quantity}`);
    console.log(`Value: ${store.inventoryList[i].value}`);
  }
}
