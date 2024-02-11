import type { MouseEvent,ChangeEvent,FocusEvent,  } from "react";

export interface ISignUpEmail {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeNick: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeConfirmPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeNumber: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeBirth: (event: ChangeEvent<HTMLInputElement>) => void;
  // 체크박스
  onChangeCheck1: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCheck2: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCheck3: (event: ChangeEvent<HTMLInputElement>) => void;

  // 버튼 이벤트
  handleSignUp: (event: MouseEvent<HTMLButtonElement>) => void;
  handleCheck: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveTermsInfo: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMovePrev: (event: MouseEvent<HTMLImageElement>) => void;

  isDuplicateText: string;

  // 정규식 확인
  isRight: boolean;
  errorMessageNick: string;
  errorMessagePw: string;
  errorMessageConfirm: string;

  isError1: boolean;
  isError2: boolean;
  isError3: boolean;

  // placeholder 변경
  onFocusNick: (event: FocusEvent<HTMLInputElement>) => void;
  onFocusPassword: (event: FocusEvent<HTMLInputElement>) => void;
  onFocusNumber: (event: FocusEvent<HTMLInputElement>) => void;
  onFocusBirth: (event: FocusEvent<HTMLInputElement>) => void;

  onBlurNick: (event: FocusEvent<HTMLInputElement>) => void;
  onBlurPassword: (event: FocusEvent<HTMLInputElement>) => void;
  onBlurNumber: (event: FocusEvent<HTMLInputElement>) => void;
  onBlurBirth: (event: FocusEvent<HTMLInputElement>) => void;

  phNick: string;
  phPassword: string;
  phNumber: string;
  phBirth: string;
}