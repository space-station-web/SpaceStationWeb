import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import type { IBoardDetailProps } from "./BoardDetail.types";

export default function BoardDetail(props: IBoardDetailProps): JSX.Element {
  const router = useRouter()

  const onClickCommentToggle = (): void => {
    props.setIsOpen((prev) => !prev);
  };

  const onClickPrev = (): void => {
    void router.push('/boards')
  }

  return (
    <BoardDetailUI
      onClickCommentToggle={onClickCommentToggle}
      onClickPrev ={onClickPrev}
      setIsOpen={props.setIsOpen}
    />
  );
}
