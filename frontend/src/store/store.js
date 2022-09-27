
import { configureStore } from '@reduxjs/toolkit'
import usernameSlice from 'slices/usernameSlice';
import roomSlice from 'slices/roomSlice';

const store = configureStore({
  reducer : {
    username: usernameSlice,
    room: roomSlice
  }
});
export default store;