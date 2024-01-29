import BookDetailUI from "./BookDetail.presenter";
import type { IBookDetailProps } from "./BookDetail.types";

export default function BookDetail(props: IBookDetailProps): JSX.Element {
  const onClickCommentToggle = (): void => {
    props.setIsOpen((prev) => !prev);
  };
  return (
    <BookDetailUI
      onClickCommentToggle={onClickCommentToggle}
      setIsOpen={props.setIsOpen}
    />
  );
}
