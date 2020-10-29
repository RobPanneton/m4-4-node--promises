// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------

const request = require("request-promise");
const opencage = require("opencage-api-client");
require("dotenv").config();

const { getIssPosition } = require("./exercise-3.1");
const { getPositionFromAddress } = require("./exercise-3.2");

const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};

const getDistanceFromIss = async (address) => {
  //get issposition first
  //get position from address
  // return distance from one another
  const issPosition = await getIssPosition();
  const addressPosition = await getPositionFromAddress(address);
  return await getDistance(issPosition, addressPosition);
};

getDistanceFromIss(
  "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
).then((result) => console.log(result));
