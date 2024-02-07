import type { MouseEvent,ChangeEvent } from "react";

export interface ILoginFindPw {
  onClickMovePrev: (event: MouseEvent<HTMLImageElement>) => void;
  onClickMoveChangePw: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
}