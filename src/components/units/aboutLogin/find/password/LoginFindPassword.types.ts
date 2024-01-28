import type { MouseEvent,ChangeEvent } from "react";

export interface ILoginFindPw {
  onClickMovePrev: (event: MouseEvent<HTMLImageElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
}