import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { authSlice } from "./authSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;

//action will always override the current state
//never change the existing state, override it with the brand new state

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   if (action.type === "toggle") {
//     return { showCounter: !state.showCounter, counter: state.counter };
//   }

//   return state;
// };
