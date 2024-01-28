import type { MouseEvent,ChangeEvent } from "react";

export interface ILogin {
  onClickMoveFindPw: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveFindEm: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveSignUp: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMovePrev: (event: MouseEvent<HTMLImageElement>) => void;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (event: MouseEvent<HTMLButtonElement>) => void;
}