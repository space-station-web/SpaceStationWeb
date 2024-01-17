import BoardDetailUI from "./BoardDetail.presenter";
import type { IBoardDetailProps } from "./BoardDetail.types";

export default function BoardDetail(props: IBoardDetailProps): JSX.Element {
  const onClickCommentToggle = (): void => {
    props.setIsOpen((prev) => !prev);
  };
  return (
    <BoardDetailUI
      onClickCommentToggle={onClickCommentToggle}
      setIsOpen={props.setIsOpen}
    />
  );
}
