import React, { useEffect, useState } from "react";
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
import { useMutation } from "react-query";
import { getKeyword } from "../../../api/news";
import Spinner from "../../common/Spinner/Spinner";

const NewsSearch = () => {
  const [keyword, setKeyword] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const res = useMutation("news-search", getKeyword, {
    onSuccess: (data) => {
      setKeyword(data);
    },
    onError: (err) => {
      alert("검색창에서 에러가 뜹니다. 관리자에게 문의하세요!");
    },
  });

  useEffect(() => {
    res.mutate();
  }, []);

  if (res.isLoading) return <Spinner />;

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
          {keyword.map((item) => (
            <Link to={"/search/posts?keyword=" + item}>{item}</Link>
          ))}
        </NewsKeywordItemBox>
      </NewsKeywordBox>
    </NewsSearchLayout>
  );
};

export default NewsSearch;
