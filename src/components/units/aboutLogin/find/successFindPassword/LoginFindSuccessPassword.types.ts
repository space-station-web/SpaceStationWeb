import type { MouseEvent,ChangeEvent } from "react";

export interface IFindSuccessPasswordType {
  onChangeNewPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeConfirmPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickMoveLogin: (event: MouseEvent<HTMLButtonElement>) => void;

  isEdit: boolean;
  errorMessage: string;
}
