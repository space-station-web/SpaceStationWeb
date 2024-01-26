import type { Dispatch, MouseEvent, SetStateAction } from "react";

export interface IBoardDetailProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export interface IBoardDetailUIProps {
  onClickCommentToggle: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPrev: (event: MouseEvent<HTMLImageElement>) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
