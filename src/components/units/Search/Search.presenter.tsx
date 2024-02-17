import PaginationComponent from "../../commons/pagination/Pagination";
import * as L from "../Board/list/BoardList.styles";
import * as S from "./Search.styles";
import type { ISearchProps } from "./Search.types";


export default function SearchUI(props: ISearchProps): JSX.Element {
  const truncateContent = (
    content: string | undefined,
    maxLength: number = 13,
  ): string => {
    // 내용이 falsy 값인 경우 (undefined, null, 빈 문자열 등), 빈 문자열을 반환합니다.
    if (content === null || content === undefined || content === "") return "";

    // 내용이 최대 길이보다 길면, 잘라내고 "..."를 추가합니다.
    return content.length > maxLength
      ? content.slice(0, maxLength) + "..."
      : content;
  };
  return (
    <div>
      <S.Wrapper>
        <S.FilterContainer>
          <S.FilterTitleButton
            onClick={props.onClickTitleFilter}
            style={{
              backgroundColor:
                props.searchFilter === "title" ? "#dcdcdc" : "#141414",
              color: props.searchFilter === "title" ? "black" : "#8c8c8c",
            }}
          >
            글 제목
          </S.FilterTitleButton>
          <S.FilterAuthorButton
            onClick={props.onClickAuthorFilter}
            style={{
              backgroundColor:
                props.searchFilter === "author" ? "#dcdcdc" : "#141414",
              color: props.searchFilter === "author" ? "black" : "#8c8c8c",
            }}
          >
            글쓴이
          </S.FilterAuthorButton>
        </S.FilterContainer>


        <S.SearchFullContainer>
          <S.SearchContainer>
            <S.SearchBtnImage src="/common/icon/search.svg" />
            <S.SearchInput
              type="text"
              placeholder="찾고 싶은 글이 있나요?"

              // value={props.keyword} // 입력 필드에 표시될 검색어입니다.
              onChange={props.onChangeSearch} // 검색어가 변경될 때 실행될 함수입니다.
              // onKeyDown={props.handleSubmit} // 엔터 키를 눌렀을 때 실행될 함수입니다.

            />
          </S.SearchContainer>
        </S.SearchFullContainer>
        <S.DivideLine> </S.DivideLine>

        <S.SearchResultContainer>
          {props.post?.map((el) => (
            <>
              <S.Board
                style={
                  el.image_url !== null
                    ? { backgroundImage: `url(${el.image_url})` }
                    : {
                        backgroundImage: "url(/board/card.png)",
                      }
                }
                id={el.post_id.toString()}
                key={el.post_id}
                onClick={props.onClickBoard}
              >
                <L.BoardTextContainer>
                  <L.BoardTitle>{truncateContent(el.title)}</L.BoardTitle>
                  <L.BoardContents>
                    {truncateContent(el.content)}
                  </L.BoardContents>
                </L.BoardTextContainer>
              </S.Board>
            </>
          ))}
        </S.SearchResultContainer>
        <PaginationComponent
          currentPage={props.currentPage}
          setCurrentPage={props.setCurrentPage}
          totalPageCount={props.totalPageCount}
        />
      </S.Wrapper>
    </div>
  );
}
