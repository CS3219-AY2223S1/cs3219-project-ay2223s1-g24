import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const matchingSlice = createSlice({
  name: "matching",
  initialState: {
    isQueueing: false,
    matchStatus: "",
    progress: 100,
    easyModal: false,
  },
  reducers: {
    setMatching: (state, action) => {
      state.isQueueing = action.payload.isQueueing;
      state.matchStatus = action.payload.matchStatus;
      state.progress = action.payload.progress;
      state.easyModal = action.payload.easyModal;
    },
    resetMatching: (state) => {
      state.isQueueing = false;
      state.matchStatus = "";
      state.progress = 100;
      state.easyModal = false;
    },
    updateMatchStatus: (state, action) => {
      state.matchStatus = action.payload;
    },
    updateIsQueueing: (state, action) => {
      state.isQueueing = action.payload;
    },
    updateProgress: (state, action) => {
      state.progress = action.payload;
    },
    updateEasyModal: (state, action) => {
      state.easyModal = action.payload;
    },
  },
});

export const {
  setMatching,
  resetMatching,
  updateMatchStatus,
  updateIsQueueing,
  updateProgress,
  updateEasyModal,
} = matchingSlice.actions;

export function useMatching() {
  return useSelector((state) => state.matching);
}

export default matchingSlice.reducer;
