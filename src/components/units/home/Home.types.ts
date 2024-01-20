import type { MouseEvent } from "react";

export interface HomeProps {
  onClickMoveLogin: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveWrite: (event: MouseEvent<HTMLButtonElement>) => void;
}
