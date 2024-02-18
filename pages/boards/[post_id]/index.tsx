import styled from "@emotion/styled";
import { useState } from "react";
import BoardDetail from "../../../src/components/units/Board/detail/BoardDetail.container";
import BoardCommentList from "../../../src/components/units/BoardComment/list/BoardCommentList.container";
import CommentWrite from "../../../src/components/units/BoardComment/write/CommentWrite.container";

const Align = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function BoardDetailPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [refreshData, setRefreshData] = useState(false);

  return (
    <Align>
      <BoardDetail setIsOpen={setIsOpen} />
      {isOpen ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <CommentWrite setRefreshData={setRefreshData} />
          <BoardCommentList
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
