import type { Dispatch, SetStateAction } from "react";

export interface Book {
  book_id: number;
  user_id: number;
  title: string;
  intro: string;
  category: string;
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
}
