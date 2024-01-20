import type { MouseEvent } from "react";

export interface ITemporaryStorage {
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
}