// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };

  const geoCoords = opencage
    .geocode(requestObj)
    .then((data) => {
      return data.results[0].geometry;
    })
    .catch((error) => {
      return "error", error.message;
    });

  return geoCoords;
  // opencage
  //   .geocode({ q: address, key: "8c1cbfb6a12c4c869c0d8974c0b95e22" })
  //   .then((data) => {
  //     return JSON.stringify(data);
  //   })
  //   .catch((error) => {
  //     return "error", error.message;
  //   });
};

// getPositionFromAddress(
//   "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
// ).then((response) => console.log(response.results));

// getPositionFromAddress(
//   "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
// ).then((response) => console.log(response.results[0].geometry));

// getPositionFromAddress(
//   "4 Pennsylvania Plaza, New York, NY 10001, United States"
// ).then((response) => console.log(response.results));

getPositionFromAddress(
  "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
).then((response) => console.log(response));

getPositionFromAddress(
  "4 Pennsylvania Plaza, New York, NY 10001, United States"
).then((response) => console.log(response));

module.exports = { getPositionFromAddress };
