import { useRouter } from "next/router";
import { useState } from "react";
import BoardItemUI from "./BoardItem.presenter";
import { BoardItemProps } from "./BoardItem.types";

function BoardItem({
  type,
  writtingItem,
  questionItem,
}: BoardItemProps): JSX.Element {
  const router = useRouter();
  const [save, setSave] = useState(false);
  const handleSaveClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setSave((prev) => !prev);
  };
  const onClick = () => {
    router.push("/boards/boardsId");
  };
  return (
    <BoardItemUI
      type={type}
      writtingItem={writtingItem}
      questionItem={questionItem}
      save={save}
      handleSaveClick={handleSaveClick}
      onClick={onClick}
    />
  );
}

export default BoardItem;
