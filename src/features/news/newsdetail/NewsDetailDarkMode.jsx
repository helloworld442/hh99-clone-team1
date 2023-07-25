import React, { useState } from "react";
import {
  NewsDetailDarkModeBox,
  NewsDetailDarkModeIcon,
  NewsDetailDarkModeToggleBox,
  NewsDetailDarkModeToggleAction,
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../../../redux/reducers/darkModeSlice";

const NewsDetailDarkMode = () => {
  const darkModeToggle = useSelector((state) => state.darkMode.darkModeToggle);
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <NewsDetailDarkModeBox darkModeToggle={darkModeToggle}>
      <NewsDetailDarkModeIcon>Icon</NewsDetailDarkModeIcon>
      <NewsDetailDarkModeToggleBox onClick={toggleHandler}>
        <NewsDetailDarkModeToggleAction darkModeToggle={darkModeToggle}>
          Action
        </NewsDetailDarkModeToggleAction>
      </NewsDetailDarkModeToggleBox>
    </NewsDetailDarkModeBox>
  );
};

export default NewsDetailDarkMode;
