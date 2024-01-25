import type { MouseEvent,ChangeEvent } from "react";

export interface ISignUpEmail {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeConfirmPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeNumber: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeBirth: (event: ChangeEvent<HTMLInputElement>) => void;

  handleSignUp: (event: MouseEvent<HTMLButtonElement>) => void;

  isEdit: boolean;
  errorMessage: string;
}