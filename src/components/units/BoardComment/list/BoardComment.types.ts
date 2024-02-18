import type { Comments } from "./BoardCommentList.container";

export interface IBoardCommentList {
  comments: Comments[];
}

export interface IBoardContainer {
  refreshData: boolean;
}
