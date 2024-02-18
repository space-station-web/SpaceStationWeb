import { useState } from "react";
import BoardItemUI from "./BoardItem.presenter";
import { BoardItemProps } from "./BoardItem.types";

function BoardItem({
  type,
  writtingItem,
  questionItem,
  ...props
}: BoardItemProps): JSX.Element {
  const [save, setSave] = useState(false);
  const handleSaveClick = () => {
    setSave((prev) => !prev);
  };
  return (
    <BoardItemUI
      type={type}
      writtingItem={writtingItem}
      questionItem={questionItem}
      save={save}
      handleSaveClick={handleSaveClick}
      {...props}
    />
  );
}

export default BoardItem;
