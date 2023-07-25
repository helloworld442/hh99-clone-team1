import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkModeToggle: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkModeToggle = !state.darkModeToggle;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
