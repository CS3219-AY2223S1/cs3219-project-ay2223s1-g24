import { createSlice } from '@reduxjs/toolkit'

export const usernameSlice = createSlice({
  name: 'username',
  initialState: {
    value: "",
  },
  reducers: {
    set: (state, action) => {
      console.log(action);
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = "";
    }
  },
})

export const { set, reset } = usernameSlice.actions;

export const selectUsername = (state) => state.username.value;

export default usernameSlice.reducer;
