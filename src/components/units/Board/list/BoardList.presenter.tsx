import * as L from "./BoardList.styles";
import SaveIcon from "../../../../../public/save.svg";
import PaginationComponent from "../../../commons/pagination/Pagination";
import type { IBoardListTypes } from "./BoardListTypes";


export default function BoardListUI(props: IBoardListTypes): JSX.Element {
  
  // 한 줄로 표시할 내용의 길이를 정하는 함수
  const truncateContent = (content:string, maxLength:number = 13):string => {
    // 내용이 최대 길이보다 길면, 잘라내고 "..."를 추가합니다.
    return content.length > maxLength ? content.slice(0, maxLength) + "..." : content;
  };

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
        {props.posts.map((el) => (
          <L.Board key={el.id}>
            <L.BoardTop>
              <L.BoardSaveBack>
                <SaveIcon fill="#FF6F00" />
              </L.BoardSaveBack>
            </L.BoardTop>
            <L.BoardTitle>{truncateContent(el.title)}</L.BoardTitle>
            <L.BoardContents>{truncateContent(el.content)}</L.BoardContents>
          </L.Board>
        ))}
      </L.BoardBox>

      <PaginationComponent
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
        totalPageCount={props.totalPageCount}/>
    </L.Wrapper>
  );
}
