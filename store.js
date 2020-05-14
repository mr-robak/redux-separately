const { createStore } = require("redux");
const reducer = require("./myCountingReducer");

const store = createStore(reducer);
console.log("Initial state of the store:", store.getState());

store.subscribe(() => {
  console.log("The state just changed to:", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 10,
});

store.dispatch({
  type: "ADD",
  payload: 5,
});

store.dispatch({
  type: "ADD",
  payload: 5,
});

store.dispatch({
  type: "SUBSTRACT",
  payload: 20,
});

console.log("final state:", store.getState());
