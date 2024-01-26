import type { MouseEvent } from "react";

export interface ITemporaryStorage {
  // key: number;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveWriting: (event: MouseEvent<HTMLButtonElement>) => void;
}