import type { MouseEvent } from "react";

export interface ILoginFindEmailTypes {
  onClickMoveFindPw: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveLogin: (event: MouseEvent<HTMLButtonElement>) => void;
  _nick:string;
  _email:string;
}
