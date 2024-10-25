import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
  entities: {},
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments(state, { payload }) {
      // BEGIN (write your solution here)
      state.ids = payload.map(comment => comment.id);
      payload.forEach(comment => {
        state.entities[comment.id] = comment;
      // END
    });
  },
},
});
export const { actions } = commentsSlice;
export default commentsSlice.reducer;
