//object_experiments.js
const objectOne = {
  firstName: "Alice",
  lastName: "the Rabbit Hunter",
};

// console.log("Value of Object One: ", objectOne);

const objectTwo = objectOne;
objectTwo.lastName = "The nice girl";

// console.log("Value of Object One: ", objectOne);
// console.log("Value of Object Two: ", objectTwo);

const hunter = {
  firstName: "Alice",
  lastName: "the Rabbit Hunter",
};

// console.log("Value of Object hunter: ", hunter);

// create a (shallow!) copy
const niceGirl = {
  ...hunter,
};
niceGirl.lastName = "The nice girl";

// this now works as expected
// console.log("Value of Object hunter: ", hunter);
// console.log("Value of Object niceGirl: ", niceGirl);

// now we create an object that has a nested object:
const cast = {
  hunter,
  prey: "The Rabbit",
};

// console.log("Value of Object hunter: ", hunter);
// console.log("Value of Object cast: ", cast);

// let's mutate our hunter
hunter.firstName = "bob";

console.log("Value of Object hunter: ", hunter);
console.log("Value of Object cast: ", cast);
