import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

export interface ISearchProps {
  onClickTitleFilter: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickAuthorFilter: (event: MouseEvent<HTMLButtonElement>) => void;

  searchFilter: string;

  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPageCount: number;
  post: IPost[];
  onClickBoard: (event: MouseEvent<HTMLDivElement>) => Promise<void>;
}

export interface IPost {
  // IPost 인터페이스의 구조는 예시이므로 실제 구조에 맞게 조정해야 합니다.
  post_id: string;
  title: string;
  content: string;
  image_url: string | null;
}

export interface IData {
  result: IPost[]; // 검색된 게시물 목록
}
