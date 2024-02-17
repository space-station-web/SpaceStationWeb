import type { MouseEvent,ChangeEvent,FocusEvent } from "react";

export interface IChangePassword {
  onChangeNewPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeConfirmPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickMoveSuccess: (event: MouseEvent<HTMLButtonElement>) => void;

  isEdit: boolean;
  errorMessage: string;

  // 비밀번호 정규식
  errorMessagePw: string;
  isError2: boolean;
  // 모든 입력값 이상 여부
  isRight: boolean;

  // placeholder 변경
  onFocusPassword: (event: FocusEvent<HTMLInputElement>) => void;
  onBlurPassword: (event: FocusEvent<HTMLInputElement>) => void;
  phPassword: string;
}
