import type { MouseEvent } from "react";

export interface ISignUpSuccess {
  onClickMoveLogin: (event: MouseEvent<HTMLButtonElement>) => void;
  _nick: string;
}