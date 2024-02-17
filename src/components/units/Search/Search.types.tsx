import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

export interface ISearchProps {
  onClickTitleFilter: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickAuthorFilter: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickBoard: (event: MouseEvent<HTMLDivElement>) => void;
  searchFilter: string;
  keyword: string;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  post: IPost[];
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPageCount: number;
}

export interface IPost {
  post_id: number;
  title: string;
  content: string;
  created_at: string;
  image_url: string;
}

export interface IData {
  isSuccess: boolean;
  code: number;
  message: string;
  result: IPost[];
}
