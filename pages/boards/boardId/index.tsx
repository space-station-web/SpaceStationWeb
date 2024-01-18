import styled from "@emotion/styled";
import BoardDetail from "../../../src/components/units/Board/detail/BoardDetail.container";
import CommentWrite from "../../../src/components/units/BoardComment/write/CommentWrite.container";
import { useState } from "react";

const Align = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function BoardDetailPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Align>
      <BoardDetail setIsOpen={setIsOpen} />
      {isOpen ? <CommentWrite /> : " "}
    </Align>
  );
}
