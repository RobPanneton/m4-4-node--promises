// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: `${lat},${lng}`,
  };

  const address = opencage
    .geocode(requestObj)
    .then((data) => {
      return data.results[0].formatted;
    })
    .catch((error) => {
      return "error", error.message;
    });

  return address;
}

getAddressFromPosition("48.8584", "2.2945").then((response) =>
  console.log(response)
);

// getAddressFromPosition("2.2945", "48.8584").then((response) =>
//   console.log(response)
// );

module.exports = { getAddressFromPosition };
