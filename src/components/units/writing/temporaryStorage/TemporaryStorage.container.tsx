import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState, type MouseEvent } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../API/request";
import TemporaryStorageUI from "./TemporaryStorage.presenter";

export interface Post {
  user_id: number;
  title: string;
  content: string;
  images: string[];
}

export interface ApiResponse {
  isSuccess: boolean;
  code: number;
  message: string;
  result: Post[];
}

interface ITemporaryStorageProps {
  temporaryStorageCount: number;
  onClickMoveWrite: () => Promise<void>;
  onClickDelete: () => Promise<void>;
  onClickMoveWriting: () => Promise<void>;
  draftId: string;
  title: string; 
}

export default function TemporaryStorage(props: ITemporaryStorageProps): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  useEffect(() => {
    // localStorage에서 토큰을 가져와 상태에 저장
    const token = window.localStorage.getItem(ACCESS_TOKEN);
    const refresh = window.localStorage.getItem(REFRESH_TOKEN);
    setAccessToken(token);
    setRefreshToken(refresh);
  }, []);

  const router = useRouter();
  const onClickMoveWrite = async (): Promise<void> => {
    await router.push("../../../../../../write");
  }; 
  const onClickDelete = async (): Promise<void> => {
    await router.push("../../../../../../write/TemporaryStorage/StorageDelete");
  };
  const onClickMoveWriting = async (): Promise<void> => {
    await router.push("../../../../../../write/TemporaryStorage/TemporaryWriting");
  };
  useEffect(() => {
    async function fetchPosts(): Promise<void> {
      try {
        const response = await axios.get<ApiResponse>(
          "http://localhost:8080/drafts?orderColumn=created_at&orderDirection=desc",
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

  const getCurrentPagePosts = (): Post[] => {
    if (!Array.isArray(posts) || posts.length === 0) {
      return []; // posts가 빈 배열이거나 유효하지 않으면 빈 배열 반환
    }
    return posts;
  };

  return (
    <TemporaryStorageUI
      posts={getCurrentPagePosts()}
      temporaryStorageCount={props.temporaryStorageCount}
      onClickDelete={onClickDelete}
      onClickMoveWriting={onClickMoveWriting}
      onClickMoveWrite={onClickMoveWrite}
      draftId={props.draftId} 
      title={props.title} 
    />
  );
}
