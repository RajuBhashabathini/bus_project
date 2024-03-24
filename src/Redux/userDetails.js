import { createSlice, current } from "@reduxjs/toolkit";

const userDetails = createSlice({
  name: "userName",
  initialState: {
    details: [
      {
        firstName: "Guest",
        lastName: "User",
        isUserLoggedIn: false,
      },
    ],
  },
  reducers: {
    loggedInUser: (state, action) => {
      action.payload[0]["isUserLoggedIn"] = true;
      console.log("Redux loggedInUser payload", action.payload);
      debugger;
      state.details = action.payload;
    },
    logOutUser: (state, action) => {
      console.log("Redux logOutUser", action.payload);
      console.log("state using current", current(state));

      state.details = [
        {
          firstName: "Guest",
          lastName: "User",
          isUserLoggedIn: false,
        },
      ];
    },
  },
});

export const { loggedInUser, logOutUser } = userDetails.actions;
export default userDetails.reducer;
