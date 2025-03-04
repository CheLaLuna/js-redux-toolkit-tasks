// BEGIN (write your solution here)
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const { setComments } = commentsSlice.actions;

export default commentsSlice.reducer;
// END
