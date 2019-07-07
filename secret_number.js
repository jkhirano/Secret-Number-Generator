"use strict";
module.exports = function() {
  let secretNumberGenerator = function() {
    return Math.floor(Math.random() * 1000000 + 1);
  };
  let secretNumber = secretNumberGenerator();
  let storedNumber = function() {
    return secretNumber;
  };
  return storedNumber;
};
