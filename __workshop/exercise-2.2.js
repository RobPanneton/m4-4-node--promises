// Exercise 2.2 - Greeting
// ----------------------

// require the 'request-promise' module.
const request = require("request-promise");

const greeting = (langCode) => {
  return request(`https://journeyedu.herokuapp.com/hello/${langCode}`) // 1
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return parsedResponse.data.text; // 2
    })
    .catch((err) => console.log("Error: ", err));
};

// Testing
greeting("ja").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
greeting("es").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
greeting("ru").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
greeting("hi").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }

// 3
setTimeout(function () {
  greeting("ja").then((result) => console.log(result));
}, 1000);

setTimeout(function () {
  greeting("es").then((result) => console.log(result));
}, 1500);

setTimeout(function () {
  greeting("ru").then((result) => console.log(result));
}, 3000);

setTimeout(function () {
  greeting("hi").then((result) => console.log(result));
}, 2500);
