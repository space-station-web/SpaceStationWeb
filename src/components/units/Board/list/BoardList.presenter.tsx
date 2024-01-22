import * as L from "./BoardList.styles";
import SaveIcon from "../../../../../public/save.svg";
import PaginationComponent from "../../../commons/pagination/Pagination";

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
      <L.TopDiv>
        <L.Prev src="/common/icon/Arrow 2.png" />

      </L.TopDiv>
      <L.CategoryDiv>
        <L.Category>이웃 게시물</L.Category>
        <L.Category>오늘의 글감</L.Category>
        <L.Category>많이 보관한순</L.Category>
        <L.Category>최신순</L.Category>
        <L.Category>좋아요순</L.Category>
      </L.CategoryDiv>
      <L.BoardBox>
        {PRACS.map((el) => (
          <L.Board key={el.number}>
            <L.BoardTop>
              <L.BoardSaveBack>
                <SaveIcon fill="#FF6F00" />
              </L.BoardSaveBack>
            </L.BoardTop>
            <L.BoardTitle>{el.title}</L.BoardTitle>
            <L.BoardContents>{el.contents}</L.BoardContents>
          </L.Board>
        ))}
      </L.BoardBox>

      <PaginationComponent />
    </L.Wrapper>
  );
}
