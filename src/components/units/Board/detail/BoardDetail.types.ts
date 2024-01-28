import type { Dispatch, MouseEvent, SetStateAction } from "react";

export interface IBoardDetailProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export interface IBoardDetailUIProps {
  onClickCommentToggle: (event: MouseEvent<HTMLButtonElement>) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  data: IData | null;
}

export interface IData {
  id: number;
  title: string;
  content: string;
  UserId: string;
}
