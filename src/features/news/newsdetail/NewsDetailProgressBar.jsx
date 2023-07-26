import React from "react";
import { useEffect, useState } from "react";
import {
  NewsDetailProgressBarBox,
  NewsDetailProgressBarInner,
  NewsDetailProgressBarHeadLine,
} from "./style";
import { useSelector } from "react-redux";

const NewsDetailProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const darkModeToggle = useSelector((state) => state.darkMode.darkModeToggle);

  useEffect(() => {
    const updateScrollProgress = () => {
      const h = document.documentElement;
      const st = window.scrollY;
      const sh = h.scrollHeight || document.body.scrollHeight;
      const percent = (st / (sh - h.clientHeight)) * 100;

      setScrollProgress(percent);
    };
    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  if (window.scrollY <= 115) {
    return null;
  }
  return (
    <NewsDetailProgressBarBox>
      <NewsDetailProgressBarInner
        style={{ width: `${scrollProgress}%` }}
        dark={darkModeToggle}
      />
      <NewsDetailProgressBarHeadLine>
        🔔띵동! ‘킬러 문항 배제’ 피자가 도착했습니다!
      </NewsDetailProgressBarHeadLine>
    </NewsDetailProgressBarBox>
  );
};

export default NewsDetailProgressBar;
