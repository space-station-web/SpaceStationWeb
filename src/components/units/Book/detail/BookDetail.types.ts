import type { Dispatch, MouseEvent, SetStateAction } from "react";

export interface IBookDetailProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  
}
export interface IBookDetailUIProps {
  onClickCommentToggle: (event: MouseEvent<HTMLButtonElement>) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
