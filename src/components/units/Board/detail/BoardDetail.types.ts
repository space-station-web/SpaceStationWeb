import type { Dispatch, MouseEvent, SetStateAction } from "react";
import type { PostData } from "./BoardDetail.container";

export interface IBoardDetailProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export interface IBoardDetailUIProps {
  onClickCommentToggle: (event: MouseEvent<HTMLButtonElement>) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  data: PostData[] | null;
  onClickBoards: (event: MouseEvent<HTMLImageElement>) => void;

  isStored: boolean;
  storePost: () => Promise<void>;
}
