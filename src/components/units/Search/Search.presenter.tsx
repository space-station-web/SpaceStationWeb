import * as S from "./Search.styles";
import type { ISearchProps } from "./Search.types";

export default function SearchUI({
  onClickAuthorFilter,
  onClickTitleFilter,
  searchFilter,
  searchingItem,
  handleSearchChange,
  handleSubmit,
}: ISearchProps): JSX.Element {
  return (
    <div>
      <S.Wrapper>
        <S.SearchFullContainer>
          <S.FilterContainer>
            <S.FilterTitleButton
              onClick={onClickTitleFilter}
              style={{
                backgroundColor:
                  searchFilter === "title" ? "#dcdcdc" : "#141414",
                color: searchFilter === "title" ? "black" : "#8c8c8c",
              }}
            >
              글 제목
            </S.FilterTitleButton>
            <S.FilterAuthorButton
              onClick={onClickAuthorFilter}
              style={{
                backgroundColor:
                  searchFilter === "author" ? "#dcdcdc" : "#141414",
                color: searchFilter === "author" ? "black" : "#8c8c8c",
              }}
            >
              글쓴이
            </S.FilterAuthorButton>
          </S.FilterContainer>

          <S.SearchContainer>
            <S.SearchBtnImage src="/common/icon/search.svg" />
            <S.SearchInput
              type="text"
              placeholder="찾고 싶은 글이 있나요?"
              value={searchingItem}
              onChange={handleSearchChange}
              onKeyDown={handleSubmit}
            />
          </S.SearchContainer>
          <S.DivideLine> </S.DivideLine>

          <S.KeywordHistoryContainer>
            <S.KeywordHistoryTitle>최근 검색어</S.KeywordHistoryTitle>
            <S.KeywordHistoryBox>
              <S.Keyword>예시1</S.Keyword>
              <S.DeleteBtn src="/common/icon/delete.svg" />
            </S.KeywordHistoryBox>
          </S.KeywordHistoryContainer>
        </S.SearchFullContainer>
      </S.Wrapper>
    </div>
  );
}
