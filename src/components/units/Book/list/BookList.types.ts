import type { Dispatch, MouseEvent, SetStateAction } from "react";

export interface Book {
  book_id: number;
  user_id: number;
  title: string;
  intro: string;
  category: string;
  img_url: string;
}

export interface ApiResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: Book[];
}

export interface IBookListProps {
  books: Book[];
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPageCount: number;
  currentPage: number;
  onClickBook: (event: MouseEvent<HTMLDivElement>) => Promise<void>;
}
