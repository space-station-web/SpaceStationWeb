import type { MouseEvent } from "react";
import type { Post } from "./TemporaryStorage.container";

export interface ITemporaryStorage {
  posts: Post[];
  onClickMoveWrite: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveWriting: (draftId: string) => void;
  onClickYesDelete: () => void;
  onClickNoDelete: () => void; 
  draftId: string;
  title: string;
}
