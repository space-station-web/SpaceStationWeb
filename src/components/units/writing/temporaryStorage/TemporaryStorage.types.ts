import type { MouseEvent } from "react";

export interface ITemporaryStorage {
  // key: number;
  onClickMoveWrite: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveWriting: (event: MouseEvent<HTMLButtonElement>) => void;
}