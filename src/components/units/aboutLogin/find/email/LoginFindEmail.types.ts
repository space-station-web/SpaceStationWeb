import type { ChangeEvent, MouseEvent } from "react";

export interface IFindEmail {
  onClickVert: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePhone: (event: ChangeEvent<HTMLInputElement>) => void;

  minutes: string;
  second: string;
}
