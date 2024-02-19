import type { Dispatch, MouseEvent, SetStateAction } from "react";
import type { Comments } from "./BookCommentList.container";

export interface IBookCommentList {
  comments: Comments[];
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface IBookContainer {
  refreshData: boolean;
  setRefreshData: Dispatch<SetStateAction<boolean>>;
}
