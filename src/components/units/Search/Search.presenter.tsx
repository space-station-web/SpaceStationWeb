import * as S from "./Search.styles";

export default function SearchUI(): JSX.Element {
  return (
    <div>
      <S.Wrapper>
        <S.SearchFullContainer>
          <S.FilterContainer>
            <S.FilterButton>글 제목</S.FilterButton>
            <S.FilterButton>글쓴이</S.FilterButton>
          </S.FilterContainer>

          <S.SearchContainer>
            <S.SearchBtnImage src="/common/icon/search.svg" />
            <S.SearchInput type="text" placeholder="찾고 싶은 글이 있나요?" />
          </S.SearchContainer>
        </S.SearchFullContainer>
      </S.Wrapper>
    </div>
  );
}
