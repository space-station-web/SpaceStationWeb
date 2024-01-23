import type { MouseEvent } from "react";

export interface ITemporaryStorage {
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveWriting: (event: MouseEvent<HTMLButtonElement>) => void;
}