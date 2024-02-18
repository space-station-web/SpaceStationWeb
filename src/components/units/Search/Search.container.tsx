import axios from "axios";
import _ from "lodash"; // lodash를 임포트합니다.
import { useRouter } from "next/router";
import {
  useCallback,
  useEffect,
  useState,
  type ChangeEvent,
  type MouseEvent,
} from "react";

import { ACCESS_TOKEN, REFRESH_TOKEN } from "../API/request";
import SearchUI from "./Search.presenter";
import type { IData, IPost } from "./Search.types";

const POSTS_PER_PAGE = 10;

export default function Search(): JSX.Element {
  const [searchFilter, setSearchFilter] = useState("title");
  const [keyword, setKeyword] = useState("");
  const [post, setPost] = useState<IPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  const router = useRouter();

  const onClickTitleFilter = (): void => {
    setSearchFilter("title");
  };

  const onClickAuthorFilter = (): void => {
    setSearchFilter("author");
  };

  const onClickBoard = async (
    event: MouseEvent<HTMLDivElement>,
  ): Promise<void> => {
    await router.push(`/boards/${event.currentTarget.id}`);
  };

  useEffect(() => {
    // localStorage에서 토큰을 가져와 상태에 저장
    const token = "Bearer " + window.localStorage.getItem(ACCESS_TOKEN);
    const refresh = window.localStorage.getItem(REFRESH_TOKEN);
    setAccessToken(token);
    setRefreshToken(refresh);

    // 데이터를 가져오는 함수
    async function fetchPosts(): Promise<void> {
      try {
        const response = await axios.get<IData>(
          `http://localhost:8080/posts/search?orderType=${searchFilter}&postSearchWord=${keyword}`,
          {
            headers: {
              authorization: accessToken,
              refresh: refreshToken,
            },
          },
        );
        console.log(response.data);
        setPost(response.data.result);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    // 검색어 변경 시 데이터 다시 가져오기
    void fetchPosts(); // 컴포넌트 마운트 시 및 keyword, searchFilter가 변경될 때 실행
  }, [keyword, searchFilter, accessToken, refreshToken]);

  const handleSearchChange = useCallback(
    _.debounce((value) => {
      setKeyword(value);
    }, 500),
    [],
  );

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    // 이벤트 객체의 value를 직접 debounce 함수로 전달하는 대신,
    // e.target.value를 변수에 할당하고 그 변수를 사용합니다.
    const value = e.target.value;
    handleSearchChange(value);
  };

  // 현재 페이지에 따라 게시물을 필터링하는 함수
  const getCurrentPagePosts = (): IPost[] => {
    if (!Array.isArray(post) || post.length === 0) {
      return []; // posts가 빈 배열이거나 유효하지 않으면 빈 배열 반환
    }
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return post.slice(startIndex, endIndex);
  };

  const totalPageCount = Array.isArray(post)
    ? Math.ceil(post.length / POSTS_PER_PAGE)
    : 0;

  return (
    <SearchUI
      onClickTitleFilter={onClickTitleFilter}
      onClickAuthorFilter={onClickAuthorFilter}
      searchFilter={searchFilter}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalPageCount={totalPageCount}
      post={getCurrentPagePosts()}
      onClickBoard={onClickBoard}
    />
  );
}
