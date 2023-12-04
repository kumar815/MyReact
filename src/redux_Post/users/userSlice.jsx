import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '0', name: 'dude lebowsk' },
  { id: '1', name: 'neil young' },
  { id: '2', name: 'dev gray' }
];

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Define reducers here if needed (addUser, removeUser, updateUser)
  }
});

export const selectAllUsers = state => state.user;
export const { selectAllUPosts } = userSlice.actions;
export default userSlice.reducer;