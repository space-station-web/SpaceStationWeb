import type { MouseEvent } from "react";

export interface ITemporaryStorage {
  onClickMoveTemStorage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPluseTemStorage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCreateRecommand: (event: MouseEvent<HTMLButtonElement>) => void;
}