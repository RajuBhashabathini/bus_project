import { createSlice, current } from "@reduxjs/toolkit";

const userDetails = createSlice({
  name: "userName",
  initialState: {
    details: [
      {
        firstName: "Guest",
        lastName: "User",
      },
    ],
  },
  reducers: {
    loggedInUser: (state, action) => {
      console.log("Redux loggedInUser payload", action.payload);
      state.details = action.payload;
    },
    logOutUser: (state, action) => {
      console.log("Redux logOutUser", action.payload);
      console.log("state using current", current(state));

      state.details = [
        {
          firstName: "Guest",
          lastName: "User hello",
        },
      ];
    },
  },
});

export const { loggedInUser, logOutUser } = userDetails.actions;
export default userDetails.reducer;
