import type { ChangeEvent, MouseEvent } from "react";

export interface IFindEmail {
  handleFind: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeNumber: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeBirth: (event: ChangeEvent<HTMLInputElement>) => void;

  onClickMovePrev: (event: MouseEvent<HTMLImageElement>) => void;

  errorMessage: string;

}
