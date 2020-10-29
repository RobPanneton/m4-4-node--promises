// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

const greeting = (langCode) => {
  return (
    request(`https://journeyedu.herokuapp.com/hello/${langCode}`) // 1
      .then((response) => JSON.parse(response))
      .then((parsedResponse) => {
        return parsedResponse.data.text; // 2
      })
      //    .catch((err) => console.log("Error: ", err));
      .catch((err) => {
        return err.error ? JSON.parse(err.error) : err;
      })
  );
};

// Testing
greeting("ja").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
greeting("es").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
greeting("ru").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
greeting("hi").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
greeting("h123").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }

// get the code you wrote in 2.2 and paste it here...
