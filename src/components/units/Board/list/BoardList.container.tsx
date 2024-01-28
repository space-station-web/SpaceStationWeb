import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState, type MouseEvent } from "react";
import BoardListUI from "./BoardList.presenter";

export interface Post {
  id: number;
  title: string;
  content: string;
}
const POSTS_PER_PAGE = 10; // 한 페이지당 게시물 수

export default function BoardList(): JSX.Element {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태

  // 게시글 클릭 시 라우팅
  const onClickBoard = async (
    event: MouseEvent<HTMLDivElement>,
  ): Promise<void> => {
    console.log(event);
    await router.push(`/boards/${event.currentTarget.id}`);
  };

  // 게시물 저장 아이콘관련
  const [savedPosts, setSavedPosts] = useState<Record<number, boolean>>({});

  const onClickSave = (number: number) => () => {
    setSavedPosts((prev) => ({
      ...prev,
      [number]: !prev[number],
    }));
  };
  // ///////

  useEffect(() => {
    async function fetchPosts(): Promise<void> {
      try {
        const response = await axios.get<Post[]>(
          "https://koreanjson.com/posts",
        );
        setPosts(response.data); // 데이터를 상태에 저장
      } catch (error) {
        console.error("Error:", error);
      }
    }

    void fetchPosts();
  }, []); // 빈 의존성 배열로 마운트 시에만 실행

  // 현재 페이지에 따라 게시물을 필터링하는 함수
  const getCurrentPagePosts = (): Post[] => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return posts.slice(startIndex, endIndex);
  };

  const totalPageCount = Math.ceil(posts.length / POSTS_PER_PAGE);

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
      />
    </>
  );
}
