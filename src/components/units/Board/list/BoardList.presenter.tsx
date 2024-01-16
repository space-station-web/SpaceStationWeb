import * as L from "./BoardList.styles";

export const PRACS = [
  { category: "bbbb", number: 1, title: "1234", contents: "123aaaa" },
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
        <L.Category>이웃 게시물</L.Category>
        <L.Category>많이 보관한순</L.Category>
        <L.Category>최신순</L.Category>
        <L.Category>좋아요순</L.Category>
      </L.CategoryDiv>

      <L.BoardBox>
        {PRACS.map((el) => (
          <L.Board key={el.number}>{el.number}</L.Board>
        ))}
      </L.BoardBox>
    </L.Wrapper>
  );
}
