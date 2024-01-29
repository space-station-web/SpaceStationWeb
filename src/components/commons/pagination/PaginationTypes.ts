import type { Dispatch, SetStateAction } from "react";

export interface IPageNation {

  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPageCount: number;
}
