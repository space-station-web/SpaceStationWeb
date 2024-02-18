import type { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface onChangeContents {
  onChangeContent: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickComment: () => Promise<void>;
}
export interface ICommentWrite {
  setRefreshData: Dispatch<SetStateAction<boolean>>;
}
