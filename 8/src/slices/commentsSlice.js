import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { actions as usersActions } from "./usersSlice.js";
import { actions as postsActions } from "./postsSlice.js";

const commentsAdapter = createEntityAdapter();

const initialState = commentsAdapter.getInitialState();

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComments: commentsAdapter.addMany,
    addComment: commentsAdapter.addOne,
  },
  // BEGIN (write your solution here)
  extraReducers: (builder) => {
    builder
      .addCase(usersActions.removeUser, (state, { payload }) => {
        const userId = payload.id;
        const allComments = Object.values(state.entities);
        const commentsToRemove = allComments.filter(
          (comment) => comment.authorId === userId
        );
        commentsAdapter.removeMany(
          state,
          commentsToRemove.map((comment) => comment.id)
        );
      })
      .addCase(postsActions.removePost, (state, { payload }) => {
        const postId = payload.id;
        const allComments = Object.values(state.entities);
        const commentsToRemove = allComments.filter(
          (comment) => comment.postId === postId
        );
        commentsAdapter.removeMany(
          state,
          commentsToRemove.map((comment) => comment.id)
        );
      });
  },
  // END
});

export const { actions } = commentsSlice;
export const selectors = commentsAdapter.getSelectors(
  (state) => state.comments
);
export default commentsSlice.reducer;
