import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
  draftId: string; 
  title: string; 
}

export default function TemporaryStorage(props: ITemporaryStorageProps): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

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

  const fetchPosts = async (): Promise<void> => {
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
      console.log("response.data", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    void fetchPosts();
  }, [accessToken, refreshToken]); // 빈 의존성 배열로 마운트 시에만 실행

  const getCurrentPagePosts = (): Post[] => {
    if (!Array.isArray(posts) || posts.length === 0) {
      return []; // posts가 빈 배열이거나 유효하지 않으면 빈 배열 반환
    }
    return posts;
  };

  const handleDeleteModal = (postId: string) => {
    setSelectedPostId(postId);
    setIsDeleteModalOpen(true);
  };

  const handleNoBtnClick = () => {
    setIsDeleteModalOpen(false);
    setSelectedPostId(null);
  };

  const handleYesBtnClick = async () => {
    if (!selectedPostId) return;
    try {
      // 삭제 요청 보내기
      await axios.delete(`http://localhost:8080/drafts/${selectedPostId}`, {
        headers: {
          Authorization: "Bearer " + accessToken,
          Refresh: refreshToken,
        },
      });
      // 삭제 후 임시저장 게시글 다시 불러오기
      await fetchPosts();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsDeleteModalOpen(false);
      setSelectedPostId(null);
    }
  };

  return (
    <TemporaryStorageUI
    posts={getCurrentPagePosts()}
    temporaryStorageCount={props.temporaryStorageCount}
    onClickDelete={onClickDelete}
    onClickMoveWriting={onClickMoveWriting}
    onClickMoveWrite={onClickMoveWrite}
    onClickYesDelete={handleYesBtnClick} // Yes 버튼 클릭 핸들러 추가
    onClickNoDelete={handleNoBtnClick} // No 버튼 클릭 핸들러 추가
    draftId={props.draftId} // draftId 전달
    title={props.title} // title 전달
  />
  );
}
