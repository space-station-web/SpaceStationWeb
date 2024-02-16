import PaginationComponent from "../../../commons/pagination/Pagination";
import * as L from "./BoardList.styles";
import type { IBoardListTypes } from "./BoardListTypes";

export default function BoardListUI(props: IBoardListTypes): JSX.Element {
  // 한 줄로 표시할 내용의 길이를 정하는 함수
  const truncateContent = (
    content: string | undefined,
    maxLength: number = 13,
  ): string => {
    // 내용이 falsy 값인 경우 (undefined, null, 빈 문자열 등), 빈 문자열을 반환합니다.
    if (!content) return "";

    // 내용이 최대 길이보다 길면, 잘라내고 "..."를 추가합니다.
    return content.length > maxLength
      ? content.slice(0, maxLength) + "..."
      : content;
  };

  return (
    <L.Wrapper>
      <L.TopDiv>
        <L.Prev src="/common/icon/Arrow 2.png" />
        <L.CategoryDiv>
          <L.Category>이웃</L.Category>
          <L.Category onClick={props.onClickCreatedAtOrder}>최신순</L.Category>
          <L.Category onClick={props.onClickLikeCountOrder}>
            좋아요순
          </L.Category>
        </L.CategoryDiv>
      </L.TopDiv>

      <L.BoardBox>
        {props.posts.map((el) => (
          <L.Board
            id={el.post_id.toString()}
            key={el.post_id}
            onClick={props.onClickBoard}
          >
            <L.BoardTop>
              <L.BoardSaveBack>
                <L.SaveIcon
                  style={{
                    fill: props.savedPosts[el.post_id] ? "#FF6F00" : "none",
                  }}
                  onClick={props.onClickSave(el.post_id)}
                />
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
        totalPageCount={props.totalPageCount}
      />
    </L.Wrapper>
  );
}
