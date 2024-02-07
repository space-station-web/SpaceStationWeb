import type { MouseEvent,ChangeEvent } from "react";

export interface IChangePassword {
  onChangeNewPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeConfirmPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickMoveSuccess: (event: MouseEvent<HTMLButtonElement>) => void;

  isEdit: boolean;
  errorMessage: string;
}
