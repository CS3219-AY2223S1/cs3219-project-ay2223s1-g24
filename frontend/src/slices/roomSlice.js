import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';

export const roomSlice = createSlice({
  name: 'room',
  initialState: {
    roomID: "",
    firstQuestionHash: 0,
    secondQuestionHash: 0
  },
  reducers: {
    setRoom: (state, action) => {
      console.log(action);
      state.roomID = action.payload.roomID;
      state.firstQuestionHash = action.payload.firstQuestionHash;
      state.secondQuestionHash = action.payload.secondQuestionHash;
    },
    resetRoom: (state) => {
      state.roomID = "";
      state.firstQuestionHash = 0;
      state.secondQuestionHash = 0;
    }
  },
})

export const { setRoom, resetRoom } = roomSlice.actions;

export function useRoom() {
  return useSelector((state) => state.room);
};

export default roomSlice.reducer;
