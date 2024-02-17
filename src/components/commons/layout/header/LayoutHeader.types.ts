import type { MouseEvent } from "react";

export interface ILayoutHeader {
  onClickLogin: (event: MouseEvent<HTMLDivElement>) => void;
  onClickLogout: (event: MouseEvent<HTMLDivElement>) => void;
  onClickSignUp: (event: MouseEvent<HTMLDivElement>) => void;
  
  _nick: string;
  login: boolean;
}