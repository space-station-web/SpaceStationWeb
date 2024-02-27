import type { Dispatch, MouseEvent, SetStateAction } from "react";
import type { Draft } from "./TemporaryStorage.container";

export interface ITemporaryStorage {
  drafts: Draft[];

  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPageCount: number;

  onClickMoveWrite: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: () => void; 
  onClickMoveWriting: (draftId: string) => void;
  onClickYesDelete: () => void;
  onClickNoDelete: () => void; 
  draftId: string;
  title: string;
}
