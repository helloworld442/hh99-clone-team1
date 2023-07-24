import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchInput: "",
  news: {},
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    CHANGE_INPUT: (state, action) => {
      return (state.searchInput = action.payload);
    },
    GET_INPUT_BY_NAME: (state, action) => {
      return (state.news = action.payload.news.find(
        (news) => news.title === action.payload.name
      ));
    },
  },
});

export const { CHANGE_INPUT, GET_INPUT_BY_NAME } = newsSlice.actions;

export default newsSlice.reducer;
