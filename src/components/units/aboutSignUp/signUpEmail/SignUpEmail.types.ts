import type { MouseEvent,ChangeEvent } from "react";

export interface ISignUpEmail {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeNick: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeConfirmPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeNumber: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeBirth: (event: ChangeEvent<HTMLInputElement>) => void;

  handleSignUp: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveTermsInfo: (event: MouseEvent<HTMLButtonElement>) => void;

  onClickMovePrev: (event: MouseEvent<HTMLImageElement>) => void;

  isEdit: boolean;
  errorMessage: string;
}