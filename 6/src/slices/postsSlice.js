import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
  entities: {},
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, { payload }) {
      // BEGIN (write your solution here)
      state.ids = payload.map(post => post.id);
      payload.forEach(post => {
        state.entities[post.id] = post;
      })
      // END
    },
  },
});

export const { actions } = postsSlice;
export default postsSlice.reducer;
