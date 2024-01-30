import type { MouseEvent } from "react";

export interface Iwrite {
  onClickMoveHomePage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveTemStorage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPluseTemStorage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCreateRecommand: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveWriting?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}