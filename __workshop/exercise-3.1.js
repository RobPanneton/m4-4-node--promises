// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");
// Returns the current position of the ISS
// const getIssPosition = () => {
//   const myPromise = new Promise((resolve, reject) => {
//     request("http://api.open-notify.org/iss-now.json")
//       .then((response) => JSON.parse(response))
//       .then((parsedResponse) => {
//         return {
//           lat: parsedResponse.iss_position.latitude,
//           long: parsedResponse.iss_position.longitude,
//         };
//       });
//   });
// };

const getIssPosition = () => {
  return request("http://api.open-notify.org/iss-now.json")
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      // console.log(parsedResponse.iss_position.latitude);
      // console.log(parsedResponse.iss_position.longitude);

      return {
        lat: parsedResponse.iss_position.latitude,
        lng: parsedResponse.iss_position.longitude,
      };
    });
};

getIssPosition().then((result) => console.log(result));

module.exports = { getIssPosition };
