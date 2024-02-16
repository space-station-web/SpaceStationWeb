import axios from "axios";
import { useEffect, useState } from "react";
import BookListUI from "./BookList.presenter";
import type { ApiResponse, Book } from "./BookList.types";
const POSTS_PER_PAGE = 10; // 한 페이지당 게시물 수

export default function BookList(): JSX.Element {
  const [books, setBooks] = useState<Book[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태

  // 현재 페이지에 따라 게시물을 필터링하는 함수
  const getCurrentPagePosts = (): Book[] => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return books.slice(startIndex, endIndex);
  };

  const totalPageCount = Math.ceil(books.length / POSTS_PER_PAGE);

  const accessToken =
    "Bearer " +
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsIm1haWwiOiJhc2RnQG5hdmVyLmNvbSIsImlhdCI6MTcwODA2MzQ3MywiZXhwIjoxNzA4MDc0MjczfQ.qtzPbgq8xxnWvmwysLkanB6wqBPWSLhX71IWc_JeUm4";
  const refreshToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDgwNjM0NzMsImV4cCI6MTcwODE0OTg3M30.h5SZHsjM8zD1T2_x7rKVpUX9SfRjopRx-ZarXURobH8";

  useEffect(() => {
    async function fetchPosts(): Promise<void> {
      try {
        const response = await axios.get<ApiResponse>(
          "http://localhost:8080/books/list?category=all",
          {
            headers: {
              authorization: accessToken,
              refresh: refreshToken,
            },
          },
        );
        setBooks(response.data.result); // 데이터를 상태에 저장
        console.log(response.data.result);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    void fetchPosts();
  }, []); // 빈 의존성 배열로 마운트 시에만 실행
  return (
    <BookListUI
      books={getCurrentPagePosts()}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalPageCount={totalPageCount}
    />
  );
}
