import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState, type MouseEvent } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../API/request";
import BoardListUI from "./BoardList.presenter";

export interface Post {
  post_id: number;
  title: string;
  content: string;
  created_at: string;
  image_url: string;
}

export interface ApiResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: Post[];
}

const POSTS_PER_PAGE = 10; // 한 페이지당 게시물 수

export default function BoardList(): JSX.Element {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  useEffect(() => {
    // localStorage에서 토큰을 가져와 상태에 저장
    const token = window.localStorage.getItem(ACCESS_TOKEN);
    const refresh = window.localStorage.getItem(REFRESH_TOKEN);
    setAccessToken(token);
    setRefreshToken(refresh);
  }, []);

  // 게시글 클릭 시 라우팅
  const onClickBoard = async (
    event: MouseEvent<HTMLDivElement>,
  ): Promise<void> => {
    console.log(event);
    await router.push(`/boards/${event.currentTarget.id}`);
  };

  // 게시물 저장 아이콘관련
  const [savedPosts, setSavedPosts] = useState<Record<number, boolean>>({});

  const onClickSave = (id: number) => (event: React.MouseEvent) => {
    event.stopPropagation(); // 이벤트 버블링 방지
    setSavedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  // ///////

  useEffect(() => {
    async function fetchPosts(): Promise<void> {
      try {
        const response = await axios.get<ApiResponse>(
          "http://localhost:8080/posts?orderColumn=created_at&orderDirection=desc",
          {
            headers: {
              authorization: "Bearer " + accessToken,
              refresh: refreshToken,
            },
          },
        );
        setPosts(response.data.result); // 데이터를 상태에 저장
        console.log("response.data",response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    void fetchPosts();
  }, [accessToken, refreshToken]); // 빈 의존성 배열로 마운트 시에만 실행

  // 좋아요순
  const onClickLikeCountOrder = async (): Promise<void> => {
    const response = await axios.get<ApiResponse>(
      "http://localhost:8080/posts?orderColumn=like_count&orderDirection=desc",
      {
        headers: {
          authorization: "Bearer " + accessToken,
          refresh: refreshToken,
        },
      },
    );
    setPosts(response.data.result);
  };

  // 최신순
  const onClickCreatedAtOrder = async (): Promise<void> => {
    const response = await axios.get<ApiResponse>(
      "http://localhost:8080/posts?orderColumn=created_at&orderDirection=desc",
      {
        headers: {
          authorization: "Bearer " + accessToken,
          refresh: refreshToken,
        },
      },
    );
    setPosts(response.data.result);
    console.log(posts);
  };

  // 이웃만
  const onClickNeighborOrder = async (): Promise<void> => {
    console.log(accessToken);
    console.log(refreshToken);
    const response = await axios.get<ApiResponse>(
      "http://localhost:8080/posts/follow-posts",
      {
        headers: {
          authorization: "Bearer " + accessToken,
          refresh: refreshToken,
        },
      },
    );
    setPosts(response.data.result);
    console.log(posts);
  };

  const totalPageCount = Array.isArray(posts)
    ? Math.ceil(posts.length / POSTS_PER_PAGE)
    : 0;

  // 현재 페이지에 따라 게시물을 필터링하는 함수
  const getCurrentPagePosts = (): Post[] => {
    if (!Array.isArray(posts) || posts.length === 0) {
      return []; // posts가 빈 배열이거나 유효하지 않으면 빈 배열 반환
    }
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return posts.slice(startIndex, endIndex);
  };

  return (
    <>
      <BoardListUI
        posts={getCurrentPagePosts()}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPageCount={totalPageCount}
        //
        onClickSave={onClickSave}
        savedPosts={savedPosts}
        //
        onClickBoard={onClickBoard}
        //

        onClickLikeCountOrder={onClickLikeCountOrder}
        onClickCreatedAtOrder={onClickCreatedAtOrder}
        onClickNeighborOrder={onClickNeighborOrder}
      />
    </>
  );
}
