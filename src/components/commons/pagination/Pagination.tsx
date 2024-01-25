import { useState } from "react";
import * as P from "./Pagination.style";
import type { IPageNation } from "./PaginationTypes";

export default function PaginationComponent(props: IPageNation): JSX.Element {
  const [startPage, setStartPage] = useState(1);

  return (
    <>
      <P.PageNumContainer>
        <P.PageNumber>&lt;</P.PageNumber>
        {new Array(5).fill(1).map((_, index) => (
          <P.PageNumber key={index + startPage}>
            {index + startPage}
          </P.PageNumber>
        ))}
        <P.PageNumber>&gt;</P.PageNumber>
      </P.PageNumContainer>
    </>
  );
}
