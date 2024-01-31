import type { MouseEvent,ChangeEvent } from "react";

export interface ISendEmail {
  onClickMovePrev: (event: MouseEvent<HTMLImageElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
}