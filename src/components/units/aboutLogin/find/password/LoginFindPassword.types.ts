import type { MouseEvent,ChangeEvent } from "react";

export interface ILoginFindPw {
  onClickMovePrev: (event: MouseEvent<HTMLImageElement>) => void;
  onClickSendMail: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickConfirmCode: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickReSend: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeCode: (event: ChangeEvent<HTMLInputElement>) => void;
  
  isSendSuccess: boolean;
}