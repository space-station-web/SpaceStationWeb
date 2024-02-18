import styled from "@emotion/styled";
import { useState } from "react";
import BookDetail from "../../../src/components/units/Book/detail/BookDetail.container";
import BookCommentList from "../../../src/components/units/BookComment/list/BookCommentList.container";
import BookCommentWrite from "../../../src/components/units/BookComment/write/BookCommentWrite.container";

const Align = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function BookDetailPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [refreshData, setRefreshData] = useState(false);

  return (
    <Align>
      <BookDetail setIsOpen={setIsOpen} />
      {isOpen ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <BookCommentWrite setRefreshData={setRefreshData} />
          <BookCommentList
            refreshData={refreshData}
            setRefreshData={setRefreshData}
          />
        </div>
      ) : (
        " "
      )}
    </Align>
  );
}
