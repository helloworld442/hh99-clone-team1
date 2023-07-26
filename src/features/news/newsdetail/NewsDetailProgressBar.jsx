import React from "react";
import { useEffect, useState } from "react";
import {
  NewsDetailProgressBarBox,
  NewsDetailProgressBarInner,
  NewsDetailProgressBarHeadLine,
} from "./style";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getNews } from "../../../api/news";
import { useParams } from "react-router-dom";

const NewsDetailProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHidden, setIsHidden] = useState(true);
  const { postId } = useParams();
  const darkModeToggle = useSelector((state) => state.darkMode.darkModeToggle);
  const { data } = useQuery(["detail", postId], () => getNews(postId));
  useEffect(() => {
    const updateScrollProgress = () => {
      const h = document.documentElement;
      const st = window.scrollY;
      const sh = h.scrollHeight || document.body.scrollHeight;
      const percent = (st / (sh - h.clientHeight)) * 100;

      setScrollProgress(percent);
      if (st > 115) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
    };
    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);
  if (isHidden) {
    return null;
  }
  return (
    <NewsDetailProgressBarBox>
      <NewsDetailProgressBarInner
        style={{ width: `${scrollProgress}%` }}
        dark={darkModeToggle}
      />
      <NewsDetailProgressBarHeadLine>
        {data.title}
      </NewsDetailProgressBarHeadLine>
    </NewsDetailProgressBarBox>
  );
};

export default NewsDetailProgressBar;
