import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState, type MouseEvent } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../API/request";
import BookListUI from "./BookList.presenter";
import type { ApiResponse, Book } from "./BookList.types";
const POSTS_PER_PAGE = 10; // 한 페이지당 게시물 수

export default function BookList(): JSX.Element {
  const [books, setBooks] = useState<Book[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // localStorage에서 토큰을 가져와 상태에 저장
    const token = window.localStorage.getItem(ACCESS_TOKEN);
    const refresh = window.localStorage.getItem(REFRESH_TOKEN);
    setAccessToken(token);
    setRefreshToken(refresh);
  }, []);

  // 현재 페이지에 따라 게시물을 필터링하는 함수
  const getCurrentPagePosts = (): Book[] => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return books?.slice(startIndex, endIndex);
  };

  const totalPageCount = Math.ceil(books?.length / POSTS_PER_PAGE);

  useEffect(() => {
    async function fetchPosts(): Promise<void> {
      try {
        const response = await axios.get<ApiResponse>(
          "http://localhost:8080/books/list?category=all",
          {
            headers: {
              authorization: "Bearer " + accessToken,
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
  }, [accessToken, refreshToken]); // 빈 의존성 배열로 마운트 시에만 실행

  const onClickBook = async (
    event: MouseEvent<HTMLDivElement>,
  ): Promise<void> => {
    console.log(event.currentTarget.id);
    void router.push(`/books/${event.currentTarget.id}`);
  };

  return (
    <BookListUI
      books={getCurrentPagePosts()}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalPageCount={totalPageCount}
      onClickBook={onClickBook}
    />
  );
}
