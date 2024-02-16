import type { Dispatch, MouseEvent, SetStateAction } from "react";
import type { Post } from "./BoardList.container";

export interface IBoardListTypes {
  posts: Post[];
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPageCount: number;

  //
  onClickSave: (id: number) => (event: React.MouseEvent) => void;
  savedPosts: Record<number, boolean>;

  //
  onClickBoard: (event: MouseEvent<HTMLDivElement>) => void;

  onClickLikeCountOrder: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCreatedAtOrder: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickNeighborOrder: () => Promise<void>;
}
