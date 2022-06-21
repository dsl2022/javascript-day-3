function purchase(item, price, callback) {
  const amount = 0.6 * price;
  console.log("before callback");
  callback(item, amount);
  console.log("after callback");
}

function determineEligible(item, amount) {
  setTimeout(() => {
    if (item === "privatejet" && amount > 500000) {
      console.log("you are eligible for a dimond membership");
    } else {
      console.log("keep spending more money");
    }
  }, 3000);
}

purchase("privatejet", 1000000, determineEligible);

purchase("rocket", 3000000, determineEligible);
