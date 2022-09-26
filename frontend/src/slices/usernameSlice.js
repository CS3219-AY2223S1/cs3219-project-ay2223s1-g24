import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';

export const usernameSlice = createSlice({
  name: 'username',
  initialState: {
    value: "",
  },
  reducers: {
    setUsername: (state, action) => {
      console.log(action);
      state.value = action.payload;
    },
    resetUsername: (state) => {
      state.value = "";
    }
  },
})

export const { setUsername, resetUsername } = usernameSlice.actions;

export function useUsername() {
  return useSelector((state) => state.username.value);
};

export default usernameSlice.reducer;
