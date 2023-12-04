// store.js
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
  },
});
export default store;
