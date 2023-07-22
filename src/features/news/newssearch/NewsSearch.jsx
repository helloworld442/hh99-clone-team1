import React from "react";
import {
  Layout,
  StInputLayout,
  StNewsSearchTextBox,
  StNewsSearchInput,
  Icon,
  KeywordSection,
  KeywordBox,
  KeywordItemBox,
  KeywordTitle,
} from "./style";
import { Link, useNavigate } from "react-router-dom";

const NewsSearch = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <StInputLayout>
        <StNewsSearchTextBox>
          <Icon onClick={() => navigate("/")} />
          <StNewsSearchInput
            type="text"
            placeholder="고슴아 이게 궁금해. (인물,이슈)"
          />
        </StNewsSearchTextBox>

        <KeywordSection>
          <KeywordBox>
            <KeywordTitle>고슴이 추천 키워드</KeywordTitle>
            <KeywordItemBox>
              <Link>1</Link>
              <Link>2</Link>
              <Link>3</Link>
              <Link>4</Link>
              <Link>5</Link>
              <Link>6</Link>
            </KeywordItemBox>
          </KeywordBox>
        </KeywordSection>
      </StInputLayout>
    </Layout>
  );
};

export default NewsSearch;
