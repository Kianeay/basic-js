const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;
  let array = [];
  const words = members.filter(member => typeof member === "string");
 for (let memb of words) {
array.push(memb.trim().charAt(0));
 }
 return array.sort().join("").toUpperCase();
};
