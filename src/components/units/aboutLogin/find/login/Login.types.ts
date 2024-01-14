import type { MouseEvent } from "react";

export interface ILogin {
  onClickMoveFindPw: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveFindEm: (event: MouseEvent<HTMLButtonElement>) => void;
}