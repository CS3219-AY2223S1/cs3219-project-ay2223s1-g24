import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';

export const roomSlice = createSlice({
  name: 'room',
  initialState: {
    roomID: "",
    firstQuestionHash: 0,
    secondQuestionHash: 0,
    difficulty: ""
  },
  reducers: {
    setRoom: (state, action) => {
      state.roomID = action.payload.roomID;
      state.firstQuestionHash = action.payload.firstQuestionHash;
      state.secondQuestionHash = action.payload.secondQuestionHash;
      state.difficulty = action.payload.difficulty;
    },
    resetRoom: (state) => {
      state.roomID = "";
      state.firstQuestionHash = 0;
      state.secondQuestionHash = 0;
      state.difficulty = "";
    }
  },
})

export const { setRoom, resetRoom } = roomSlice.actions;

export function useRoom() {
  return useSelector((state) => state.room);
};

export default roomSlice.reducer;
