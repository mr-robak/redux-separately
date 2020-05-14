// app.js
const redux = require("redux");
const { reducer } = require("./appReducer");

const store = redux.createStore(reducer);
console.log("Initial state of the store:", store.getState());

store.subscribe(() => {
  console.log("The state just changed to:", store.getState());
});

store.dispatch({
  type: "LOGIN",
  payload: {
    firstName: "Kelley",
    lastName: "van Evert",
    age: 27,
  },
});

store.dispatch({
  type: "UPDATE_LOGGEDIN_USER",
  payload: {
    age: 28,
  },
});
