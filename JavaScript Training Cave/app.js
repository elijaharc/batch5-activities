let count = 0;

// while (count < 10) {
//   console.log(count);
//   count++;
// }

// while (count < 3) {
//   count++;
//   console.log(count);
// }

function withdraw(user, amount) {
  // Try to make the amount as accurate as possible (search for floating points)
  // check if amount is a valid number, CANNOT BE NEGATIVE NUMBER
  if (amount <= 0) {
    let error = "Please enter valid amount.";
    return error;
  }

  // Get user information from users array
  if (userExist(user)) {
    // Once user is found, add the amount to the balance AND RETURN new balance
    for (let i = 0; i < users.length; i++) {
      // console.log(users[i].user);
      if (users[i].user.toUpperCase() == user.toUpperCase()) {
        // check balance if enough to make a withdrawal
        // console.log(users.toUpperCase().balance);
        if (users[i].balance < amount) {
          console.log("Sorry, balance insufficient");
        } else {
          users[i].balance -= amount;
          console.log(
            `New balance for ${users[i].user} is ${users[i].balance}`
          );
          return users[i].balance;
        }
      }
    }
  } else {
    // If user not found, show message -> 'User does not exist.'
    console.log("User does not exist.");
  }
}
