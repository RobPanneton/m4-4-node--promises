// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  myPromise = new Promise((resolve, reject) => {
    capsArray = array.join(" ").toUpperCase().split(" ");
    resolve(capsArray);
  });
  return myPromise;
};

const sortWords = (array) => {
  myPromise = new Promise((resolve, reject) => {
    sortedArray = array.sort();
    resolve(sortedArray);
  });
  return myPromise;
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
