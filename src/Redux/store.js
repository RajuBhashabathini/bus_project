import { configureStore } from "@reduxjs/toolkit";
import userDetails from "./userDetails";

const store = configureStore({
  reducer: {
    userDetails: userDetails,
  },
  devTools: true,
});
export default store;
