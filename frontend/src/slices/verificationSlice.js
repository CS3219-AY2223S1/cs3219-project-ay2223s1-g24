import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const verificationSlice = createSlice({
  name: "verification",
  initialState: {
    value: "",
  },
  reducers: {
    setVerification: (state, action) => {
      state.value = action.payload;
    },
    resetVerification: (state) => {
      state.value = "";
    },
  },
});

export const { setVerification, resetVerification } = verificationSlice.actions;

export function useVerification() {
  return useSelector((state) => state.verification.value);
}

export default verificationSlice.reducer;
