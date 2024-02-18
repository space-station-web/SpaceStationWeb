import type { Dispatch, MouseEvent, SetStateAction } from "react";
import type { Comments } from "./BookCommentList.container";

export interface IBoardCommentList {
  comments: Comments[];
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface IBoardContainer {
  refreshData: boolean;
  setRefreshData: Dispatch<SetStateAction<boolean>>;
}
