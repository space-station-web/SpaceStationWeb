import type { Dispatch, MouseEvent, SetStateAction } from "react";
import type { BookData } from "./BookDetail.container";

export interface IBookDetailProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export interface IBookDetailUIProps {
  onClickCommentToggle: (event: MouseEvent<HTMLButtonElement>) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  data: BookData | null;
  isStored: boolean;
  storePost: () => Promise<void>;
}
