import type { MouseEvent } from "react";

export interface Iwrite {
  onClickMoveTemStorage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPluseTemStorage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCreateRecommand: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPublishWrite: (event: MouseEvent<HTMLButtonElement>) => void;
}