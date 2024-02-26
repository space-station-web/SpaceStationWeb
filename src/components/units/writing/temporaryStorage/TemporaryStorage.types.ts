import type { Dispatch, MouseEvent, SetStateAction } from "react";
import type { Post } from "./TemporaryStorage.container";

export interface ITemporaryStorage {
  posts: Post[];
  onClickMoveWrite: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveWriting: (draftId: string) => void;
  draftId: string; 
  title: string; 
}
