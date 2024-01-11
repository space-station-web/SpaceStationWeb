import type { ChangeEvent } from "react";

export interface IFindSuccessPasswordType {
  onChangeNewPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeConfirmPassword: (event: ChangeEvent<HTMLInputElement>) => void;

  isEdit: boolean;
  errorMessage: string;
}
