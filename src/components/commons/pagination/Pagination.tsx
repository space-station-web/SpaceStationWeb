import type { IPageNation } from "./PaginationTypes";
import * as P from './Pagination.style'

export default function PaginationComponent(props:IPageNation): JSX.Element {
  const maxPageNumber = 5; // 한 번에 표시할 최대 페이지 번호 개수
  const halfMaxPageNumber = Math.floor(maxPageNumber / 2);

  // 현재 페이지 주변의 페이지 번호 계산
  let startPage = Math.max(1, props.currentPage - halfMaxPageNumber);
  const endPage = Math.min(props.totalPageCount, startPage + maxPageNumber - 1);

  // 페이지 번호가 5개 미만으로 표시될 경우 조정
  if (endPage - startPage < maxPageNumber - 1) {
    startPage = Math.max(1, endPage - maxPageNumber + 1);
  }

  return (
    <>
      <P.PageNumContainer>
        {props.currentPage > 0 && (
          <P.PageNumber active={false} onClick={() => {props.setCurrentPage(props.currentPage - 1)}}>
            &lt;
          </P.PageNumber>
        )}
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(pageNumber => (
          <P.PageNumber
            key={pageNumber}
            onClick={() => {props.setCurrentPage(pageNumber)}}
            active={pageNumber === props.currentPage}
          >
            {pageNumber}
          </P.PageNumber>
        ))}
        {props.currentPage < props.totalPageCount && (
          <P.PageNumber active={false} onClick={() => {props.setCurrentPage(props.currentPage + 1)}}>
            &gt;
          </P.PageNumber>
        )}
      </P.PageNumContainer>
    </>
  );
}
