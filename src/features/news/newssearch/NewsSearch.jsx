import React, { useState } from "react";
import {
  NewsSearchLayout,
  NewsSearchInputBox,
  NewsSearchInput,
  NewsSearchIcon,
  NewsKeywordBox,
  NewsKeywordTitle,
  NewsKeywordItemBox,
} from "./style";
import { Link, useNavigate } from "react-router-dom";

const NewsSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  return (
    <NewsSearchLayout>
      <NewsSearchInputBox>
        <NewsSearchIcon onClick={() => navigate("/")} />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/search/posts?keyword=${inputValue}`);
          }}
        >
          <NewsSearchInput
            type="text"
            placeholder="고슴아 이게 궁금해. (인물,이슈)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                // const postId =
                navigate(`/search/posts?keyword=${inputValue}`);
              }
            }}
          />
        </form>
      </NewsSearchInputBox>

      <NewsKeywordBox>
        <NewsKeywordTitle>고슴이 추천 키워드</NewsKeywordTitle>
        <NewsKeywordItemBox>
          <Link>한미정상회담</Link>
          <Link>2</Link>
          <Link>3</Link>
          <Link>4</Link>
          <Link>5</Link>
          <Link>6</Link>
        </NewsKeywordItemBox>
      </NewsKeywordBox>
    </NewsSearchLayout>
  );
};

export default NewsSearch;
