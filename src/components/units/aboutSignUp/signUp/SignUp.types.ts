import type { MouseEvent } from "react";

export interface ISignUp {
  onClickMoveSignUpEm: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveNaver: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMovePrev: (event: MouseEvent<HTMLImageElement>) => void;
}