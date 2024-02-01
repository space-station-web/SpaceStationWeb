import type { MouseEvent } from "react";

export interface Iwrite {
  temporaryStorageCount: number;
  handleTemporaryStorageClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveHomePage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveTemStorage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPluseTemStorage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCreateRecommand: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveWriting?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}