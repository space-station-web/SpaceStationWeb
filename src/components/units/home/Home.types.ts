import type { MouseEvent } from "react";

export interface HomeProps {
  onClickMoveLogin: (event: MouseEvent<HTMLButtonElement>) => void;
}
