// postSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '0', content: 'Post 1' },
  { id: '1', content: 'Post 2' },
  // ... more initial posts if needed
];

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Define reducers here (postAdded, postRemoved, etc.)
  }
});

export const selectAllPosts = state => state.posts;
export const { selectAllUser } = postSlice.actions;
export default postSlice.reducer;