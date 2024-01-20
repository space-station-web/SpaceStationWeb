import * as L from "./BookList.styles";

export const PRACS = [
  {
    category: "bbbb",
    number: 1,
    title: "크리스마스준비",
    contents: "집을 온통 초록색과 빨간색으로",
  },
  { category: "bbbb", number: 1, title: "1234", contents: "123aaaa" },
  { category: "bbbb", number: 1, title: "1234", contents: "123aaaa" },
  { category: "bbbb", number: 1, title: "1234", contents: "123aaaa" },
  { category: "bbbb", number: 1, title: "1234", contents: "123aaaa" },
  { category: "bbbb", number: 1, title: "1234", contents: "123aaaa" },
  { category: "bbbb", number: 1, title: "1234", contents: "123aaaa" },
  { category: "bbbb", number: 1, title: "1234", contents: "123aaaa" },
  { category: "bbbb", number: 1, title: "1234", contents: "123aaaa" },
  { category: "bbbb", number: 1, title: "1234", contents: "123aaaa" },
];

export default function BoardListUI(): JSX.Element {
  return (
    <L.Wrapper>
      <L.Radial />
      <L.TopDiv>
        <L.Prev src="/common/icon/Arrow 2.png" />
        <L.Logo src="/common/icon/logo1.png" />
      </L.TopDiv>
      <L.CategoryDiv>
        <L.CategoryContainer>
          <L.CategoryIcon src="./book/1.png" />
          <L.CategoryName>소설</L.CategoryName>
        </L.CategoryContainer>
        <L.CategoryContainer>
          <L.CategoryIcon src="./book/2.png" />
          <L.CategoryName>시</L.CategoryName>
        </L.CategoryContainer>
        <L.CategoryContainer>
          <L.CategoryIcon src="./book/3.png" />
          <L.CategoryName>에세이</L.CategoryName>
        </L.CategoryContainer>
        <L.CategoryContainer>
          <L.CategoryIcon src="./book/4.png" />
          <L.CategoryName>취미</L.CategoryName>
        </L.CategoryContainer>
        <L.CategoryContainer>
          <L.CategoryIcon src="./book/5.png" />
          <L.CategoryName>문화</L.CategoryName>
        </L.CategoryContainer>
        <L.CategoryContainer>
          <L.CategoryIcon src="./book/6.png" />
          <L.CategoryName>요리</L.CategoryName>
        </L.CategoryContainer>
        <L.CategoryContainer>
          <L.CategoryIcon src="./book/7.png" />
          <L.CategoryName>사랑</L.CategoryName>
        </L.CategoryContainer>

        <L.CategoryContainer>
          <L.CategoryIcon src="./book/8.png" />
          <L.CategoryName>책 등록하기</L.CategoryName>
        </L.CategoryContainer>
      </L.CategoryDiv>

      <L.BoardBox>
        {PRACS.map((el) => (
          <L.Board key={el.number}>
            <L.BoardImage src="/book/rectangle 208.png"></L.BoardImage>

            <L.BoardBottom>
              <L.BoardCategory>지연</L.BoardCategory>
              <L.BoardTitle>{el.title}</L.BoardTitle>
              <L.BoardSubTitle>부제</L.BoardSubTitle>
              <L.BoardContents>{el.contents}</L.BoardContents>
            </L.BoardBottom>
          </L.Board>
        ))}
      </L.BoardBox>
    </L.Wrapper>
  );
}
