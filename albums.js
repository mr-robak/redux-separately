// albums.js
const redux = require("redux");
const { reducer } = require("./albums_reducer");

const store = redux.createStore(reducer);
console.log("Initial state of the store:", store.getState());

store.subscribe(() => {
  console.log("The state just changed to:", store.getState());
});
