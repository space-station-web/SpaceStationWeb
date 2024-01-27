import type { Dispatch, SetStateAction } from "react";
import type { Post } from "./BoardList.container";


export interface IBoardListTypes {

  posts: Post[]
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPageCount: number;

}